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