import { Image, Text } from "react-native";
import React from "react-native";
import Container from "../components/Container";
import TopLogo from "../components/TopLogo";
import { TouchableOpacity } from "react-native";

const DilemmasScreen = ({ navigation: { goBack } }) => {
  return (
    <Container>
      <TopLogo />
      <TouchableOpacity onPress={() => goBack()}>
        <Image source={require("../assets/Back-arrow.png")} />
      </TouchableOpacity>
      <Text>Hi</Text>
    </Container>
  );
};

export default DilemmasScreen;
