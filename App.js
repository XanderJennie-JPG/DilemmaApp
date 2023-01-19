//This needs to be at top level
import "react-native-gesture-handler";
//''Note: If you are building for Android or iOS, do not skip this step, or your app may crash in production even if it works fine in development. This is not applicable to other platforms.''
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
        AsyncStorage.clear();
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
