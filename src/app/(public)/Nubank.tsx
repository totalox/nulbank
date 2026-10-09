import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import * as Svg from "react-native-svg";
import icon from "../../assets/";
import iconTwo from "../../assets/";
import iconThree from "../../assets/";

export default function Nubank() {
  return (
    <>
      <SafeAreaView style={style.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {/* ALL-STACK "HEADER" */}
          <View style={style.header}>
            {/* Icon perfil left */}
            <View style={style.circlePerfil}>
              {/* IMPORTAR O SVG https://docs.expo.dev/versions/latest/sdk/svg/#svg */}
              {/* <Svg height="25" width="25">

              </Svg> */}
            </View>
            {/* Three icons right */}
            <View style={style.containerLoco}>
              <View style={style.circlePerfil}>
              <Image style={style.logotipo} source={icon} />                
              </View>
              <View style={style.circlePerfil}>
              <Image style={style.logotipo} source={iconTwo} />                
              </View>
              <View style={style.circlePerfil}>
              <Image style={style.logotipo} source={iconThree} />                
              </View>

            </View>
          </View>

          <View style={style.containerCircles}>
            <View style={style.circle}></View>
            <View style={style.circle}></View>
            <View style={style.circle}></View>
          </View>
          <View style={style.bgWhite}></View>
          <View style={style.lineGray}></View>
          <View style={style.bgWhiteSmaller}></View>
          <View style={style.lineGray}></View>
          <View style={style.bgWhite}></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  header: {
    backgroundColor: "#8b19d6",
    padding: 100,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  lineGray: {
    backgroundColor: "#d9d9d9",
    padding: 2,
  },
  bgWhiteSmaller: {
    backgroundColor: "#ffffff",
    padding: 180,
  },
  bgWhite: {
    backgroundColor: "#ffffff",
    padding: 0,
  },
  containerCircles: {
    gap: 6,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    height: 700,
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 200,
    backgroundColor: "#f0f1f5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 220,
    marginLeft: 20,
  },
  contentCircle: {},
  circlePerfil: {
    backgroundColor: "#d8d8d815",
    height: 50,
    width: 50,
    borderRadius: 50,
    top: -20,
    left: -80,
    justifyContent: "center",
    alignItems: "center",
  },
  containerLoco: {
    flexDirection: "row",
    gap: 15,
    width: 225,
    left: 120
  },
  logotipo: {
    width: 25,
    height: 25,
    backgroundColor: "red"
  }
});
