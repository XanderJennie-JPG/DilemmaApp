import { React, TouchableOpacity, Image, Text, StyleSheet, View} from "react-native";
import { useState } from "react";
import Container from "../components/Container";
import GlobalStyle from "../components/GlobalStyle";
import QuizSet from "../components/QuizSet"

const DilemmasScreen = ({ navigation: { goBack } }) => {
  const [count, setCount] = useState(1);
  return (
    <Container>
      <View style={styles.rowone}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image source={require("../assets/Back-arrow.png")} />
        </TouchableOpacity>
        <Text style={[GlobalStyle.CustomFont, { alignSelf: "center" }]}>
          Dilemma{" "}
          <Text style={[GlobalStyle.CustomFontBold, { fontSize: 30 }]}>
            {count}/10
          </Text>
        </Text>
      </View>
      <View style={[styles.box, styles.shadow]} blurRadius={8.5}>
        <View style={[styles.styleA]}>
          <Text style={[styles.ButtonText, styles.question, { marginTop: 25 }]}>
            q
          </Text>
          <TouchableOpacity
            style={[styles.Button, styles.shadow, { marginTop: 20 }]}
          >
            <Text style={[styles.ButtonText, { left: 5 }]}>a</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Button, styles.shadow]}>
            <Text style={[styles.ButtonText, { left: 5 }]}>b</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Button, styles.shadow]}>
            <Text style={[styles.ButtonText, { left: 5 }]}>c</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default DilemmasScreen;

const styles = StyleSheet.create({
  rowone: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dilemmatext: {
    fontSize: 30,
  },
  bgmiddle: {
    backgroundColor: "rgba(255,255,255,0.15)",
    height: 575,
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
  ButtonText: {
    fontSize: 15,
    color: "#134392",
  },
  styleA: {
    alignContent: "center",
    alignItems: "center",
    flex: 1,
  },
  Button: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    flexDirection: "row",
    width: 300,
    height: 95,
    marginTop: 20,
    alignItems: "center",
    alignSelf: "flex-end",
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
  box: {
    opacity: 1,
    backgroundColor: "#cceff9",
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
    width: 360,
    height: 580,
    alignSelf: "center",
    marginTop: 5,
  },
  question: {
    textAlign: "left",
    lineHeight: 22,
    fontSize: 18,
    width: 275,
    height: 200,
  },
});
