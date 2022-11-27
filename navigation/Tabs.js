import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import ResultsScreen from "../screens/ResultsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import HomeStack from "../navigation/HomeStack";
import ResultatenStack from "../navigation/ResultatenStack";
import InstellingenStack from "../navigation/InstellingenStack";

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
          marginBottom: 55,
          marginTop: 5,
          paddingTop: 25,
          height: 100,
          left: 50,
          right: 50,
          elevation: 0,
          borderColor: "#fff",
          marginHorizontal: 5,
          backgroundColor: "transparent",
          borderTopWidth: 0,
          position: "absolute",
        },
      })}
    >
      <Tab.Screen name={ResultsName} component={ResultatenStack} />
      <Tab.Screen name={homeName} component={HomeStack} />
      <Tab.Screen name={settingsName} component={InstellingenStack} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
