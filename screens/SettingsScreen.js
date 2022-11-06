import { StyleSheet, Text, View } from "react-native";
import React from "react-native";
import Container from "../components/Container";

const SettingsScreen = ({ navigation }) => {
  return (
    <Container>
      <View style={styles.container}>
        <Text>Instellingen</Text>
      </View>
    </Container>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
