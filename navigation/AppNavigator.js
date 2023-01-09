import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ChooseDepartment from "../screens/ChooseDepartment";
import WelcomeScreen from "../screens/WelcomeScreen";
import ResultsScreen from "../screens/ResultsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DilemmasScreen from "../screens/DilemmasScreen";
import UitlegScreen from "../screens/UitlegScreen";
import AlgemeneVoorwaarden from "../screens/AlgemeneVoorwaarden";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import ToelichtingScreen from "../screens/ToelichtingScreen";

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
      initialRouteName="Home"
    >
      <HomeTab.Screen name="Results" component={ResultsScreen} />
      <HomeTab.Screen name="Home" component={HomeScreen} />
      <HomeTab.Screen name="Settings" component={SettingsScreen} />
    </HomeTab.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="ChooseDepartment"
        component={ChooseDepartment}
      />
      <SettingsStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <SettingsStack.Screen
        name="AlgemeneVoorwaarden"
        component={AlgemeneVoorwaarden}
      />
    </SettingsStack.Navigator>
  );
}

const CommonScreensStack = createStackNavigator();

//The common screens used for navigation. New screen? Add here.
//Do not add here if scope of app changes and it should be navigateable from somewhere besides Home.
function CommonScreensStackScreen() {
  return (
    <CommonScreensStack.Navigator screenOptions={{ headerShown: false }}>
      <CommonScreensStack.Screen name="HomeTab" component={HomeTabScreen} />
      <CommonScreensStack.Screen name="QuizScreen" component={DilemmasScreen} />
      <CommonScreensStack.Screen name="UitlegScreen" component={UitlegScreen} />
      <CommonScreensStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
      />
      <CommonScreensStack.Screen
        name="AlgemeneVoorwaarden"
        component={AlgemeneVoorwaarden}
      />
      <CommonScreensStack.Screen
        name="ChooseDepartment"
        component={ChooseDepartment}
      />
      <CommonScreensStack.Screen
        name="Toelichting"
        component={ToelichtingScreen}
      />
    </CommonScreensStack.Navigator>
  );
}

const AppNavigator = createStackNavigator();

export default function AppNavigatorScreen({ hasSeenWelcome }) {
  if (hasSeenWelcome) {
    return (
      <AppNavigator.Navigator screenOptions={{ headerShown: false }}>
        <AppNavigator.Screen
          name="CommonScreens"
          component={CommonScreensStackScreen}
        />
      </AppNavigator.Navigator>
    );
  } else {
    return (
      <AppNavigator.Navigator screenOptions={{ headerShown: false }}>
        <AppNavigator.Screen
          name="WelcomeStack"
          component={WelcomeStackScreen}
        />
        <AppNavigator.Screen
          name="CommonScreens"
          component={CommonScreensStackScreen}
        />
      </AppNavigator.Navigator>
    );
  }
}
