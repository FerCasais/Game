import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameOver from "../screens/gameOver";
import ViewGame from "../screens/ViewGame";
import Home from "../screens/home";

const Stack = createNativeStackNavigator();

const GameNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="MessiGame" component={Home} />
        <Stack.Screen name="ViewGame" component={ViewGame} />
        <Stack.Screen name="GameOver" component={GameOver} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default GameNavigator;
