import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react-native";
import Container from "../components/Container";
import Datum from "../components/Datum";
import GlobalStyle from "../components/GlobalStyle";

const user = "Placeholder";

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <View>
        <Text style={[GlobalStyle.CustomFont, styles.Header]}>
          Goedemiddag, {"\n"}
          {user}
        </Text>
      </View>
      <View>
        <Text style={[GlobalStyle.CustomFont]}>
          Het is vandaag{"\n"}
          <Datum />
        </Text>
      </View>
      <View>
        <Text style={[GlobalStyle.CustomFont]}>
          Wij hebben het dilemma spel {"\n"}geupdate op{" "}
          <Text style={{ fontWeight: "bold" }}>
            <Datum />
          </Text>
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={[styles.Button, GlobalStyle.CustomFont]}>
            Begin het dilemma spel
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    fontSize: 20,
  },
  Header: {
    fontSize: 30,
  },
});
