import React from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const Container = ({ children }) => {
  return (
    <LinearGradient colors={["#ffffff", "#cceff9"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default Container;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 10,
  },
});
