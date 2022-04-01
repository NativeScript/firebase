package org.nativescript.firebaseauth

import android.app.Activity
import android.os.Handler
import android.os.Looper
import com.google.android.gms.tasks.Task
import com.google.firebase.auth.*
import java.util.concurrent.Executors


class FirebaseAuth {
  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }


  class User {
    companion object {

      @JvmStatic
      fun reauthenticateWithProvider(
        activity: Activity,
        user: FirebaseUser,
        builder: OAuthProvider.Builder,
        callback: Callback<AuthResult>
      ) {
        user.startActivityForReauthenticateWithProvider(activity, builder.build())
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
      fun delete(
        user: FirebaseUser,
        callback: Callback<Void>
      ) {
        user.delete()
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
      fun getIdToken(
        user: FirebaseUser,
        forceRefresh: Boolean,
        callback: Callback<String>
      ) {
        user.getIdToken(forceRefresh)
          .addOnCompleteListener(executors) {
            if (it.isSuccessful) {
              runOnMain {
                callback.onSuccess(it.result?.token)
              }
            } else {
              runOnMain {
                callback.onError(it.exception)
              }
            }
          }
      }

      @JvmStatic
      fun getIdTokenResult(
        user: FirebaseUser,
        forceRefresh: Boolean,
        callback: Callback<GetTokenResult>
      ) {
        user.getIdToken(forceRefresh)
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
      fun linkWithCredential(
        user: FirebaseUser,
        credential: AuthCredential,
        callback: Callback<AuthResult>
      ) {
        user.linkWithCredential(credential)
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
      fun reauthenticateWithCredential(
        user: FirebaseUser,
        credential: AuthCredential,
        callback: Callback<AuthResult>
      ) {
        user.reauthenticateAndRetrieveData(credential)
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
      fun reload(
        user: FirebaseUser,
        callback: Callback<Void>
      ) {
        user.reload()
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
      fun sendEmailVerification(
        user: FirebaseUser,
        actionCodeSettings: ActionCodeSettings?,
        callback: Callback<Void>
      ) {
        val call = if (actionCodeSettings == null) {
          user.sendEmailVerification()
        } else {
          user.sendEmailVerification(actionCodeSettings)
        }

        call.addOnCompleteListener(executors) {
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
      fun unlink(
        user: FirebaseUser,
        providerId: String,
        callback: Callback<AuthResult>
      ) {
        user.unlink(providerId)
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
      fun updateEmail(
        user: FirebaseUser,
        email: String,
        callback: Callback<Void>
      ) {
        user.updateEmail(email)
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
      fun updatePassword(
        user: FirebaseUser,
        password: String,
        callback: Callback<Void>
      ) {
        user.updatePassword(password)
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
      fun updatePhoneNumber(
        user: FirebaseUser,
        credential: PhoneAuthCredential,
        callback: Callback<Void>
      ) {
        user.updatePhoneNumber(credential)
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
      fun updateProfile(
        user: FirebaseUser,
        changeRequest: UserProfileChangeRequest,
        callback: Callback<Void>
      ) {
        user.updateProfile(changeRequest)
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
      fun verifyBeforeUpdateEmail(
        user: FirebaseUser,
        email: String,
        actionCodeSettings: ActionCodeSettings?,
        callback: Callback<Void>
      ) {
        user.verifyBeforeUpdateEmail(email, actionCodeSettings)
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


    @JvmStatic
    fun signInWithProvider(
      activity: Activity,
      auth: com.google.firebase.auth.FirebaseAuth,
      builder: OAuthProvider.Builder,
      callback: Callback<AuthResult>
    ) {
      val task =
        auth.pendingAuthResult ?: auth.startActivityForSignInWithProvider(activity, builder.build())
      task.addOnCompleteListener(executors) {
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
    fun fetchSignInMethodsForEmail(
      auth: com.google.firebase.auth.FirebaseAuth,
      email: String,
      callback: Callback<SignInMethodQueryResult>
    ) {
      auth
        .fetchSignInMethodsForEmail(email)
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
    fun sendPasswordResetEmail(
      auth: com.google.firebase.auth.FirebaseAuth,
      email: String,
      actionCodeSettings: ActionCodeSettings?,
      callback: Callback<Void>
    ) {
      auth.sendPasswordResetEmail(email, actionCodeSettings)
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
    fun sendSignInLinkToEmail(
      auth: com.google.firebase.auth.FirebaseAuth,
      email: String,
      actionCodeSettings: ActionCodeSettings,
      callback: Callback<Void>
    ) {
      auth.sendSignInLinkToEmail(email, actionCodeSettings)
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
    fun signInAnonymously(
      auth: com.google.firebase.auth.FirebaseAuth,
      callback: Callback<AuthResult>
    ) {
      auth.signInAnonymously()
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
    fun signInWithCredential(
      auth: com.google.firebase.auth.FirebaseAuth,
      credential: AuthCredential,
      callback: Callback<AuthResult>
    ) {
      auth.signInWithCredential(credential)
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
    fun signInWithCustomToken(
      auth: com.google.firebase.auth.FirebaseAuth,
      token: String,
      callback: Callback<AuthResult>
    ) {
      auth.signInWithCustomToken(token)
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
    fun signInWithEmailLink(
      auth: com.google.firebase.auth.FirebaseAuth,
      email: String,
      emailLink: String,
      callback: Callback<AuthResult>
    ) {
      auth.signInWithEmailLink(email, emailLink)
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
    fun verifyPasswordResetCode(
      auth: com.google.firebase.auth.FirebaseAuth,
      code: String,
      callback: Callback<String>
    ) {
      auth.verifyPasswordResetCode(code)
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
    fun createUserWithEmailAndPassword(
      auth: com.google.firebase.auth.FirebaseAuth,
      email: String,
      password: String,
      callback: Callback<AuthResult>
    ) {
      auth.createUserWithEmailAndPassword(email, password)
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
    fun confirmPasswordReset(
      auth: com.google.firebase.auth.FirebaseAuth,
      code: String,
      newPassword: String,
      callback: Callback<Void>
    ) {
      auth.confirmPasswordReset(code, newPassword)
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
    fun checkActionCode(
      auth: com.google.firebase.auth.FirebaseAuth,
      code: String,
      callback: Callback<ActionCodeResult>
    ) {
      auth.checkActionCode(code)
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
    fun applyActionCode(
      auth: com.google.firebase.auth.FirebaseAuth,
      code: String,
      callback: Callback<Void>
    ) {
      auth.applyActionCode(code)
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
    fun signInWithEmailAndPassword(
      auth: com.google.firebase.auth.FirebaseAuth,
      email: String,
      password: String,
      callback: Callback<AuthResult>
    ) {
      auth.signInWithEmailAndPassword(email, password)
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
