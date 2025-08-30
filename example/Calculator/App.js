import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// Reusable Button Component
const MyButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);
const Numpad = () => {
  const [display, setDisplay] = useState(""); // State to manage displayed value
  const handlePress = (value) => {
    setDisplay((prev) => prev + value); // Append the pressed value to the display
    console.log(value);
  };
  return (
    <View style={styles.container}>
      {/* Display Text */}
      <Text style={styles.display}>{display}</Text>
      {/* Row 1 */}
      <View style={styles.row}>
        <MyButton label="1" onPress={() => handlePress("1")} />
        <MyButton label="2" onPress={() => handlePress("2")} />
        <MyButton label="3" onPress={() => handlePress("3")} />
        <MyButton label="+" onPress={() => handlePress("+")} />
      </View>
      {/* Row 2 */}
      <View style={styles.row}>
        <MyButton label="4" onPress={() => handlePress("4")} />
        <MyButton label="5" onPress={() => handlePress("5")} />
        <MyButton label="6" onPress={() => handlePress("6")} />
        <MyButton label="-" onPress={() => handlePress("-")} />
      </View>
      {/* Row 3 */}
      <View style={styles.row}>
        <MyButton label="7" onPress={() => handlePress("7")} />
        <MyButton label="8" onPress={() => handlePress("8")} />
        <MyButton label="9" onPress={() => handlePress("9")} />
        <MyButton label="*" onPress={() => handlePress("*")} />
      </View>
      {/* Row 4 */}
      <View style={styles.row}>
        <MyButton label="C" onPress={() => setDisplay("")} />{" "}
        {/* Clear display */}
        <MyButton label="0" onPress={() => handlePress("0")} />
        <MyButton
          label="="
          onPress={() => console.log("Evaluate expression")}
        />
        <MyButton label="/" onPress={() => handlePress("/")} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  display: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    width: "100%",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 35,
    marginHorizontal: 5,
    elevation: 3, // For shadow (Android)
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
export default Numpad;
