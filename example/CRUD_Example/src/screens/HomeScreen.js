import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Teaching Starter</Text>
      <Text style={styles.subtitle}>
        CRUD + Navigation (Stack) + Web API + AsyncStorage
      </Text>

      <TouchableOpacity
        style={[styles.card, styles.cardPrimary]}
        onPress={() => navigation.navigate('Todos')}
      >
        <Text style={styles.cardTitle}>Local Todos</Text>
        <Text style={styles.cardDesc}>FlatList • TextInput • AsyncStorage CRUD</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, styles.cardSecondary]}
        onPress={() => navigation.navigate('Posts')}
      >
        <Text style={styles.cardTitle}>API Posts</Text>
        <Text style={styles.cardDesc}>Fetch • List • Navigate with params</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, paddingTop: 48,
  },
  title: {
    fontSize: 22, fontWeight: '800',
  },
  subtitle: {
    color: '#6b7280', marginTop: 4, marginBottom: 16,
  },
  card: {
    padding: 16, borderRadius: 14, marginTop: 16,
  },
  cardPrimary: { backgroundColor: '#ecfeff', },
  cardSecondary: { backgroundColor: '#faf5ff', },
  cardTitle: { fontSize: 18, fontWeight: '700' },
  cardDesc: { color: '#374151', marginTop: 6 },
});
