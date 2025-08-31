import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@todos_v1';

/** Load all todos (array of {id: string, title: string}) */
export async function getTodos() {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

/** Persist full list */
export async function saveTodos(list) {
  await AsyncStorage.setItem(KEY, JSON.stringify(list));
}

/** Add a new todo and persist */
export async function addTodo(title) {
  const list = await getTodos();
  const newItem = { id: Date.now().toString(), title: title.trim() };
  const updated = [...list, newItem];
  await saveTodos(updated);
  return updated;
}

/** Update an item by id */
export async function updateTodo(id, title) {
  const list = await getTodos();
  const updated = list.map(t => (t.id === id ? { ...t, title: title.trim() } : t));
  await saveTodos(updated);
  return updated;
}

/** Remove an item by id */
export async function deleteTodo(id) {
  const list = await getTodos();
  const updated = list.filter(t => t.id !== id);
  await saveTodos(updated);
  return updated;
}
