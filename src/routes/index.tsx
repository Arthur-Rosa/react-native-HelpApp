import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { SignIn } from "../screens/SignIn";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
