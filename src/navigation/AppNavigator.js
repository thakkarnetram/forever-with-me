import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MemoryWallScreen from '../screens/MemoryWallScreen';
import JournalScreen from '../screens/JournalScreen';
import CalmScreen from '../screens/CalmScreen';
import AddMemoryScreen from '../screens/AddMemoryScreen';
import OnBoardScreen from '../screens/OnBoardScreen';
import OverviewScreen from '../screens/OverviewScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="OnBoard" component={OnBoardScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Overview" component={OverviewScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Forever With Me" }} />
            <Stack.Screen name="Memories" component={MemoryWallScreen} />
            <Stack.Screen name="AddMemory" component={AddMemoryScreen} options={{ title: "Add Memory" }} />
            <Stack.Screen name="Journal" component={JournalScreen} />
            <Stack.Screen name="Calm" component={CalmScreen} />
        </Stack.Navigator>
    )
}

export default AppNavigator;
