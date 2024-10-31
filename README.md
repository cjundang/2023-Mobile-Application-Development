# Mobile Application Development with React Native

### Week 1: Introduction to Mobile Development & JavaScript Basics

---

#### Lecture Notes

---

### Part 1: Introduction to Mobile App Development Concepts

#### 1.1 Overview of Mobile App Types

- **Native Apps**: 
  - Built for a specific platform using languages like Swift/Objective-C for iOS or Kotlin/Java for Android.
  - Pros: High performance, full access to device features, optimized user experience.
  - Cons: Development and maintenance cost are high; separate codebases for each platform.
  
- **Hybrid Apps**:
  - Combines web technologies (HTML, CSS, JavaScript) and a native container to run on both platforms.
  - Frameworks like Cordova and Ionic are often used.
  - Pros: One codebase for multiple platforms, reduced development cost.
  - Cons: Performance limitations and limited access to device features compared to native apps.

- **Web Apps**:
  - Accessed through web browsers and developed using standard web technologies.
  - Pros: Platform-independent, no installation required.
  - Cons: Limited access to device features, dependent on browser performance and internet connectivity.

#### 1.2 Cross-Platform Development with React Native

- **React Native**: 
  - Developed by Facebook, React Native enables developers to write code in JavaScript and produce apps for both iOS and Android.
  - Utilizes a single codebase for multiple platforms, reducing time and cost in development.
  - Accesses device features through plugins and provides near-native performance with React Native components.

---

### Part 2: React Native Setup

#### 2.1 Setting Up the Development Environment

1. **Install Node.js**: 
   - Necessary to run JavaScript outside of a browser.
   - React Native requires Node.js for managing dependencies and running the development server.

2. **Setting up Expo CLI (Recommended for Beginners)**:
   - Install Expo CLI globally using `npm install -g expo-cli`.
   - Benefits of Expo: Simplified setup, easy testing on real devices, and a managed workflow for beginners.
   - Drawback: Limited access to some native modules compared to the React Native CLI.

3. **Setting up React Native CLI** (Alternative):
   - React Native CLI offers full flexibility and native module access.
   - Requires additional setup, including Xcode (for iOS development) and Android Studio (for Android development).

4. **Creating Your First Project**:
   - Use `expo init MyFirstApp` to create a new project with Expo CLI.
   - After creating the project, run it on a simulator or a physical device using `expo start`.
   
5. **Running "Hello World" App**:
   - Modify `App.js` to display "Hello World" and verify it runs in the simulator or on a device.

---

### Part 3: JavaScript Basics

---

#### 3.1 Variables and Data Types

- **Declaring Variables**:
  - `let` and `const`:
    - `let` is used for variables that may change over time.
    - `const` is for variables that remain constant throughout their use.

- **Data Types**:
  - **String**: Textual data enclosed within quotes. 
    ```javascript
    const name = "John";
    ```
  - **Number**: Numeric data for integer or floating-point numbers.
    ```javascript
    let age = 25;
    ```
  - **Boolean**: Represents true or false.
    ```javascript
    let isActive = true;
    ```

##### Programming Task:
Write a simple JavaScript script to assign and log different data types.

Example:
```javascript
const name = "John";
let age = 25;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
```

---

#### 3.2 Control Structures

- **If Statements**:
  - Basic structure for decision-making.
  ```javascript
  let age = 18;
  if (age >= 18) {
      console.log("You are an adult.");
  } else {
      console.log("You are a minor.");
  }
  ```

- **Loops**:
  - **For Loop**:
    - Repeats code a specified number of times.
    ```javascript
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    ```
  - **While Loop**:
    - Repeats code while a condition is true.
    ```javascript
    let count = 0;
    while (count < 5) {
        console.log(count);
        count++;
    }
    ```

##### Programming Task:
Write a program to check if a number is odd or even.

Example:
```javascript
let number = 4;
if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}
```

--- 

### Summary

