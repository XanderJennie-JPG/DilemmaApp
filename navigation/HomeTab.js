import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ResultsScreen from "../screens/ResultsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeTab = createBottomTabNavigator();

const homeName = "Home";
const settingsName = "Settings";
const ResultsName = "Results";

export default function HomeTabScreen() {

  return (
    <HomeTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === settingsName) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (rn === ResultsName) {
            iconName = focused ? "analytics" : "analytics-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerTransparent: true,
        headerShown: false,
        tabBarShowLabel: true, //set to false later
        tabBarStyle: {
          borderTopWidth: 0,
          borderRadius: 50,
          marginBottom: 55,
          marginTop: 5,
          paddingHorizontal: 12,
          paddingTop: 25,
          height: 90,
          elevation: 0,
          borderColor: "#fff",
          marginHorizontal: 5,
          backgroundColor: "transparent",
          position: "absolute",
          //...styles.shadow, //removed for consistent behavior on android and
        },
      })}
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
