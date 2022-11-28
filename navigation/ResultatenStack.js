import { createStackNavigator } from "@react-navigation/stack";
import ResultScreen from "../screens/ResultsScreen";
import ToelichtingScreen from "../screens/ToelichtingScreen"

const ResultatenStack = createStackNavigator();
export default function ResultatenStackScreen() {
  return (
    <ResultatenStack.Navigator screenOptions={{ headerShown: false }}>
      <ResultatenStack.Screen name="ResultsStack" component={ResultScreen} />
      <ResultatenStack.Screen name="Toelichting" component={ToelichtingScreen} />
    </ResultatenStack.Navigator>
  );
}
