import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Notes, Start, Confirm, Main, Scan, SelectPerson, SelectTool, Share, SixHats } from "@@screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="StartScreen"
                  component={Start}
              />
              <Stack.Screen
                  name="AllNotesScreen"
                  component={Notes}
              />
              <Stack.Screen
                  name="ConfirmScreen"
                  component={Confirm}
              />
              <Stack.Screen
                  name="MainScreen"
                  component={Main}
                  options={{ title: "Team" }}
              />
              <Stack.Screen
                  name="ScanScreen"
                  component={Scan}
                  options={{ title: "Scan QR-Code" }}
              />
              <Stack.Screen
                  name="SelectPersonScreen"
                  component={SelectPerson}
                  options={{ title: "6 Hats" }}
              />
              <Stack.Screen
                  name="SelectToolScreen"
                  component={SelectTool}
                  options={{ title: "Select Tool" }}
              />
              <Stack.Screen
                  name="ShareScreen"
                  component={Share}
                  options={{ title: "Invite People" }}
              />
              <Stack.Screen
                  name="SixHatsScreen"
                  component={SixHats}
                  options={{ title: "6 Hats" }}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
