import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CalmScreen() {
    const [timer, setTimer] = useState(15);

    const startBreathing = () => {
        let seconds = 15;
        const interval = setInterval(() => {
            seconds--;
            setTimer(seconds);
            if (seconds === 0) clearInterval(interval);
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Take a deep breath</Text>
            <Text style={styles.timer}>{timer}</Text>
            <Button title="Start" onPress={startBreathing} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginBottom: 15
    },
    timer: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20
    },
});
