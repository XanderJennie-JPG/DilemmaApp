import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Container from "../components/Container";

const WelcomeScreen = ({ navigation }) => {
  const [selected, setSelected] = React.useState("");

  return (
    <Container>
      <View>
        <Text style={[styles.header1, { marginTop: 50 }]}>
          Welkom op de Dilemma app{"\n"}
        </Text>
        <Text style={styles.text}>Deze app is mogelijk gemaakt door</Text>
      </View>
      <View>
        <Image style={styles.logos} source={require("../assets/HMCLogo.png")} />
        <Image
          style={[styles.logos, { marginTop: -225 }]}
          source={require("../assets/HaagseLogo.png")}
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={[styles.GaDoorButton, styles.shadow]}
          onPress={() => navigation.navigate("WelcomePrivacy")}
        >
          <Text style={styles.buttonText}>Volgende!</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  GaDoorButton: {
    opacity: 1,
    backgroundColor: "rgba(238, 246, 250, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "rgb(203,  221,  230)",
    shadowOpacity: 0.8392156862745098,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    width: 286,
    height: 50,
    alignSelf: "center",
  },
  header1: {
    fontSize: 25,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Montserrat",
    color: "rgba(19, 67, 146, 1)",
    textAlign: "center",
  },
  header2: {
    fontSize: 25,
    fontStyle: "normal",
    fontFamily: "Montserrat",
    color: "rgba(19, 67, 146, 1)",
    textAlign: "center",
  },
  text: {
    opacity: 1,
    color: "rgba(19, 67, 146, 1)",
    fontSize: 19,
    textAlign: "center",
    lineHeight: 27,
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  buttonText: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    flex: 1,
    textAlign: "center",
    color: "#134392",
  },
  logos: {
    resizeMode: "contain",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
});
