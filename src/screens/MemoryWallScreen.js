import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { getMemories } from '../utils/storage';
import MemoryCard from '../components/MemoryCard';

export default function MemoryWallScreen({ navigation }) {
    const [memories, setMemories] = useState([]);

    useEffect(() => {
        const load = async () => setMemories(await getMemories());
        navigation.addListener('focus', load);
    }, [navigation]);

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <FlatList data={memories} keyExtractor={(item) => item.id} renderItem={({ item }) => <MemoryCard memory={item} />} />

            <TouchableOpacity onPress={() => navigation.navigate('AddMemory')} style={{ padding: 15, backgroundColor: '#76A8F7', borderRadius: 5 }}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Add Memory</Text>
            </TouchableOpacity>
        </View>
    );
}
