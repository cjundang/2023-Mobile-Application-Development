
## **Worksheet 1: Setting Up Tools**

### **Learning Objectives**

After completing this worksheet, students will be able to:

1. Install essential development tools for building mobile applications using **React Native**.
2. Create a **React Native project** using **Expo CLI**.
3. Run a “Hello World” application on both the **Android Emulator** and the **Web Browser**.


### **1. Installing Required Tools**

#### **1.1 Install Node.js and npm**

Download and install Node.js (includes npm) from:

🔗 [https://nodejs.org](https://nodejs.org)


#### **1.2 Install Expo CLI**

Open **Terminal or Command Prompt**, then install Expo CLI:

```bash
npm install  expo-cli
```


#### **1.3 Install Android Studio and Configure Android Emulator (AVD)**

 **Steps**

1. Open **Android Studio**.
2. Navigate to:
   **Tools → AVD Manager → Create Virtual Device**
3. Create and configure an Android Emulator.

### **2. Creating a React Native Project Using Expo CLI**

Open the Terminal and run the following commands:

```bash
npx create-expo-app HelloWorldApp --template
cd HelloWorldApp
```

Then open the project in **Visual Studio Code** or any preferred text editor.


### **3. Writing the “Hello World” Program**

Open the file **App.js** and modify its contents as follows:

```javascript
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello World from [Your Name] [Your Student ID]</Text>
      
    </View>
  );
}
```


### **4. Running the Application**

#### **4.1 Run on Web**

Execute:

```bash
npm run web
```


#### **4.2 Run on Android Emulator**

Before running:

* Ensure the **Android Virtual Device (AVD)** is active.

Then run:

```bash
npm run android
```

Expo CLI will detect the emulator and launch the application automatically.


### **5. Required Submission**

Students must submit the following:

 **Screenshot Evidence**

* Screenshot of **Expo CLI installation**.
* Screenshot of **Expo CLI Create Project**.
* Screenshot of the **Hello World app running** on:
  * Android Emulator and  
  * Web Browser


### **6. Reflection Questions**

Answer the following questions:

1. What are the advantages of using Expo CLI compared to the standard React Native CLI?
2. How does React Native render the UI on Android and on the Web?
3. If you want to deploy or test your app on iOS, what additional steps or requirements are needed?

