import { observer } from "mobx-react-lite"
import React, { FC, useEffect } from "react"
import {
  Image,
  ImageStyle,
  ScrollView,
  TextStyle,
  View,
  ViewStyle,
  StyleSheet,
  Text,
  ViewProps,
  Button,
} from "react-native"
import { isRTL } from "../i18n"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { useHeader } from "../utils/useHeader"
import { TopBar } from "../components/TopBar"
import { BottomBar } from "../components/BottomBar"
import { AppStackScreenProps } from "../navigators"
import { Section,Block,Grid } from "react-native-responsive-layout"
import { ApiKeys } from "../utils/apikeys"

import { Card } from "@ui-kitten/components"
import axios from "axios"


const welcomeLogo = require("../../assets/images/logo.png")
const welcomeFace = require("../../assets/images/welcome-face.png")

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}



export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
) {

  const [products, setProducts] = React.useState([])
  var lock = 1
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  const downloadData = () => {
    axios({
      "method": "GET",
      "url": "https://panettoneetra.com/wp-json/wc/v2/products",
      "auth": {
        "username": ApiKeys.WOO_CLIENT_KEY,
        "password": ApiKeys.WOO_SECRET_KEY
      }
    }).then(response => {
      setProducts(response.data)
    })
    }

  useEffect(() => {
    downloadData()
  }, [lock])


    const Header = (props: ViewProps): React.ReactElement => (
      <View {...props}>
        <Text category='h6'>
          Maldives
        </Text>
        <Text category='s1'>
          By Wikipedia
        </Text>
      </View>
    );

    const Footer = (props: ViewProps): React.ReactElement => (
      <View
        {...props}
        // eslint-disable-next-line react/prop-types
        style={[props.style, styles.footerContainer]}
      >
        <Button
          style={styles.footerControl}
          size='small'
          status='basic'
          title={"Aggiungi al Carrello"}>
        </Button>
      </View>
    );

  return (
    <View style={$container}>
      <ScrollView>
        <Grid>
        <Section>
          <Block xsSize="1/1" smSize="1/2">
            <Card
              style={styles.card}
              header={Header}
              footer={Footer}
            >
              <Text>

              </Text>
            </Card>
          </Block>
          <Block xsSize="1/1" smSize="1/2">
            <View style={[styles.element, { backgroundColor: '#b2d4fe' }]} />
          </Block>
          <Block xsSize="1/1" smSize="1/2">
            <View style={[styles.element, { backgroundColor: '#a1cbfd' }]} />
          </Block>
        </Section>
        </Grid>
      </ScrollView>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "43%",
  backgroundColor: colors.palette.neutral100,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
  justifyContent: "space-around",
}
const $welcomeLogo: ImageStyle = {
  height: 88,
  width: "100%",
  marginBottom: spacing.xxl,
}

const $welcomeFace: ImageStyle = {
  height: 169,
  width: 269,
  position: "absolute",
  bottom: -47,
  right: -80,
  transform: [{ scaleX: isRTL ? -1 : 1 }],
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
}

const styles = StyleSheet.create({
  element: {
    height: 100,
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});