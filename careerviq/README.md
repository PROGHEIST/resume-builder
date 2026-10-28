# CareerViQ

CareerViQ is an Android-first, frontend-only resume builder built with Expo, React Native, TypeScript, and Expo Router. Resume data is stored locally on the device; no backend, authentication service, or cloud database is configured.

## Requirements

- Node.js 22.13+ (SDK 58 requirement)
- npm
- Expo Go or Android emulator. The MMKV adapter uses native code; use a development build rather than Expo Go.

## Install and run

From the repository root:

```bash
cd careerviq
npm install
npx expo install --fix
npx expo-doctor
npm run typecheck
npm run lint
npx expo start
```

Press `a` to open Android, or run `npm run android` with an emulator/device configured. Use `npm run web` to check the web build. Run `npm run ios` on macOS with Xcode installed.

## Dependency recovery

If npm reports peer-dependency conflicts, do not start with `--force` or `--legacy-peer-deps`. Use the SDK-aware resolver first:

```bash
rm -rf node_modules package-lock.json
npm install
npx expo install --fix
npx expo-doctor
```

If `expo install --fix` proposes a package version that differs from the pinned SDK 58 family, keep the Expo-resolved version and commit the regenerated `package-lock.json`. Always run `npm ci` after regenerating the lockfile to verify clean installs. MMKV requires native code and a development build; for Expo Go during early UI work, replace MMKV with an Expo-compatible storage adapter.

## Checks

```bash
npm run typecheck
npm run lint
npm run format:check
npx expo-doctor
```

Source and setup were added on the `feat/careerviq-foundation` branch. Dependency installation and actual app launch must be verified on a machine with Node/npm and Expo available.
