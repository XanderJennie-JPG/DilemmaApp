import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ResultsScreen from "../screens/ResultsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { StyleSheet } from "react-native";

const HomeTab = createBottomTabNavigator();

export default function HomeTabScreen() {

  return (
    <HomeTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTransparent: true,
        headerShown: false,
        tabBarShowLabel: true, //set to false later
        tabBarStyle: {
          borderTopWidth: 0,
          borderRadius: 50,
          marginBottom: 60,
          marginTop: 5,
          paddingHorizontal: 12,
          paddingTop: 25,
          height: 90,
          elevation: 0,
          borderColor: "#fff",
          marginHorizontal: 5,
          backgroundColor: "transparent",
          position: "absolute",
          ...styles.shadow,
        },
      }}
    >
      <HomeTab.Screen name="Results" component={ResultsScreen} />
      <HomeTab.Screen name="Home" component={HomeScreen} />
      <HomeTab.Screen name="Settings" component={SettingsScreen} />
    </HomeTab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
