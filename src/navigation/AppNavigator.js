import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/main/home/HomeScreen';
import MemoryWallScreen from '../screens/main/memory/MemoryWallScreen';
import JournalScreen from '../screens/main/journal/JournalScreen';
import CalmScreen from '../screens/main/calm/CalmScreen';
import AddMemoryScreen from '../screens/main/memory/AddMemoryScreen';

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
