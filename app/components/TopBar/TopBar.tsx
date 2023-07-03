import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native"
import ResponsiveImage from 'react-native-responsive-image';
import Vector from '../../../assets/vectors/Vector.svg';
import Group1 from '../../../assets/vectors/Group1.svg';
import Cart1SvgrepoCom1 from '../../../assets/vectors/Cart1SvgrepoCom1.svg';
import Cart1SvgrepoCom2 from '../../../assets/vectors/Cart1SvgrepoCom2.svg';
import UserSvgrepoCom1 from '../../../assets/vectors/UserSvgrepoCom1.svg';
import theme from './theme';
const h = Dimensions.get('window').height / 100;
export function TopBar() {
  return (
    <SafeAreaView style={styles.root}>
      <TouchableOpacity style={{alignItems: "center"}}>
      <ResponsiveImage
        source={require("../../../assets/images/user.png" )}
        initWidth="60"
        initHeight="60"
      />
      </TouchableOpacity>
      <ResponsiveImage
        source={require("../../../assets/images/etra-logo.png" )}
        initWidth="130"
        initHeight="130"
      />
      <TouchableOpacity style={{alignItems: "center"}}>
      <ResponsiveImage
        source={require("../../../assets/images/cart.png" )}
        initWidth="80"
        initHeight="80"
      />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flexShrink: 0,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: "black",
    height: 23*h
  },
  group1: {
    width: 105.93,
    height: 113.972,
    flexShrink: 0,
  },
  cart1SvgrepoCom1: {
    width: 70,
    height: 70,
    flexShrink: 0,
    boxShadow: '0px 4px 4px 0px #C39B2D inset',
  },
  cart1SvgrepoCom2: {
    width: 70,
    height: 70,
    flexShrink: 0,
    boxShadow: '0px 4px 4px 0px #C39B2D inset',
  },
  userSvgrepoCom1: {
    width: 58,
    height: 58,
    flexShrink: 0,
    boxShadow: '0px 4px 4px 0px #C39B2D inset',
  },
});
