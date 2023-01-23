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
import PrivacyPolicyText from "../components/PrivacyPolicyText";

const PrivacyPolicy = ({ navigation: { goBack, navigate } }) => {
  return (
    <Container>
      <TopLogo />
      <View>
        <TouchableOpacity onPress={() => goBack()}>
          <Image source={require("../assets/Back-arrow.png")} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={[styles.header1, { marginTop: 10 }]}>
          Privacy Policy Dilemma app
        </Text>
      </View>
      <SafeAreaView style={[{ alignItems: "center", flex: 1, marginTop: 10 }]}>
        <ScrollView style={styles.scrollView}>
          <PrivacyPolicyText />
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
    maxHeight: "80%",
  },
});
