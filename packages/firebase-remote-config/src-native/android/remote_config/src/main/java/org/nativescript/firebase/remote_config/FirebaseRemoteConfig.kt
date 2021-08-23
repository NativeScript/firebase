package org.nativescript.firebase.remote_config

import android.content.Context
import android.content.res.Resources
import android.content.res.XmlResourceParser
import android.os.Handler
import android.os.Looper
import com.google.android.gms.tasks.Tasks
import com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo
import com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings
import java.util.concurrent.Executors


class FirebaseRemoteConfig {

  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }


  companion object {


    @JvmStatic
    fun setConfigSettings(
      config: com.google.firebase.remoteconfig.FirebaseRemoteConfig,
      settings: FirebaseRemoteConfigSettings,
      callback: Callback<Void>
    ) {
      config
        .setConfigSettingsAsync(settings)
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
    fun activate(
      config: com.google.firebase.remoteconfig.FirebaseRemoteConfig,
      callback: Callback<Boolean>
    ) {
      config
        .activate()
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
    fun ensureInitialized(
      config: com.google.firebase.remoteconfig.FirebaseRemoteConfig,
      callback: Callback<FirebaseRemoteConfigInfo>
    ) {
      config
        .ensureInitialized()
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
    fun fetch(
      config: com.google.firebase.remoteconfig.FirebaseRemoteConfig,
      minimumFetchIntervalInSeconds: Long,
      callback: Callback<Void>
    ) {
      config
        .fetch(minimumFetchIntervalInSeconds)
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
    fun fetchAndActivate(
      config: com.google.firebase.remoteconfig.FirebaseRemoteConfig,
      callback: Callback<Boolean>
    ) {
      config
        .fetchAndActivate()
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
    fun setDefaults(
      config: com.google.firebase.remoteconfig.FirebaseRemoteConfig,
      defaults: Map<String, Any>,
      callback: Callback<Void>
    ) {
      config
        .setDefaultsAsync(defaults)
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
    fun reset(
      config: com.google.firebase.remoteconfig.FirebaseRemoteConfig,
      callback: Callback<Void>
    ) {
      config
        .reset()
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
    fun setDefaultsFromResource(
      config: com.google.firebase.remoteconfig.FirebaseRemoteConfig,
      resourceName: String,
      context: Context,
      callback: Callback<Void>
    ) {
      Tasks.call(executors, {
        val resourceId = getXmlResourceIdByName(resourceName, context)
        var xmlResourceParser: XmlResourceParser? = null

        try {
          xmlResourceParser = context.resources.getXml(resourceId)
        } catch (nfe: Resources.NotFoundException) {
          //NOOP
        }

        if (xmlResourceParser != null) {
          Tasks.await(config.setDefaultsAsync(resourceId))
        } else {
          throw Exception("resource_not_found")
        }
      }).addOnCompleteListener(executors) {
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


    private fun getXmlResourceIdByName(name: String, context: Context): Int {
      val packageName: String = context.packageName
      return context.resources
        .getIdentifier(name, "xml", packageName)
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
