import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import Container from "../components/Container";
import GlobalStyle from "../components/GlobalStyle";
import axios from 'axios';

//TODO: separate the logic for rendering the question and answers from the DilemmasScreen component to make the code easier to read.
//TODO: adding some conditional rendering to show a "Next" button or a "Finish" button based on whether the current question is the last question or not.
const DilemmasScreen = ({ navigation: { goBack } }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [Patiëntenbelang, setPatiëntenbelang] = useState(0);
  const [IntegriteitPoints, setIntegriteitPoints] = useState(0);
  const [Informatiebeveiliging, setInformatiebeveiliging] = useState(0);

  //State variable that keeps track of the answers
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      text: "Je zit aan een balie en vindt daar een afdelingsbezettingsoverzicht (abo). Je staat onder druk om nog snel een rapportage op te stellen. Wat doe je?",
      answers: [
        {
          text: "Je pakt het abo en gooit het weg in de daarvoor papierbak voor vertrouwelijke informatie. Je spreekt je collega’s niet aan want je vindt dat het ieders eigen verantwoordelijkheid is om de regels na te leven.",
          value: "A",
        },
        {
          text: "Je laat het abo liggen. Een collega heeft dit vast nodig.",
          value: "B",
        },
        { text: "Je pakt het abo op en spreekt je collega’s aan.", value: "C" },
      ],
    },
    {
      text: "Een collega is nogal chaotisch en vergeet snel inloggegevens. Als je langs de werkplek van de collega loopt zie je een post-it briefje op het bureau geplakt met daarop de inloggegevens genoteerd. Vorige week heb je ook al een vervelende woordenwisseling gehad  met deze collega. Wat doe je?",
      answers: [
        { text: "Je spreekt je collega aan..", value: "A" },
        {
          text: "Je laat het er maar bij voor deze keer,  je ziet dat je collega het druk heeft en herinnert je nog de discussie van vorige week.",
          value: "B",
        },
        {
          text: "Er komen toch nooit onbevoegden op deze werkplek, laat maar zitten.",
          value: "C",
        },
      ],
    },
  ];

  const shuffleAnswers = (answers) => {
    return answers.sort(() => Math.random() - 0.5);
  };

  const handleAnswer = async (option) => {
    if (option === "A") {
      setPatiëntenbelang(Patiëntenbelang + 10);
    } else if (option === "B") {
      setIntegriteitPoints(IntegriteitPoints + 10);
    } else if (option === "C") {
      setInformatiebeveiliging(Informatiebeveiliging + 10);
    }

    // send the answers to the backend, comment out if this is giving you errors.
    try {
      const response = await axios.post("/api/submitAnswers", {
        answers: [...answers, { [option]: true }],
      });
      console.log("Success:", response);
    } catch (error) {
      console.error("Error:", error);
    }

    setAnswers([...answers, { [option]: true }]);
    setCurrentQuestion(currentQuestion + 1);
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
      {shuffleAnswers(questions[currentQuestion - 1].answers).map(
        (answer, index) => (
          <View style={{ flexDirection: "row" }} key={answer.value}>
            {/*A, B and C. fromCharCode converts unicode to characters.*/}
            <Text>{String.fromCharCode(65 + index)}:</Text>
            <TouchableOpacity onPress={() => handleAnswer(answer.value)}>
              <Text>{answer.text}</Text>
            </TouchableOpacity>
          </View>
        )
      )}
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
