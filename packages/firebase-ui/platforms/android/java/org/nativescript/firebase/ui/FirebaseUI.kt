package org.nativescript.firebase.ui

import android.content.Context
import android.os.Handler
import android.os.Looper
import com.google.android.gms.tasks.Tasks
import java.util.concurrent.Executors


class FirebaseUI{

  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }


  companion object {

   @JvmStatic
      fun delete(
        ui: com.firebase.ui.auth.AuthUI,
        context: Context,
        callback: Callback<Void>
      ) {
        ui.delete(context)
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

    @JvmStatic
      fun signOut(
        ui: com.firebase.ui.auth.AuthUI,
        context: Context,
        callback: Callback<Void>
      ) {
        ui.signOut(context)
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
