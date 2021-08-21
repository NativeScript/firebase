package org.nativescript.firebase.crashlytics

import android.os.Handler
import android.os.Looper
import com.google.firebase.crashlytics.CustomKeysAndValues
import org.json.JSONObject
import java.util.concurrent.Executors

class FirebaseCrashlytics {

  class NativeScriptError(message: String?) : Exception(message) {}

  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }


  companion object {

    @JvmStatic
    fun setAttributes(
      crashlytics: com.google.firebase.crashlytics.FirebaseCrashlytics,
      attributes: String
    ) {
      val keyValues = CustomKeysAndValues.Builder()
      try {
        val json = JSONObject(attributes)
        val keys = json.keys()
        for (key in keys) {
          val value = json.get(key)
          (value as? String).let {
            it?.let {
              keyValues.putString(key, it)
            }
          } ?: (value as? Int).let {
            it?.let {
              keyValues.putInt(key, it)
            }
          } ?: (value as? Long).let {
            it?.let {
              keyValues.putLong(key, it)
            }
          } ?: (value as? Float).let {
            it?.let {
              keyValues.putFloat(key, it)
            }
          } ?: (value as? Double).let {
            it?.let {
              keyValues.putDouble(key, it)
            }
          } ?: (value as? Boolean).let {
            it?.let {
              keyValues.putBoolean(key, it)
            }
          }
        }

      } catch (e: Exception) {
      }
      crashlytics.setCustomKeys(
        keyValues.build()
      )

    }

    @JvmStatic
    fun crash() {
      handler.postDelayed({
        throw RuntimeException("Crash Test")
      }, 50)
    }

    @JvmStatic
    fun checkForUnsentReports(
      crashlytics: com.google.firebase.crashlytics.FirebaseCrashlytics,
      callback: Callback<Boolean>
    ) {
      crashlytics
        .checkForUnsentReports()
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
