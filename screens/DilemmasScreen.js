import React, { useState, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import Container from "../components/Container";
import GlobalStyle from "../components/GlobalStyle";
import questions from "../components/Questions";
import { getGuid } from "../components/CreateGuid";
import Ionicons from "@expo/vector-icons/Ionicons";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Dimensions } from "react-native";
import { useWindowDimensions } from "react-native";

//TODO: separate the logic for rendering the question and answers from the DilemmasScreen component
const DilemmasScreen = ({ navigation: { goBack, navigate } }) => {
  const { width, height } = useWindowDimensions();
  const styles = useStyles(width, height);
  //Here, we keep track of the current question for rendering purposes.
  const [currentQuestion, setCurrentQuestion] = useState(1);
  //Here, we store the scores.
  const Patiëntenbelang = useRef(0);
  const IntegriteitPoints= useRef(0);
  const Informatiebeveiliging = useRef(0);
  const oldPatiëntenbelang = useRef(0);
  const oldIntegriteitPoints = useRef(0);
  const oldInformatiebeveiliging = useRef(0);
/*   const [Patiëntenbelang, setPatiëntenbelang] = useState(0);
  const [IntegriteitPoints, setIntegriteitPoints] = useState(0);
  const [Informatiebeveiliging, setInformatiebeveiliging] = useState(0);
  const [oldPatiëntenbelang, setOldPatiëntenbelang] = useState(0);
  const [oldIntegriteitPoints, setOldIntegriteitPoints] = useState(0);
  const [oldInformatiebeveiliging, setOldInformatiebeveiliging] = useState(0); */

  //State variable that keeps track of the currently selected answer
  const [isActive, setIsActive] = useState(false);

  //Name and dept
  const [username, setUsername] = React.useState("");
  const [department, setDepartment] = React.useState("");

  //Get name and dept
  React.useEffect(() => {
    AsyncStorage.getItem("department").then((value) => {
      setDepartment(value);
    });
    AsyncStorage.getItem("username").then((value) => {
      setUsername(value);
    });
  }, []);

  //State variable that keeps track of the selected answers
  const [answers, setAnswers] = useState({});

  //State variable that keeps track of the currently selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  //Randomizes the answers so the user doesnt ''game'' the system
  const shuffleAnswers = (answers) => {
    return answers.sort(() => Math.random() - 0.5);
  };

  //Remove previous answer when selecting a new one
  const removePreviousAnswer = () => {
    if (answers[currentQuestion]) {
      answers[currentQuestion] = null;
    }
  };

  //Resets scores incase of re-take
  const resetScores = () => {
    setPatiëntenbelang(0);
    setIntegriteitPoints(0);
    setInformatiebeveiliging(0);
    setCurrentQuestion[1];
  };

  //Go back a question
  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
    Patiëntenbelang.current = oldPatiëntenbelang.current;
    IntegriteitPoints.current = oldIntegriteitPoints.current;
    Informatiebeveiliging.current = oldInformatiebeveiliging.current;
    console.log("Patiëntenbelang: " + Patiëntenbelang.current);
    console.log("Integriteit: " + IntegriteitPoints.current);
    console.log("Informatiebeveiliging: " + Informatiebeveiliging.current);
  };

  const handleFinish = async (option) => {
    if (currentQuestion === questions.length) {
      if (selectedAnswer === "A") {
        oldPatiëntenbelang.current == Patiëntenbelang.current;
        Patiëntenbelang.current += 10;
      } else if (selectedAnswer === "B") {
        oldIntegriteitPoints.current == IntegriteitPoints.current;
        IntegriteitPoints.current += 10;
      } else if (selectedAnswer === "C") {
        oldInformatiebeveiliging.current == Informatiebeveiliging.current;
        Informatiebeveiliging.current += 10;
      }
        
      setAnswers({ ...answers, [currentQuestion]: option });
      // navigate to the results screen when the user reaches the last question
      const scores = {
        Patiëntenbelang: Patiëntenbelang.current,
        Integriteit: IntegriteitPoints.current,
        Informatiebeveiliging: Informatiebeveiliging.current,
      };
      setCurrentQuestion[1];

      // Get the device ID
      const deviceId = await getGuid();

      const usersRef = db.collection("users");

      const userDoc = usersRef.doc(deviceId);

      // Delete the old document
      userDoc
        .delete()
        .then(() => {
          console.log("Old scores deleted");
        })
        .catch((error) => {
          console.error("Error deleting old scores", error);
        });

      const data = {
        deviceId: deviceId,
        username: username,
        department: department,
        answers: answers,
        scores: {
          Patiëntenbelang: Patiëntenbelang.current,
          Integriteit: IntegriteitPoints.current,
          Informatiebeveiliging: Informatiebeveiliging.current,
        },
      };
      usersRef
        .doc(deviceId)
        .set(data)
        .then(function () {
          console.log("Document written with ID: REDACTED");
          //console.log("Document written with ID: ", deviceId);
        })
        .catch(function (error) {
          console.error("Error adding document: REDACTED");
        });

      navigate("HomeTab", {
        screen: "Results",
        params: {
          Patiëntenbelang: Patiëntenbelang,
          Integriteit: IntegriteitPoints,
          Informatiebeveiliging: Informatiebeveiliging,
        },
      });
    }
  };

  const handleAnswer = async (option) => {
    //We check if the users answer is different from the previously selected answer in the current question. If yes then..
    if (selectedAnswer !== option) {
      removePreviousAnswer();
      //We set what the user has selected
      setSelectedAnswer(option);
      setIsActive(true);
      setAnswers({ ...answers, [currentQuestion]: option });
    }
  };


  //The handling of the users chosen questions when pressing next.
  const handleNext = async (option) => {
    oldPatiëntenbelang.current = Patiëntenbelang.current;
    oldIntegriteitPoints.current = IntegriteitPoints.current;
    oldInformatiebeveiliging.current = Informatiebeveiliging.current;
    if (selectedAnswer === "A") {
      Patiëntenbelang.current += 10;
    } else if (selectedAnswer === "B") {
      IntegriteitPoints.current += 10;
    } else if (selectedAnswer === "C") {
      Informatiebeveiliging.current += 10;
    }

    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
    console.log("patientenbelang = " + Patiëntenbelang.current);
    console.log("oldpatientenbelang = " + oldPatiëntenbelang.current);
    console.log("integriteitpoints = " + IntegriteitPoints.current);
    console.log("oldintegriteitpoints = " + oldIntegriteitPoints.current);
    console.log("informatiebeveiliging = " + Informatiebeveiliging.current);
    console.log("oldinformatiebeveiliging = " + oldInformatiebeveiliging.current);

    //Reset selected answer when going to next.
    setSelectedAnswer(null);
  };

  return (
    <Container>
      <ImageBackground
        resizeMode="cover"
        style={[
          styles.backgroundTop,
          {
            transform: [{ rotate: "-15deg" }],
            height: 250,
            width: 450,
            top: -20,
            left: -50,
          },
        ]}
        source={require("../assets/background-top.png")}
      />
      <ImageBackground
        resizeMode="cover"
        style={[
          styles.backgroundBottom,
          {
            transform: [{ rotate: "15deg" }],
            height: 250,
            width: 450,
            top: 475,
            alignSelf: "center",
          },
        ]}
        source={require("../assets/background-top.png")}
      />
      <View style={[styles.rowone]}>
        <Text style={[GlobalStyle.CustomFont]}>
          Dilemma{" "}
          <Text style={[GlobalStyle.CustomFontBold, { fontSize: 30, alignSelf: "flex-end"}]}>
            {currentQuestion}/{questions.length}
          </Text>
        </Text>
      </View>
      <View style={[styles.box]} blurRadius={8.5}>
        <ScrollView style={{ maxHeight: 175 }}>
          <Text style={[styles.ButtonText, styles.question, { marginTop: 10 }]}>
            {questions[currentQuestion - 1].text}
          </Text>
        </ScrollView>
        {questions[currentQuestion - 1].answers.map((answer, index) => (
          <View style={{ flexDirection: "row" }} key={answer.value}>
            <View style={{ flex: 1 }}>
              <Text
                style={[
                  styles.ButtonText,
                  {
                    alignSelf: "center",
                    marginTop: height * 0.04,
                    fontWeight: "bold",
                    fontSize: width * 0.07,
                  },
                ]}
              >
                {String.fromCharCode(65 + index)}
              </Text>
            </View>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="lightblue"
              style={[
                styles.Button,
                styles.shadow,
                selectedAnswer === answer.value && styles.active,
              ]}
              onPress={() => handleAnswer(answer.value)}
            >
              <Text style={[styles.ButtonText, { left: 5 }]}>
                {answer.text}
              </Text>
            </TouchableHighlight>
          </View>
        ))}
      </View>
      <View style={styles.rowtwo}>
        {currentQuestion == 1 ? (
          <TouchableOpacity style={styles.nextButton} onPress={() => goBack()}>
            <Ionicons
              name="arrow-back"
              style={{ paddingLeft: 3, fontSize: 30, color: "#134392" }}
            ></Ionicons>
            <Text style={[styles.previousButton, styles.nextButtonText]}>
              Stop
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.nextButton} onPress={() => handlePrevious()}>
            <Ionicons
              name="arrow-back"
              style={{ paddingLeft: 3, fontSize: 30, color: "#134392" }}
            ></Ionicons>
            <Text style={[styles.previousButton, styles.nextButtonText]}>
              Previous
            </Text>
          </TouchableOpacity>
          )}

        {currentQuestion === questions.length ? (
          <TouchableOpacity
            style={styles.nextButton}
            disabled={selectedAnswer === null}
            onPress={handleFinish}
          >
            <Ionicons
              name="checkmark-circle"
              style={{ paddingLeft: 3, fontSize: 30, color: "#134392" }}
            ></Ionicons>
            <Text style={[styles.previousButton, styles.nextButtonText]}>
              Finish
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.nextButton}
            disabled={selectedAnswer === null}
            onPress={() => {
              handleNext();
            }}
          >
            <Ionicons
              name="arrow-forward-sharp"
              style={{ paddingLeft: 3, fontSize: 30, color: "#134392" }}
            ></Ionicons>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </Container>
  );
};

