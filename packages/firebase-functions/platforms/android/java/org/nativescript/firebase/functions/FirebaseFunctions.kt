package org.nativescript.firebase.functions

import android.os.Handler
import android.os.Looper
import com.google.firebase.functions.HttpsCallableResult
import java.util.concurrent.Executors

class FirebaseFunctions {

  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }

  companion object {

    @JvmStatic
    fun call(
      call: com.google.firebase.functions.HttpsCallableReference,
      data: Any?,
      callback: Callback<HttpsCallableResult>
    ) {
      call.call(data).addOnCompleteListener(executors) {
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
