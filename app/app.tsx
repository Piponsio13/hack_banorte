import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../app/index';
import MainScreen from '../app/mainScreen';
import BNStarButton from '../app/BNStarButton';
import {matchCards} from '../app/matchCards'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="BNStarButton" component={BNStarButton} />
        <Stack.Screen name="BNCard" component={BNCard} />
        <Stack.Screen name="MatchCards" component={matchCards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}