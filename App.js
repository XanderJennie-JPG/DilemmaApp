import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
      <Tabs></Tabs>
      <StatusBar style="default"/>
      </NavigationContainer>  
    );
}

export default App;

