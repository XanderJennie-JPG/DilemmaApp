import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Container from "../components/Container";
import { SelectList } from "react-native-dropdown-select-list";
import TopLogo from "../components/TopLogo";
import GlobalStyle from "../components/GlobalStyle";

const ChooseDepartment = ({ navigation }) => {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "Urologie", value: "Poli urologie" },
    { key: "Chirurgie", value: "Poli chirurgie" },
    { key: "Gynaecologie", value: "Poli gynaecologie" },
    { key: "Cardiologie", value: "Poli cardiologie" },
  ];
  return (
    <Container>
      <TopLogo />
      <View>
        <Text
          style={[
            GlobalStyle.CustomFontBold,
            { top: 100, fontSize: 30, alignSelf: "center" },
          ]}
        >
          Dilemma app
        </Text>
      </View>
      <View style={styles.InputContainer}>
        <Text style={[GlobalStyle.CustomFontBold, { fontSize: 27, top: 275 }]}>
          Hallo!
        </Text>
        <Text style={[styles.header2, { top: 300 }]}>Kies uw afdeling</Text>
      </View>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        search={false}
        placeholder="Kiezen"
        searchPlaceholder=""
        boxStyles={[styles.DropDown, styles.shadow, styles.elevation]}
        inputStyles={[styles.DropDownText, styles.header2]}
        dropdownStyles={[styles.DropDownList]}
        dropdownTextStyles={styles.header2}
        defaultOption={{ key: "Poli urologie", value: "Poli urologie" }}
        maxHeight={150}
      />

      <TouchableOpacity
        onPress={() => {
          AsyncStorage.setItem("department", selected);
          navigation.navigate("InputName");
        }}
        style={[
          styles.GaDoorButton,
          styles.shadow,
          { position: "absolute", bottom: 75 },
        ]}
      >
        <Text style={styles.buttonText}>Laten we beginnen!</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default ChooseDepartment;

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
    height: 50,
    left: 50,

    flexDirection: "row",
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
    top: 325,
  },
  DropDownText: {
    fontSize: 25,
    textAlign: "center",
  },
  DropDownList: {
    top: 330,
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

  InputContainer: {
    alignItems: "center",
  },

  buttonText: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    flex: 1,
    textAlign: "center",
    color: "#134392",
  },
});