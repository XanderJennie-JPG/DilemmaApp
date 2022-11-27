import { createStackNavigator } from "@react-navigation/stack";
import ResultScreen from "../screens/ResultsScreen";

const ResultatenStack = createStackNavigator();
export default function ResultatenStackScreen() {
  return (
    <ResultatenStack.Navigator screenOptions={{ headerShown: false }}>
      <ResultatenStack.Screen name="ResultsStack" component={ResultScreen} />
      <ResultatenStack.Screen name="Toelichting" component={ResultScreen} />
    </ResultatenStack.Navigator>
  );
}
