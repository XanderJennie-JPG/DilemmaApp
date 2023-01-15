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

const AlgemeneVoorwaarden = ({ navigation: { goBack, navigate } }) => {
  return (
    <Container>
      <TopLogo />
      <View>
        <TouchableOpacity onPress={() => goBack()}>
          <Image source={require("../assets/Back-arrow.png")} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={[styles.header1, { top: 10 }]}>
          Algemene voorwaarden Dilemma app
        </Text>
      </View>
      <SafeAreaView style={[{ alignItems: "center", flex: 1, marginTop: 10 }]}>
        <ScrollView style={styles.scrollView}>
          <Text style={[styles.text, { marginTop: 10, fontWeight: "bold" }]}>
            Door deze app te gebruiken, gaat u akkoord met de volgende
            voorwaarden:{"\n"}
          </Text>
          <Text style={styles.text}>
            - U begrijpt dat de informatie die u verstrekt via de quizzen in
            deze app anoniem wordt vastgelegd en gebruikt voor
            onderzoeksdoeleinden.{"\n"}- U verstrekt deze informatie vrijwillig
            en stemt in met het gebruik ervan in onderzoek.{"\n"}- U begrijpt
            dat uw informatie vertrouwelijk wordt behandeld en dat uw
            anonimiteit wordt beschermd.{"\n"}- U begrijpt dat uw informatie
            samen met de informatie van andere gebruikers zal worden gebruikt en
            niet persoonlijk identificeerbaar zal zijn.{"\n"}- U erkent dat u
            ouder bent dan 13 jaar en wettelijk in staat bent om toestemming te
            geven.{"\n"}- We behouden ons het recht voor om deze algemene
            voorwaarden op elk moment en zonder voorafgaande kennisgeving te
            wijzigen.{"\n"}- Als u niet akkoord gaat met deze voorwaarden, dient
            u deze app niet te gebruiken.{"\n"}- Door deze app te gebruiken,
            gaat u akkoord met de hierboven beschreven voorwaarden.{"\n"}
          </Text>
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            Als u hiermee niet akkoord ben, moet u deze app van uw toestel
            verwijderen.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default AlgemeneVoorwaarden;

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
    maxHeight: "80%",
  },
});
