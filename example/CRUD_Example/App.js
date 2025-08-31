import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import TodosScreen from './src/screens/TodosScreen';
import TodoFormScreen from './src/screens/TodoFormScreen';
import PostListScreen from './src/screens/PostListScreen';
import PostDetailScreen from './src/screens/PostDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShadowVisible: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Todos"
          component={TodosScreen}
          options={{ title: 'Local Todos (AsyncStorage)' }}
        />
        <Stack.Screen
          name="TodoForm"
          component={TodoFormScreen}
          options={{ title: 'Add / Edit Todo' }}
        />
        <Stack.Screen
          name="Posts"
          component={PostListScreen}
          options={{ title: 'Posts (Web API)' }}
        />
        <Stack.Screen
          name="PostDetail"
          component={PostDetailScreen}
          options={({ route }) => ({ title: `Post #${route.params?.id ?? ''}` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
