import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ChooseDepartment from "../screens/ChooseDepartment";
import WelcomeScreen from "../screens/WelcomeScreen";
import ResultsScreen from "../screens/ResultsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DilemmasScreen from "../screens/DilemmasScreen";
import UitlegScreen from "../screens/UitlegScreen";

const WelcomeStack = createStackNavigator();

function WelcomeStackScreen() {
  return (
    <WelcomeStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <WelcomeStack.Screen name="Welcome" component={WelcomeScreen} />
      <WelcomeStack.Screen
        name="ChooseDepartment"
        component={ChooseDepartment}
      />
    </WelcomeStack.Navigator>
  );
}

const HomeTab = createBottomTabNavigator();

function HomeTabScreen() {
  return (
    <HomeTab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <HomeTab.Screen name="Results" component={ResultsScreen} />
      <HomeTab.Screen name="Home" component={HomeScreen} />
      <HomeTab.Screen name="Settings" component={SettingsScreen} />
    </HomeTab.Navigator>
  );
}

const AppNavigator = createStackNavigator();

export default function AppNavigatorScreen() {
  return (
    <AppNavigator.Navigator screenOptions={{ headerShown: false }}>
      <AppNavigator.Screen name="WelcomeStack" component={WelcomeStackScreen} />
      <AppNavigator.Screen name="HomeTab" component={HomeTabScreen} />
      <AppNavigator.Screen name="QuizScreen" component={DilemmasScreen} />
      <AppNavigator.Screen name="UitlegScreen" component={UitlegScreen} />
    </AppNavigator.Navigator>
  );
}
