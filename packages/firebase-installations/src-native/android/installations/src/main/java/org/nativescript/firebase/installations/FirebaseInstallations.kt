package org.nativescript.firebase.installations

import android.os.Handler
import android.os.Looper
import com.google.firebase.installations.FirebaseInstallations
import com.google.firebase.installations.InstallationTokenResult
import java.util.concurrent.Executors

class FirebaseInstallations {
  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }

  companion object {

    @JvmStatic
    fun delete(installations: FirebaseInstallations, callback: Callback<Void>) {
      installations.delete().addOnCompleteListener(executors) {
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

    @JvmStatic
    fun id(installations: FirebaseInstallations, callback: Callback<String>) {
      installations.id.addOnCompleteListener(executors) {
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

    @JvmStatic
    fun getToken(
      installations: FirebaseInstallations,
      forceRefresh: Boolean,
      callback: Callback<InstallationTokenResult>
    ) {
      installations.getToken(forceRefresh).addOnCompleteListener(executors) {
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
  }
}

