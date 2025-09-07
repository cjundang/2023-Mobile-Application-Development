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

   * `GET  /users`
   * `POST /users`  (เพิ่มผู้ใช้ใหม่)
   * `GET  /users?username=alice` (ตรวจสอบซ้ำซ้อน)

> หมายเหตุ: เครื่องที่รันมือถือ/อีมูเลเตอร์ต้องเห็นพอร์ต `3000` ของคอมพิวเตอร์คุณ (อ่านรายละเอียดในส่วน “ที่อยู่เครือข่าย” ด้านล่าง)

---

## 2) สร้างแอป React Native (แนะนำใช้ Expo)

```bash
npx create-expo-app rn-jsonserver-login
cd rn-jsonserver-login
npm start
```

---

## 3) โค้ดตัวอย่าง (ไฟล์ `App.js`)

โค้ดนี้ประกอบด้วย:

* ฟอร์มกรอก `username`/`password` พร้อมตรวจสอบค่าว่าง
* ตรวจสอบว่า `username` ถูกใช้แล้วหรือไม่ (เรียก `GET /users?username=...`)
* บันทึกลงฐานข้อมูล (`POST /users`)
* จัดการสถานะโหลด/ข้อผิดพลาด และแสดงผลลัพธ์
* รูปแบบ UI เรียบสะอาด เหมาะต่อการทดลอง


