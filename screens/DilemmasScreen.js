import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Container from "../components/Container";
import GlobalStyle from "../components/GlobalStyle";
import axios from "axios";
import questions from "../components/Questions";
import sendData from "../services/ScoreApi";
import Ionicons from "@expo/vector-icons/Ionicons";

//TODO: separate the logic for rendering the question and answers from the DilemmasScreen component to make the code easier to read.
const DilemmasScreen = ({ navigation: { goBack, navigate } }) => {
  //Here, we keep track of the current question for rendering purposes.
  const [currentQuestion, setCurrentQuestion] = useState(1);
  //Here, we store the scores.
  const [Patiëntenbelang, setPatiëntenbelang] = useState(0);
  const [IntegriteitPoints, setIntegriteitPoints] = useState(0);
  const [Informatiebeveiliging, setInformatiebeveiliging] = useState(0);

  //State variable that keeps track of the selected answers
  const [answers, setAnswers] = useState({});
  console.log(answers);

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
  };

  //Go back a question
  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinish = async () => {
    resetScores();
    if (currentQuestion === questions.length) {
      // navigate to the results screen when the user reaches the last question
      const scores = {
        Patiëntenbelang: Patiëntenbelang,
        Integriteit: IntegriteitPoints,
        Informatiebeveiliging: Informatiebeveiliging,
      };
      //const res = await sendData(scores);
      //console.log(res);
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
      setAnswers({ ...answers, [currentQuestion]: option });
    }
  };

  //The handling of the users chosen questions when pressing next.
  const handleNext = async (option) => {
    if (selectedAnswer === "A") {
      setPatiëntenbelang(Patiëntenbelang + 10);
    } else if (selectedAnswer === "B") {
      setIntegriteitPoints(IntegriteitPoints + 10);
    } else if (selectedAnswer === "C") {
      setInformatiebeveiliging(Informatiebeveiliging + 10);
    }

    //Here, when the backend is done, we need to add an axios call to store in backend.
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }

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
      <View style={styles.rowone}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image source={require("../assets/Back-arrow.png")} />
        </TouchableOpacity>
        <Text style={[GlobalStyle.CustomFont, { alignSelf: "center" }]}>
          Dilemma{" "}
          <Text style={[GlobalStyle.CustomFontBold, { fontSize: 30 }]}>
            {currentQuestion}/{questions.length}
          </Text>
        </Text>
      </View>
      <View style={styles.box} blurRadius={8.5}>
        <View style={styles.styleA}>
          <Text style={[styles.ButtonText, styles.question, { marginTop: 25 }]}>
            {questions[currentQuestion - 1].text}
          </Text>
          {questions[currentQuestion - 1].answers.map((answer, index) => (
            <View style={{ flexDirection: "row" }} key={answer.value}>
              {/*A, B and C. fromCharCode converts unicode to characters.*/}
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    styles.ButtonText,
                    {
                      alignSelf: "center",
                      top: 50,
                      fontWeight: "bold",
                      fontSize: 23,
                    },
                  ]}
                >
                  {String.fromCharCode(65 + index)}
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.Button, styles.shadow]}
                onPress={() => handleAnswer(answer.value)}
              >
                <Text style={[styles.ButtonText, { left: 5 }]}>
                  {answer.text}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.rowtwo}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handlePrevious}
          disabled={currentQuestion - 1 == 0}
        >
          <Ionicons
            name="arrow-back"
            style={{ paddingLeft: 3, fontSize: 30, color: "#134392" }}
          ></Ionicons>
          <Text style={[styles.previousButton, styles.nextButtonText]}>
            Previous
          </Text>
        </TouchableOpacity>

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

const styles = StyleSheet.create({
  nextButton: {
    borderRadius: 125,
    backgroundColor: "#ffffff",
    height: 100,
    width: 100,
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
  },
  backgroundBottom: {
    position: "absolute",
  },
  rowone: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowtwo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
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
    backgroundColor: "rgba(255,255,255,0.6)", //change to "rgba(255,255,255,0.8)" for android?
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
