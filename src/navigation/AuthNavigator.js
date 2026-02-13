import React from 'react';
import OnBoardScreen from '../screens/onboard/OnBoardScreen';
import OverviewScreen from '../screens/onboard/OverviewScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Auth = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen name="OnBoard" component={OnBoardScreen} options={{ headerShown: false }} />
      <Auth.Screen name="Overview" component={OverviewScreen} options={{ headerShown: false }} />
      <Auth.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
    </Auth.Navigator>
  )
}

export default AuthNavigator;
