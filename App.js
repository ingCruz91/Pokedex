import 'react-native-gesture-handler';
import React from 'react';
import MainScreen from './src/screens/MainScreen';
import PokeDetail from './src/screens/PokeDetail';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Details" component={PokeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
