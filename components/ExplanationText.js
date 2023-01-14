import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import GlobalStyle from "./GlobalStyle";

const ExplanationText = ({ score, type }) => {
  let explanationText;

  if (type === "Informatiebeveiliging") {
    if (score >= 90) {
      explanationText =
        "Je kiest in de dilemma's steeds voor het alternatief waarin informatiebeveiliging en de privacy van de patiënt centraal staan. Je lijkt de druk om snel iets te doen of een collega of patiënt vlug toch even te helpen te weerstaan.";
    } else if (score >= 60 && score < 90) {
      explanationText =
        "Je kiest in de dilemma's meestal voor het alternatief waarin informatiebeveiliging en de privacy van de patiënt centraal staan. Toch zijn er een beperkt aantal situaties dat je andere belangen zwaarder laat wegen. Verweeg of je in deze situaties toch informatiebeveiliging en de privacy van de patiënt voorrang moet geven.";
    } else if (score >= 30 && score < 60) {
      explanationText =
        "Je kiest in de dilemma's regelmatig voor het alternatief waarin informatiebeveiliging en de privacy van de patiënt centraal staan. Meestal kies je echter voor een ander alternatief. Overweeg of je in meer situaties toch informatiebeveiliging en de privacy van de patiënt voorrang moet geven. Het bekend worden van persoonlijke gegevens kan de patiënt schade en ongemak bezorgen.";
    } else if (score < 30) {
      explanationText =
        "Je kiest in de dilemma's (bijna) niet voor het alternatief waarin informatiebeveiliging en de privacy van de patiënt centraal staan. Heel vaak kies je voor een alternatief. Overweeg toch vaker aandacht aan informatiebeveiliging en privacy van de patiënt te geven, het is immers ook een belang van de patiënt.";
    }
  }
  

  return (
    <Text style={[style.explanation, GlobalStyle.CustomFont]}>
      {explanationText}
    </Text>
  );
};

const style = StyleSheet.create({
  explanation: {
    textAlign: "center",
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
  },
});

export default ExplanationText;
