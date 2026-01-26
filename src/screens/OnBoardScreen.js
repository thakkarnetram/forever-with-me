import React, {useEffect} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OnBoardScreen = () => {
    // this screen would be the entry point of the app
    const navigation = useNavigation();
    useEffect(() => {

    }, []);
    return (
        <View>
            <Text>
                On Board Screen
            </Text>
        </View>
    )
}
