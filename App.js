import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Hello World</Text>
      </View>

      <View style={styles.body}>
        <Text>Worthy is your name Jesus</Text>
        <Text>Worthy is your name Jesus</Text>
        <Text>Worthy is your name Jesus</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "yellow",
    padding: "20",
    margin: "10",
  },
  body: {
    backgroundColor: "pink",
    padding: "20",
  },
});
