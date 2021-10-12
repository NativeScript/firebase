package org.nativescript.firebase.firebaseadmobdemo

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import org.json.JSONArray
import org.json.JSONObject
import org.nativescript.firebase.admob.FirebaseAdmob

class MainActivity : AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
    com.google.android.gms.ads.MobileAds.initialize(this)
    val json = JSONObject()
    val array = JSONArray()
    array.put("EMULATOR")
    json.put("testDevices", array)
    FirebaseAdmob.setRequestConfiguration(json.toString())
  }
}
