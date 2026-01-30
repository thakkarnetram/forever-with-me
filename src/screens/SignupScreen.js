import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppGradient from '../components/AppGradient';
import { colors } from '../utils/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupScreen = () => {
    const [email, setEmail] = useState()
    const navigation = useNavigation()
    const handleEmail = (input) => {
        setEmail(input);
    }

    const navigateToLogin = () => {
        if(email?.length > 0 ) {
            navigation.navigate('Login')
        }
    }

    return (
        <AppGradient>
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style = {styles.headerContainer}>
                    <Text style = {styles.headerText}>This space is private.</Text>
                </View>
                <View style = {styles.inputContainer}>
                    <TextInput value={email}
                        onChangeText={handleEmail}
                        placeholder='Email'
                        style = {styles.input}
                    />

                </View>
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity style = {styles.button} onPress={navigateToLogin}>
                        <Text style = {styles.buttonText}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </AppGradient>
    )
}

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
        fontSize: hp('2.2%'),
        lineHeight: hp('3%'),
        letterSpacing: wp('0.3%'),
    },

    inputContainer: {
        backgroundColor: '#D9D9D9',
        width: wp('65%'),
        borderRadius: wp('3%'),
        paddingHorizontal: wp('4%'),
        paddingVertical: hp('1.2%'),
    },

    input: {
        fontSize: hp('1.8%'),
        color: '#000000',
    },

    buttonContainer: {
        position: 'absolute',
        bottom: hp('6%'),
        alignSelf: 'center',
    },

    button: {
        backgroundColor: '#8A97B2',
        width: wp('80%'),
        height: hp('5.5%'),
        borderRadius: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: hp('1.9%'),
        letterSpacing: wp('0.3%'),
    },
});

export default SignupScreen;
