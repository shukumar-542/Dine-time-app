import { Image, ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/dinetimelogo.png";
import "../global.css";
export default function Index() {
  return (
    <SafeAreaView className={`bg-[#242424]`}>
      <StatusBar barStyle={"light-content"} />
      <ScrollView contentContainerStyle={{height : "100%"}}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{width : 300 , height : 300}} />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


