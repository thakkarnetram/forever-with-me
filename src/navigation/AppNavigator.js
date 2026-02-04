import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MemoryWallScreen from '../screens/MemoryWallScreen';
import JournalScreen from '../screens/JournalScreen';
import CalmScreen from '../screens/CalmScreen';
import AddMemoryScreen from '../screens/AddMemoryScreen';

const App = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <App.Navigator>
      <App.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown:false}}
      />
      <App.Screen name="Memories" component={MemoryWallScreen} />
      <App.Screen
        name="AddMemory"
        component={AddMemoryScreen}
        options={{title: 'Add Memory'}}
      />
      <App.Screen name="Journal" component={JournalScreen} />
      <App.Screen name="Calm" component={CalmScreen} />
    </App.Navigator>
  );
};

export default AppNavigator;
