سؤالك ممتاز 👍 لأنه يلمس الفرق الأساسي بين **Next.js قبل 13** وبعده.

خلينا نبسط الفكرة.

---

# أولاً: ماذا يعني **render on the server**

في **Next.js** عندما نقول:

**Render on the server**

يعني:

1️⃣ المستخدم يطلب الصفحة
2️⃣ السيرفر يشغل React
3️⃣ يولّد **HTML جاهز**
4️⃣ يرسله للمتصفح

مثال:

```
Browser → Request page
Server → creates HTML
Browser → receives ready HTML
```

الميزة:

* SEO أفضل
* الصفحة تظهر أسرع

---

# ثانياً: قبل **Next.js 13** (نظام pages)

قبل App Router كان عندنا مجلد:

```
pages/
```

مثال:

```
pages/
  index.js
  about.js
  contact.js
```

كل ملف = **route**.

لكن **الـ rendering على السيرفر لم يكن تلقائياً**.

كان لديك 3 طرق:

### 1️⃣ Static Generation (الأكثر استخداماً)

```js
export async function getStaticProps()
```

الصفحة تُبنى مرة وقت **build**.

---

### 2️⃣ Server Side Rendering

```js
export async function getServerSideProps()
```

الصفحة تُرندر **كل request** على السيرفر.

---

### 3️⃣ Client Side

React يعمل في المتصفح فقط.

---

# ثالثاً: بعد **Next.js 13** (App Router)

مع App Router:

```
app/
```

مثال:

```
app/
  page.tsx
  about/
    page.tsx
  blog/
    page.tsx
```

الفرق الكبير:

### كل Component هو **Server Component افتراضياً**

يعني:

```
render happens on the server by default
```

بدون أن تكتب:

```
getServerSideProps
```

---

# ماذا يعني كلامك:

> كل ملف داخل app يعمل render على السيرفر

نعم 👍

لأن **Server Components هي الافتراضية**.

مثال:

```tsx
export default function Page() {
  return <h1>Hello</h1>;
}
```

هذا يُرندر **على السيرفر** تلقائياً.

---

# متى يصبح Client Component؟

عندما تكتب:

```tsx
"use client";
```

مثال:

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
}
```

هنا React يعمل **في المتصفح**.

---

# الفرق الحقيقي باختصار

### قبل Next 13

| الحالة | كيف                |
| ------ | ------------------ |
| SSR    | getServerSideProps |
| SSG    | getStaticProps     |
| Client | React              |

---

### بعد Next 13

| الحالة | كيف            |
| ------ | -------------- |
| Server | الافتراضي      |
| Client | `"use client"` |

---

# لماذا فعلت Next.js هذا؟

لأن **Server Components**:

* تقلل JavaScript في المتصفح
* أسرع
* أفضل للـ SEO

---
