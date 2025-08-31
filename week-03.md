

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