import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppGradient from '../../components/AppGradient';
import {colors} from '../../utils/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {ROOT_URL} from '../../utils/Constant';
import {AuthContext} from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = () => {
  const [email, setEmail] = useState();
  const [otp, setOtp] = useState();
  const [requestOtp, setRequestOtp] = useState();
  const navigation = useNavigation();
  const [token,setToken] = useState();
  const {login} = useContext(AuthContext);

  const handleEmail = input => {
    setEmail(input);
  };
  const handleOtp = input => {
    setOtp(input);
  };
  const handleUserAuth = async () => {
    try {
      const res = await fetch(`${ROOT_URL}/api/v1/start-auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setRequestOtp(true);
        Toast.show({
          text1: 'OTP sent to email',
          text2: 'Please enter otp',
          type: 'success',
        });
      } else {
        Toast.show({
          text1: 'Please try again',
          text2: data.message,
          type: 'error',
        });
      }
    } catch (err) {
      Toast.show({
        text1: 'Something went wrong',
        text2: err,
        type: 'error',
      });
    }
  };

  const handleUserVerification = async () => {
    try {
      const res = await fetch(`${ROOT_URL}/api/v1/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          otp,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        await AsyncStorage.setItem('token',data.token);
        setToken(data.token);
        await login(data.token);
      } else {
        Toast.show({
          text1: 'Please try again',
          text2: data.message,
          type: 'error',
        });
      }
    } catch (err) {
      Toast.show({
        text1: 'Something went wrong',
        text2: err,
        type: 'error',
      });
    }
  };

  return (
    <AppGradient>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>This space is private.</Text>
        </View>
        <View style={styles.inputEmailContainer}>
          <TextInput
            value={email}
            onChangeText={handleEmail}
            placeholder="Email"
            style={styles.inputEmail}
            placeholderTextColor={colors.dark.userInputTextColor}
          />
        </View>
        {requestOtp ? (
          <View style={styles.inputOtpContainer}>
            <TextInput
              value={otp}
              onChangeText={handleOtp}
              placeholder="Otp"
              style={styles.inputOtp}
              placeholderTextColor={colors.dark.userInputTextColor}
            />
          </View>
        ) : (
          <></>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={requestOtp ? handleUserVerification : handleUserAuth}>
            <Text style={styles.buttonText}>
              {requestOtp ? 'Continue' : 'Get Otp'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </AppGradient>
  );
};

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },

  safeAreaContainer: {
    flex: 1,
    paddingHorizontal: wp('8%'),
    paddingTop: hp('6%'),
  },

  headerContainer: {
    marginBottom: hp('3%'),
  },

  headerText: {
    color: colors.dark.silentTextColor,
    fontSize: hp('3%'),
    textAlign: 'left',
    lineHeight: hp('4%'),
    letterSpacing: 1,
  },

  inputEmailContainer: {
    backgroundColor: colors.dark.userTextInputBgColor,
    width: wp('80%'),
    borderRadius: wp('3%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.2%'),
  },

  inputEmail: {
    fontSize: hp('1.8%'),
    color: colors.dark.userInputTextColor,
  },

  inputOtpContainer: {
    backgroundColor: colors.dark.userTextInputBgColor,
    width: wp('80%'),
    borderRadius: wp('3%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.2%'),
    marginTop: hp('2.5%'),
  },

  inputOtp: {
    fontSize: hp('1.8%'),
    color: colors.dark.userInputTextColor,
  },

  buttonContainer: {
    position: 'absolute',
    bottom: hp('6%'),
    alignSelf: 'center',
  },

  button: {
    backgroundColor: colors.dark.primaryButtonColor,
    width: wp('80%'),
    height: hp('6%'),
    borderRadius: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.dark.primaryTextColor,
    fontSize: hp('1.9%'),
    letterSpacing: wp('0.3%'),
  },
});

export default SignupScreen;
