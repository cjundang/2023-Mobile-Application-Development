### Week 9: Working with External Libraries and Custom Components

---

#### Lecture Notes

---

### Part 1: Using UI Libraries in React Native

#### 1.1 Integrating UI Libraries

- **React Native Elements**:
  - `react-native-elements` is a popular UI library that provides customizable and pre-styled components such as buttons, cards, and icons.
  - To install:
    ```bash
    npm install react-native-elements
    ```

- **Using Components from UI Libraries**:
  - These libraries offer consistent styling and customization, reducing the time needed to create polished components from scratch.
  - **Example**: Importing and using a `Card` component from React Native Elements.

  ```javascript
  import React from 'react';
  import { Card, Button } from 'react-native-elements';

  function ProfileCard() {
      return (
          <Card>
              <Card.Title>John Doe</Card.Title>
              <Card.Divider />
              <Card.Image source={{ uri: 'https://example.com/user.jpg' }} />
              <Button title="View Profile" />
          </Card>
      );
  }

  export default ProfileCard;
  ```

##### Programming Task:
Use a **UI Library** to create a styled card component for displaying user profiles.

1. **Implementation**:
   - Use `Card` from `react-native-elements`.
   - Add user details (name, profile image, button) and style it for a professional look.

---

### Part 2: Creating Reusable Components

#### 2.1 Making and Reusing Custom Components

- **Reusable Components**:
  - Reusable components help maintain consistency and reduce code duplication.
  - By using props, custom components can be flexible and easily customizable.

- **Example**: A reusable button component that accepts custom text, color, and onPress functionality.

  ```javascript
  import React from 'react';
  import { TouchableOpacity, Text, StyleSheet } from 'react-native';

  function CustomButton({ title, color, onPress }) {
      return (
          <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
              <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>
      );
  }

  const styles = StyleSheet.create({
      button: {
          padding: 15,
          borderRadius: 5,
          alignItems: 'center'
      },
      buttonText: {
          color: 'white',
          fontSize: 16
      }
  });

  export default CustomButton;
  ```

##### Programming Task:
Build a **Reusable Button Component** that can be customized via props.

1. **Implementation**:
   - Create `CustomButton` with props for `title`, `color`, and `onPress`.
   - Style the button for reusability across different parts of the app.

---

### Part 3: Styling Third-Party Components

#### 3.1 Customizing Third-Party UI Elements

- **Customizing React Native Elements**:
  - Most third-party UI libraries provide props for styling. For instance, `react-native-elements` components support `containerStyle` and `buttonStyle` props for custom styling.
  - **Example**: Styling a `Card` component to match a dark theme.

  ```javascript
  import React from 'react';
  import { Card, Button } from 'react-native-elements';
  import { StyleSheet } from 'react-native';

  function ThemedProfileCard() {
      return (
          <Card containerStyle={styles.card}>
              <Card.Title style={styles.title}>John Doe</Card.Title>
              <Card.Divider />
              <Card.Image source={{ uri: 'https://example.com/user.jpg' }} style={styles.image} />
              <Button title="View Profile" buttonStyle={styles.button} />
          </Card>
      );
  }

  const styles = StyleSheet.create({
      card: {
          backgroundColor: '#333',
          borderColor: '#444'
      },
      title: {
          color: 'white',
          fontSize: 20
      },
      image: {
          borderRadius: 8
      },
      button: {
          backgroundColor: '#0066cc'
      }
  });

  export default ThemedProfileCard;
  ```

##### Programming Task:
Style the UI library components to **match the app’s theme**.

1. **Implementation**:
   - Customize `Card`, `Title`, and `Button` elements to align with a cohesive app theme (e.g., dark mode).
   - Use `containerStyle`, `buttonStyle`, and other props for detailed styling.

---

### Summary

- **UI Libraries**: Speed up development and enhance consistency with pre-built components from libraries like `react-native-elements`.
- **Reusable Components**: Create flexible and reusable custom components to maintain code simplicity and reusability.
- **Styling Third-Party Components**: Customize third-party UI elements to match the app's theme, ensuring a cohesive look.

#### Next Steps

1. Practice customizing additional third-party components like icons and input fields.
2. Extend the reusable button component with more customization options, such as font size, width, or icon integration.