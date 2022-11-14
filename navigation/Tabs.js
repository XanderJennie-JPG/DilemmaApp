import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ResultsScreen from "../screens/ResultsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import HomeStack from "../navigation/HomeStack";

const Tab = createBottomTabNavigator();

const homeName = "Home";
const settingsName = "Instellingen";
const ResultsName = "Resultaten";

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === settingsName) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (rn === ResultsName) {
            iconName = focused ? "list" : "list-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerTransparent: true,
        headerShown: false,
        tabBarStyle: {
          borderRadius: 50,
          marginBottom: 35,
          marginTop: 5,
          paddingHorizontal: 12,
          paddingTop: 25,
          height: 90,
          elevation: 0,
          borderColor: "#fff",
          marginHorizontal: 5,
          backgroundColor: "transparent",
          borderTopWidth: 0,
          position: "absolute",
          ...styles.shadow,
        },
      })}
    >
      <Tab.Screen name={ResultsName} component={ResultsScreen} />
      <Tab.Screen name={homeName} component={HomeStack} />
      <Tab.Screen name={settingsName} component={SettingsScreen} />
    </Tab.Navigator>
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