- **Mobile App Types**: Differences between native, hybrid, and web apps.
- **React Native**: Overview and advantages in cross-platform development.
- **Development Setup**: Steps to install and configure Expo CLI and create the "Hello World" app.
- **JavaScript Fundamentals**: Introduction to variables, data types, control structures, and simple scripting tasks.

#### Next Steps

1. Practice with the setup by running and modifying the "Hello World" app.
2. Experiment with variables, data types, and control structures to reinforce JavaScript basics.


### Week 2: JavaScript Fundamentals & Introduction to React Basics

---

#### Lecture Notes

---

### Part 1: JavaScript Fundamentals

#### 1.1 Functions

- **Defining and Calling Functions**:
  - Functions are reusable blocks of code designed to perform a specific task.
  - Basic syntax for defining a function:
    ```javascript
    function greet(name) {
        return "Hello, " + name + "!";
    }
    ```
  - Calling a function:
    ```javascript
    console.log(greet("Alice"));  // Output: Hello, Alice!
    ```

- **Arrow Functions**:
  - A shorter syntax for writing functions introduced in ES6.
  - Especially useful in functional programming patterns in JavaScript.
  ```javascript
  const greet = (name) => "Hello, " + name + "!";
  console.log(greet("Alice"));  // Output: Hello, Alice!
  ```

##### Programming Task:
Write a function that takes a number and returns whether it’s prime.

Example:
```javascript
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(5));  // Output: true
console.log(isPrime(4));  // Output: false
```

---

#### 1.2 Arrays and Objects

- **Arrays**:
  - Ordered collections of items (e.g., numbers, strings, objects).
  - Creating an array:
    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    ```
  - Common array methods:
    - `push()` – Adds an element to the end.
    - `pop()` – Removes the last element.
    - `filter()` – Filters elements based on a condition.

- **Objects**:
  - Collections of key-value pairs representing structured data.
  - Creating an object:
    ```javascript
    const person = {
        name: "Alice",
        age: 30,
        isStudent: false
    };
    ```
  - Accessing object properties:
    ```javascript
    console.log(person.name);  // Output: Alice
    ```

##### Programming Task:
Write a script that filters an array of numbers to include only odd numbers.

Example:
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers);  // Output: [1, 3, 5, 7, 9]
```

---

### Part 2: Introduction to React Basics

---

#### 2.1 Overview of JSX, Components, and Props

- **JSX (JavaScript XML)**:
  - JSX is a syntax extension for JavaScript that resembles HTML. 
  - It allows writing HTML-like code directly in JavaScript, which React transforms into JavaScript calls.
  - Example of JSX:
    ```jsx
    const element = <h1>Hello, World!</h1>;
    ```

- **Components**:
  - The building blocks of React applications.
  - A React app is composed of reusable, self-contained components that manage their state and logic.
  - **Functional Components**: The most commonly used type in modern React.
    ```javascript
    function Greeting() {
        return <h1>Hello, World!</h1>;
    }
    ```

- **Props (Properties)**:
  - Props are used to pass data from a parent component to a child component.
  - They make components more flexible and reusable by allowing different data inputs.
  - Example with props:
    ```javascript
    function Greeting(props) {
        return <h1>Hello, {props.name}!</h1>;
    }
    ```

##### Programming Task:
Build a simple React component that displays a greeting message using props.

Example:
1. Create a `Greeting.js` file:
    ```javascript
    import React from 'react';

    function Greeting(props) {
        return <h1>Hello, {props.name}!</h1>;
    }

    export default Greeting;
    ```

2. Use the `Greeting` component in `App.js`:
    ```javascript
    import React from 'react';
    import Greeting from './Greeting';

    function App() {
        return (
            <div>
                <Greeting name="Alice" />
                <Greeting name="Bob" />
            </div>
        );
    }

    export default App;
    ```

3. Expected output:
   - Displays:
     ```
     Hello, Alice!
     Hello, Bob!
     ```

