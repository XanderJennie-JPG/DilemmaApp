import { createStackNavigator } from "@react-navigation/stack";
import UitlegScreen from "../screens/UitlegScreen";
import HomeScreen from "../screens/HomeScreen";

const HomeStack = createStackNavigator();
export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeStack" component={HomeScreen} />
      <HomeStack.Screen name="Uitleg" component={UitlegScreen} />
    </HomeStack.Navigator>
  );
}
