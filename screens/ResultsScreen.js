import React, { useEffect, useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Container from "../components/Container";
import TopLogo from "../components/TopLogo";
import { AverageCalculator } from "../services/AverageCalculator";
import { PieChart, ProgressChart } from "react-native-chart-kit";
import { getGuid } from "../components/CreateGuid";
import { db } from "../firebase";
import { useIsFocused } from "@react-navigation/native";
import { useRef } from "react";

const ResultScreen = ({ navigation, route }) => {
  const [results, setResults] = useState({});
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const fetchData = async () => {
        const guid = await getGuid();
        const usersRef = db.collection("users");
        const query = usersRef
          .where("deviceId", "==", guid)
          .get()
          .then((snapshot) => {
            if (snapshot.empty) {
              console.log("No matching documents.");
              return;
            }
            snapshot.forEach((doc) => {
              setResults(doc.data().scores);
            });
          })
          .catch((err) => {
            console.log("Error getting documents", err);
          });
      };

      fetchData();
    }
  }, [isFocused]);

  let Patiëntenbelang = results.Patiëntenbelang || 0;
  let Integriteit = results.Integriteit || 0;
  let Informatiebeveiliging = results.Informatiebeveiliging || 0;

  let checkData = () => {
    if (
      Patiëntenbelang === 0 &&
      Integriteit === 0 &&
      Informatiebeveiliging === 0
    ) {
      return false;
    }
    return true;
  };

  let data = [
    {
      name: "Efficient",
      population: Patiëntenbelang,
      color: "#01ED38",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Loyaal",
      population: Integriteit,
      color: "#F29999",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Informatiebeveiliging",
      population: Informatiebeveiliging,
      color: "#01B6ED",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };

  return (
    <Container>
      <TopLogo />
      <View style={styles.box}>
        <View>
          <Text style={styles.header1}>Resultaten</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Hier kunt u uw eigen score en de algemene score van uw afdeling
            bekijken
          </Text>
        </View>
        <View style={styles.chartContainer}>
          {checkData() ? (
            <PieChart
              style={styles.chart}
              data={data}
              width={Dimensions.get("window").width - 50}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
            />
          ) : (
            <Text style={styles.noDataText}>
              Geen data om te laten zien. Maak eerst de quiz af!
            </Text>
          )}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.shadow]}
          disabled={!checkData()}
          onPress={() =>
            navigation.navigate("Toelichting", {
              Patiëntenbelang: Patiëntenbelang,
              Integriteit: Integriteit,
              Informatiebeveiliging: Informatiebeveiliging,
            })
          }
        >
          <Text style={styles.buttonText}>Toelichting</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  box: {
    opacity: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    shadowColor: "rgb(203, 221, 230)",
    shadowOpacity: 0.8392156862745098,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.6,
    alignSelf: "center",
    marginTop: Dimensions.get("window").height * 0.1,
  },
  textContainer: {
    alignItems: "center",
    marginTop: "5%",
  },
  chartContainer: {
    alignItems: "center",
    marginTop: "10%",
  },
  header1: {
    fontSize: 25,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Montserrat",
    color: "rgba(19, 67, 146, 1)",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    opacity: 1,
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(19, 67, 146, 1)",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 27,
  },
  noDataText: {
    left: "25%",
    marginTop: "15%",
    color: "rgba(19, 67, 146, 1)",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 27,
  },
  buttonContainer: {
    bottom: Dimensions.get("window").height * 0.05,
    alignSelf: "flex-end",
  },
  button: {
    opacity: 1,
    backgroundColor: "rgba(238, 246, 250, 1)",
    borderRadius: 20,
    shadowColor: "rgb(203, 221, 230)",
    shadowOpacity: 0.8392156862745098,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").height * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#134392",
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
});