---

### Summary

- **JavaScript Functions**: Definitions, usage, and introduction to arrow functions.
- **Arrays and Objects**: Creating, manipulating arrays and objects, with practice on filtering arrays.
- **React Basics**:
  - JSX syntax for embedding HTML in JavaScript.
  - Components as modular building blocks in React.
  - Using props to pass data to components.

#### Next Steps

1. Practice creating more complex functions and manipulating arrays and objects.
2. Build additional React components, experimenting with props to understand component flexibility.

### Week 3: Understanding State and Events in React

---

#### Lecture Notes

---

### Part 1: React State

#### 1.1 Introduction to useState

- **useState Hook**:
  - `useState` is a React hook that allows functional components to manage state.
  - The `useState` function returns an array with two elements:
    1. The current state value.
    2. A function to update this value.
  - Syntax:
    ```javascript
    const [state, setState] = useState(initialValue);
    ```

- **Example**:
  ```javascript
  import React, { useState } from 'react';

  function Counter() {
      const [count, setCount] = useState(0);

      return (
          <div>
              <h1>Count: {count}</h1>
              <button onClick={() => setCount(count + 1)}>Increment</button>
              <button onClick={() => setCount(count - 1)}>Decrement</button>
          </div>
      );
  }

  export default Counter;
  ```
  
##### Programming Task:
Create a **Counter App** with buttons to increment and decrement the count.

1. **Implementation**:
   - Set up `count` as state.
   - Add two buttons to increment and decrement the count using `setCount`.

---

### Part 2: Event Handling

#### 2.1 Handling Button Clicks and Input Changes

- **Event Handling in React**:
  - Event handlers in React use camelCase syntax, like `onClick`, `onChange`.
  - They work similarly to JavaScript event listeners but are set as attributes in JSX.

- **Adding Event Handlers**:
  - **Button Click Event**:
    ```javascript
    <button onClick={() => setCount(count + 1)}>Increment</button>
    ```
  - **Input Change Event**:
    - Used to capture and respond to input changes.
    - Example:
      ```javascript
      const [value, setValue] = useState("");

      <input type="text" onChange={(e) => setValue(e.target.value)} />
      ```

##### Programming Task:
Extend the **Counter App** by adding an input field to set the counter’s starting value.

1. **Implementation**:
   - Add an input field to capture the starting value.
   - Add a button to set `count` based on the input.
   
   ```javascript
   import React, { useState } from 'react';

   function Counter() {
       const [count, setCount] = useState(0);
       const [startValue, setStartValue] = useState(0);

       const handleStartValueChange = (e) => {
           setStartValue(Number(e.target.value));
       };

       const setInitialCount = () => {
           setCount(startValue);
       };

       return (
           <div>
               <h1>Count: {count}</h1>
               <button onClick={() => setCount(count + 1)}>Increment</button>
               <button onClick={() => setCount(count - 1)}>Decrement</button>
               <input
                   type="number"
                   placeholder="Set Start Value"
                   onChange={handleStartValueChange}
               />
               <button onClick={setInitialCount}>Set Initial Value</button>
           </div>
       );
   }

   export default Counter;
   ```

---

### Part 3: Component Lifecycle

#### 3.1 Brief Introduction to Lifecycle Concepts

- **Component Lifecycle in Functional Components**:
  - React functional components do not have traditional lifecycle methods like class components. Instead, hooks such as `useEffect` provide similar functionality.
  
- **useEffect Hook**:
  - `useEffect` allows you to perform side effects (like data fetching or updating the DOM) in a component.
  - The first argument is a function with the effect, and the second (optional) argument is an array of dependencies.
  - When `useEffect` has an empty dependency array `[]`, it runs only once when the component mounts, similar to `componentDidMount` in class components.

  ```javascript
  import React, { useState, useEffect } from 'react';

  function MessageOnLoad() {
      const [message, setMessage] = useState("");

      useEffect(() => {
          setMessage("Welcome to the Counter App!");
      }, []);

      return <p>{message}</p>;
  }
  ```

