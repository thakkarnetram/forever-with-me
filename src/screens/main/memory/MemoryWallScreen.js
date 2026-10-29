import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MemoryCard from '../../../components/MemoryCard';
import {colors} from '../../../utils/Colors';
import AppGradient from '../../../components/AppGradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MemoryWallScreen = ({ navigation }) =>  {
    const [memories, setMemories] = useState([]);
    const navigateToAddMemory = () => {
      navigation.navigate('AddMemory')
    }
    return (
      <AppGradient style={styles.backGround}>
        <SafeAreaView style={styles.safeAreaContainer}>
          <View style={styles.container}>
            <Text style={styles.headerText}>
              Memory Wall
            </Text>
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <FlatList data={memories} keyExtractor={(item) => item.id} renderItem={({ item }) => <MemoryCard memory={item} />} />

            <TouchableOpacity
              onPress={navigateToAddMemory}
              style={{ padding: 15, backgroundColor: '#76A8F7', borderRadius: 5 }}>
              <Text style={{ color: '#fff', textAlign: 'center' }}>Add Memory</Text>
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
})

export default MemoryWallScreen;
