import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <LinearGradient style={styles.container} colors={["#ffffff", "#cceff9"]}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
