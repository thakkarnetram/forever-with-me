import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../utils/Colors';

const OnBoardScreen = () => {
  // this screen would be the entry point of the app
  const navigation = useNavigation();
  // useEffect(() => {
  //   setTimeout( () => {
  //     navigation.navigate('Overview');
  //   }, 5000);
  // }, [navigation]);

  const navigateToOverviewScreen = () => {
    navigation.replace('Overview');
  };
  return (
    <LinearGradient
      colors={[colors.primaryColor, colors.secondaryColor]}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      style={styles.backGround}>
      <View>
        <Text style={styles.headerText}>
          Some memories deserve{'\n'}a place to stay
        </Text>
        <View>
          <TouchableOpacity style={styles.buttonContainer} onPress={navigateToOverviewScreen}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: colors.primaryTextColor,
    fontSize: 24,
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor:colors.primaryButtonColor,
    width: 300,
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    marginTop:100,
    borderRadius:10,
  },
  buttonText:{
    color:colors.primaryTextColor,
  },
});

export default OnBoardScreen;
