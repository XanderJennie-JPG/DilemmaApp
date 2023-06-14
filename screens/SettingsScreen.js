import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import { Divider } from "@rneui/themed";
import TopLogo from "../components/TopLogo";

const SettingsScreen = ({ navigation }) => {
  let [department, setDepartment] = useState("");
  const [departmentChanged, setDepartmentChanged] = useState(false);

  useEffect(() => {
    const getDepartment = async () => {
      let department2 = await AsyncStorage.getItem("department");
      setDepartment(department2);
      
      setDepartmentChanged(false);
    };
    getDepartment();
  }, [departmentChanged]);

  return (
    <Container>
      <TopLogo />
      <View style={styles.container}>
        <Text style={styles.header1}>Instellingen</Text>
        <Text style={styles.header2}>{department}</Text>
      </View>
      <View style={styles.centeredContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("SettingsChooseDepartment", {
              setDepartmentChanged,
            })
          }
          style={styles.optionContainer}
        >
          <Image
            style={styles.icon}
            source={require("../assets/Pencil-icon.png")}
          />
          <Text style={styles.optionText}>Afdeling Wijzigen</Text>
        </TouchableOpacity>
        <Divider
          style={styles.divider}
          width={1.5}
          color="#134392"
          inset={true}
          insetType="middle"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("PrivacyPolicy")}
          style={styles.optionContainer}
        >
          <Image
            style={styles.icon}
            source={require("../assets/PP-icon.png")}
          />
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>
        <Divider
          style={styles.divider}
          width={1.5}
          color="#134392"
          inset={true}
          insetType="middle"
        />
        <TouchableOpacity style={styles.optionContainer}>
          <Image
            style={styles.icon}
            source={require("../assets/AV-icon.png")}
          />
          <Text
            onPress={() => navigation.navigate("AlgemeneVoorwaarden")}
            style={styles.optionText}
          >
            Algemene Voorwaarden
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header1: {
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "rgba(19, 67, 146, 1)",
    textAlign: "center",
    marginTop: 20,
  },
  header2: {
    fontSize: 25,
    fontFamily: "Montserrat",
    color: "rgba(19, 67, 146, 1)",
    textAlign: "center",
    marginTop: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  optionText: {
    color: "rgba(19, 67, 146, 1)",
    fontSize: 18,
    lineHeight: 26,
    height: 29,
    marginLeft: 10,
  },
  icon: {
    width: 35,
    height: 35,
  },
  divider: {
    width: 271,
  },
});