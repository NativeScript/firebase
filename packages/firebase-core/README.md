# @nativescript/firebase-core

```cli
ns plugin add @nativescript/firebase-core
```

## Usage

### Android
Ensure `google-services.json` file located in `App_Resources/Android/src`.

### iOS
Ensure `GoogleService-Info.plist` file located in `App_Resources/iOS`.

### Initialize Default App

```ts
import { firebase } from '@nativescript/firebase-core'
const defaultApp = await firebase().initializeApp();
```

### Initialize Secondary App

```ts
import { firebase, FirebaseOptions } from '@nativescript/firebase-core'
const config = new FirebaseOptions()
const secondaryApp = await firebase().initializeApp(config, 'SECONDARY_APP');
```


## License

Apache License Version 2.0
