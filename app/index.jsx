import { StyleSheet, Text, View } from "react-native";
import "../global.css";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text  className="text-green-400">Edit app/index.tsx to edit this screen sfgsaf.</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  text : {
    color : 'red'
  }
})