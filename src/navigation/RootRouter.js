import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {AuthContext,AuthProvider} from '../context/AuthContext';

const RouterContent = () => {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
  )
}

const RootRouter = () => (
  <AuthProvider>
    <>
    <RouterContent/>
    </>
  </AuthProvider>
)

export default RootRouter;
