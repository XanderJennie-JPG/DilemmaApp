import { React, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Switch } from "react-native";
import Container from "../components/Container";
import { DonutChart } from "react-native-circular-chart";
import TopLogo from "../components/TopLogo";

const ResultScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const disabledData = [
    { name: "Privacy", value: 30, color: "blue" },
    { name: "Integriteit", value: 20, color: "green" },
    { name: "Collegialiteit", value: 15, color: "red" },
  ];
  const enabledData = [
    { name: "Privacy", value: 50, color: "blue" },
    { name: "Integriteit", value: 10, color: "green" },
    { name: "Collegialiteit", value: 10, color: "red" },
  ];
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <Container>
      <TopLogo />
      <View style={styles.box}>
        <View>
          <Text style={[styles.header1, { top: 25 }]}>Resultaten</Text>
        </View>
        <View style={[{ alignItems: "center" }]}>
          <Text style={[styles.text, { top: 30 }]}>
            Hier kunt u uw eigen score en de algemene score van uw afdeling
            bekijken
          </Text>
        </View>
        <View style={{ alignSelf: "flex-start" }}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{ alignSelf: "center" }}>
          <DonutChart
            data={isEnabled ? enabledData : disabledData}
            strokeWidth={15}
            radius={100}
            containerWidth={500}
            containerHeight={500}
            type="butt"
            startAngle={-115}
            endAngle={115}
            animationType="slide"
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.GaDoorButton, styles.shadow, { alignSelf: "flex-end" }]}
        onPress={() => navigation.navigate("Toelichting")}
      >
        <Text style={styles.buttonText}>Toelichting</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  sectionWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgray",
    backgroundColor: "#ffffff",
    marginVertical: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
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
    height: 525,
    alignSelf: "center",
    top: 65,
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
    top: 75,
  },
  DropDown: {
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
    height: 59,
    left: 50,
    top: 400,
  },
  DropDownText: {
    fontSize: 25,
    textAlign: "center",
  },
  DropDownList: {
    top: 410,
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
  },
  DropDownListText: {},
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
  tinyLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
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
