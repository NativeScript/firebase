- [@nativescript/firebase-ai](packages/firebase-ai/README.md)
- [@nativescript/firebase-analytics](packages/firebase-analytics/README.md)
- [@nativescript/firebase-app-check](packages/firebase-app-check/README.md)
- [@nativescript/firebase-app-check-debug](packages/firebase-app-check-debug/README.md)
- [@nativescript/firebase-auth](packages/firebase-auth/README.md)
- [@nativescript/firebase-core](packages/firebase-core/README.md)
- [@nativescript/firebase-crashlytics](packages/firebase-crashlytics/README.md)
- [@nativescript/firebase-database](packages/firebase-database/README.md)
- [@nativescript/firebase-firestore](packages/firebase-firestore/README.md)
- [@nativescript/firebase-functions](packages/firebase-functions/README.md)
- [@nativescript/firebase-in-app-messaging](packages/firebase-in-app-messaging/README.md)
- [@nativescript/firebase-installations](packages/firebase-installations/README.md)
- [@nativescript/firebase-messaging](packages/firebase-messaging/README.md)
- [@nativescript/firebase-messaging-core](packages/firebase-messaging-core/README.md)
- [@nativescript/firebase-performance](packages/firebase-performance/README.md)
- [@nativescript/firebase-remote-config](packages/firebase-remote-config/README.md)
- [@nativescript/firebase-storage](packages/firebase-storage/README.md)
- [@nativescript/firebase-ui](packages/firebase-ui/README.md)

## Requirements

The 6.x suite tracks Firebase iOS `12.19.x` and the Firebase Android BOM `34.19.0`, which require an
iOS deployment target of **15.0**, an Android `minSdkVersion` of **23** and a `compileSdkVersion`
of **35**.

iOS dependencies are pulled with **Swift Package Manager** rather than CocoaPods, which needs
**NativeScript CLI 8.9.0 or newer** (9.0.3 if you want to override a plugin's package from your own
config). See
[@nativescript/firebase-core](packages/firebase-core/README.md#requirements) for the details and
where to set each value.

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

Releases run through the [Release Workflow](.github/workflows/secure_nx_release.yml) GitHub Action. It versions with `nx release`, publishes to npm through OIDC trusted publishing (provenance attached, no npm token in the repo), and creates one GitHub release per package tag.

### Manual release (Actions → Release Workflow → Run workflow)

- `version`: exact version such as `6.1.0` or `6.1.0-rc.0`. The npm dist-tag is derived from it (`6.1.0` → `latest`, `6.1.0-rc.0` → `rc`).
- `release-type` + `preid`: used when `version` is empty. `patch` / `minor` / `major` publish to `latest`; `prerelease` bumps e.g. `6.0.0` → `6.0.1-next.0` and publishes to the `preid` dist-tag.
- `release-group`: Nx project pattern to scope the release, e.g. `firebase-core` or `firebase-messaging*,firebase-core`. Empty releases every package under `packages/`.
- `dry-run`: prints every change and publishes nothing.

Each run commits the bumped `package.json` and per-package `CHANGELOG.md`, tags `{version}-{projectName}` (e.g. `6.1.0-firebase-core`), builds with `build.all`, and publishes from `dist/packages/*`.

### Tag release

Pushing a tag shaped `{version}-{projectName}` publishes that single package at the version already in its `package.json`. A prerelease version goes to the `next` dist-tag, anything else to `latest`.

### Automatic `next` prereleases

A push to `main` publishes a `next` prerelease of the affected packages named in the repository variable `NEXT_PRERELEASE_PROJECT_ALLOWLIST` (comma-separated Nx project names, e.g. `firebase-core,firebase-auth`). Leave the variable unset and pushes to `main` publish nothing.

### One-time repository setup

- npm: on each `@nativescript/firebase-*` package, add a trusted publisher for GitHub Actions with organization `NativeScript`, repository `firebase`, workflow `secure_nx_release.yml` and environment `npm-publish`. npm only offers trusted publishing on packages that already exist, so a brand-new package must be published once with a token first.
- GitHub: environments `npm-publish` and `npm-publish-dry-run`. Required reviewers on `npm-publish` gate every real publish.
- Optional token fallback: set the repository variable `USE_NPM_TOKEN` to `true` and the secret `NPM_PUBLISH_TOKEN` to publish with a granular npm token instead of OIDC.

The interactive `npm run publish-packages` generator still works for local, token-based publishing, but it produces no provenance, changelogs, tags or GitHub releases.

<h3 align="center">Made with ❤️</h3>