##### Programming Task:
Add a message that appears only once when the component first loads.

1. **Implementation**:
   - Use `useEffect` to set a welcome message only when the component mounts.

   ```javascript
   import React, { useState, useEffect } from 'react';

   function Counter() {
       const [count, setCount] = useState(0);
       const [startValue, setStartValue] = useState(0);
       const [message, setMessage] = useState("");

       useEffect(() => {
           setMessage("Welcome to the Counter App!");
       }, []);

       const handleStartValueChange = (e) => {
           setStartValue(Number(e.target.value));
       };

       const setInitialCount = () => {
           setCount(startValue);
       };

       return (
           <div>
               <p>{message}</p>
               <h1>Count: {count}</h1>
               <button onClick={() => setCount(count + 1)}>Increment</button>
               <button onClick={() => setCount(count - 1)}>Decrement</button>
               <input
                   type="number"
                   placeholder="Set Start Value"
                   onChange={handleStartValueChange}
               />
               <button onClick={setInitialCount}>Set Initial Value</button>
           </div>
       );
   }

   export default Counter;
   ```

---

### Summary

- **useState**: Use for managing component state in functional components.
- **Event Handling**: Managing button clicks and input changes in React.
- **Component Lifecycle**:
  - Basic introduction to `useEffect` for managing component load behaviors.
  
#### Next Steps

1. Experiment by adding additional features to the counter app.
2. Use `useEffect` with various dependencies to observe its behavior with different lifecycle scenarios.


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

### Week 6: User Input and Forms in React Native

---

#### Lecture Notes

---

### Part 1: TextInput for User Input

#### 1.1 Creating Form Inputs with TextInput

- **TextInput Component**:
  - `TextInput` is a core component in React Native for accepting user input.
  - Supports various properties for handling input, such as `placeholder`, `secureTextEntry` (for password fields), and styling options.

  ```javascript
  import React, { useState } from 'react';
  import { View, TextInput, StyleSheet } from 'react-native';

  function LoginForm() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');

      return (
          <View style={styles.container}>
              <TextInput
                  style={styles.input}
                  placeholder="Username"
                  value={username}
                  onChangeText={setUsername}
              />
              <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
              />
          </View>
      );
  }

  const styles = StyleSheet.create({
      container: {
          padding: 20
      },
      input: {
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 8
      }
  });

  export default LoginForm;
  ```

##### Programming Task:
Create a **Login Form** with `TextInput` fields for username and password.

1. **Implementation**:
   - Add two `TextInput` fields for username and password, each managed with its own state.
   - Use `secureTextEntry` for the password field to hide text input.

---

### Part 2: Controlled Components

#### 2.1 Handling Form Data with Controlled Components

- **Controlled Components**:
  - In React Native, controlled components mean that the input field’s value is bound to the component's state.
  - The state is updated as the user types, keeping the displayed value and internal value in sync.

  - **Example of a Controlled Input**:
    ```javascript
    const [text, setText] = useState('');

    <TextInput
        value={text}
        onChangeText={setText}
    />
    ```

- **Handling Form Submission**:
  - When the user submits the form, an `onPress` event handler can validate and respond based on input values.

##### Programming Task:
Extend the **Login Form** to display an alert when the user submits it with a valid username and password.

