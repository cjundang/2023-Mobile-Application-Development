import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchPost } from '../services/api';

export default function PostDetailScreen({ route }) {
  const id = route.params?.id;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    fetchPost(id)
      .then(data => { if (active) setPost(data); })
      .catch(e => { if (active) setError(String(e.message || e)); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text style={{ marginTop: 8 }}>Loading…</Text>
      </View>
    );
  }

  if (error) {
    return <Text style={styles.error}>Error: {error}</Text>;
  }

  if (!post) {
    return <Text style={styles.error}>Not found.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 10 },
  body: { color: '#374151', lineHeight: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { color: '#b91c1c', padding: 16 },
});
