package org.nativescript.firebase.messaging

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.os.Handler
import android.os.Looper
import androidx.core.app.NotificationManagerCompat
import com.google.firebase.messaging.FirebaseMessaging
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage
import org.json.JSONArray
import org.json.JSONObject
import java.util.concurrent.Executors

class FirebaseMessaging {

  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }


  open class Service : FirebaseMessagingService() {
    override fun onMessageReceived(remoteMessage: RemoteMessage) {

      val message = remoteMessageToJson(remoteMessage)
      if (remoteMessage.notification == null) {
        remoteMessage.messageId?.let {
          remoteMessageMap[it] = remoteMessage
        }
      } else {
        preferences?.let {
          val savedMessage = it.getString(remoteMessage.messageId, "") ?: ""
          val messageString = message.toString()
          if (savedMessage.isEmpty()) {
            it.edit().putString(
              remoteMessage.messageId, messageString
            ).apply()
          }
        }
      }
      onMessageListener?.onSuccess(message.toString())

    }

    override fun onNewToken(token: String) {
      onTokenListener?.onSuccess(token)
    }

  }

  class FirebaseMessagingReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
      if (applicationContext == null) {
        init(context)
      }

      intent.extras?.let {
        val remoteMessage = RemoteMessage(it)
        remoteMessage.notification?.let {
          remoteMessage.messageId?.let { messageId ->
            remoteMessageMap[messageId] = remoteMessage
            preferences?.edit()?.putString(messageId, remoteMessageToJson(remoteMessage).toString())?.apply()
          }
        }

      }
    }
  }

  companion object {

    private const val PREFERENCES_FILE = "org.nativescript.firebase.messaging"

    private var applicationContext: Context? = null

    private var onTokenListener: Callback<String>? = null

    private var onMessageListener: Callback<String>? = null

    private var onMessageTapListener: Callback<String>? = null

    private var preferences: SharedPreferences? = null

    private var remoteMessageMap: MutableMap<String, RemoteMessage> = HashMap()

    private fun remoteMessageToJson(remoteMessage: RemoteMessage): JSONObject {
      val message = JSONObject()

      message.put("collapseKey", remoteMessage.collapseKey)

      val data = JSONObject()
      remoteMessage.data.forEach {
        data.put(it.key, it.value)
      }

      message.put("data", data)
      message.put("from", remoteMessage.from)
      message.put("messageId", remoteMessage.messageId)
      message.put("messageType", remoteMessage.messageType)

      remoteMessage.notification?.let { notif ->

        val notification = JSONObject()
        val android = JSONObject()
        notif.channelId?.let {
          android.put("channelId", it)
        }

        notif.clickAction?.let {
          android.put("clickAction", it)
        }

        notif.color?.let {
          android.put("color", it)
        }

        notif.notificationCount?.let {
          android.put("count", it)
        }

        notif.imageUrl?.let {
          android.put("imageUrl", it.toString())
        }

        notif.link?.let {
          android.put("link", it.toString())
        }

        notif.notificationPriority?.let {
          android.put("priority", it)
        }


        notif.visibility?.let {
          android.put("visibility", it)
        }

        notif.sound?.let {
          android.put("sound", it)
        }

        notif.ticker?.let {
          android.put("ticker", it)
        }

        notif.icon?.let {
          android.put("visibility", it)
        }


        if (android.length() > 0) {
          notification.put("android", android)
        }

        notif.body?.let {
          notification.put("body", it)
        }

        notif.bodyLocalizationArgs?.let { array ->
          val bodyLocArgs = JSONArray()
          array.forEach {
            bodyLocArgs.put(it)
          }
          notification.put("bodyLocArgs", bodyLocArgs)
        }

        notif.bodyLocalizationKey?.let {
          notification.put("bodyLocKey", it)
        }

        notif.title?.let {
          notification.put("title", it)
        }

        notif.titleLocalizationArgs?.let { array ->
          val titleLocArgs = JSONArray()
          array.forEach {
            titleLocArgs.put(it)
          }
          notification.put("titleLocArgs", titleLocArgs)
        }

        notif.titleLocalizationKey?.let {
          notification.put("titleLocKey", it)
        }


        message.put("notification", notification)
      }

      message.put("sentTime", remoteMessage.sentTime)
      message.put("to", remoteMessage.to)
      message.put("ttl", remoteMessage.ttl)

      return message
    }

    @JvmStatic
    fun init(context: Context) {
      if (applicationContext == null) {
        applicationContext = context.applicationContext
      }
      if (preferences == null) {
        preferences = context.getSharedPreferences(
          PREFERENCES_FILE, Context.MODE_PRIVATE
        )
      }
    }

    @JvmStatic
    fun handleActivityIntent(intent: Intent?) {
      onMessageTapListener?.let { callback ->
        intent?.let {
          it.extras?.let { extras ->
            (extras.getString("google.message_id")
              ?: extras.getString("message_id"))?.let { messageId ->
              val remoteMessage = remoteMessageMap[messageId]
              if (remoteMessage != null) {
                callback.onSuccess(remoteMessageToJson(remoteMessage).toString())
                remoteMessageMap.remove(messageId)
              } else {
                preferences?.let { pref ->
                  val message = pref.getString(messageId, "") ?: ""
                  if (message.isNotEmpty()) {
                    callback.onSuccess(message)
                    pref.edit().remove(messageId).apply()
                  }
                }
              }
            }
          }
        }
      }
    }

    @JvmStatic
    fun setOnTokenListener(callback: Callback<String>?) {
      onTokenListener = callback
    }

    @JvmStatic
    fun setOnMessageListener(callback: Callback<String>?) {
      onMessageListener = callback
    }


    @JvmStatic
    fun setOnMessageTapListener(callback: Callback<String>?) {
      onMessageTapListener = callback
    }

    @JvmStatic
    fun getToken(messaging: FirebaseMessaging, callback: Callback<String>) {
      messaging.token
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
    fun deleteToken(messaging: FirebaseMessaging, callback: Callback<Void>) {
      messaging.deleteToken()
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
    fun hasPermission(context: Context): Boolean {
      return NotificationManagerCompat.from(context).areNotificationsEnabled()
    }

    @JvmStatic
    fun subscribeToTopic(topic: String, messaging: FirebaseMessaging, callback: Callback<Void>) {
      messaging.subscribeToTopic(topic)
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
    fun unsubscribeFromTopic(
      topic: String,
      messaging: FirebaseMessaging,
      callback: Callback<Void>
    ) {
      messaging.unsubscribeFromTopic(topic)
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
