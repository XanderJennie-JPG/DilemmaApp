import { React, useState, useEffect } from "react";
import { db } from "../firebase";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const AverageCalculator = ({ fieldName }) => {
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const usersRef = db.collection("users");
    const query = usersRef
      .where("scores." + fieldName, ">", 0)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }
        let sum = 0;
        let count = 0;
        snapshot.forEach((doc) => {
          sum += doc.data().scores[fieldName];
          count++;
        });
        setAverage(sum / count);
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  }, [fieldName]);

  return (
    <Text>
      Gemiddelde {fieldName}: {Math.round(average)}%
    </Text>
  );
};