1. **Implementation**:
   - Add a `Button` for submission.
   - Set an `onPress` event to check if both fields are filled before displaying an alert.

   ```javascript
   import React, { useState } from 'react';
   import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

   function LoginForm() {
       const [username, setUsername] = useState('');
       const [password, setPassword] = useState('');

       const handleSubmit = () => {
           if (username && password) {
               Alert.alert("Login Successful", `Welcome, ${username}!`);
           } else {
               Alert.alert("Error", "Please enter both username and password.");
           }
       };

       return (
           <View style={styles.container}>
               <TextInput
                   style={styles.input}
                   placeholder="Username"
                   value={username}
                   onChangeText={setUsername}
               />
               <TextInput
                   style={styles.input}
                   placeholder="Password"
                   secureTextEntry
                   value={password}
                   onChangeText={setPassword}
               />
               <Button title="Login" onPress={handleSubmit} />
           </View>
       );
   }

   const styles = StyleSheet.create({
       container: {
           padding: 20
       },
       input: {
           height: 40,
           borderColor: 'gray',
           borderWidth: 1,
           marginBottom: 10,
           paddingHorizontal: 8
       }
   });

   export default LoginForm;
   ```

---

### Part 3: Simple Validation

#### 3.1 Adding Basic Validation

- **Basic Form Validation**:
  - Basic validation can ensure that fields are not empty before processing the form.
  - Additional validation can include checking for password length, format requirements, etc.
  - Here, we will simply check that both `username` and `password` are non-empty before allowing the user to submit.

  - **Example**:
    ```javascript
    const handleSubmit = () => {
        if (!username || !password) {
            Alert.alert("Error", "All fields are required.");
        } else {
            // proceed with form submission
        }
    };
    ```

##### Programming Task:
Validate that the username and password fields are not empty before allowing submission.

1. **Implementation**:
   - Ensure `handleSubmit` verifies non-empty values for both `username` and `password`.
   - Display an error alert if any field is empty.

   ```javascript
   import React, { useState } from 'react';
   import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

   function LoginForm() {
       const [username, setUsername] = useState('');
       const [password, setPassword] = useState('');

       const handleSubmit = () => {
           if (!username || !password) {
               Alert.alert("Error", "Please enter both username and password.");
           } else {
               Alert.alert("Login Successful", `Welcome, ${username}!`);
           }
       };

       return (
           <View style={styles.container}>
               <TextInput
                   style={styles.input}
                   placeholder="Username"
                   value={username}
                   onChangeText={setUsername}
               />
               <TextInput
                   style={styles.input}
                   placeholder="Password"
                   secureTextEntry
                   value={password}
                   onChangeText={setPassword}
               />
               <Button title="Login" onPress={handleSubmit} />
           </View>
       );
   }

   const styles = StyleSheet.create({
       container: {
           padding: 20
       },
       input: {
           height: 40,
           borderColor: 'gray',
           borderWidth: 1,
           marginBottom: 10,
           paddingHorizontal: 8
       }
   });

   export default LoginForm;
   ```

---

### Summary

- **TextInput**: Used to create user input fields with controlled components.
- **Controlled Components**: Form data is managed through state, and values are controlled by the component.
- **Basic Validation**: Simple validation to ensure required fields are not empty before allowing form submission.

#### Next Steps

1. Expand validation to include minimum length or format requirements (e.g., username must be a certain length).
2. Add feedback to show when a field is invalid, such as changing the border color or displaying error messages below the fields.

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

### Week 8: Handling Device Features and Permissions

---

#### Lecture Notes

---

### Part 1: Accessing Device Features

#### 1.1 Using the Camera

- **React Native Camera Libraries**:
  - React Native does not provide a built-in camera module; however, libraries like `react-native-camera` or `expo-camera` offer easy-to-use APIs.
  - **Expo Camera** is ideal for simplicity and includes support for both taking photos and recording videos.

