import { StatusBar } from "expo-status-bar";
import React from "react-native";
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

	if (!fontsLoaded) {
		return null;
	}

	return (
		<NavigationContainer>
			<AppNavigatorScreen />
			<StatusBar style="dark" />
		</NavigationContainer>
	);
};

export default App;
