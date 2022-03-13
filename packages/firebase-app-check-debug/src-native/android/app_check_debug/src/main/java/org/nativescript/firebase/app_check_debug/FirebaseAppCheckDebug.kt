package org.nativescript.firebase.app_check_debug

import android.os.Handler
import android.os.Looper
import com.google.firebase.appcheck.AppCheckToken
import java.util.concurrent.Executors

class FirebaseAppCheckDebug {
  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
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
      callback: Callback<AppCheckToken>
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
