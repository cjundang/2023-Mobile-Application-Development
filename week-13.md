# Workshop: CRUD data

ต่อไปนี้เป็นโครงร่างตัวอย่างที่ “ครบวงจร” สำหรับการสร้างฟอร์ม React Native (JavaScript) เพื่อรับ `username`, `password` และบันทึกลงฐานข้อมูลผ่าน **json-server** เหมาะสำหรับสาธิต/ทดสอบ (ไม่เหมาะกับงาน production)

## 1) ตั้งค่า `json-server`

1. ติดตั้งและสร้างไฟล์ฐานข้อมูล

   ```bash
   npm i -g json-server
   echo '{ "users": [] }' > db.json
   ```

2. เริ่มเซิร์ฟเวอร์จำลอง

   ```bash
   json-server --watch db.json --port 3000
   ```

   เซิร์ฟเวอร์จะมี REST endpoints เช่น:

   - `GET  /users`
   - `POST /users` (เพิ่มผู้ใช้ใหม่)
   - `GET  /users?username=alice` (ตรวจสอบซ้ำซ้อน)

> หมายเหตุ: เครื่องที่รันมือถือ/อีมูเลเตอร์ต้องเห็นพอร์ต `3000` ของคอมพิวเตอร์คุณ (อ่านรายละเอียดในส่วน “ที่อยู่เครือข่าย” ด้านล่าง)

---

## 2) สร้างแอป React Native (แนะนำใช้ Expo)

```bash
npx create-expo-app rn-jsonserver-login --template
cd rn-jsonserver-login
npm start
```

---

## 3) โค้ดตัวอย่าง (ไฟล์ `App.js`)

โค้ดนี้ประกอบด้วย:

- ฟอร์มกรอก `username`/`password` พร้อมตรวจสอบค่าว่าง
- ตรวจสอบว่า `username` ถูกใช้แล้วหรือไม่ (เรียก `GET /users?username=...`)
- บันทึกลงฐานข้อมูล (`POST /users`)
- จัดการสถานะโหลด/ข้อผิดพลาด และแสดงผลลัพธ์
- รูปแบบ UI เรียบสะอาด เหมาะต่อการทดลอง

### 3.1) สร้างหน้าหลัก และ StyleSheet

```JavaScript
import {React} from "react";
import {
  SafeAreaView, View, Text, StyleSheet,
} from "react-native";


export default function App() {
  return (
        <SafeAreaView style={styles.root}>
          <View style={styles.card}>
        <Text style={styles.title}>ลงทะเบียนผู้ใช้ (ฉบับง่าย)</Text>
        </View>
        </SafeAreaView>
  );
}

```

Stytlesheet

```CSS
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f6f7fb",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "white",
    borderRadius: 14,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  msg: { marginVertical: 6, fontSize: 13, color: "#374151" },
  button: {
    backgroundColor: "#111827",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonDisabled: { opacity: 0.6 },
  buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
  note: { marginTop: 10, fontSize: 12, color: "#6b7280", textAlign: "center" },
});

```

### 3.2) เพิ่ม TextInput และตัวแปรที่รองรับ

เพิ่มการ import

```JavaScript

import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet,TextInput } from "react-native";

```

เพิ่ม สรัางตัวแปร

```JavaScript
export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

```

เพิ่ม TextInput

```JavaScript
    <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
    />

    <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
    />
```



```JavaScript
<TouchableOpacity
    // onPress={handleSubmit}
    disabled={loading}
    style={[styles.button, loading && styles.buttonDisabled]}
>
    <Text style={styles.buttonText}>บันทึก</Text>
</TouchableOpacity>
```