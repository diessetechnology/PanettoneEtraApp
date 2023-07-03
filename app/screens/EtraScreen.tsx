import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import WebView from "react-native-webview"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface EtraScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Etra">> {}

export const EtraScreen: FC<EtraScreenProps> = observer(function EtraScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <WebView source={{uri: "https://panettoneetra.com/"}} allowsInlineMediaPlayback={true} containerStyle={{width: "100%",height: "100%"}}></WebView>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
