import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, Button, Text, StyleSheet } from 'react-native';
import { saveJournalEntry, getJournalEntries } from '../../../utils/Storage';

export default function JournalScreen() {
    const [entry, setEntry] = useState('');
    const [entries, setEntries] = useState([]);

    const loadEntries = async () => setEntries(await getJournalEntries());

    useEffect(() => {
        loadEntries();
    }, []);

    const addEntry = async () => {
        await saveJournalEntry({ id: Date.now(), text: entry, date: new Date().toLocaleString() });
        setEntry('');
        loadEntries();
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="How do you feel today?" value={entry} onChangeText={setEntry} style={styles.input} />
            <Button title="Share" onPress={addEntry} />
            <FlatList data={entries} keyExtractor={(item) => item.id} renderItem={({ item }) => (
                <View style={styles.card}><Text>{item.text}</Text><Text style={styles.date}>{item.date}</Text></View>
            )} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 6,
        marginBottom: 10
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    date: {
        fontSize: 12,
        color: 'gray',
        marginTop: 5
    },
});
