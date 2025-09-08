### Week 10: Advanced Navigation and Animations

---

#### Lecture Notes

---

### Part 1: Advanced Navigation

#### 1.1 Implementing Tab or Drawer Navigation

- **React Navigation**:
  - Tab and drawer navigation provide intuitive structures for multi-screen apps.
  - **Tab Navigation**: Bottom tabs are suitable for apps with different main screens like Home, Settings, and Profile.
  - **Drawer Navigation**: Side drawers work well for apps with less frequently accessed sections or settings.

- **Setting Up Tab Navigation**:
  - Install the required dependencies:
    ```bash
    npm install @react-navigation/bottom-tabs
    ```
  - Create a tab navigator and define screens.

  ```javascript
  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import HomeScreen from './screens/HomeScreen';
  import ProfileScreen from './screens/ProfileScreen';
  import SettingsScreen from './screens/SettingsScreen';

  const Tab = createBottomTabNavigator();

  function App() {
      return (
          <NavigationContainer>
              <Tab.Navigator initialRouteName="Home">
                  <Tab.Screen name="Home" component={HomeScreen} />
                  <Tab.Screen name="Profile" component={ProfileScreen} />
                  <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
          </NavigationContainer>
      );
  }

  export default App;
  ```

##### Programming Task:
Set up a **Tab Navigation** with at least three screens.

1. **Implementation**:
   - Define three screens (e.g., Home, Profile, Settings) and use `Tab.Navigator` to structure the navigation.

---

### Part 2: Animating Components

#### 2.1 Introduction to the Animated API

- **React Native’s Animated API**:
  - The `Animated` API allows you to create smooth animations in React Native using declarative code.
  - **Types of Animations**: Common animations include fading, scaling, sliding, and rotations.
  - **Basic Setup**: Initialize an animated value, update it, and bind it to a style property.

- **Example: Fading In a Welcome Message**:
  - Create an animation that fades in text when the app loads.

  ```javascript
  import React, { useEffect, useRef } from 'react';
  import { View, Text, Animated, StyleSheet } from 'react-native';

  function WelcomeMessage() {
      const fadeAnim = useRef(new Animated.Value(0)).current;

      useEffect(() => {
          Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 2000,
              useNativeDriver: true
          }).start();
      }, [fadeAnim]);

      return (
          <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
              <Text style={styles.welcomeText}>Welcome to the App!</Text>
          </Animated.View>
      );
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      },
      welcomeText: {
          fontSize: 24,
          fontWeight: 'bold'
      }
  });

  export default WelcomeMessage;
  ```

##### Programming Task:
Create an **animation** that fades in a welcome message when the app loads.

1. **Implementation**:
   - Initialize an animated value (`fadeAnim`) and animate it from 0 to 1.
   - Apply the `fadeAnim` value to the opacity of the welcome message.

---

### Part 3: Gesture Handling

#### 3.1 Detecting Swipes, Taps, and Other Gestures

- **Using React Native Gesture Handler**:
  - `react-native-gesture-handler` provides an intuitive API for detecting gestures like swipes and taps.
  - Install Gesture Handler:
    ```bash
    npm install react-native-gesture-handler
    ```
  - Import and wrap the app with `GestureHandlerRootView`.

- **Handling Swipe Gestures**:
  - Use `PanGestureHandler` for swipes and dragging interactions.
  - Example of implementing a horizontal swipe to switch screens.

  ```javascript
  import React, { useCallback } from 'react';
  import { View, Text, StyleSheet } from 'react-native';
  import { PanGestureHandler, State } from 'react-native-gesture-handler';
  import { useNavigation } from '@react-navigation/native';

  function SwipeScreen() {
      const navigation = useNavigation();

      const onSwipe = useCallback(({ nativeEvent }) => {
          if (nativeEvent.translationX > 50) {
              navigation.navigate('NextScreen'); // Replace with target screen
          }
      }, [navigation]);

      return (
          <PanGestureHandler onGestureEvent={onSwipe}>
              <View style={styles.container}>
                  <Text>Swipe right to navigate to the next screen</Text>
              </View>
          </PanGestureHandler>
      );
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      }
  });

  export default SwipeScreen;
  ```

##### Programming Task:
Implement a **swipe gesture** to change between screens or cards.

1. **Implementation**:
   - Use `PanGestureHandler` to detect horizontal swipes.
   - Trigger navigation on a swipe right gesture to move to the next screen or card.

---

### Summary

- **Advanced Navigation**: Setting up tab or drawer navigation for more complex app structures.
- **Animations**: Using the Animated API to create smooth effects like fading and sliding.
- **Gesture Handling**: Detecting user gestures (e.g., swipes) to enable intuitive navigation and interactions.

#### Next Steps

1. Experiment with more animations (e.g., scaling or rotating elements).
2. Explore additional gestures, such as double-tap or long-press, for interactive functionality.