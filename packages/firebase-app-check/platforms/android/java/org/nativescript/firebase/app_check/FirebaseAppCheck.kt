package org.nativescript.firebase.app_check

import android.os.Handler
import android.os.Looper
import com.google.android.gms.tasks.Task
import com.google.android.gms.tasks.TaskCompletionSource
import com.google.firebase.appcheck.AppCheckProvider
import java.lang.Exception
import java.util.concurrent.Executors

class FirebaseAppCheck {
  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }

  class AppCheckToken(private val checkToken: String, private val expireTime: Long) :
    com.google.firebase.appcheck.AppCheckToken() {

    override fun getToken(): String {
      return checkToken
    }

    override fun getExpireTimeMillis(): Long {
      return expireTime
    }
  }


  class CustomAppCheckProvider(private val callback: Callback) : AppCheckProvider {
    interface Callback {
      fun getToken(): Any
    }

    override fun getToken(): Task<com.google.firebase.appcheck.AppCheckToken> {
      val source = TaskCompletionSource<com.google.firebase.appcheck.AppCheckToken>()
      executors.execute {
        val value = callback.getToken()
        if (value is Exception) {
          source.setException(value)
        } else {
          source.setResult(value as AppCheckToken)
        }
      }
      return source.task
    }
  }

  companion object {
    @JvmStatic
    var executorsCount = 3
      set(value) {
        executors = Executors.newFixedThreadPool(value)
        field = value
      }

    private var executors = Executors.newFixedThreadPool(executorsCount)

    private var handler = Handler(Looper.getMainLooper())
    private fun runOnMain(runnable: Runnable) {
      handler.post(runnable)
    }

    @JvmStatic
    fun getToken(
      appCheck: com.google.firebase.appcheck.FirebaseAppCheck,
      forceRefresh: Boolean,
      callback: Callback<com.google.firebase.appcheck.AppCheckToken>
    ) {
      appCheck
        .getAppCheckToken(forceRefresh)
        .addOnCompleteListener(executors) {
          if (it.isSuccessful) {
            runOnMain {
              callback.onSuccess(it.result)
            }
          } else {
            runOnMain {
              callback.onError(it.exception)
            }
          }
        }
    }
  }
}
