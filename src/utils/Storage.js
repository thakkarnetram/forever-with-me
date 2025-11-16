import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveMemory = async (memory) => {
    const memories = await getMemories();
    memories.push(memory);
    await AsyncStorage.setItem('memories', JSON.stringify(memories));
};

export const getMemories = async () => {
    const memories = await AsyncStorage.getItem('memories');
    return memories ? JSON.parse(memories) : [];
};

export const saveJournalEntry = async (entry) => {
    const entries = await getJournalEntries();
    entries.push(entry);
    await AsyncStorage.setItem('journals', JSON.stringify(entries));
};

export const getJournalEntries = async () => {
    const entries = await AsyncStorage.getItem('journals');
    return entries ? JSON.parse(entries) : [];
};
