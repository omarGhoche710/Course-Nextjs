## Why learn Next.js?

Next.js simplifies the process of building production-ready web applications:

1- Routing 
2- API Routes
3- Rendering
4- Data fetching
5- Styling
6- Optimization
7- Dev and prod build system

---

## Next.js simplifies the process of building production-ready web applications:

### 1- Routing ⇒ (app/...)

**Example:**

```bash
app/about/page.tsx
```

```tsx
export default function AboutPage() {
  return <h1>About Page</h1>;
}
```

**Result:**

```
/about
```

---

### 2- API Routes ⇒ (app/api/...)

**Example:**

```bash
app/api/users/route.ts
```

```ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "Omar" },
    { id: 2, name: "Ali" }
  ]);
}
```

**Result:**

```
GET /api/users
```

---

### 3- Rendering ⇒

**Example (Client Rendering):**

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

---

### 4- Data fetching

**Example:**

```tsx
async function getUsers() {
  const res = await fetch("https://api.example.com/users");
  return res.json();
}

export default async function Page() {
  const users = await getUsers();

  return <div>{users.length} users</div>;
}
```

---

### 5- Styling

**Example (CSS Module):**

```bash
app/page.module.css
```

```css
.title {
  color: blue;
}
```

```tsx
import styles from "./page.module.css";

export default function Page() {
  return <h1 className={styles.title}>Hello</h1>;
}
```

---

### 6- Optimization

**Example (Image Optimization):**

```tsx
import Image from "next/image";

export default function Page() {
  return (
    <Image
      src="/profile.png"
      alt="Profile"
      width={200}
      height={200}
    />
  );
}
```

---

### 7- Dev and prod build system

**Example:**

```bash
npm run dev
npm run build
npm start
```

---