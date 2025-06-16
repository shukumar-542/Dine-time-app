import { BlurView } from "expo-blur";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import banner from "../../assets/images/homeBanner.png";
const home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#2b2b2b" }}>
      <View className="flex items-center">
        <View
          className={
            "bg-[#5f5f5f] w-11/12 rounded-lg shadow-lg justify-between items-center"
          }
        >
          <View className="flex flex-row items-center gap-2">
            <Text className="">Welcome to</Text>
            <Image resizeMode="cover" className="w-20 h-12" source={logo} />
          </View>
        </View>
      </View>
      <ScrollView>
        <ImageBackground
        resizeMode="cover"
        className="my4 w-full h-52 items-center justify-center"
        source={banner}
        >
          <BlurView intensity={100} tint="dark" className="w-full p-4">
            <Text className="text-center text-3xl font-bold text-white">Dine with your family</Text>
          </BlurView>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
