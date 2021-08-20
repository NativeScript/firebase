package org.nativescript.firebase.database

import android.os.Handler
import android.os.Looper
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.MutableData
import com.google.firebase.database.Transaction
import java.util.concurrent.Executors


class FirebaseDatabase {
  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }

  interface TransactionCallback {
    fun doTransaction(data: Any?): Any?
    fun onComplete(
      error: DatabaseError?,
      committed: Boolean,
      currentData: DataSnapshot?
    )
  }

  class OnDisconnect {
    companion object {
      @JvmStatic
      fun cancel(disconnect: com.google.firebase.database.OnDisconnect, callback: Callback<Void>) {
        disconnect.cancel()
          .addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              callback.onSuccess(it.result)
            } else {
              callback.onError(it.exception)
            }
          }
      }

      @JvmStatic
      fun remove(disconnect: com.google.firebase.database.OnDisconnect, callback: Callback<Void>) {
        disconnect.removeValue()
          .addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              callback.onSuccess(it.result)
            } else {
              callback.onError(it.exception)
            }
          }
      }


      @JvmStatic
      fun set(
        disconnect: com.google.firebase.database.OnDisconnect,
        value: Any?,
        callback: Callback<Void>
      ) {
        disconnect.setValue(value)
          .addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              callback.onSuccess(it.result)
            } else {
              callback.onError(it.exception)
            }
          }
      }


      @JvmStatic
      fun setWithPriority(
        disconnect: com.google.firebase.database.OnDisconnect,
        value: Any?,
        priority: Double,
        callback: Callback<Void>
      ) {
        disconnect.setValue(value, priority)
          .addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              callback.onSuccess(it.result)
            } else {
              callback.onError(it.exception)
            }
          }
      }


      @JvmStatic
      fun setWithPriority(
        disconnect: com.google.firebase.database.OnDisconnect,
        value: Any?,
        priority: String,
        callback: Callback<Void>
      ) {
        disconnect.setValue(value, priority)
          .addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              callback.onSuccess(it.result)
            } else {
              callback.onError(it.exception)
            }
          }
      }


      @JvmStatic
      fun update(
        disconnect: com.google.firebase.database.OnDisconnect,
        value: Map<String, Any>,
        callback: Callback<Void>
      ) {
        disconnect.updateChildren(value)
          .addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              callback.onSuccess(it.result)
            } else {
              callback.onError(it.exception)
            }
          }
      }
    }
  }

  class DatabaseReference {
    companion object {

      @JvmStatic
      fun remove(
        reference: com.google.firebase.database.DatabaseReference,
        callback: Callback<Void>
      ) {
        reference
          .removeValue()
          .addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              callback.onSuccess(it.result)
            } else {
              callback.onError(it.exception)
            }
          }
      }


      @JvmStatic
      fun set(
        reference: com.google.firebase.database.DatabaseReference,
        value: Any?,
        callback: Callback<Void>
      ) {
        reference
          .setValue(value)
          .addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              callback.onSuccess(it.result)
            } else {
              callback.onError(it.exception)
            }
          }
      }


      @JvmStatic
      fun setPriority(
        reference: com.google.firebase.database.DatabaseReference,
        priority: Double,
        callback: Callback<Void>
      ) {
        reference.setPriority(priority)
          .addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              callback.onSuccess(it.result)
            } else {
              callback.onError(it.exception)
            }
          }
      }


      @JvmStatic
      fun setPriority(
        reference: com.google.firebase.database.DatabaseReference,
        priority: String,
        callback: Callback<Void>
      ) {
        reference.setPriority(priority)
          .addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              callback.onSuccess(it.result)
            } else {
              callback.onError(it.exception)
            }
          }
      }


      @JvmStatic
      fun setWithPriority(
        reference: com.google.firebase.database.DatabaseReference,
        value: Any?,
        priority: Double,
        callback: Callback<Void>
      ) {
        reference.setValue(value, priority)
          .addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              callback.onSuccess(it.result)
            } else {
              callback.onError(it.exception)
            }
          }
      }


      @JvmStatic
      fun setWithPriority(
        reference: com.google.firebase.database.DatabaseReference,
        value: Any?,
        priority: String,
        callback: Callback<Void>
      ) {
        reference.setValue(value, priority)
          .addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              callback.onSuccess(it.result)
            } else {
              callback.onError(it.exception)
            }
          }
      }


      @JvmStatic
      fun update(
        reference: com.google.firebase.database.DatabaseReference,
        value: Map<String, Any>,
        callback: Callback<Void>
      ) {
        reference.updateChildren(value)
          .addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              callback.onSuccess(it.result)
            } else {
              callback.onError(it.exception)
            }
          }
      }


      @JvmStatic
      fun transaction(
        reference: com.google.firebase.database.DatabaseReference,
        fireLocalEvents: Boolean,
        transactionCallback: TransactionCallback,
      ) {
        reference.runTransaction(object : Transaction.Handler {
          override fun doTransaction(currentData: MutableData): Transaction.Result {
            val newData = transactionCallback.doTransaction(currentData.value)
            currentData.value = newData
            return Transaction.success(currentData)
          }

          override fun onComplete(
            error: DatabaseError?,
            committed: Boolean,
            currentData: DataSnapshot?
          ) {
            transactionCallback.onComplete(error, committed, currentData)
          }
        }, fireLocalEvents)
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
