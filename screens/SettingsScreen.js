import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import { Divider } from "@rneui/themed";
import TopLogo from "../components/TopLogo";
import SettingsChooseDepartment from "../screens/SettingsChooseDepartment";

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
      <View>
        <Text style={[styles.header1, {justifyContent: "flex-start"}]}>Instellingen</Text>
        <Text style={[styles.header2, {marginTop: 10}]}>{department} </Text>
      </View>
      <View style={{flex: 1, justifyContent: "flex-start", backgroundColor: "red"}}>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("SettingsChooseDepartment", {
              setDepartmentChanged,
            })
          }
          style={[styles.Options, { justifyContent: "flex-start", flexDirection: "column"}]}
          >
          <Image
            styles={styles.Icon_Pencil}
            source={require("../assets/Pencil-icon.png")}
          />
          <Text style={[styles.AfdelingWijzigenText]}> Afdeling Wijzigen</Text>
        </TouchableOpacity>
        <Divider
          style={[styles.Divider]}
          width={1.5}
          color="#134392"
          inset={true}
          insetType="middle"
        />
        </View>
        <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PrivacyPolicy")}
          style={[styles.Options, { top: 389 }]}
        >
          <Image
            styles={styles.Icon_PP}
            source={require("../assets/PP-icon.png")}
          />
          <Text style={[styles.PrivacyPolicyText]}> Privacy Policy</Text>
        </TouchableOpacity>
        <Divider
          style={[styles.Divider, { top: 450 }]}
          width={1.5}
          color="#134392"
          inset={true}
          insetType="middle"
        />
        </View>
        <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={[styles.Options, { top: 470 }]}>
          <Image
            styles={styles.Icon_AV}
            source={require("../assets/AV-icon.png")}
          />
          <Text
            onPress={() => navigation.navigate("AlgemeneVoorwaarden")}
            style={[styles.AlgemeneVoorwaardenText]}
          >
            {" "}
            Algemene Voorwaarden
          </Text>
        </TouchableOpacity>
        </View>
        </View>
    </Container>
  );
};

export default SettingsScreen;

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
  Options: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    width: 320,
    height: 53,
    left: 35,
    flexDirection: "row",
  },
  AfdelingWijzigenText: {
    //need to add custom Gill Sans MT 400 font
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(19, 67, 146, 1)",
    fontSize: 18,
    // fontWeight: "bold",
    lineHeight: 26,
    height: 29,
    left: 53,
    top: 5,
  },
  PrivacyPolicyText: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(19, 67, 146, 1)",
    fontSize: 18,
    // fontWeight: "bold",
    lineHeight: 26,
    height: 29,
    left: 53,
    top: 5,
  },
  AlgemeneVoorwaardenText: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(19, 67, 146, 1)",
    fontSize: 18,
    // fontWeight: "bold",
    lineHeight: 26,
    height: 29,
    left: 53,
  },
  Icon_Pencil: {
    opacity: 1,
    position: "absolute",
    width: 33.98,
    height: 33.98,
    left: 10.02,
    top: 9.86,
  },
  Icon_PP: {
    opacity: 1,
    position: "absolute",
    width: 34,
    height: 27.2,
    left: 10,
    top: 12.55,
  },
  Icon_AV: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    width: 31.5,
    height: 27,
    left: 10,
    top: 18,
  },
  Divider: {
    opacity: 1,
    position: "absolute",
    width: 271,
  },
});
