import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

async function AverageCalculator() {
  //Collection reference
  const colRef = collection(db, "users");

  //Get collection data
  getDocs(colRef).then((snapshot) => {
    console.log(snapshot.docs + "aaaaaaaaaaaaaaaaaa");
  });

  const q = query(
    collection(db, "users"),
    where("scores", "==", "Informatiebeveiliging")
  );
  console.log("query: ", q);
  const querySnapshot = await getDocs(q);
  console.log("querySnapshot: ", querySnapshot);

  let sum = 0;
  let count = 0;

  querySnapshot.forEach((doc) => {
    console.log("doc" + doc);
    sum += doc.data().Informatiebeveiliging;
    console.log("sum" + sum);
    count++;
  });

  let average = sum / count;
  console.log("Average Informatiebeveiliging: ", average);

  return average;
}

export default AverageCalculator;
