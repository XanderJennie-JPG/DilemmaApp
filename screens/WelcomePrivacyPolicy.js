import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { React, useState } from "react";
import Container from "../components/Container";
import TopLogo from "../components/TopLogo";
import Checkbox from "expo-checkbox";
import Ionicons from "@expo/vector-icons/Ionicons";
import GlobalStyle from "../components/GlobalStyle";
import PrivacyPolicyText from "../components/PrivacyPolicyText";

const WelcomePrivacyPolicy = ({ navigation: { goBack, navigate } }) => {
  const [isChecked, setChecked] = useState(false);

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
        <Text
          style={[
            GlobalStyle.CustomFont,
            { fontWeight: "bold", marginTop: "auto" },
          ]}
        >
          Gaat u hiermee akkoord?
        </Text>
      </SafeAreaView>
      {isChecked === true ? (
        <View
          style={{
            marginTop: "auto",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <TouchableOpacity
            style={styles.nextButton}
            disabled={isChecked === false}
            onPress={() => {
              navigate("ChooseDepartment");
            }}
          >
            <Ionicons
              name="arrow-forward-sharp"
              style={{ paddingLeft: 3, fontSize: 30, color: "#134392" }}
            ></Ionicons>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Checkbox
          style={[styles.checkbox, { alignSelf: "center" }]}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#4630EB" : undefined}
        />
      )}
    </Container>
  );
};

export default WelcomePrivacyPolicy;

const styles = StyleSheet.create({
    TextBetween: {
        marginBottom: 20,
      },
  nextButton: {
    borderRadius: 125,
    backgroundColor: "#ffffff",
    height: 100,
    width: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nextButtonText: {
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#134392",
  },
  checkbox: {
    margin: 8,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
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
