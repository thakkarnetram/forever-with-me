import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppGradient from '../components/AppGradient';
import {colors} from '../utils/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';

const OverviewScreen = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('Login');
  };
  return (
    <AppGradient style={styles.backGround}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>What you'll find here</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardOne}>
            <Text style={styles.cardOneHeader}>Preserve {'\n'}memories</Text>
            <Text style={styles.cardOneDesc}>
              Moments,words and {'\n'}reminders that matter
            </Text>
          </View>
          <View style={styles.cardTwo}>
            <Text style={styles.cardTwoHeader}>
              Write what they {'\n'}used to say
            </Text>
            <Text style={styles.cardTwoDesc}>
              Keep their words close {'\n'}and return to them
            </Text>
          </View>
          <View style={styles.cardThree}>
            <Text style={styles.cardThreeHeader}>
              Return when it {'\n'}gets heavy
            </Text>
            <Text style={styles.cardThreeDesc}>
              A quiet space to pause{'\n'}and breathe
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleNavigation}>
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
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('6%'),
  },
  headerContainer: {
    alignItems: 'flex-start',
    marginBottom:hp('2%')
  },
  headerText: {
    color: colors.dark.silentTextColor,
    fontSize: hp('3%'),
    textAlign: 'left',
    lineHeight: hp('4%'),
    letterSpacing:2,
  },
  cardContainer: {
    gap:hp('3%'),
  },
  cardOne: {
    backgroundColor: colors.dark.cardBackgroundColor,
    width:wp('55%'),
    borderRadius:10,
    padding:wp('5%'),
    height:hp('20%'),
  },
  cardOneHeader: {
    color: colors.dark.cardTextColor,
    fontSize:hp('2.5%'),
    marginBottom:hp('1.5%'),
  },
  cardOneDesc: {
    color: colors.dark.cardTextColor,
    fontSize:hp('2%'),
  },
  cardTwo: {
    backgroundColor: colors.dark.cardBackgroundColor,
    width:wp('55%'),
    borderRadius:10,
    padding:wp('5%'),
    height:hp('20%'),
    alignSelf: 'flex-end',
  },
  cardTwoHeader: {
    color: colors.dark.cardTextColor,
    fontSize:hp('2.5%'),
    marginBottom:hp('1.5%'),
  },
  cardTwoDesc: {
    color: colors.dark.cardTextColor,
    fontSize:hp('2%'),
  },
  cardThree: {
    backgroundColor: colors.dark.cardBackgroundColor,
    width:wp('55%'),
    borderRadius:10,
    padding:wp('5%'),
    height:hp('20%'),
    alignSelf: 'flex-start',
  },
  cardThreeHeader: {
    color: colors.dark.cardTextColor,
    fontSize:hp('2.5%'),
    marginBottom:hp('1.5%'),
  },
  cardThreeDesc: {
    color: colors.dark.cardTextColor,
    fontSize:hp('2%'),
  },
  buttonContainer: {
    alignItems: 'center',
    position:'relative',
    marginTop:hp('5%'),
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

export default OverviewScreen;
