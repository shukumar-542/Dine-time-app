import { router } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/dinetimelogo.png";
import frame from "../assets/images/Frame.png";
import "../global.css";
export default function Index() {
  return (
    <SafeAreaView className={`bg-[#242424]`}>
      <StatusBar barStyle={"light-content"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: 300, height: 300 }} />
          <View className="w-3/4">
            <Pressable
              onPress={() => router.push("/signup")}
              className="bg-[#f49b33] text-black p-2 rounded-md "
            >
              <Text className="text-center  text-xl">Sign Up</Text>
            </Pressable>

            <Pressable
              onPress={() => router.push("/home")}
              className="border my-2  border-[#f49b33] p-2 rounded-md "
            >
              <Text className="text-center text-[#f49b33]  text-xl">
                Guest User
              </Text>
            </Pressable>
          </View>
          <Text className="text-white flex flex-row items-center justify-center my-5">
            <View className="border-b-2 border-[#f49b33] w-24" />
           {" "} Or{" "}
            <View className="border-b-2 border-[#f49b33] w-24" />
          </Text>
          <Pressable
            className="flex flex-row items-center gap-2  "
            onPress={() => router.push("/signin")}
          >
            <Text className="text-white ">Already have account ?</Text>
            <Text className="text-[#f49b33] text-xl">Signin</Text>
          </Pressable>
        </View>
        <View className="flex-1">
          <Image source={frame} className="w-full h-full"  resizeMode="contain" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
