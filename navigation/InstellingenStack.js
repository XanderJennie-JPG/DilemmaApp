import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/SettingsScreen";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import AlgemeneVoorwaarden from "../screens/AlgemeneVoorwaarden";
import ChooseDepartment from "../screens/ChooseDepartment";

const InstellingenStack = createStackNavigator();
export default function InstellingenStackScreen() {
  return (
    <InstellingenStack.Navigator screenOptions={{ headerShown: false }}>
      <InstellingenStack.Screen
        name="InstellingenStack"
        component={SettingsScreen}
      />
      <InstellingenStack.Screen name="Afdeling" component={ChooseDepartment} />
      <InstellingenStack.Screen name="Privacy" component={PrivacyPolicy} />
      <InstellingenStack.Screen
        name="Voorwaarden"
        component={AlgemeneVoorwaarden}
      />
    </InstellingenStack.Navigator>
  );
}
