import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { Register } from "../screens/Register";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={Details} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}
