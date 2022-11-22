import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from "react-native";
import React from "react-native";
import Container from "../components/Container";
import Datum from "../components/Datum";
import GlobalStyle from "../components/GlobalStyle";
import Ionicons from "@expo/vector-icons/Ionicons";

const user = "Placeholder";

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Text style={[GlobalStyle.CustomFont, styles.Header, styles.TextBetween]}>
        Goedemiddag, {"\n"}
        {user}
      </Text>
      <Text style={[GlobalStyle.CustomFont, styles.TextBetween]}>
        Het is vandaag{"\n"}
        <Datum />
      </Text>
      <Text style={[GlobalStyle.CustomFont]}>
        Wij hebben het dilemma spel {"\n"}geupdate op{" "}
        <Text style={{ fontWeight: "bold" }}>
          <Datum />
        </Text>
      </Text>

      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 75,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          resizeMode="contain"
          source={require("../assets/Medtap.png")}
        ></Image>
      </View>
      <View
        style={{
          position: "absolute",
          top: 275,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={[styles.Button, styles.shadow, { flexDirection: "row" }]}
          onPress={() => navigation.navigate("Uitleg")}
        >
          <Text style={[styles.ButtonText, GlobalStyle.CustomFontBold]}>
            Begin het dilemma spel
          </Text>
          <Ionicons
            name="arrow-forward-sharp"
            size="20"
            style={{ paddingLeft: 3 }}
          ></Ionicons>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  TextBetween: {
    marginBottom: 18,
  },
  SquareBox: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 20,
    border: 1,
  },
  Button: {
    backgroundColor: "#ffffff",
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  Header: {
    fontSize: 30,
  },
  ButtonText: {
    fontSize: 15,
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 4,
  },
});
