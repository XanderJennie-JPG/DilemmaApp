import { createStackNavigator } from "@react-navigation/stack";
import ChooseDepartment from "../screens/ChooseDepartment";
import WelcomeScreen from "../screens/WelcomeScreen";
import DilemmasScreen from "../screens/DilemmasScreen";
import UitlegScreen from "../screens/UitlegScreen";
import AlgemeneVoorwaarden from "../screens/AlgemeneVoorwaarden";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import ToelichtingScreen from "../screens/ToelichtingScreen";
import HomeTabScreen from "./HomeTab";
import ResultScreen from "../screens/ResultsScreen";

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

const SettingsStack = createStackNavigator();

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
      <CommonScreensStack.Screen name="Results" component={ResultScreen} />
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