export default DilemmasScreen;

function useStyles(width, height) {
  return StyleSheet.create({
    active: {
      backgroundColor: "lightblue",
    },
    nextButton: {
      borderRadius: Math.min(width, height) * 0.125,
      backgroundColor: "#ffffff",
      height: Math.min(width, height) * 0.19,
      width: Math.min(width, height) * 0.19,
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
    backgroundTop: {
      position: "absolute",
      top: -10,
      left: 10,
      right: 0,
      height: Math.min(width, height) * 0.2,
      width: Math.min(width, height) * 0.45,
    },
    backgroundBottom: {
      marginTop: "auto",
      position: "absolute",
      height: Math.min(width, height) * 0.2,
      width: Math.min(width, height) * 0.45,
      top: Math.min(width, height) * 0.47,
      alignSelf: "center",
    },
    rowone: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      alignSelf: "flex-end",
      paddingHorizontal: Math.min(width, height) * 0.03,
      paddingVertical: Math.min(width, height) * 0.015,
    },
    rowtwo: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "auto",
      paddingHorizontal: Math.min(width, height) * 0.03,
      paddingVertical: Math.min(width, height) * 0.015,
    },
    dilemmatext: {
      fontSize: 30,
    },
    ButtonText: {
      fontSize: 13,
      color: "#134392",
    },
    Button: {
      backgroundColor: "#ffffff",
      borderRadius: width * 0.04,
      flexDirection: "row",
      width: width * 0.8,
      height: height * 0.105,
      marginTop: height * 0.015,
      alignItems: "center",
      alignSelf: "flex-end",
    },
    
    shadow: {
      shadowColor: "rgba(31,38,135,0.37)",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 4,
    },
    box: {
      backgroundColor: "rgba(255,255,255,0.6)",
      shadowOpacity: 0.2,
      shadowRadius: 3,
      borderRadius: Math.min(width, height) * 0.04,
      alignContent: "center",
      alignItems: "center",
      paddingHorizontal: Math.min(width, height) * 0.02,
      paddingVertical: Math.min(width, height) * 0.02,
      width: Math.min(width, height) * 0.9,
    },
    question: {
      textAlign: "left",
      fontSize: Math.min(width, height) * 0.05,
      width: Math.min(width, height) * 0.8,
      alignSelf: "center",
    },
  });
}
