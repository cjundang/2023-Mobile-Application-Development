# React Native: CRUD + Navigation + Web API (Teaching Starter)

> **Purpose:** A minimal, classroom-friendly starter demonstrating:
> 1) ListView (FlatList), 2) User Input (TextInput), 3) Local Storage (AsyncStorage),
> 4) Stack Navigator (basic + params), and 5) Web API (fetch + render).

## Quick Start (Expo)
1. **Create a new Expo app** (blank):
   ```bash
   npx create-expo-app rn-crud-nav-api --template
   cd rn-crud-nav-api
   ```

2. **Install navigation + essentials**:
   ```bash
   npm i @react-navigation/native @react-navigation/native-stack
   npx expo install react-native-screens react-native-safe-area-context
   ```

3. **Install AsyncStorage**:
   ```bash
   npx expo install @react-native-async-storage/async-storage
   ```

4. **Copy the provided source files**:
   - Replace your project `App.js` with the `App.js` from this package.
   - Copy the entire `src/` folder into your Expo project root.

5. **Run**:
   ```bash
   npm run android   # or: npm run ios  (on macOS)
   # or scan the QR with Expo Go
   ```

## Learning Outcomes
- Construct efficient **FlatList** UIs with stable keys.
- Capture input via **TextInput** and validate before commit.
- Persist data locally using **AsyncStorage** (CRUD lifecycle).
- Navigate with a **Native Stack Navigator**, passing **route params**.
- Consume a **Web API** via `fetch`, render with FlatList, and handle loading/errors.

## Screens Overview
- **HomeScreen** – entry point with two flows (Local Todos / API Posts).
- **TodosScreen** – list + delete + go to add/edit.
- **TodoFormScreen** – add/edit item (title) and persist to local storage.
- **PostListScreen** – fetch & display posts from JSONPlaceholder.
- **PostDetailScreen** – fetch and display a single post by `id`.

## Notes
- Web API uses `https://jsonplaceholder.typicode.com/` for demo purposes.
  - POST/PUT/DELETE respond successfully but do not persist on server (OK for teaching).
- The local CRUD (AsyncStorage) **does** persist between app restarts.
