import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ResultsScreen from "../screens/ResultsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { StyleSheet } from "react-native";
import InputName from "../screens/InputName";
import ChooseDepartment from "../screens/ChooseDepartment";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      component={HomeScreen}
      screenOptions={{
        headerTransparent: true,
        tabBarShowLabel: false,
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
          position: "absolute",
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen name="Resultaten" component={ResultsScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Instellingen" component={SettingsScreen} />
      <Tab.Screen name = "ChooseDepartment" component={ChooseDepartment} options={{tabBarStyle: {display: 'none'}}} />
    </Tab.Navigator>
  );
};

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

export default Tabs;
