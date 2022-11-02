import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Container from "../components/Container";
import Datum from "../components/Datum";

const HomeScreen = ({ navigation }) => (
  <Container>
    <View>
      <Text>Goedemiddag, {"\n"}</Text>
    </View>
    <View>
      <Text>
        Het is vandaag{"\n"}
        <Datum />
      </Text>
    </View>
    <View>
      <Text>Wij hebben het dilemma spel {"\n"} geupdate op</Text>
    </View>
    <View>
      <TouchableOpacity>
        <Text style={[styles.Button]}>Begin het dilemma spel</Text>
      </TouchableOpacity>
    </View>
  </Container>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    overflow: "hidden",
    backgroundColor: "#ffffff",
    borderRadius: 20,
  },
});
