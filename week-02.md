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