import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen.js";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Screen
          name="Home"
          componant={HomeScreen}
          option={{ title: "Welcome" }}
        />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 20,
    borderTopWidth: 150,
    borderColor: "blue",
  },
  buttonOne: {
    backgroundColor: "grey",
    fontSize: 30,
    padding: 50,
    borderRadius: 30,
  },
});
