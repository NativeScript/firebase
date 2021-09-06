package org.nativescript.firebase.storage

import android.net.Uri
import android.os.Handler
import android.os.Looper
import android.util.Base64
import com.google.firebase.storage.FileDownloadTask
import com.google.firebase.storage.ListResult
import com.google.firebase.storage.UploadTask
import org.json.JSONObject
import java.util.concurrent.Executors

class FirebaseStorage {

  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }

  class StorageReference {
    companion object {
      @JvmStatic
      fun delete(
        reference: com.google.firebase.storage.StorageReference,
        callback: Callback<Void>
      ) {
        reference.delete()
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
      fun getDownloadURL(
        reference: com.google.firebase.storage.StorageReference,
        callback: Callback<Uri>
      ) {
        reference.downloadUrl.addOnCompleteListener(executors) {
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
      fun getMetadata(
        reference: com.google.firebase.storage.StorageReference,
        callback: Callback<com.google.firebase.storage.StorageMetadata>
      ) {
        reference.metadata.addOnCompleteListener(executors) {
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
      fun list(
        reference: com.google.firebase.storage.StorageReference,
        maxResults: Int,
        pageToken: String?,
        callback: Callback<ListResult>
      ) {
        if (pageToken != null) {
          reference.list(maxResults, pageToken).addOnCompleteListener(executors) {
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
        } else {
          reference.list(maxResults).addOnCompleteListener(executors) {
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

      @JvmStatic
      fun listAll(
        reference: com.google.firebase.storage.StorageReference,
        callback: Callback<ListResult>
      ) {
        reference.listAll().addOnCompleteListener(executors) {
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
      fun updateMetadata(
        reference: com.google.firebase.storage.StorageReference,
        metadata: com.google.firebase.storage.StorageMetadata,
        callback: Callback<com.google.firebase.storage.StorageMetadata>
      ) {
        reference.updateMetadata(metadata).addOnCompleteListener(executors) {
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
      fun putString(
        reference: com.google.firebase.storage.StorageReference,
        string: String,
        format: String?,
        metadata: com.google.firebase.storage.StorageMetadata?
      ): UploadTask {

        when (format) {
          "base64" -> {
            return if (metadata != null) {
              reference.putBytes(
                Base64.decode(string, Base64.DEFAULT),
                metadata
              )
            } else {
              reference.putBytes(
                Base64.decode(string, Base64.DEFAULT),
              )
            }
          }
          "base64url" -> {
            return if (metadata != null) {
              reference.putBytes(
                Base64.decode(string, Base64.URL_SAFE),
                metadata
              )
            } else {
              reference.putBytes(
                Base64.decode(string, Base64.URL_SAFE),
              )
            }
          }
          else -> {
            return if (metadata != null) {
              reference.putBytes(
                string.toByteArray(),
                metadata
              )
            } else {
              reference.putBytes(
                string.toByteArray(),
              )
            }
          }
        }

      }


      @JvmStatic
      fun getStatus(task: FileDownloadTask.TaskSnapshot): String {
        return when {
          task.task.isCanceled -> {
            "cancelled"
          }
          task.task.exception != null -> {
            "error"
          }
          task.task.isPaused -> {
            "paused"
          }
          task.task.isInProgress -> {
            "running"
          }
          task.task.isSuccessful -> {
            "success"
          }
          else -> {
            "unknown"
          }
        }
      }

      @JvmStatic
      fun getStatus(task: UploadTask.TaskSnapshot): String {
        return when {
          task.task.isCanceled -> {
            "cancelled"
          }
          task.task.exception != null -> {
            "error"
          }
          task.task.isPaused -> {
            "paused"
          }
          task.task.isInProgress -> {
            "running"
          }
          task.task.isSuccessful -> {
            "success"
          }
          else -> {
            "unknown"
          }
        }
      }

    }
  }

  class StorageMetadata {
    companion object {

      @JvmStatic
      fun setCustomMetadata(
        metadata: com.google.firebase.storage.StorageMetadata.Builder,
        data: String
      ) {
        try {
          val json = JSONObject(data)
          for (key in json.keys()) {
            try {
              metadata.setCustomMetadata(key, json.getString(key))
            } catch (e: Exception) {
              metadata.setCustomMetadata(key, null)
            }
          }
        } catch (e: Exception) {
        }
      }

      @JvmStatic
      fun getCustomMetadata(metadata: com.google.firebase.storage.StorageMetadata): String {
        val json = JSONObject()
        for (key in metadata.customMetadataKeys) {
          json.put(key, metadata.getCustomMetadata(key))
        }
        return json.toString()
      }
    }
  }

  class StorageTask {
    interface Callback<T> {
      fun onNextOrObserver(result: T?)
      fun onComplete()
      fun onError(error: Any?)
    }

    companion object {
      @JvmStatic
      fun on(
        task: UploadTask,
        nextOrObserver: Boolean,
        error: Boolean,
        complete: Boolean,
        callback: Callback<UploadTask.TaskSnapshot>
      ) {
        if (nextOrObserver) {
          task.addOnProgressListener(executors) {
            runOnMain {
              callback.onNextOrObserver(it)
            }
          }

          task.addOnCanceledListener(executors) {
            runOnMain {
              callback.onNextOrObserver(task.snapshot)
            }
          }

          task.addOnPausedListener(executors) {
            runOnMain {
              callback.onNextOrObserver(it)
            }
          }

        }
        if (error or complete or nextOrObserver) {
          task.addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              if (nextOrObserver) {
                runOnMain {
                  callback.onNextOrObserver(it.result)
                }
              }

              if (complete) {
                runOnMain {
                  callback.onComplete()
                }
              }
            } else {

              if (!it.isCanceled and nextOrObserver) {
                runOnMain {
                  callback.onNextOrObserver(task.snapshot)
                }
              }

              if (error) {
                runOnMain {
                  callback.onError(it.exception)
                }

              }

            }
          }
        }
      }


      @JvmStatic
      fun on(
        task: FileDownloadTask,
        nextOrObserver: Boolean,
        error: Boolean,
        complete: Boolean,
        callback: Callback<FileDownloadTask.TaskSnapshot>
      ) {
        if (nextOrObserver) {
          task.addOnProgressListener(executors) {
            runOnMain {
              callback.onNextOrObserver(it)
            }
          }

          task.addOnCanceledListener(executors) {
            runOnMain {
              callback.onNextOrObserver(task.snapshot)
            }
          }

          task.addOnPausedListener(executors) {
            runOnMain {
              callback.onNextOrObserver(it)
            }
          }

        }
        if (error or complete or nextOrObserver) {
          task.addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              if (nextOrObserver) {
                runOnMain {
                  callback.onNextOrObserver(it.result)
                }
              }

              if (complete) {
                runOnMain {
                  callback.onComplete()
                }
              }
            } else {


              if (!it.isCanceled and nextOrObserver) {
                runOnMain {
                  callback.onNextOrObserver(task.snapshot)
                }
              }

              if (error) {
                runOnMain {
                  callback.onError(it.exception)
                }

              }

            }
          }
        }
      }
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
  }

}
