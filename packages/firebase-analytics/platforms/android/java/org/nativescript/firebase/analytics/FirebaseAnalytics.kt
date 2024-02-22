package org.nativescript.firebase.analytics

import android.os.Bundle
import android.os.Handler
import android.os.Looper
import org.json.JSONObject
import java.util.concurrent.Executors
import com.google.firebase.analytics.logEvent

class FirebaseAnalytics {

  class NativeScriptError(message: String?) : Exception(message) {}

  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }


  companion object {


 @JvmStatic
    fun logEvent(
      analytics: com.google.firebase.analytics.FirebaseAnalytics,
      eventName: String,
      value: Bundle?
    ) {
      analytics.logEvent(eventName, value)
    }

    @JvmStatic
    fun logEvent(
      analytics: com.google.firebase.analytics.FirebaseAnalytics,
      eventName: String,
      value: Long
    ) {
      analytics.logEvent(eventName) {
        param(eventName, value)
      }
    }

    @JvmStatic
    fun logEvent(
      analytics: com.google.firebase.analytics.FirebaseAnalytics,
      eventName: String,
      value: Double
    ) {
      analytics.logEvent(eventName) {
        param(eventName, value)
      }
    }

    @JvmStatic
    fun logEvent(
      analytics: com.google.firebase.analytics.FirebaseAnalytics,
      eventName: String,
      value: Array<Bundle>
    ) {
      analytics.logEvent(eventName) {
        param(eventName, value)
      }
    }

    @JvmStatic
    fun logEvent(
      analytics: com.google.firebase.analytics.FirebaseAnalytics,
      eventName: String,
      value: String
    ) {
      analytics.logEvent(eventName) {
        param(eventName, value)
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
