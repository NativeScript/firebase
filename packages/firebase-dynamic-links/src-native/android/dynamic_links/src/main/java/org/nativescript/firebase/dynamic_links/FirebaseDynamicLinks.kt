package org.nativescript.firebase.dynamic_links

import android.app.Activity
import android.app.Application
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import com.google.firebase.dynamiclinks.FirebaseDynamicLinks
import com.google.firebase.dynamiclinks.PendingDynamicLinkData
import com.google.firebase.dynamiclinks.ShortDynamicLink
import java.util.concurrent.Executors

class FirebaseDynamicLinks : Application.ActivityLifecycleCallbacks {
  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }

  companion object {
    private var mDidResume = false
    val didResume: Boolean
      get() {
        return mDidResume
      }

    private var didReadInitialLink = false
    private var initialCallback: Callback<PendingDynamicLinkData>? = null
    private var launchedFromHistory: Boolean = false
    private var initialLink: PendingDynamicLinkData? = null


    @JvmStatic
    fun onNewIntent(
      links: com.google.firebase.dynamiclinks.FirebaseDynamicLinks,
      intent: Intent,
      callback: Callback<PendingDynamicLinkData>
    ) {
      links.getDynamicLink(intent).addOnCompleteListener(executors) {
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
    fun getInitialLink(
      links: com.google.firebase.dynamiclinks.FirebaseDynamicLinks,
      activity: Activity,
      callback: Callback<PendingDynamicLinkData>
    ) {
      if (didReadInitialLink) {
        callback.onSuccess(null)
        return
      }

      if (!didResume) {
        initialCallback = callback
        return
      }

      val intent = activity.intent

      launchedFromHistory =
        intent != null && ((intent.flags and Intent.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY) != 0)

      links.getDynamicLink(intent)
        .addOnCompleteListener(executors) {
          if (it.isSuccessful) {
            didReadInitialLink = true
            initialLink = it.result
            if (initialLink != null && !launchedFromHistory) {
              runOnMain {
                callback.onSuccess(it.result)
              }
            } else {
              runOnMain {
                callback.onSuccess(null)
              }
            }
            initialCallback = null
          } else {
            runOnMain {
              callback.onError(it.exception)
            }
            initialCallback = null
          }
        }
    }


    @JvmStatic
    fun buildShortLink(
      builder: com.google.firebase.dynamiclinks.DynamicLink.Builder,
      callback: Callback<ShortDynamicLink>
    ) {
      builder.buildShortDynamicLink().addOnCompleteListener(executors) {
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
    fun resolveLink(
      links: com.google.firebase.dynamiclinks.FirebaseDynamicLinks,
      url: String,
      callback: Callback<PendingDynamicLinkData>
    ) {
      links.createDynamicLink().buildShortDynamicLink()
      try {
        links.getDynamicLink(Uri.parse(url))
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
      } catch (e: Exception) {
        callback.onError(e)
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

  override fun onActivityCreated(p0: Activity, p1: Bundle?) {}

  override fun onActivityStarted(p0: Activity) {}

  override fun onActivityResumed(p0: Activity) {
    mDidResume = true
    initialCallback?.let {
      getInitialLink(
        FirebaseDynamicLinks.getInstance(),
        p0,
        it
      )
    }
  }

  override fun onActivityPaused(p0: Activity) {
    mDidResume = false
  }

  override fun onActivityStopped(p0: Activity) {}

  override fun onActivitySaveInstanceState(p0: Activity, p1: Bundle) {}

  override fun onActivityDestroyed(p0: Activity) {}
}
