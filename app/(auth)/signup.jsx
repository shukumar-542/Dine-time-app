import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import frame from "../../assets/images/Frame.png";
const Signup = () => {
  return (
    <SafeAreaView className={`bg-[#242424]`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: 300, height: 300 }} />
          <Text className="text-lg text-center text-white mb-10 font-bold">
            Let's get you started
          </Text>
          
        </View>
        <View className="flex-1">
          <Image
            source={frame}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>
        <Pressable
          onPress={() => router.push("/home")}
          className="bg-[#f49b33] text-black p-2 rounded-md "
        >
          <Text className="text-center  text-xl">Sign Up</Text>
        </Pressable>

        <Pressable
          className="flex flex-row items-center justify-center gap-2  "
          onPress={() => router.push("/signin")}
        >
          <Text className="text-white ">Already have account ?</Text>
          <Text className="text-[#f49b33] text-xl">Signin</Text>
        </Pressable>
        <StatusBar barStyle={"light-content"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
