import React, {useEffect} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OverviewScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home")
    },5000);
  }, []);
  return (
    <View>
      <Text>
        Overview Screen
      </Text>
    </View>
  )
}

export default OverviewScreen;
