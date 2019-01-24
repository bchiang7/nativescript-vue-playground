# NativeScript Vue Starter

A native mobile application built with [NativeScript-Vue](https://nativescript-vue.org/)

- Vue
- Vuex
- Sass
- Vue DevTools

## Prerequisites & Tooling

**Follow the [NativeScript CLI Setup](https://docs.nativescript.org/start/quick-setup)**

1. Ensure [NVM](https://github.com/creationix/nvm) is installed globally (see [Ups Dev Env Setup](https://github.com/Upstatement/Upstatement/wiki/2017-Development-Environment-Setup))

2. Use the correct node version

   ```bash
   nvm use
   ```

3. Install the NativeScript CLI

   ```bash
   npm install -g nativescript
   ```

   Check out the [NativeScript CLI Basics](https://docs.nativescript.org/start/cli-basics)

4. Install iOS and Android requirements

   ```bash
   ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"
   ```

   The macOS script needs administrative access to run some commands using sudo; therefore, you may need to provide your password several times during execution. The macOS script also may take some time to complete, as it's installing the dependencies for both iOS and Android development. When the script finishes, close and restart your terminal.

   In case you hit any snags, refer to [NativeScript Advanced Setup for macOS](https://docs.nativescript.org/start/ns-setup-os-x).

5. Verify the setup

   ```bash
   tns doctor
   ```

   If you see `No issues were detected` you are good to go!

### Device Emulators

Assuming you're developing on a mac and have XCode installed, you should already have a the `Simulator` mac app for iOS. To check, just try searching for "Simulator" in spotlight.

Make sure you have an Android Emulator set up by following the [docs](https://docs.nativescript.org/tooling/android-virtual-devices)

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Open your iOS or Android Emulator

3. Build, watch for changes and run the application

   ```bash
   tns run android --bundle
   # or
   tns run ios --bundle
   ```

## Running the App

```bash
# Build for production
tns build <platform> --bundle

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle
```

## Debugging

[Debugging](https://docs.nativescript.org/tooling/debugging/debugging)

[Chrome DevTools](https://docs.nativescript.org/tooling/debugging/chrome-devtools)

[Using Vue DevTools](https://nativescript-vue.org/en/docs/getting-started/vue-devtools/)

## Resources

[NativeScript Documentation](https://docs.nativescript.org/core-concepts/technical-overview)

[NativeScript-Vue Documentation](https://nativescript-vue.org/)

[NativeScript CLI Basics](https://docs.nativescript.org/start/cli-basics)
