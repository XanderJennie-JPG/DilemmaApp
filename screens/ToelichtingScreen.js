import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Container from "../components/Container";
import TopLogo from "../components/TopLogo";
import ExplanationText from "../components/ExplanationText";

const ToelichtingScreen = ({ route, navigation: { goBack, navigate } }) => {
  let Patiëntenbelang = route.params?.Patiëntenbelang || 0;
  let Integriteit = route.params?.Integriteit || 0;
  let Informatiebeveiliging = route.params?.Informatiebeveiliging || 0;
  

  return (
    <Container>
      <TopLogo />
      <View style={styles.box}>
        <View>
          <Text style={[styles.header1, { top: 25 }]}>Toelichting</Text>
        </View>
        <View style={[{ alignItems: "center", top: 30 }]}>
          <ExplanationText
            score={Informatiebeveiliging}
            type="Informatiebeveiliging"
            style={styles.explanation}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.GaDoorButton,
          styles.shadow,
          { alignSelf: "flex-start" },
        ]}
        onPress={() => goBack()}
      >
        <Text style={styles.buttonText}>Terug</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default ToelichtingScreen;

const styles = StyleSheet.create({
  box: {
    opacity: 1,
    backgroundColor: "#FFFFFF",
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
    width: 370,
    height: 400,
    alignSelf: "center",
    top: 100,
  },
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
    width: 160,
    height: 40,
    marginTop: "auto",
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
  explanation: {
    left: 50,
    marginRight: 50,
    fontSize: 25,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Montserrat",
    color: "rgba(19, 67, 146, 1)",
    textAlign: "center",
  },
  text: {
    opacity: 1,

    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(19, 67, 146, 1)",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 27,

    top: 281.5,
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
  elevation: {
    elevation: 10, //original was 20
    shadowColor: "#52006A",
  },
  buttonText: {
    marginTop: 6,
    marginLeft: 6,
    fontSize: 20,
    flex: 1,
    textAlign: "center",
    color: "#134392",
  },
});
