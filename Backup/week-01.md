### Week 1: Introduction to Mobile Development & JavaScript Basics

---

#### Lecture Notes

---

### Part 1: Introduction to Mobile App Development Concepts
### 1.1 Overview of Mobile App Types

---

**1. Native Apps**  
- **Definition**: Developed specifically for a particular platform (e.g., iOS or Android), typically using the platform's preferred programming languages.
  - **iOS**: Developed using **Swift** or **Objective-C**
  - **Android**: Developed using **Kotlin** or **Java**
  
- **Key Benefits**:
  - **High Performance**: Optimized to leverage the platform's specific hardware and software capabilities.
  - **Full Access to Device Features**: Direct access to features like camera, GPS, contacts, and other hardware functionalities.
  - **Optimized User Experience**: Designed following each platform's design guidelines, providing a seamless and intuitive experience for users.
  
- **Key Drawbacks**:
  - **Higher Development and Maintenance Costs**: Requires separate development teams and codebases for iOS and Android, which increases costs and resources.
  - **Time-Intensive**: Building and maintaining distinct versions for each platform demands more time and complexity.

---

**2. Hybrid Apps**  
- **Definition**: Uses a combination of **web technologies** (HTML, CSS, JavaScript) enclosed in a **native container** to function on multiple platforms.
  - **Popular Frameworks**: **Cordova**, **Ionic**

- **Key Benefits**:
  - **Single Codebase for Multiple Platforms**: Write once and deploy across iOS, Android, and sometimes even web.
  - **Reduced Development Cost and Time**: With a single codebase, development and maintenance costs are lower compared to native apps.
  
- **Key Drawbacks**:
  - **Performance Limitations**: Slower than native apps, as they don’t have direct access to device hardware, leading to lag, especially in high-performance scenarios.
  - **Limited Device Access**: Access to device features (e.g., Bluetooth, accelerometer) may be restricted or not as seamless as with native apps.

---

**3. Web Apps**  
- **Definition**: Mobile-friendly websites accessible via web browsers, designed using **standard web technologies** like HTML, CSS, and JavaScript.
  
- **Key Benefits**:
  - **Platform-Independent**: Can be accessed on any device with a web browser, eliminating the need for multiple versions.
  - **No Installation Required**: Users can access the app without needing to download or install it from an app store.
  
- **Key Drawbacks**:
  - **Limited Device Access**: Restricted to features accessible through the browser, limiting their ability to use device hardware (e.g., GPS, camera).
  - **Dependency on Browser Performance and Internet Connectivity**: Performance and user experience vary based on browser efficiency and network speed.

---

### Key Points Summary

| App Type    | Pros                                                         | Cons                                                           |
|-------------|--------------------------------------------------------------|----------------------------------------------------------------|
| **Native**  | High performance, full device access, optimal UX             | High cost, separate codebases                                  |
| **Hybrid**  | Single codebase, reduced cost/time                           | Performance limitations, limited device access                 |
| **Web**     | Platform-independent, no installation                        | Limited device features, dependent on browser and connectivity |

### Examples of Mobile App Types

---

**1. Native Apps**
   - **Instagram** (iOS and Android): Originally built as a native app for optimal performance, particularly for heavy media use and device-specific features like the camera.
   - **Spotify** (iOS and Android): Provides a seamless music streaming experience with offline playback, integrating with device-specific features like volume control and audio optimization.
   - **WhatsApp** (iOS and Android): Offers high-speed messaging and calling functionality with full access to device features like contacts, camera, and microphone.

   **Characteristics of Native Apps**: Excellent performance, smooth animations, full integration with device features, and a consistent user experience aligned with each platform's design principles.

---

**2. Hybrid Apps**
   - **Uber**: Combines native elements with web technologies for a consistent experience across iOS and Android. Uber uses a single codebase for basic functions, maintaining separate native components for critical high-performance areas like GPS tracking.
   - **Instagram Lite**: A lighter, hybrid version of the Instagram app that uses web-based elements to reduce storage size and maintain compatibility across devices.
   - **Twitter**: Initially developed as a hybrid app to allow quick updates across platforms, using web technologies within a native wrapper.

   **Characteristics of Hybrid Apps**: Cost-effective development, compatibility across multiple platforms with a single codebase, and often satisfactory but slightly reduced performance compared to native apps.

---

**3. Web Apps**
   - **Pinterest**: Provides a mobile web version that allows users to browse and save ideas without downloading an app, designed to work seamlessly on mobile browsers.
   - **Google Maps** (Web): Accessible from any browser, Google Maps offers location search, directions, and basic navigation without needing a dedicated app.
   - **AliExpress**: Offers a mobile-optimized web app that lets users browse and purchase products directly from their mobile browsers, eliminating the need for app downloads.

   **Characteristics of Web Apps**: Accessible from any device with a browser, lower maintenance costs, and easy updates, though they have limited access to device hardware and depend on internet connectivity.

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
