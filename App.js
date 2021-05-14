import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Components/Home";
import { AddEntry } from "./Components/AddEntry";
import ViewTask from "./Components/ViewTask";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Test" component={AddEntry} />
        <Stack.Screen name="View Task" component={ViewTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
