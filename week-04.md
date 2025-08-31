### Week 4: Introduction to React Native and Basic Layouts

---

#### Lecture Notes

---

### Part 1: React Native Basics

#### 1.1 Core Components in React Native

- **View**:
  - The primary container component in React Native, similar to `<div>` in HTML.
  - Used to wrap and style other components.

  ```javascript
  import { View } from 'react-native';

  function MyApp() {
      return <View style={{ padding: 10 }} />;
  }
  ```

- **Text**:
  - Used to display text content.
  - Unlike HTML, where any element can contain text, in React Native, text must be wrapped in a `Text` component.

  ```javascript
  import { Text } from 'react-native';

  function MyApp() {
      return <Text>Hello, World!</Text>;
  }
  ```

- **Image**:
  - Displays images in the app.
  - Requires a `source` property with an object that defines the image URI or local file path.

  ```javascript
  import { Image } from 'react-native';

  function MyApp() {
      return <Image source={{ uri: 'https://example.com/image.png' }} style={{ width: 100, height: 100 }} />;
  }
  ```

- **Button**:
  - A basic button component with a title and onPress event.
  - Example of a button with an alert action:
    ```javascript
    import { Button } from 'react-native';
    import { Alert } from 'react-native';

    function MyApp() {
        return <Button title="Press Me" onPress={() => Alert.alert('Button Pressed')} />;
    }
    ```

##### Programming Task:
Build a simple app with **Text**, **Image**, and **Button** components.

1. **Implementation**:
   - Create a view containing `Text`, `Image`, and `Button` components.

   ```javascript
   import React from 'react';
   import { View, Text, Image, Button, Alert } from 'react-native';

   function MyApp() {
       return (
           <View style={{ alignItems: 'center', padding: 20 }}>
               <Text style={{ fontSize: 24, marginBottom: 20 }}>Hello, React Native!</Text>
               <Image
                   source={{ uri: 'https://example.com/image.png' }}
                   style={{ width: 100, height: 100, marginBottom: 20 }}
               />
               <Button title="Press Me" onPress={() => Alert.alert('Button Pressed')} />
           </View>
       );
   }

   export default MyApp;
   ```

---

### Part 2: Flexbox for Layout

#### 2.1 Flexbox Basics

- **Flexbox in React Native**:
  - React Native uses Flexbox for layout, similar to CSS.
  - Flexbox properties help control the layout of child elements within a container.

- **Key Flexbox Properties**:
  - `flexDirection`: Determines the primary axis of the layout.
    - `row`: Horizontal arrangement of elements.
    - `column`: Vertical arrangement of elements (default).
  - `justifyContent`: Aligns items along the main axis.
    - `center`, `space-between`, `space-around`, etc.
  - `alignItems`: Aligns items along the cross axis.
    - `center`, `flex-start`, `flex-end`, etc.

##### Programming Task:
Arrange components in both **column** and **row** layouts using Flexbox.

1. **Column Layout**:
   ```javascript
   <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
       <Text>Item 1</Text>
       <Text>Item 2</Text>
       <Text>Item 3</Text>
   </View>
   ```

2. **Row Layout**:
   ```javascript
   <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
       <Text>Item A</Text>
       <Text>Item B</Text>
       <Text>Item C</Text>
   </View>
   ```

3. **Combined Layout Example**:
   ```javascript
   import React from 'react';
   import { View, Text, StyleSheet } from 'react-native';

   function LayoutExample() {
       return (
           <View style={styles.container}>
               <View style={styles.row}>
                   <Text>Item A</Text>
                   <Text>Item B</Text>
               </View>
               <View style={styles.column}>
                   <Text>Item 1</Text>
                   <Text>Item 2</Text>
               </View>
           </View>
       );
   }

   const styles = StyleSheet.create({
       container: {
           padding: 20
       },
       row: {
           flexDirection: 'row',
           justifyContent: 'space-around',
           marginBottom: 20
       },
       column: {
           flexDirection: 'column',
           alignItems: 'center'
       }
   });

   export default LayoutExample;
   ```

---

### Part 3: TouchableOpacity for Interactivity

#### 3.1 Introduction to TouchableOpacity

- **TouchableOpacity**:
  - Provides interactivity to any element by making it touch-responsive.
  - Reduces opacity on press, giving visual feedback to users.
  - Commonly used for making custom buttons or clickable elements.

- **Example Usage**:
  ```javascript
  import React from 'react';
  import { Text, TouchableOpacity, Alert } from 'react-native';

  function MyButton() {
      return (
          <TouchableOpacity onPress={() => Alert.alert('Text Pressed')}>
              <Text style={{ fontSize: 18, color: 'blue' }}>Press Me</Text>
          </TouchableOpacity>
      );
  }

  export default MyButton;
  ```

##### Programming Task:
Wrap a **Text** element in a `TouchableOpacity` to display an alert on press.

1. **Implementation**:
   - Add a `Text` component within a `TouchableOpacity`, setting up an `onPress` event to trigger an alert.

   ```javascript
   import React from 'react';
   import { View, Text, TouchableOpacity, Alert } from 'react-native';

   function App() {
       return (
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <TouchableOpacity onPress={() => Alert.alert('Hello!', 'You pressed the text')}>
                   <Text style={{ fontSize: 20, color: 'green' }}>Press Me</Text>
               </TouchableOpacity>
           </View>
       );
   }

   export default App;
   ```

---

### Summary

- **Core React Native Components**: `View`, `Text`, `Image`, and `Button`.
- **Flexbox Layout**: Flexbox properties (`flexDirection`, `justifyContent`, `alignItems`) for arranging components.
- **TouchableOpacity**: Adding touchable interactivity to non-button components.

#### Next Steps

1. Experiment with more Flexbox properties to explore layout possibilities.
2. Practice with `TouchableOpacity` by wrapping various elements to create custom interactive buttons.
