import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import ResponsiveImage from 'react-native-responsive-image';
import Vector from '../../../assets/vectors/Vector.svg';
import Group1 from '../../../assets/vectors/Group1.svg';
import Cart1SvgrepoCom1 from '../../../assets/vectors/Cart1SvgrepoCom1.svg';
import Cart1SvgrepoCom2 from '../../../assets/vectors/Cart1SvgrepoCom2.svg';
import UserSvgrepoCom1 from '../../../assets/vectors/UserSvgrepoCom1.svg';
import theme from './theme';
import { RFPercentage } from "react-native-responsive-fontsize"
import { useNavigation } from "@react-navigation/native"

const h = Dimensions.get('window').height / 100;

export function BottomBar() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.root}>
      <TouchableOpacity onPress={() => navigation.navigate("Etra")} style={{alignItems: "center"}}>
        <ResponsiveImage
        source={require("../../../assets/images/etra-monogram.png" )}
        initWidth="50"
        initHeight="50"
      />
        <Text style={{color: "white", fontSize: RFPercentage(1.6)}}>Di più su Etra</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate("PuntiVendita")} style={{alignItems: "center"}}>
        <ResponsiveImage
          source={require("../../../assets/images/map.png" )}
          initWidth="50"
          initHeight="50"
        />
        <Text style={{color: "white", fontSize: RFPercentage(1.6)}}>Punti Vendita</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems: "center"}}>
        <ResponsiveImage
          source={require("../../../assets/images/altro.png" )}
          initWidth="50"
          initHeight="50"
        />
        <Text style={{color: "white", fontSize: RFPercentage(1.6)}}>Info sull'app</Text>
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
    height: 15*h
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
