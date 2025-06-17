import { BlurView } from "expo-blur";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import banner from "../../assets/images/homeBanner.png";
import { restaurants } from "../../store/resturant";
const home = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity className="bg-[#5f5f5f] max-h-64 max-w-xs mx-4 p-4 rounded-md shadow-md">
      <Image
        resizeMode="cover"
        source={{ uri: item.image }}
        className="h-28 mt-2 mb-1 rounded-md"
      />
      <Text className="text-white text-lg font-bold mb-2">{item.name}</Text>
      <Text className="text-white text-sm  mb-2">{item.address}</Text>
      <Text className="text-white text-sm  mb-2">Open - {item.opening} - Close : {item.closing}</Text>
    </TouchableOpacity>
  );
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
      <ScrollView stickyHeaderIndices={[0]}>
        <ImageBackground
          resizeMode="cover"
          className="my4 w-full h-52 bg-[#2b2b2b] items-center justify-center"
          source={banner}
        >
          <BlurView intensity={100} tint="dark" className="w-full p-4">
            <Text className="text-center text-3xl font-bold text-white">
              Dine with your family
            </Text>
          </BlurView>
        </ImageBackground>

        <View className="mb-4">
          {restaurants.length > 0 ? (
            <FlatList
              data={restaurants}
              renderItem={renderItem}
              horizontal
              contentContainerStyle={{ padding: 16 }}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
            />
          ) : (
            <ActivityIndicator animating color={"#fb9b33"} />
          )}
        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
