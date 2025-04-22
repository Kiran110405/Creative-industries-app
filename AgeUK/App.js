import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          margin: 50,
          backgroundColor: "#777",
          padding: 20,
          width: 250,
          borderRadius: 30,
        }}
      >
        <Button title="GAME">
          <Text>GAME</Text>
        </Button>
      </View>
      <View>
        <View
          style={{
            backgroundColor: "blue",
            width: 900,
            padding: 10,
            borderWidth: 3,
          }}
        >
          <Button title="Practice">
            <Text>Practice</Text>
          </Button>
        </View>
        <View
          style={{
            backgroundColor: "pink",
            width: 900,
            padding: 10,
            borderWidth: 3,
          }}
        >
          <Button title="Interactions">
            <Text>Interactions</Text>
          </Button>
        </View>
        <View
          style={{
            backgroundColor: "blue",
            width: 900,
            padding: 10,
            borderWidth: 3,
          }}
        >
          <Button title="Literacy">
            <Text>Literacy</Text>
          </Button>
        </View>
      </View>
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
