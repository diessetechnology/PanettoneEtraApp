import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  Dimensions,
  FlatList,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import MapView, { Marker } from "react-native-maps"
import { moderateScale } from "../utils/scale"
import { RFPercentage } from "react-native-responsive-fontsize"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface PuntiVenditaScreenProps extends NativeStackScreenProps<AppStackScreenProps<"PuntiVendita">> {}

export const PuntiVenditaScreen: FC<PuntiVenditaScreenProps> = observer(function PuntiVenditaScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const [selectedId, setSelectedId] = useState<string>();

  type ItemData = {
    title: string;
    description: string;
  };

  const DATA: ItemData[] = [
    {
      title: "Cremeria Vienna - Gandoli",
      description: "Gandoli, SP100, 1182 74020 (TA)"
    },
    {
      title: "Cremeria Vienna - Taranto Centro",
      description: "Via d’Aquino, 120 74123 Taranto (TA)"
    },
    {
      title: "Cremeria Vienna/Etra Lievitati Mazzuto - Lama",
      description: "Via Tre Fontane, 22a 74122 Taranto (TA)"
    },
    {
      title: "Cremeria Vienna - Taranto (Corso Italia)",
      description: "Corso Italia, 271 74121 Taranto (TA)"
    },
    {
      title: "Cremeria Vienna - San Giorgio Jonico",
      description: "Via d’Aquino, 120 - 74123 Taranto (TA)"
    },
    {
      title: "Cremeria Vienna - Nea smirni",
      description: "Leof. El. Venizelou 52 - 171 22 Nea Smirni, Atene (Grecia)"
    },
    {
      title: "Cremeria Vienna - Monteparano",
      description: "Piazza Castello, 13 - 74020 Monteparano (TA)"},
  ];

  type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
  };

  const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
    <View style={{marginTop: 15}}>
      <Text style={[styles.title, {color: "black", textAlign: "center"}]}>{item.title}</Text>
      <Text style={[styles.description, {color: "black", textAlign: "center"}]}>{item.description}</Text>
    </View>
  );

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };



  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={{flex: 1}} preset="fixed">
      <MapView style={{ height: moderateScale(250, 0.5) , width: Dimensions.get("window").width}} initialRegion={{latitude: 311.6666564941406, longitude: 87.66665649414062, latitudeDelta: 0.0122, longitudeDelta: 0.0121}}>
        <Marker
          coordinate={{latitude: 40.3840607,longitude: 17.2986333}}
          image={require("../../assets/images/map.png")}
          title={"Cremeria Vienna - Gandoli"}
          description={"Gandoli, SP100, 1182 74020 (TA)"}
        />
        <Marker
          coordinate={{latitude: 40.471556,longitude: 17.24052}}
          image={require("../../assets/images/map.png")}
          title={"Cremeria Vienna - Taranto Centro"}
          description={"Via d’Aquino, 120 74123 Taranto (TA)"}
        />
        <Marker
          coordinate={{latitude: 40.4123672,longitude: 17.2442173}}
          image={require("../../assets/images/map.png")}
          title={"Cremeria Vienna/Etra Lievitati Mazzuto - Lama"}
          description={"Via Tre Fontane, 22a 74122 Taranto (TA)"}
        />
        <Marker
          coordinate={{latitude: 40.454279,longitude: 17.2601943}}
          image={require("../../assets/images/map.png")}
          title={"Cremeria Vienna - Taranto (Corso Italia)"}
          description={"Corso Italia, 271 74121 Taranto (TA)"}
        />
        <Marker
          coordinate={{latitude: 40.4564514,longitude: 17.3868475}}
          image={require("../../assets/images/map.png")}
          title={"Cremeria Vienna - San Giorgio Jonico"}
          description={"Via d’Aquino, 120 74123 Taranto (TA)"}
        />
        <Marker
          coordinate={{latitude: 40.4448581,longitude: 17.4151081}}
          image={require("../../assets/images/map.png")}
          title={"Cremeria Vienna - Monteparano"}
          description={"Piazza Castello, 13 - 74020 Monteparano (TA)"}
        />
        <Marker
          coordinate={{latitude: 40.4448581,longitude: 17.4151081}}
          image={require("../../assets/images/map.png")}
          title={"Cremeria Vienna - Massafra"}
          description={"Corso Roma, 120/122 - 74016 Massafra (TA)"}
        />
        <Marker
          coordinate={{latitude: 40.4448581,longitude: 17.4151081}}
          image={require("../../assets/images/map.png")}
          title={"Cremeria Vienna - Triggiano"}
          description={"Via Dante Alighieri, 143 - 70019 Triggiano (BA)"}
        />
        <Marker
          coordinate={{latitude: 37.9437658,longitude: 23.7137791}}
          image={require("../../assets/images/map.png")}
          title={"Cremeria Vienna - Nea smirni"}
          description={"Leof. El. Venizelou 52 - 171 22 Nea Smirni, Atene (Grecia)"}
        />
      </MapView>
      <ScrollView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </ScrollView>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 20,
  },
  title: {
    fontSize: RFPercentage(2.2),
  },
  description: {
    fontSize: RFPercentage(1.7),
  },
});
