import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native';
import { fetchPosts } from '../services/api';

export default function PostListScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    setError('');
    setLoading(true);
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (e) {
      setError(String(e.message || e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => navigation.navigate('PostDetail', { id: item.id })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text numberOfLines={2} style={styles.body}>{item.body}</Text>
    </TouchableOpacity>
  );

  if (loading && !posts.length) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text style={{ marginTop: 8 }}>Loading…</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {!!error && <Text style={styles.error}>Error: {error}</Text>}
      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={load} />}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#fff', borderRadius: 12, padding: 14,
    marginBottom: 12, borderWidth: 1, borderColor: '#e5e7eb'
  },
  title: { fontWeight: '700', marginBottom: 6 },
  body: { color: '#374151' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { color: '#b91c1c', paddingHorizontal: 16, paddingTop: 8 },
});