- **Setting Up Camera with `expo-camera`**:
  - Install the `expo-camera` package:
    ```bash
    expo install expo-camera
    ```
  - Import and set up the camera in the component.

  ```javascript
  import React, { useState, useRef } from 'react';
  import { View, Button, Image } from 'react-native';
  import { Camera } from 'expo-camera';

  function CameraApp() {
      const [hasPermission, setHasPermission] = useState(null);
      const [photo, setPhoto] = useState(null);
      const cameraRef = useRef(null);

      // Request camera permissions when the component mounts
      React.useEffect(() => {
          (async () => {
              const { status } = await Camera.requestPermissionsAsync();
              setHasPermission(status === 'granted');
          })();
      }, []);

      const takePhoto = async () => {
          if (cameraRef.current) {
              const { uri } = await cameraRef.current.takePictureAsync();
              setPhoto(uri);
          }
      };

      if (hasPermission === null) {
          return <View />;
      }
      if (hasPermission === false) {
          return <Text>No access to camera</Text>;
      }

      return (
          <View style={{ flex: 1 }}>
              <Camera style={{ flex: 1 }} ref={cameraRef} />
              <Button title="Take Photo" onPress={takePhoto} />
              {photo && <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />}
          </View>
      );
  }

  export default CameraApp;
  ```

##### Programming Task:
Build a **Simple Camera App** that lets users take a photo.

1. **Implementation**:
   - Request permissions for the camera.
   - Take a photo and display it in the app.

---

### Part 2: Permissions in React Native

#### 2.1 Requesting Permissions for Sensitive Features

- **Permissions in React Native**:
  - For accessing features like the camera, location, and microphone, React Native apps must request user permissions.
  - **Permission Requests**:
    - For Expo apps, use `Camera.requestPermissionsAsync()` and `Location.requestPermissionsAsync()`.
    - For bare React Native apps, consider using the `react-native-permissions` package.

- **Handling Denied Requests**:
  - If the user denies a permission, display an error message or provide guidance on enabling permissions manually.

  ```javascript
  const requestCameraPermission = async () => {
      const { status } = await Camera.requestPermissionsAsync();
      if (status !== 'granted') {
          alert("Camera access is needed to take photos");
      }
      return status === 'granted';
  };
  ```

##### Programming Task:
Request camera permissions before accessing the camera and handle denied requests.

1. **Implementation**:
   - Before allowing access to the camera, request permission and check the user’s response.
   - If denied, show a message explaining why the permission is necessary.

---

### Part 3: Using Location Services

#### 3.1 Accessing Device Location

- **Using Expo Location**:
  - Install the `expo-location` package to access location services in Expo apps:
    ```bash
    expo install expo-location
    ```
  - Use `Location.getCurrentPositionAsync()` to retrieve the device's location.

- **Example**:
  - Request location permissions, and upon approval, access and display the user’s current location (latitude and longitude).

  ```javascript
  import React, { useState, useEffect } from 'react';
  import { View, Text, Button } from 'react-native';
  import * as Location from 'expo-location';

  function LocationApp() {
      const [location, setLocation] = useState(null);
      const [errorMsg, setErrorMsg] = useState(null);

      useEffect(() => {
          (async () => {
              const { status } = await Location.requestPermissionsAsync();
              if (status !== 'granted') {
                  setErrorMsg("Permission to access location was denied");
                  return;
              }

              const currentLocation = await Location.getCurrentPositionAsync({});
              setLocation(currentLocation.coords);
          })();
      }, []);

      return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {errorMsg ? (
                  <Text>{errorMsg}</Text>
              ) : location ? (
                  <Text>
                      Latitude: {location.latitude} | Longitude: {location.longitude}
                  </Text>
              ) : (
                  <Text>Fetching location...</Text>
              )}
          </View>
      );
  }

  export default LocationApp;
  ```

##### Programming Task:
Display the user’s **current location** in the app.

1. **Implementation**:
   - Request location permissions.
   - Fetch and display the device’s current latitude and longitude.

---

### Summary

- **Accessing Device Features**: Using the camera and location services in React Native apps.
- **Requesting Permissions**: Ensuring sensitive features like the camera and location require user consent.
- **Handling Denied Permissions**: Providing error messages or guidance if permissions are denied.

#### Next Steps

1. Implement location tracking to update user location in real-time.
2. Experiment with other device features, like using the accelerometer or accessing the photo library.

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