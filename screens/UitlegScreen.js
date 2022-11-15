import { StyleSheet, Text, View } from "react-native";
import React from "react-native";
import Container from "../components/Container";

const UitlegScreen = ({ navigation }) => {
  return (
    <Container>
      <View style={styles.container}>
        <Text>Uitleg</Text>
      </View>
    </Container>
  );
};

export default UitlegScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
