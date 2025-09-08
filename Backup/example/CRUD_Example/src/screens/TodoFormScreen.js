import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { addTodo, getTodos, updateTodo } from '../storage/todoStorage';

export default function TodoFormScreen({ route, navigation }) {
  const mode = route.params?.mode ?? 'create';
  const id = route.params?.id ?? null;
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (mode === 'edit' && id) {
      // Load existing value from storage
      getTodos().then(list => {
        const found = list.find(t => t.id === id);
        if (found) setTitle(found.title);
      });
    }
  }, [mode, id]);

  const onSave = async () => {
    const trimmed = title.trim();
    if (!trimmed) {
      Alert.alert('Validation', 'Please enter a title.');
      return;
    }
    if (mode === 'edit' && id) {
      await updateTodo(id, trimmed);
    } else {
      await addTodo(trimmed);
    }
    navigation.goBack(); // pop back to list, which reloads on focus
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Read Chapter 3"
        value={title}
        onChangeText={setTitle}
      />
      <TouchableOpacity style={styles.button} onPress={onSave}>
        <Text style={styles.buttonText}>{mode === 'edit' ? 'Update' : 'Add'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontWeight: '700', marginBottom: 8 },
  input: {
    borderWidth: 1, borderColor: '#d1d5db', borderRadius: 8, padding: 12,
    marginBottom: 16,
  },
  button: { backgroundColor: '#2563eb', padding: 12, borderRadius: 8 },
  buttonText: { color: 'white', fontWeight: '700', textAlign: 'center' },
});
