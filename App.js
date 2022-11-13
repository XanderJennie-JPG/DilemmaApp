import { StatusBar } from "expo-status-bar";
import React from "react-native";
import Tabs from "./navigation/Tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tabs>
        <StatusBar style="default" />
      </Tabs>
    </NavigationContainer>
  );
};

export default App;
