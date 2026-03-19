في **Next.js** ما في طريقة إجبارية 100٪، لكن في **best practices** أغلب المشاريع تستخدمها.

خليني أعطيك structure نظيف وبسيط 👇

# أفضل تنظيم لمجلد styles

```
app
components
styles
```

داخل **styles** عادة نضع:

```
styles
│
├── globals.css
├── variables.css
├── utilities.css
└── components
    ├── button.module.css
    └── card.module.css
```

---

# 1️⃣ globals.css

هذا للـ **styles العامة للموقع كله**.

مثال:

```css
body {
  margin: 0;
  font-family: sans-serif;
}
```

في **Next.js** يتم استيراده غالبًا في:

```
app/layout.js
```

```javascript
import "../styles/globals.css";
```

---

# 2️⃣ variables.css

هنا نضع **الألوان والأحجام العامة**.

مثال:

```css
:root {
  --primary: #0070f3;
  --padding: 16px;
}
```

---

# 3️⃣ utilities.css

مثل:

```
flex-center
container
grid
```

مثال:

```css
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

# 4️⃣ CSS Modules للمكونات

في **React** و **Next.js** الأفضل أن يكون style قريب من component.

مثال:

```
components
 ├── Button.jsx
 └── Button.module.css
```

Button.jsx:

```javascript
import styles from "./Button.module.css";

export default function Button() {
  return <button className={styles.btn}>Click</button>;
}
```

Button.module.css:

```css
.btn {
  background: red;
}
```

---

# القاعدة التي يستخدمها المطورون

| النوع       | أين نضعه             |
| ----------- | -------------------- |
| styles عامة | styles/globals.css   |
| variables   | styles/variables.css |
| utilities   | styles/utilities.css |
| style لمكون | بجانب component      |

---

💡 ملاحظة مهمة:
لو كنت تستخدم **Tailwind CSS** غالبًا لن تحتاج مجلد styles كبير.

---

إذا حاب، فيني أعطيك **أفضل structure لمشروع Next.js كامل (يستخدمه المطورون في الشركات)** — سيسهّل عليك المشاريع الكبيرة كثير.
