import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import Container from "../components/Container";
import GlobalStyle from "../components/GlobalStyle";
import axios from "axios";
import questions from "../components/Questions";

//Note: This is hard to read. The deadline is soon. Gotta do what you gotta do. I added comments everywhere to clarify it a little bit for everyone.

//TODO: separate the logic for rendering the question and answers from the DilemmasScreen component to make the code easier to read.
//TODO: adding some conditional rendering to show a "Next" button or a "Finish" button based on whether the current question is the last question or not.
const DilemmasScreen = ({ navigation: { goBack } }) => {
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

  const removePreviousAnswer = () => {
    if (answers[currentQuestion]) {
      answers[currentQuestion] = null;
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
      <Text>{questions[currentQuestion - 1].text}</Text>
      {questions[currentQuestion - 1].answers.map((answer, index) => (
        <View style={{ flexDirection: "row" }} key={answer.value}>
          {/*A, B and C. fromCharCode converts unicode to characters.*/}
          <Text>{String.fromCharCode(65 + index)}:</Text>
          <TouchableOpacity onPress={() => handleAnswer(answer.value)}>
            <Text> {answer.text}</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        style={styles.nextButton}
        disabled={selectedAnswer === null}
        onPress={() => {
          handleNext();
        }}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
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
