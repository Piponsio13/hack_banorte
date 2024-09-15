import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../app/index';
import MainScreen from '../app/mainScreen';
import BNStarButton from '../app/BNStarButton';
import matchCards from '../app/matchCards';
import BNCard from '../app/BNCard';

const Stack = createStackNavigator();

export default function App() {

  return (
      <Stack.Navigator>
        <Stack.Screen name="index" component={index} />
        <Stack.Screen name="mainScreen" component={mainScreen} />
      </Stack.Navigator>
  );
}