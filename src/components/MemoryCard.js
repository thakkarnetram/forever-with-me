// src/components/MemoryCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function MemoryCard({ memory }) {
    return (
        <View style={styles.card}>
            {memory.image && <Image source={{ uri: memory.image }} style={styles.image} />}
            <Text style={styles.text}>{memory.text}</Text>
            <Text style={styles.date}>{memory.date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: '#fff', padding: 15, marginVertical: 10, borderRadius: 10 },
    image: { width: '100%', height: 150, borderRadius: 10, marginBottom: 10 },
    text: { fontSize: 16, marginBottom: 5 },
    date: { fontSize: 12, color: 'gray' },
});
