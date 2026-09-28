import { SafeAreaView } from "react-native-safe-area-context";
import { Image , StyleSheet } from "react-native";

export default function SplashScreen() {
  return (
    <>
      <SafeAreaView style={style.container}>
        <Image style={style.logotipo} source={{ uri: "https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-2.png"}}/>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#820AD1",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logotipo: {
    width: 250,
    height: 250
  }
});
