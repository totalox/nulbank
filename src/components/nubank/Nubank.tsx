import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function Nubank() {
  return (
    <>
      <SafeAreaView style={style.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={style.header}>
            <View style={style.circlePerfil}>
              <Image
                style={style.contentCirclePerfil}
                source={require("../../../assets/figurePerson.svg")}
              />
            </View>
            <View style={style.containerLoco}>
              <View style={style.circlePerfil}>
                <Image style={style.contentCirclePerfil} />
              </View>
              <View style={style.circlePerfil}>
                <Image style={style.contentCirclePerfil} />
              </View>
              <View style={style.circlePerfil}>
                <Image style={style.contentCirclePerfil} />
              </View>
            </View>
          </View>

          <View style={style.containerCircles}>
            <View style={style.circle}>
              <Image style={style.contentCircle}></Image>
            </View>
            <View style={style.circle}>
              <Image style={style.contentCircle}></Image>
            </View>
            <View style={style.circle}>
              <Image style={style.contentCircle}></Image>
            </View>
            <View style={style.circle}>
              <Image style={style.contentCircle}></Image>
            </View>
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
    backgroundColor: "#123456",
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
  contentCircle: {
    display: "none",
  },
  circlePerfil: {
    backgroundColor: "#d8d8d815",
    height: 80,
    width: 80,
    borderRadius: 50,
    top: -30,
    left: -70,
    justifyContent: "center",
    alignItems: "center",
  },
  contentCirclePerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  containerLoco: {
    flexDirection: "row",
    gap: 10,
  },
});
