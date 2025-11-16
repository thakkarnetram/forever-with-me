import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forever With Us</Text>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Memories')}>
                <Text style={styles.cardText}>Memory Wall</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Journal')}>
                <Text style={styles.cardText}>Shared Journal</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Calm')}>
                <Text style={styles.cardText}>Calm Corner</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F4F5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 40
    },
    card: { width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 2
    },
    cardText: {
        fontSize: 18,
        textAlign: 'center'
    }
});
