import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import Container from "../components/Container";
import TopLogo from "../components/TopLogo";

const PrivacyPolicy = ({ navigation: { goBack, navigate } }) => {
  return (
    <Container>
      <TopLogo />
      <View>
      <TouchableOpacity onPress={() => goBack()}>
          <Image
            source={require("../assets/Back-arrow.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={[styles.header1, {marginTop: 10}]}>
          Privacy Policy Dilemma app
        </Text>
      </View>
      <SafeAreaView style={[{ alignItems: "center", flex: 1, marginTop: 10}]}>
        <ScrollView style={styles.scrollView}>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
          Wat doen we met uw gegevens?
          </Text>
          <Text style={styles.text}>
          Als u meedoet met de dilemma app dan geeft u ook toestemming om uw gegevens te verzamelen, gebruiken en bewaren voor onderzoeksdoeleinden.{"\n"}
          </Text>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
          Welke gegevens bewaren we?{"\n"}
          </Text>
          <Text style={[styles.text]}>
          We bewaren deze gegevens{"\n"}
          - Uw zelfgekozen gebruikersnaam gekoppeld aan uw afdeling{"\n"}
          - Uw antwoorden op de dilemmas{"\n"}
          </Text>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
          Waarom verzamelen, gebruiken en bewaren we uw gegevens?{"\n"}
          </Text>
          <Text style={[styles.text]}>
          We verzamelen, gebruiken en bewaren uw gegevens om de vraag van het onderzoek “hoe gaan medewerkers om met dilemmas op het gebied van informatiebeveiliging en privacy?” te kunnen beantwoorden.{"\n"}
          Hoe beschermen we uw privacy?{"\n"}
          Om uw privacy te beschermen slaan we uw gegevens op op een afgeschermde server van de Haagse Hogeschool, waartoe alleen de onderzoekers toegang hebben. In rapporten en publicaties over het onderzoek wordt niet op persoonsniveau gerapporteerd zodat niemand kan terughalen dat het over u ging. 
          </Text>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    top: 5,
    right: 1,
  },
  hhsLogo: {
    opacity: 1,
    position: "absolute",
    width: 175,
    height: 50,
    right: 6,
    top: 105,
  },
  hmcLogo: {
    opacity: 1,
    position: "absolute",
    width: 175,
    height: 50,
    right: 6,
    top: 50,
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
    fontSize: 18,
    textAlign: "center",
    lineHeight: 27,
  },
  scrollView: {
    maxHeight: '80%',
  },
});
