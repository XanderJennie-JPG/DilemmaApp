import {
  React,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from "react-native";
import Container from "../components/Container";
import Datum from "../components/Datum";
import GlobalStyle from "../components/GlobalStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import TopLogo from "../components/TopLogo";

const user = "Placeholder";

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <TopLogo />
      <View style={{top: 30}}>
        <Text
          style={[GlobalStyle.CustomFont, styles.Header]}
        >
          Goedemiddag, {"\n"}
          {user}
        </Text>
        <Text style={[GlobalStyle.CustomFont]}>
          Wij hebben het dilemma spel {"\n"}geupdate op{" "}
          <Text style={[GlobalStyle.CustomFontBold]}>
            <Datum />.
          </Text>
        </Text>
      </View>
      <View style={styles.center}>
      <ImageBackground
        style={[styles.bgmiddle, { marginTop: 55 }]}
        blurRadius={8.5}
      >
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Image
            source={require("../assets/Medtap.png")}
            resizeMode="cover"
            style={{ width: 300, marginTop: 20 }}
          ></Image>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[styles.Button, styles.shadow]}
            onPress={() => navigation.navigate("Uitleg")}
          >
            <Text style={[styles.ButtonText, GlobalStyle.CustomFontBold]}>
              Begin het dilemma spel
            </Text>
            <Ionicons
              name="arrow-forward-sharp"
              style={{ paddingLeft: 3 }}
            ></Ionicons>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bgmiddle: {
    backgroundColor: "rgba(255,255,255,0.15)",
    height: 400,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    borderRadius: 20,
    shadowColor: "rgba(31,38,135,0.37)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
  },
  Button: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    flexDirection: "row",
    width: 250,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  Header: {
    fontSize: 29,
    marginBottom: 5,
  },
  ButtonText: {
    fontSize: 15,
    paddingVertical: 30,
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
});
