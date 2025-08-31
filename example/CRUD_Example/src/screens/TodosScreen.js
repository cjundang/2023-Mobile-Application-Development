import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, RefreshControl } from 'react-native';
import { getTodos, deleteTodo } from '../storage/todoStorage';

export default function TodosScreen({ navigation }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getTodos();
      setTodos(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const unsub = navigation.addListener('focus', load);
    return unsub;
  }, [navigation, load]);

  const onDelete = (id) => {
    Alert.alert('Delete', 'Delete this item?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete', style: 'destructive', onPress: async () => {
          const updated = await deleteTodo(id);
          setTodos(updated);
        }
      }
    ]);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('TodoForm', { mode: 'edit', id: item.id })}
      style={styles.row}
    >
      <Text style={styles.rowTitle}>{item.title}</Text>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Todos</Text>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate('TodoForm', { mode: 'create' })}
        >
          <Text style={styles.addTxt}>+ Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={load} />}
        ListEmptyComponent={
          !loading ? <Text style={styles.empty}>No items. Tap “+ Add”.</Text> : null
        }
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16, paddingVertical: 12,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  headerTitle: { fontSize: 18, fontWeight: '700' },
  addBtn: { backgroundColor: '#22c55e', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  addTxt: { color: 'white', fontWeight: '700' },
  row: {
    backgroundColor: '#fff', borderRadius: 12, padding: 14,
    marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderWidth: 1, borderColor: '#e5e7eb'
  },
  rowTitle: { fontSize: 16 },
  delete: { color: '#ef4444', fontWeight: '600' },
  empty: { textAlign: 'center', marginTop: 48, color: '#6b7280' },
});
