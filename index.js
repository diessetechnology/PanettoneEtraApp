// This is the first file that ReactNative will run when it starts up.
// If you use Expo (`yarn expo:start`), the entry point is ./App.js instead.
// Both do essentially the same thing.

import App from "./app/app.tsx"
import React from "react"
import { AppRegistry } from "react-native"
import RNBootSplash from "react-native-bootsplash"
import {decode, encode} from 'base-64'


if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}


function IgniteApp() {
  return <App hideSplashScreen={RNBootSplash.hide} />
}

AppRegistry.registerComponent("PanettoneEtra", () => IgniteApp)
export default App
