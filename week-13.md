# Workshop: CRUD data

## Web API

### ขั้นตอนติดตั้งและรัน

1. ติดตั้ง Node.js (LTS) ให้เรียบร้อย
2. ใช้ JSON Server แบบไม่ต้องติดตั้งถาวร

```bash
npx json-server --watch db.json --port 4000 --routes routes.json --delay 300
```

* `--port 4000` กำหนดพอร์ต (เปลี่ยนได้ตามต้องการ)
* `--routes routes.json` เพิ่ม alias เส้นทาง (เช่น `/top-bounties`)
* `--delay 300` จำลอง latency 300ms เพื่อทดสอบ front-end

เมื่อรันสำเร็จ: ฐาน URL คือ `http://localhost:4000/`

### โครงสร้างทรัพยากรหลัก

* คอลเลกชัน: `/characters`
* รายการเดี่ยว: `/characters/:id` (เช่น `/characters/1`)

### ตัวอย่างการสืบค้น (Read)

**รายการทั้งหมด**

```
GET /characters
```

**รายการตาม id**

```
GET /characters/1
```

**ค้นหาแบบ full-text**

```
GET /characters?q=Zoro
```

**กรองตามฟิลด์**

* ลูกเรือ:

```
GET /characters?crew=Straw%20Hat%20Pirates
```

* ค่าหัว ≥ 1,000,000,000:

```
GET /characters?bounty_gte=1000000000
```

* กรองค่าในอาร์เรย์ (เช่น ผู้ใช้ฮาคิราชัน):

```
GET /characters?haki_like=Conqueror
```

> หมายเหตุ: JSON Server จับอาร์เรย์เป็นสตริงเพื่อ matching; ตัวดำเนินการ `_like` มักได้ผลลัพธ์ตรงความคาดหมายกว่าการเทียบเท่าตรง ๆ กับอาร์เรย์

**จัดลำดับและแบ่งหน้า**

```
GET /characters?_sort=bounty&_order=desc&_page=1&_limit=5
```

### เขียนข้อมูล (Create/Update/Delete)

> JSON Server จะปรับ `id` อัตโนมัติเมื่อ `POST` หากไม่ระบุเอง

**เพิ่มตัวละครใหม่**

```bash
curl -X POST http://localhost:4000/characters \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Portgas D. Ace",
    "epithet": "Fire Fist",
    "crew": "Whitebeard Pirates",
    "bounty": 550000000,
    "role": "Commander",
    "devilFruit": "Mera Mera no Mi",
    "haki": ["Armament", "Observation"],
    "debutEpisode": 91,
    "imageUrl": "https://example.com/ace.jpg",
    "bio": "Second division commander.",
    "updatedAt": "2025-01-11T00:00:00.000Z"
  }'
```

**ปรับปรุงบางฟิลด์ (PATCH)**

```bash
curl -X PATCH http://localhost:4000/characters/2 \
  -H "Content-Type: application/json" \
  -d '{"bounty": 1200000000, "updatedAt": "2025-02-01T00:00:00.000Z"}'
```

**แทนที่ทั้งอ็อบเจ็กต์ (PUT)**

```bash
curl -X PUT http://localhost:4000/characters/3 \
  -H "Content-Type: application/json" \
  -d '{
    "id": 3,
    "name": "Nami",
    "epithet": "Cat Burglar",
    "crew": "Straw Hat Pirates",
    "bounty": 400000000,
    "role": "Navigator",
    "devilFruit": "",
    "haki": ["Observation"],
    "debutEpisode": 1,
    "imageUrl": "https://example.com/nami.jpg",
    "bio": "Navigator and cartographer.",
    "updatedAt": "2025-02-02T00:00:00.000Z"
  }'
```

**ลบ**

```bash
curl -X DELETE http://localhost:4000/characters/10
```

### เส้นทางทางลัด (Route Rewriting)

ไฟล์ `routes.json` ที่ให้มามี alias ดังนี้:

* `/api/v1/*` → `/*` (รองรับ prefix เวอร์ชัน)
* `/pirates` → `/characters`
* `/pirates/:id` → `/characters/:id`
* `/top-bounties` → `/characters?_sort=bounty&_order=desc&_limit=5`

ตัวอย่าง:

```
GET /top-bounties
```

จะให้ Top 5 ค่าหัวสูงสุด

### สเปก API เพื่อการสื่อสารเชิงเอกสาร

ไฟล์ [openapi.yaml](sandbox:/mnt/data/openapi.yaml) อธิบายสัญญา (contract) ของ API (OpenAPI 3.0.3) เพื่อใช้กับเครื่องมืออย่าง Swagger UI / Stoplight / Postman (นำไปเรนเดอร์หรือสร้าง SDK ได้)

### แนวปฏิบัติที่แนะนำ (เชิงวิศวกรรม/วิชาการ)

* **เวลาอัปเดต**: ควรกำหนด `updatedAt` เป็น ISO-8601 (`YYYY-MM-DDTHH:mm:ss.sssZ`) เพื่อการสืบค้นตามช่วงเวลาในอนาคต (เช่น `updatedAt_gte` / `updatedAt_lte`).
* **Consistency ของชนิดข้อมูล**: ฟิลด์เชิงตัวเลข (เช่น `bounty`, `debutEpisode`) ควรเป็นตัวเลขจริง ไม่ใช่สตริง เพื่อรองรับ `_gte/_lte` อย่างถูกต้อง
* **การกรองอาร์เรย์**: ด้วยข้อจำกัดของ JSON Server, การค้นหาภายในอาร์เรย์ใช้ `_like` หรือ `q=` จะให้ผลลัพธ์ที่คาดการณ์ได้มากกว่า
* **คงสภาพข้อมูล (state)**: JSON Server เขียนลงไฟล์ `db.json` จริง—เหมาะสำหรับต้นแบบ/การสาธิต ไม่ใช่ระบบ production
* **CORS และ ETag**: ค่าเริ่มต้นเปิด CORS และจัดการ ETag/Cache ให้เหมาะกับการพัฒนา front-end

### การเรียกใช้จากโค้ด (ตัวอย่าง Fetch)

```js
const base = 'http://localhost:4000';

async function topBounties(limit = 5) {
  const res = await fetch(`${base}/characters?_sort=bounty&_order=desc&_limit=${limit}`);
  if (!res.ok) throw new Error('Network error');
  return res.json();
}

async function searchByHaki(term = 'Conqueror') {
  const res = await fetch(`${base}/characters?haki_like=${encodeURIComponent(term)}`);
  return res.json();
}
```


