import { StatusBar } from "expo-status-bar";
import React from "react-native";
import Tabs from "./navigation/Tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

const Stack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs>
      <StatusBar style="default" />
    </Tabs>
  );
};

export default App;
