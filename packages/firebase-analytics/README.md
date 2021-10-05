# @nativescript/firebase-analytics

```javascript
ns plugin add @nativescript/firebase-analytics
```

## Google Analytics for Firebase

## What does it do? 

Google Analytics is a free app measurement solution that provides insight on app usage and user engagement. Analytics reports help you understand clearly how your users behave, which enables you to make informed decisions regarding app marketing and performance optimizations.


[![image](https://img.youtube.com/vi/8iZpH7O6zXo/hqdefault.jpg)](https://www.youtube.com/watch?v=8iZpH7O6zXo)



## Usage

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-analytics';

firebase().analytics()
.logEvent('custom_name', {
    thing: 1
});

```
## License

Apache License Version 2.0
