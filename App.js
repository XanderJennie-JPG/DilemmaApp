import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React from "react-native";
import { useEffect, useState } from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigatorScreen from "./navigation/AppNavigator";
const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  const [hasSeenWelcome, setHasSeenWelcome] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem("hasSeenWelcome");
        if (value !== null) {
          setHasSeenWelcome(true);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppNavigatorScreen hasSeenWelcome={hasSeenWelcome} />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
};

export default App;
