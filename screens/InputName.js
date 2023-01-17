import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Container from "../components/Container";
import TopLogo from "../components/TopLogo";
import { auth, SignInAnon } from "../firebase";
import { createGuid } from "../components/CreateGuid";

const InputName = ({ navigation }) => {
  const [username, setUsername] = useState("");

  const handleName = async () => {
    if (!username.trim()) {
      alert("Vul een naam in");
    } else {
      SignInAnon.then(() => {
        console.log("Anonymous Sign In Successful");
        console.log(username);
        AsyncStorage.setItem("hasSeenWelcome", "true");
        AsyncStorage.setItem("username", username);
        createGuid();
        navigation.navigate("CommonScreens");
        
      }).catch((error) => {
        console.log(error);
      });
    }
  };
  return (
    <Container>
      <TopLogo />
      <View>
        <Text style={styles.header1}>Dilemma app</Text>
      </View>
      <View style={[styles.InputContainer, styles.elevation]}>
        <Text style={styles.text}>
          Vul een naam in{"\n"}die u wilt gebruiken voor de app
        </Text>
      </View>
      <TextInput
        style={[styles.input, styles.shadow]}
        placeholder="Vul hier een naam in..."
        onChangeText={(text) => setUsername(text)}
      />
      <TouchableOpacity
        style={[styles.GaDoorButton, styles.shadow, styles.elevation]}
        onPress={handleName}
      >
        <Text style={styles.buttonText}>Ga door naar de app</Text>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/ArrowRight.png")}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default InputName;

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
    height: 47,
    left: 50,
    top: 600,
    flexDirection: "row",
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
    top: 150,
  },
  text: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(19, 67, 146, 1)",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 27,
    width: 276,
    height: 60,
    top: 281.5,
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    opacity: 0.36000001430511475,
    backgroundColor: "EEF6FA",
    fontSize: 18,
    lineHeight: 27,
    borderRadius: 20,
    top: 350,
    opacity: 1,
    backgroundColor: "rgba(238, 246, 250, 1)",
    shadowColor: "rgb(203,  221,  230)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    width: 285,
    alignSelf: "center",
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
  InputContainer: {
    alignItems: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  buttonText: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    flex: 1,
    textAlign: "center",
    color: "#134392",
  },
});