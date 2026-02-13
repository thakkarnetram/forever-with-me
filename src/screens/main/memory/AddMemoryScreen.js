import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { saveMemory } from '../../../utils/Storage';

const  AddMemoryScreen = ({ navigation }) => {
    const [text, setText] = useState('');

    const addMemory = async () => {
        await saveMemory({
            id: Date.now().toString(),
            text,
            date: new Date().toLocaleString(),
        });
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Write a memory..." value={text} onChangeText={setText} multiline style={styles.input} />
            <Button title="Save" onPress={addMemory} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 6,
        height: 100,
        marginBottom: 10
    },
});

export default AddMemoryScreen;
