### Week 7: State Management with React Context and Basic API Integration

---

#### Lecture Notes

---

### Part 1: Context API for Global State Management

#### 1.1 Using React Context API

- **React Context API**:
  - Context provides a way to share values (like themes or user info) across components without explicitly passing props down through each level.
  - Consists of two main components:
    - **Provider**: Supplies the value to components.
    - **Consumer** (or `useContext` hook): Retrieves the value within a component.

- **Creating a Context**:
  - Define a context with `React.createContext()`.
  - Use the Provider to wrap components that need access to the shared state.

  ```javascript
  import React, { createContext, useState, useContext } from 'react';

  const ThemeContext = createContext();

  function ThemeProvider({ children }) {
      const [theme, setTheme] = useState('light');

      const toggleTheme = () => {
          setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };

      return (
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
              {children}
          </ThemeContext.Provider>
      );
  }

  function useTheme() {
      return useContext(ThemeContext);
  }

  export { ThemeProvider, useTheme };
  ```

##### Programming Task:
Set up a **Theme Context** to share a theme (dark/light) between multiple components.

1. **Implementation**:
   - Define a context and provider (`ThemeProvider`) to hold theme state and toggle functionality.
   - Use the `useTheme` hook to access the theme and toggle function within child components.

   ```javascript
   import React from 'react';
   import { ThemeProvider, useTheme } from './ThemeContext';
   import { View, Text, Button, StyleSheet } from 'react-native';

   function ThemedComponent() {
       const { theme, toggleTheme } = useTheme();

       return (
           <View style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
               <Text style={styles.text}>Current Theme: {theme}</Text>
               <Button title="Toggle Theme" onPress={toggleTheme} />
           </View>
       );
   }

   const App = () => (
       <ThemeProvider>
           <ThemedComponent />
       </ThemeProvider>
   );

   const styles = StyleSheet.create({
       container: {
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center'
       },
       text: {
           fontSize: 18
       },
       light: {
           backgroundColor: 'white',
           color: 'black'
       },
       dark: {
           backgroundColor: 'black',
           color: 'white'
       }
   });

   export default App;
   ```

---

### Part 2: Fetching Data with `fetch`

#### 2.1 Making API Calls

- **`fetch` API**:
  - JavaScript’s built-in `fetch` function is used to make API requests.
  - Returns a promise that resolves to the `Response` object.
  - **Syntax**:
    ```javascript
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
    ```

- **Handling the Response**:
  - Use `response.json()` to parse JSON data.
  - Handle errors with `catch` to display user-friendly error messages if the request fails.

##### Programming Task:
Fetch and display data from a public API (e.g., jokes or weather).

1. **Implementation**:
   - Use a free API, such as the Joke API (`https://official-joke-api.appspot.com/random_joke`).
   - Display the joke in a simple view.

   ```javascript
   import React, { useEffect, useState } from 'react';
   import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

   function JokeComponent() {
       const [joke, setJoke] = useState(null);
       const [loading, setLoading] = useState(true);

       useEffect(() => {
           fetch('https://official-joke-api.appspot.com/random_joke')
               .then(response => response.json())
               .then(data => {
                   setJoke(data);
                   setLoading(false);
               })
               .catch(error => {
                   console.error("Error:", error);
                   setLoading(false);
               });
       }, []);

       if (loading) {
           return <ActivityIndicator size="large" color="#0000ff" />;
       }

       return (
           <View style={styles.container}>
               <Text style={styles.setup}>{joke.setup}</Text>
               <Text style={styles.punchline}>{joke.punchline}</Text>
           </View>
       );
   }

   const styles = StyleSheet.create({
       container: {
           padding: 20,
           alignItems: 'center'
       },
       setup: {
           fontSize: 18,
           fontWeight: 'bold',
           marginBottom: 10
       },
       punchline: {
           fontSize: 16
       }
   });

   export default JokeComponent;
   ```

---

### Part 3: Displaying API Data

#### 3.1 Mapping Over API Data to Render It in Components

- **Mapping Data to Components**:
  - Use the `map` method to iterate over fetched data and render it in components.
  - Particularly useful when displaying lists of data, such as user profiles, posts, or items.

- **Example**:
  - Fetch a list of jokes and display each joke in a list format.

##### Programming Task:
Display the fetched data in a **list format**.

1. **Implementation**:
   - Fetch multiple jokes using an endpoint like `https://official-joke-api.appspot.com/jokes/ten`.
   - Use `map` to display each joke setup and punchline.

   ```javascript
   import React, { useEffect, useState } from 'react';
   import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

   function JokesList() {
       const [jokes, setJokes] = useState([]);
       const [loading, setLoading] = useState(true);

       useEffect(() => {
           fetch('https://official-joke-api.appspot.com/jokes/ten')
               .then(response => response.json())
               .then(data => {
                   setJokes(data);
                   setLoading(false);
               })
               .catch(error => {
                   console.error("Error:", error);
                   setLoading(false);
               });
       }, []);

       if (loading) {
           return <ActivityIndicator size="large" color="#0000ff" />;
       }

       return (
           <FlatList
               data={jokes}
               keyExtractor={(item) => item.id.toString()}
               renderItem={({ item }) => (
                   <View style={styles.jokeContainer}>
                       <Text style={styles.setup}>{item.setup}</Text>
                       <Text style={styles.punchline}>{item.punchline}</Text>
                   </View>
               )}
           />
       );
   }

   const styles = StyleSheet.create({
       jokeContainer: {
           padding: 15,
           borderBottomWidth: 1,
           borderColor: '#ccc'
       },
       setup: {
           fontSize: 18,
           fontWeight: 'bold',
           marginBottom: 5
       },
       punchline: {
           fontSize: 16
       }
   });

   export default JokesList;
   ```

---

### Summary

- **Context API**: Managing global state (theme) with context, providing state across multiple components.
- **API Integration with `fetch`**: Making HTTP requests, handling responses, and displaying data.
- **Rendering Lists from API Data**: Using `map` or `FlatList` to display data in list format.

#### Next Steps

1. Extend the theme context to store more settings (like font size or language).
2. Add pagination or load more features when fetching large datasets from an API.