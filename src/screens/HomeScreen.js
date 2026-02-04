import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppGradient from '../components/AppGradient';
import { colors } from '../utils/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen({ navigation }) {
    const navigateToMemoryScreen = () => {
        navigation.navigate('Memories')
    }

    const navigateToJournalScreen = () => {
        navigation.navigate('Journal');
    }

    const navigateToCalmScreen = () => {
        navigation.navigate('Calm');
    }

    return (
        <AppGradient style={styles.backGround}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={styles.container}>
                    <Text style={styles.headerText}>Forever With Me</Text>
                    <Text style={styles.subHeaderText}>Memories don't leave. {'\n'}We carry them.</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.card} onPress = {navigateToMemoryScreen}>
                        <Text style={styles.cardTitle}>Memory Wall</Text>
                        <Text style={styles.cardDescription}>A place for moments. {'\n'}and words that matter.</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.card} onPress={navigateToJournalScreen}>
                        <Text style={styles.cardTitle}>Shared Journal</Text>
                        <Text style={styles.cardDescription}>Write when you need to.</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.card} onPress={navigateToCalmScreen}>
                        <Text style={styles.cardTitle}>Calm Corner</Text>
                        <Text style={styles.cardDescription}>Return when it {'\n'}gets heavy.</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </AppGradient>

    );
}

const styles = StyleSheet.create({
    backGround: {
        display: 'flex',
    },
    safeAreaContainer: {
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('6%'),
    },
    container: {
        alignItems: 'flex-start',
        marginBottom:hp('2%'),
    },
    headerText: {
        fontSize: hp('3.2%'),
        fontWeight: '600',
        color:colors.dark.silentTextColor,
        marginBottom: hp('1.2%'),
    },
    subHeaderText: {
        fontSize: hp('2%'),
        lineHeight: hp('2.6%'),
        color: colors.dark.silentTextColor,
    },
    card: {
        width: '80%',
        backgroundColor:colors.dark.cardBackgroundColor,
        borderRadius: wp('2%'),
        paddingVertical: hp('7%'),
        paddingHorizontal: wp('5%'),
        marginBottom: hp('2.2%'),
        shadowColor: '#000',
        shadowOffset: {width:0, height:6},
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 6,
    },
    cardTitle: {
        fontSize: hp('2.75%'),
        fontWeight: '700',
        color: colors.dark.silentButtonTextHeader,
        marginBottom:hp('0.8%'),
    },
    cardDescription: {
        fontSize: hp('1.8%'),
        lineHeight:hp('2.4%'),
        color: colors.dark.silentTextColor,
    },
});
