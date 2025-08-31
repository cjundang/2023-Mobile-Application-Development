### Week 11: Data Storage and Local Storage Options

---

#### Lecture Notes

---

### Part 1: AsyncStorage for Local Data Storage

#### 1.1 Using AsyncStorage

- **AsyncStorage**:
  - AsyncStorage is an asynchronous, unencrypted, and persistent key-value storage solution for React Native.
  - Useful for storing small amounts of data, such as user preferences, tokens, or small notes.
  - **Basic Methods**:
    - `setItem`: Saves data with a specific key.
    - `getItem`: Retrieves data by key.
    - `removeItem`: Deletes data by key.

  - **Installation**:
    ```bash
    npm install @react-native-async-storage/async-storage
    ```

- **Example Usage**:
  ```javascript
  import AsyncStorage from '@react-native-async-storage/async-storage';

  const saveData = async (key, value) => {
      try {
          await AsyncStorage.setItem(key, value);
      } catch (error) {
          console.error("Error saving data:", error);
      }
  };

  const getData = async (key) => {
      try {
          const value = await AsyncStorage.getItem(key);
          return value;
      } catch (error) {
          console.error("Error retrieving data:", error);
      }
  };
  ```

##### Programming Task:
Create a **Notes App** where notes are saved in AsyncStorage.

1. **Implementation**:
   - Allow users to add, view, and save notes locally using AsyncStorage.
   - Use `setItem` to store notes and `getItem` to retrieve them.

   ```javascript
   import React, { useState, useEffect } from 'react';
   import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
   import AsyncStorage from '@react-native-async-storage/async-storage';

   function NotesApp() {
       const [note, setNote] = useState('');
       const [notes, setNotes] = useState([]);

       useEffect(() => {
           const loadNotes = async () => {
               const savedNotes = await AsyncStorage.getItem('notes');
               if (savedNotes) setNotes(JSON.parse(savedNotes));
           };
           loadNotes();
       }, []);

       const addNote = async () => {
           const updatedNotes = [...notes, note];
           setNotes(updatedNotes);
           setNote('');
           await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
       };

       return (
           <View style={styles.container}>
               <TextInput
                   style={styles.input}
                   placeholder="Enter note"
                   value={note}
                   onChangeText={setNote}
               />
               <Button title="Add Note" onPress={addNote} />
               <FlatList
                   data={notes}
                   keyExtractor={(item, index) => index.toString()}
                   renderItem={({ item }) => <Text style={styles.note}>{item}</Text>}
               />
           </View>
       );
   }

   const styles = StyleSheet.create({
       container: { padding: 20 },
       input: { borderBottomWidth: 1, marginBottom: 10 },
       note: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd' }
   });

   export default NotesApp;
   ```

---

### Part 2: Database Integration Basics with SQLite

#### 2.1 Using SQLite for Local Database Storage

- **SQLite in React Native**:
  - SQLite is a lightweight, relational database engine suitable for offline storage in mobile applications.
  - Use the `react-native-sqlite-storage` library for easy integration.
  - **Installation**:
    ```bash
    npm install react-native-sqlite-storage
    ```
  
- **Basic SQLite Operations**:
  - **Connecting to the Database**: Open or create an SQLite database.
  - **CRUD Operations**:
    - Create, Read, Update, Delete operations are managed with SQL queries.

- **Example**: Storing user information in SQLite.

  ```javascript
  import React, { useEffect } from 'react';
  import { View, Text } from 'react-native';
  import SQLite from 'react-native-sqlite-storage';

  const db = SQLite.openDatabase({ name: 'userDB.db', location: 'default' });

  function UserDatabase() {
      useEffect(() => {
          db.transaction(tx => {
              tx.executeSql(
                  "CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER);"
              );
          });
      }, []);

      const addUser = (name, age) => {
          db.transaction(tx => {
              tx.executeSql("INSERT INTO Users (name, age) VALUES (?, ?);", [name, age]);
          });
      };

      return (
          <View>
              <Text>User Database</Text>
              {/* Implement UI for adding and displaying users */}
          </View>
      );
  }

  export default UserDatabase;
  ```

##### Programming Task:
Set up a **SQLite database** and store user information.

1. **Implementation**:
   - Create a SQLite table for users.
   - Insert, retrieve, and display user data in the app.

---

### Part 3: Reading and Writing Data

#### 3.1 Managing Local Data with AsyncStorage or SQLite

- **Updating Data in AsyncStorage**:
  - Use `setItem` with updated data, and reload the view after every update.
- **Updating Data in SQLite**:
  - Use SQL `UPDATE` and `DELETE` commands to modify and remove entries.

##### Programming Task:
Update the **Notes App** to allow deleting and updating notes.

1. **Implementation**:
   - Add a delete button for each note to remove it from AsyncStorage.
   - Add functionality to edit notes, then save changes to AsyncStorage.

   ```javascript
   import React, { useState, useEffect } from 'react';
   import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
   import AsyncStorage from '@react-native-async-storage/async-storage';

   function NotesApp() {
       const [note, setNote] = useState('');
       const [notes, setNotes] = useState([]);
       const [editingIndex, setEditingIndex] = useState(null);

       useEffect(() => {
           const loadNotes = async () => {
               const savedNotes = await AsyncStorage.getItem('notes');
               if (savedNotes) setNotes(JSON.parse(savedNotes));
           };
           loadNotes();
       }, []);

       const saveNotes = async (updatedNotes) => {
           setNotes(updatedNotes);
           await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
       };

       const addOrEditNote = () => {
           if (editingIndex !== null) {
               const updatedNotes = notes.map((n, i) => (i === editingIndex ? note : n));
               saveNotes(updatedNotes);
               setEditingIndex(null);
           } else {
               saveNotes([...notes, note]);
           }
           setNote('');
       };

       const deleteNote = (index) => {
           const updatedNotes = notes.filter((_, i) => i !== index);
           saveNotes(updatedNotes);
       };

       const startEditing = (text, index) => {
           setNote(text);
           setEditingIndex(index);
       };

       return (
           <View style={styles.container}>
               <TextInput
                   style={styles.input}
                   placeholder="Enter note"
                   value={note}
                   onChangeText={setNote}
               />
               <Button title={editingIndex !== null ? "Edit Note" : "Add Note"} onPress={addOrEditNote} />
               <FlatList
                   data={notes}
                   keyExtractor={(item, index) => index.toString()}
                   renderItem={({ item, index }) => (
                       <View style={styles.noteContainer}>
                           <Text style={styles.note}>{item}</Text>
                           <View style={styles.buttons}>
                               <Button title="Edit" onPress={() => startEditing(item, index)} />
                               <Button title="Delete" onPress={() => deleteNote(index)} />
                           </View>
                       </View>
                   )}
               />
           </View>
       );
   }

   const styles = StyleSheet.create({
       container: { padding: 20 },
       input: { borderBottomWidth: 1, marginBottom: 10 },
       noteContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 },
       buttons: { flexDirection: 'row', gap: 5 },
       note: { flex: 1, padding: 10, borderBottomWidth: 1, borderColor: '#ddd' }
   });

   export default NotesApp;
   ```

---

### Summary

- **AsyncStorage**: For storing small key-value data locally.
- **SQLite**: For more complex data storage using a relational database.
- **Data Management**: Reading, updating, and deleting local data in AsyncStorage or SQLite.

#### Next Steps

1. Explore encrypting sensitive data in AsyncStorage.
2. Implement pagination or searching for large SQLite datasets.
