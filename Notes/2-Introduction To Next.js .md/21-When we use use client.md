سؤال مهم 👍 لأن في **Next.js (App Router)** لازم تعرف **متى تحتاج `"use client"`**.

القاعدة الأساسية:

> كل شيء في `app` هو **Server Component افتراضياً**.
> نستخدم `"use client"` فقط عندما نحتاج شيء يعمل **في المتصفح**.

---

# الحالات التي يجب فيها استخدام `"use client"`

## 1️⃣ عندما تستخدم **React Hooks**

مثل:

* `useState`
* `useEffect`
* `useRef`

مثال:

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

بدون `"use client"` سيعطيك **error**.

---

## 2️⃣ عندما تستخدم **events**

أي شيء فيه:

* `onClick`
* `onChange`
* `onSubmit`

مثال:

```tsx
"use client";

export default function Button() {
  return <button onClick={() => alert("Hello")}>Click</button>;
}
```

لأن **الأحداث تعمل في المتصفح**.

---

## 3️⃣ عندما تحتاج **browser APIs**

مثل:

* `localStorage`
* `window`
* `document`

مثال:

```tsx
"use client";

useEffect(() => {
  localStorage.setItem("name", "Omar");
}, []);
```

السيرفر لا يملك `window`.

---

## 4️⃣ عندما تستخدم مكتبات تحتاج DOM

مثل:

* Charts
* Animations
* بعض UI libraries

---

# متى **لا نحتاج** `"use client"`

إذا كان الكومبوننت فقط يعرض بيانات:

```tsx
export default function Page() {
  return <h1>Hello</h1>;
}
```

أو يجلب بيانات:

```tsx
async function getData() {
  const res = await fetch("https://api.com");
  return res.json();
}
```

هذا **أفضل أن يبقى Server Component**.

---

# قاعدة سهلة للحفظ

إذا الكومبوننت:

| يحتوي        | النوع  |
| ------------ | ------ |
| state        | Client |
| event        | Client |
| useEffect    | Client |
| fetch data   | Server |
| display data | Server |

---

💡 نصيحة مهمة يستخدمها محترفو **Next.js**:

> اجعل الصفحة **Server Component**
> وضع التفاعل فقط داخل **Client Components صغيرة**

مثلاً:

```
page.tsx (server)
   ↓
Counter.tsx (client)
```

---
سؤالك ممتاز 👍 وكثير طلاب **Next.js** يغلطوا بهالنقطة.

الجواب القصير:

❌ **لا تضع `"use client"` على طول في الصفحة.**

حتى لو الصفحة فيها **events**.

---

# الطريقة الصحيحة

نخلي الصفحة **Server Component**
ونعمل **component صغير client** للأشياء التفاعلية فقط.

## مثال صفحة Contact

### الصفحة (Server)

```tsx
import ContactForm from "./ContactForm";

export default function Page() {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
}
```

لا يوجد `"use client"` هنا.

---

### الفورم (Client)

```tsx
"use client";

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" />
      <button>Send</button>
    </form>
  );
}
```

هنا نضع `"use client"`.

---

# لماذا نفعل هذا؟

لأن **Server Components أفضل**:

* JavaScript أقل في المتصفح
* الموقع أسرع
* SEO أفضل

إذا وضعت `"use client"` في الصفحة كلها:

```tsx
"use client";

export default function Page() {
```

كل شيء يصبح **Client Component**
وهذا يلغي ميزة السيرفر.

---

# القاعدة التي يستخدمها المحترفون

```
Page = Server
Interactive parts = Client
```

مثال هيكل المشروع:

```
app
 ├ contact
 │  ├ page.tsx        (server)
 │  └ ContactForm.tsx (client)
```

---

💡 معلومة مهمة:
حتى موقع كبير مثل Vercel يبني صفحات **Next.js** بهذه الطريقة.

---

سؤال مهم 👍 لفهم لماذا في **Next.js** بعض الأشياء يجب أن تكون **Client Side**.

خلينا نفهم الفكرة الأساسية.

---

# أولاً: ماذا يفعل السيرفر؟

السيرفر وظيفته الأساسية:

```text
يرسل HTML جاهز للمتصفح
```

مثال:

```html
<h1>Home Page</h1>
<button>Click</button>
```

بعد أن يصل الـ HTML للمتصفح **ينتهي دور السيرفر تقريباً**.

السيرفر لا يستطيع أن يعرف ماذا سيضغط المستخدم بعد ذلك.

---

# لماذا **events** Client Side

الأحداث مثل:

* `onClick`
* `onChange`
* `onSubmit`

تحدث **بعد تحميل الصفحة داخل المتصفح**.

مثال:

```tsx
<button onClick={() => alert("Hello")}>Click</button>
```

من سيكتشف أن المستخدم ضغط الزر؟

ليس السيرفر ❌
بل **المتصفح**.

لذلك الأحداث تعمل في **Client**.

---

# لماذا `useState` Client Side

`useState` يعني:

```text
تغيير واجهة الصفحة مباشرة
```

مثال:

```tsx
const [count, setCount] = useState(0);
```

عندما تضغط:

```tsx
<button onClick={() => setCount(count + 1)}>
```

يجب أن يحدث:

1. تحديث state
2. إعادة render
3. تحديث DOM

كل هذا يحدث **داخل المتصفح**.

السيرفر لا يستطيع تحديث الصفحة كل مرة يضغط المستخدم زر.

---

# تخيل لو كان `useState` على السيرفر

كل ضغط زر سيصبح:

```text
click
↓
request to server
↓
server render
↓
send HTML again
```

الموقع سيصبح **بطيء جداً**.

---

# لهذا السبب

| الشيء      | أين يعمل |
| ---------- | -------- |
| HTML       | Server   |
| fetch data | Server   |
| events     | Client   |
| useState   | Client   |

---

# مثال بسيط

### Server Component

```tsx
export default function Page() {
  return <h1>Hello</h1>;
}
```

السيرفر يرسل HTML فقط.

---

### Client Component

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

هنا التفاعل يحدث في المتصفح.

---

💡 خلاصة الفكرة:

> السيرفر **يعرض الصفحة**
> المتصفح **يجعلها تفاعلية**

---

إذا أردت، أشرح لك أيضاً **كيف يعمل React Hydration في Next.js**.
هذه العملية هي التي تجعل الصفحة تتحول من **HTML عادي إلى موقع تفاعلي** بعد تحميلها، وهي أهم فكرة في React تقريباً.
