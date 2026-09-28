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

          <Image source={uri} />

          </View>



          <View style={style.containerCircles}>
            <View style={style.circle}>
                <Text>Texto</Text>
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
    padding: 80,
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
    gap: 15,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#123456",
    height: 700,
  },
  circle: {
    height: 80,
    width: 80,
    borderRadius: 200,
    backgroundColor: "#f0f1f5",
  },
});
