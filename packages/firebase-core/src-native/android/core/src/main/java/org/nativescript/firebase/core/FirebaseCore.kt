package org.nativescript.firebase.core

import android.content.Context
import java.io.BufferedReader
import java.io.InputStreamReader

class FirebaseCore {
  companion object {

    @JvmStatic
    fun readRawAsset(ctx: Context, path: String): String {

      val className = Class.forName("${ctx.packageName}.R\$raw");
      val id = className.getDeclaredField(path.replace("res://", "")).get(null) as Int

      val stream = ctx.resources.openRawResource(id)

      val reader = InputStreamReader(stream, "utf-8")
      val bufferedReader = BufferedReader(reader)


      var line: String?
      var result = ""
      while (true) {
        line = bufferedReader.readLine()
        if (line === null) {
          break
        }

        if (result.isNotEmpty()) {
          result += '\n'
        }

        result += line
      }


      if (Character.codePointAt(result, 0) == 0xfeff) {
        result = result.slice(1 until result.length)
      }

      return result
    }
  }
}
