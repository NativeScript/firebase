package org.nativescript.firebase.firestore

import android.os.Handler
import android.os.Looper
import androidx.lifecycle.MutableLiveData
import com.google.firebase.firestore.*
import com.google.firebase.firestore.FirebaseFirestore
import java.util.concurrent.CountDownLatch
import java.util.concurrent.Executors

class FirebaseFirestore {
  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }


  interface TransactionCallback {
    fun onTransaction(transaction: Transaction, value: MutableLiveData<Any?>, lock: CountDownLatch)
  }

  class CollectionReference {
    companion object {

      @JvmStatic
      fun add(
        query: com.google.firebase.firestore.CollectionReference,
        data: Any,
        callback: Callback<com.google.firebase.firestore.DocumentReference>
      ) {
        query.add(data)
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
    }
  }

  class Query {
    companion object {

      @JvmStatic
      fun get(query: com.google.firebase.firestore.Query, callback: Callback<QuerySnapshot>) {
        query.get()
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
      fun get(
        query: com.google.firebase.firestore.Query,
        source: Source,
        callback: Callback<QuerySnapshot>
      ) {
        query.get(source)
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

    }
  }

  class DocumentReference {
    companion object {
      @JvmStatic
      fun delete(
        documentReference: com.google.firebase.firestore.DocumentReference,
        callback: Callback<Void>
      ) {
        documentReference.delete()
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
      fun get(
        documentReference: com.google.firebase.firestore.DocumentReference,
        callback: Callback<DocumentSnapshot>
      ) {
        documentReference.get()
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
      fun get(
        documentReference: com.google.firebase.firestore.DocumentReference,
        source: Source,
        callback: Callback<DocumentSnapshot>
      ) {
        documentReference.get(source)
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
      fun set(
        documentReference: com.google.firebase.firestore.DocumentReference,
        data: Any,
        callback: Callback<Void>
      ) {
        documentReference.set(data)
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
      fun set(
        documentReference: com.google.firebase.firestore.DocumentReference,
        data: Any,
        options: SetOptions,
        callback: Callback<Void>
      ) {
        documentReference.set(data, options)
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
      fun update(
        documentReference: com.google.firebase.firestore.DocumentReference,
        data: Map<String, Any>,
        callback: Callback<Void>
      ) {
        documentReference.update(data)
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
      fun update(
        documentReference: com.google.firebase.firestore.DocumentReference,
        field: String,
        value: Any,
        moreFieldsAndValues: Array<Any>,
        callback: Callback<Void>
      ) {
        documentReference.update(field, value, moreFieldsAndValues)
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
      fun update(
        documentReference: com.google.firebase.firestore.DocumentReference,
        field: FieldPath,
        value: Any,
        moreFieldsAndValues: Array<Any>,
        callback: Callback<Void>
      ) {
        documentReference.update(field, value, moreFieldsAndValues)
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


    }
  }

  class WriteBatch {
    companion object {
      @JvmStatic
      fun commit(batch: com.google.firebase.firestore.WriteBatch, callback: Callback<Void>) {
        batch.commit()
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
    }
  }

  companion object {

    @JvmStatic
    fun clearPersistence(firestore: FirebaseFirestore, callback: Callback<Void>) {
      firestore.clearPersistence()
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
    fun disableNetwork(firestore: FirebaseFirestore, callback: Callback<Void>) {
      firestore.disableNetwork()
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
    fun enableNetwork(firestore: FirebaseFirestore, callback: Callback<Void>) {
      firestore.enableNetwork()
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


    private var transactionLock = CountDownLatch(1)

    @JvmStatic
    fun runTransaction(
      firestore: FirebaseFirestore,
      transactionCallback: TransactionCallback,
      callback: Callback<Any?>
    ) {
      firestore.runTransaction {
        val result = MutableLiveData<Any?>()
        transactionCallback.onTransaction(it, result, transactionLock)
        try {
          transactionLock.await()
        } catch (e: Exception) {
        }
        transactionLock = CountDownLatch(1)
        if (result.value == null) {
          null
        } else {
          result.value
        }
      }.addOnCompleteListener(executors) {
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
    fun terminate(firestore: FirebaseFirestore, callback: Callback<Void>) {
      firestore.terminate()
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
    fun waitForPendingWrites(firestore: FirebaseFirestore, callback: Callback<Void>) {
      firestore.waitForPendingWrites()
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
