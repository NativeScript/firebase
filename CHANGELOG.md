# [2.1.0](https://github.com/nativescript/firebase/compare/2.0.2...2.1.0) (2022-06-07)


### Bug Fixes

* **messaging:** TNSFirebaseMessaging is not defined ([e66a54d](https://github.com/nativescript/firebase/commit/e66a54d337b8d48275e3019f853d52d14c6ff10b))


### Features

* **auth:** add getProviderCredential ([7af0baf](https://github.com/nativescript/firebase/commit/7af0baf7990f3f8eff334483765f26e458add1d9))



## [2.0.2](https://github.com/nativescript/firebase/compare/2.0.1...2.0.2) (2022-05-29)


### Bug Fixes

* **admob:** remove deleted method ([f0ccb4a](https://github.com/nativescript/firebase/commit/f0ccb4aba87981a1b72e39f42ce29a610d513974))
* **functions:** remove deleted method ([35c3f44](https://github.com/nativescript/firebase/commit/35c3f44aa9ddcb96c6b0904efe5cf94979be92d0))



## [2.0.1](https://github.com/nativescript/firebase/compare/2.0.0...2.0.1) (2022-05-19)


### Bug Fixes

* **messaging:** update lib ([a85a64d](https://github.com/nativescript/firebase/commit/a85a64dc66cc905f817de6aa0590c6d95258c094))



# [2.0.0](https://github.com/nativescript/firebase/compare/1.2.2...2.0.0) (2022-05-18)


### Bug Fixes

* **admob:** declare as static ([44f66b9](https://github.com/nativescript/firebase/commit/44f66b99e83c2dfb07b230297db8fd8d1249b61b))
* **admob:** update input ([dcb2b07](https://github.com/nativescript/firebase/commit/dcb2b072aac9e51c2e99b840cd15dad9af4c9644))
* **auth:** currentUser is nullable ([#82](https://github.com/nativescript/firebase/issues/82)) ([8f5cab1](https://github.com/nativescript/firebase/commit/8f5cab1f4067e4cee47b4e5fe5a5c5f5d5b7b210))
* **dynamic-links:** prevent crash when annotation is null ([#86](https://github.com/nativescript/firebase/issues/86)) ([8a53b8b](https://github.com/nativescript/firebase/commit/8a53b8b0d002c987d2d521682ee8a1c011be0d8a))
* HttpsCallableResult type ([#81](https://github.com/nativescript/firebase/issues/81)) ([b6e431b](https://github.com/nativescript/firebase/commit/b6e431b58afe1b57afbd05f3fdc0838fa2458891))
* **messaging:** prevent loss of messages when app is closed. ([#84](https://github.com/nativescript/firebase/issues/84)) ([f75d682](https://github.com/nativescript/firebase/commit/f75d6826566c561ede416d79f72f1352c334ed77))
* TypeError onComplete is not a function ([#80](https://github.com/nativescript/firebase/issues/80)) ([e575475](https://github.com/nativescript/firebase/commit/e575475869388fbe8f7707b7b9d4986c7b0b9002))
* **appcheck:** declare as static ([#88](https://github.com/nativescript/firebase/issues/88))  ([4dc8122](https://github.com/nativescript/firebase/commit/4dc81226d6901d0e05c92f8e2a6d47d7c7f0c4df))
* **messaging:** declare as static ([#77](https://github.com/nativescript/firebase/issues/77))  ([4dc8122](https://github.com/nativescript/firebase/commit/4dc81226d6901d0e05c92f8e2a6d47d7c7f0c4df))

### Features

* v2 ([4dc8122](https://github.com/nativescript/firebase/commit/4dc81226d6901d0e05c92f8e2a6d47d7c7f0c4df))


## [1.2.2](https://github.com/nativescript/firebase/compare/1.2.1...1.2.2) (2022-04-02)


### Bug Fixes

* **dynamiclinks:** improve onLink handling ([9d3fb8c](https://github.com/nativescript/firebase/commit/9d3fb8c552ed66e02d687affa2d47b1c91c65960))



## [1.2.1](https://github.com/nativescript/firebase/compare/1.2.0...1.2.1) (2022-04-01)


### Bug Fixes

* **auth:** move ios instance setu ([57d6c3e](https://github.com/nativescript/firebase/commit/57d6c3ef6cd9a777c1c53d078dcb1c2451daf0d6))
* **auth:** sendEmailVerification crash ([335222d](https://github.com/nativescript/firebase/commit/335222da87f0a6916d4872aa3f2f88121b9546e2))
* **messaging:** replace simulator check ([70862a8](https://github.com/nativescript/firebase/commit/70862a884438b29058b422a4d04008427af04e3a))


### Features

* publish native types ([#73](https://github.com/nativescript/firebase/issues/73)) ([f2c3ded](https://github.com/nativescript/firebase/commit/f2c3ded245555efe2e06684d98694662dc921514))



## [1.2.0](https://github.com/nativescript/firebase/compare/1.1.5...1.2.0) (2022-03-21)


### Bug Fixes

* **firestore:** android write batch ([5a3b2a9](https://github.com/nativescript/firebase/commit/5a3b2a9289041c0c7749a21a20e501bae8a974cd))
* **firestore:** ios date serialization ([0182618](https://github.com/nativescript/firebase/commit/0182618696efdd4e662cb6bb48cd2fe9c3334a3c))



## [1.1.5](https://github.com/NativeScript/firebase/compare/1.1.4...1.1.5) (2022-03-21)


### Bug Fixes

* **auth:** return currentUser directly from the native instance ([#69](https://github.com/NativeScript/firebase/issues/69)) ([e368012](https://github.com/NativeScript/firebase/commit/e3680127f1e05c41b180f11276edf7207dd8f15c))



## [1.1.4](https://github.com/NativeScript/firebase/compare/1.1.2...1.1.4) (2022-03-16)


### Bug Fixes

* use (anonymous) for empty functionNames when generating stack information ([#66](https://github.com/NativeScript/firebase/issues/66)) ([8e2d1f0](https://github.com/NativeScript/firebase/commit/8e2d1f01d3b85565cee924955056d6d041a3e968)), closes [#65](https://github.com/NativeScript/firebase/issues/65)


### Features

* nx migrate @nativescript/plugin-tools ([d081a2d](https://github.com/NativeScript/firebase/commit/d081a2dd1c645e696bf6ae8d8888319dc751e869))



