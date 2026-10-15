import { SafeAreaView } from "react-native-safe-area-context";
import { Image , StyleSheet } from "react-native";
import Logo from "../../assets/logo.png";

export default function SplashScreen() {
  return (
    <>
      <SafeAreaView style={style.container}>
        <Image style={style.logotipo} source={Logo}/>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#8D0DE3",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logotipo: {
    width: 250,
    height: 250
  }
});
