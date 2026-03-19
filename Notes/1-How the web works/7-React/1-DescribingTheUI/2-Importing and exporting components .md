الفكرة من النص هي كيف **تقسّم الـ components على ملفات مختلفة** في React حتى يبقى الكود مرتب.

خلّينا نرتّب المثال لأنه عندك خطأ صغير في السطر الأول.

---

# 1️⃣ ملف Profile.js

مثلاً تنشئ ملف اسمه:

```
Profile.js
```

وتكتب فيه:

```jsx
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default Profile;
```

هنا عملنا **export** للـ component.

---

# 2️⃣ ملف Gallery.js أو App.js

الآن نريد استخدامه، لذلك نعمل **import**.

الصحيح هو:

```jsx
import Profile from './Profile.js';

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

لاحظ التصحيح:

❌ كان عندك

```js
port Profile from './Profile.js';
```

✔ الصحيح

```js
import Profile from './Profile.js';
```

---

# 3️⃣ ماذا يحدث هنا

React يقوم بالتالي:

1. يقرأ `Gallery`
2. يرى `<Profile />`
3. يذهب إلى الملف `Profile.js`
4. يشغّل الـ component ويعرضه

---

# 4️⃣ شكل المشروع عادة

```
src
│
├─ components
│   └─ Profile.js
│
├─ App.js
```

وفي `App.js`:

```jsx
import Profile from "./components/Profile";
```

---

💡 هذه الطريقة مهمة جداً لأن مشاريع React الكبيرة قد تحتوي **مئات الـ components**.

---

إذا أردت، يمكنني أيضاً أن أريك **طريقة تنظيم مجلدات React التي يستخدمها المطورون المحترفون** (تجعل المشروع مرتباً جداً).
