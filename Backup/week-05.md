### Week 5: Styling and Navigation in React Native

---

#### Lecture Notes

---

### Part 1: Styling in React Native

#### 1.1 Using StyleSheet for Defining Styles

- **StyleSheet in React Native**:
  - React Native's `StyleSheet` API provides a way to define reusable and organized styles.
  - Styles are defined as objects within `StyleSheet.create()`.
  - Example:
    ```javascript
    import { StyleSheet, Text, View } from 'react-native';

    function MyComponent() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hello, World!</Text>
            </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            margin: 20,
            backgroundColor: 'lightblue'
        },
        title: {
            fontSize: 24,
            color: 'darkblue'
        }
    });

    export default MyComponent;
    ```

##### Programming Task:
Apply various styles (padding, margin, color, fontSize) to components on a profile screen.

1. **Implementation**:
   - Create a Profile screen with basic components (e.g., name, bio, profile picture).
   - Apply styles for layout, colors, font sizes, and spacing using `StyleSheet`.

   ```javascript
   import React from 'react';
   import { View, Text, Image, StyleSheet } from 'react-native';

   function ProfileScreen() {
       return (
           <View style={styles.container}>
               <Image
                   source={{ uri: 'https://example.com/profile-pic.png' }}
                   style={styles.profileImage}
               />
               <Text style={styles.name}>John Doe</Text>
               <Text style={styles.bio}>Software Developer, Tech Enthusiast, Avid Reader</Text>
           </View>
       );
   }

   const styles = StyleSheet.create({
       container: {
           padding: 20,
           alignItems: 'center',
           backgroundColor: '#f2f2f2'
       },
       profileImage: {
           width: 100,
           height: 100,
           borderRadius: 50,
           marginBottom: 15
       },
       name: {
           fontSize: 24,
           fontWeight: 'bold',
           color: '#333'
       },
       bio: {
           fontSize: 16,
           color: '#666',
           textAlign: 'center',
           marginTop: 10
       }
   });

   export default ProfileScreen;
   ```

---

### Part 2: Navigation Basics

#### 2.1 Introduction to React Navigation (Stack Navigation)

- **React Navigation**:
  - A popular library for navigation in React Native.
  - Allows for various navigation patterns (e.g., stack, tab, drawer).
  - **Stack Navigator** is commonly used for simple screen transitions, similar to navigation stacks in mobile OS.

- **Setting Up React Navigation**:
  - Install React Navigation:
    ```bash
    npm install @react-navigation/native
    npm install @react-navigation/stack
    ```
  - Import and set up navigation:
    ```javascript
    import React from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
    import HomeScreen from './screens/HomeScreen';
    import ProfileScreen from './screens/ProfileScreen';

    const Stack = createStackNavigator();

    function App() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    export default App;
    ```

- **Navigating Between Screens**:
  - Use `navigation.navigate('ScreenName')` to move between screens.

  ```javascript
  import React from 'react';
  import { View, Text, Button } from 'react-native';

  function HomeScreen({ navigation }) {
      return (
          <View>
              <Text>Welcome to the Home Screen</Text>
              <Button
                  title="Go to Profile"
                  onPress={() => navigation.navigate('Profile')}
              />
          </View>
      );
  }

  export default HomeScreen;
  ```

##### Programming Task:
Set up two screens (e.g., Home and Profile) with React Navigation and navigate between them.

---

### Part 3: Applying Styling Best Practices

#### 3.1 Organizing Styles for Reuse

- **Reusable StyleSheet Objects**:
  - Define shared styles and organize code by separating styles from component logic.
  - Separate commonly used styles (e.g., container, text) for consistency across screens.

- **Refactoring Styles**:
  - Create a `styles.js` file for shared styles and import into components.
  - Example of reusable styles in a separate file:

    ```javascript
    // styles.js
    import { StyleSheet } from 'react-native';

    export const globalStyles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#f8f9fa'
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#333'
        },
        button: {
            backgroundColor: '#007bff',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center'
        },
        buttonText: {
            color: '#fff',
            fontSize: 16
        }
    });
    ```

- **Using the Global Styles**:
  - Import `globalStyles` into each component file and apply as needed.

  ```javascript
  import React from 'react';
  import { View, Text, TouchableOpacity } from 'react-native';
  import { globalStyles } from './styles';

  function ProfileScreen() {
      return (
          <View style={globalStyles.container}>
              <Text style={globalStyles.title}>Profile</Text>
              <TouchableOpacity style={globalStyles.button}>
                  <Text style={globalStyles.buttonText}>Edit Profile</Text>
              </TouchableOpacity>
          </View>
      );
  }

  export default ProfileScreen;
  ```

##### Programming Task:
Refactor styles into separate `StyleSheet` objects to practice reusable styling.

---

### Summary

- **Styling with StyleSheet**: Basic style properties for layout, color, font, and spacing.
- **React Navigation**: Setting up stack navigation and navigating between screens.
- **Styling Best Practices**: Organizing styles for reuse across multiple components and screens.

#### Next Steps

1. Practice styling various components with more complex layouts.
2. Experiment with additional navigation patterns (e.g., tabs, drawers) to create a more complete app structure.