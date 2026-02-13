import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils/Colors';
import AppGradient from '../../components/AppGradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';

const OnBoardScreen = () => {
  // this screen would be the entry point of the app
  const navigation = useNavigation();
  const navigateToOverviewScreen = () => {
    navigation.replace('Overview');
  };
  return (
    <AppGradient style={styles.backGround}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Some memories deserve{'\n'}a place to stay
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToOverviewScreen}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </AppGradient>
  );
};

const styles = StyleSheet.create({
  backGround: {
    display: 'flex',
  },
  safeAreaContainer: {
    paddingHorizontal: wp('8%'),
    paddingVertical: hp('6%'),
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignItems: 'flex-start',
    marginTop:hp('25%'),
  },
  headerText: {
    color: colors.dark.primaryTextColor,
    fontSize: hp('3%'),
    textAlign: 'left',
    lineHeight: hp('4%'),
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop:hp('40%'),
    position:'relative',
  },
  button: {
    backgroundColor: colors.dark.primaryButtonColor,
    width: wp('80%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: colors.dark.primaryTextColor,
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
});

export default OnBoardScreen;
