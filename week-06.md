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