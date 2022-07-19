- [@nativescript/firebase-admob](packages/firebase-admob/README.md)
- [@nativescript/firebase-analytics](packages/firebase-analytics/README.md)
- [@nativescript/firebase-app-check](packages/firebase-app-check/README.md)
- [@nativescript/firebase-app-check-debug](packages/firebase-app-check-debug/README.md)
- [@nativescript/firebase-auth](packages/firebase-auth/README.md)
- [@nativescript/firebase-core](packages/firebase-core/README.md)
- [@nativescript/firebase-crashlytics](packages/firebase-crashlytics/README.md)
- [@nativescript/firebase-database](packages/firebase-database/README.md)
- [@nativescript/firebase-dynamic-links](packages/firebase-dynamic-links/README.md)
- [@nativescript/firebase-firestore](packages/firebase-firestore/README.md)
- [@nativescript/firebase-functions](packages/firebase-functions/README.md)
- [@nativescript/firebase-in-app-messaging](packages/firebase-in-app-messaging/README.md)
- [@nativescript/firebase-installations](packages/firebase-installations/README.md)
- [@nativescript/firebase-messaging](packages/firebase-messaging/README.md)
- [@nativescript/firebase-messaging-core](packages/firebase-messaging-core/README.md)
- [@nativescript/firebase-performance](packages/firebase-performance/README.md)
- [@nativescript/firebase-remote-config](packages/firebase-remote-config/README.md)
- [@nativescript/firebase-storage](packages/firebase-storage/README.md)

# How to use?

This workspace manages the suite of plugins listed above. 

In general, when in doubt with what to do, just `npm start`.

## How to add a new package to workspace?

```
npm run add
```

At the prompt, enter the name of the new package.

- This adds a plugin harness in `packages` with the necessary boilerplate to just start developing
- Updates all demo app flavors to support demoing the new package
- Adds shared code in `tools/demo` where you can write demo code **once** and share across all demo flavors
- Updates build tooling to support the new package
- Updates the `npm start` interactive display
- Updates the README here to list the new package

## How to add Angular compatibility to a package

```
npm run add-angular
```

At the prompt, enter the name of the package to add an `angular` folder to it with the necessary boilerplate to provide Angular support to the package.

## How to focus on just 1 package to develop in isolation

```
npm start
```

- Choose the focus commands for the package you wish to focus on and hit enter.
- All the demo app's will be updated to isolate that 1 package and for supported IDE's (currently VS Code), the source code will also become isolated in the workspace.

Note: *good to always clean the demo you plan to run after focusing. (You can clean any demo from `npm start` as well)*

## How to publish packages?

```
npm run publish-packages
```

- You will be prompted for the package names to publish. Leaving blank and hitting enter will publish them all.
- You will then be prompted for the version to use. Leaving blank will auto bump the patch version (it also handles prerelease types like alpha, beta, rc, etc. - It even auto tags the corresponding prelease type on npm).
- You will then be given a brief sanity check 🧠😊

<h3 align="center">Made with ❤️</h3>
