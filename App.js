import 'react-native-gesture-handler';
import React from 'react';
import MainScreen from './src/screens/MainScreen/MainScreen';
import PokeDetail from './src/screens/PokeDetail/PokeDetail';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Stack = createStackNavigator();

export const App = () => {
  const PokeHeader = () => {
    return (
      <Image
        style={{width: wp('50%'), height: hp('8%')}}
        source={require('./src/resources/img/Pokédex_logo.png')}
      />
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Back"
          component={MainScreen}
          options={{headerTitle: props => <PokeHeader {...props} />}}
        />
        <Stack.Screen
          name="Details"
          component={PokeDetail}
          options={{headerTitle: props => <PokeHeader {...props} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
