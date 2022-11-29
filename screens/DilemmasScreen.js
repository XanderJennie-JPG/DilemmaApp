import { Image, Text, StyleSheet, View } from "react-native";
import React from "react-native";
import { useState } from "react";
import Container from "../components/Container";
import { TouchableOpacity } from "react-native";
import GlobalStyle from "../components/GlobalStyle";

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
});
