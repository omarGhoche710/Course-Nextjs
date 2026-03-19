سؤال مهم 👍 خلينا نفهم **ماذا يعني تغير props**.

---

# ما هي props؟

**props = البيانات التي يرسلها component الأب (parent) إلى component الابن (child).**

مثال بسيط:

```jsx
function App() {
  return <Button text="Play" />;
}
```

هنا:

```text
text = prop
```

الـ `App` يرسلها إلى `Button`.

---

# مثال داخل Button

```jsx
function Button({ text }) {
  return <button>{text}</button>;
}
```

النتيجة:

```text
Play
```

---

# ماذا يعني **تغير props**؟

يعني أن **القيمة التي يرسلها الأب تتغير**.

مثال:

أول render:

```jsx
<Button text="Play" />
```

بعد التغيير:

```jsx
<Button text="Pause" />
```

هنا حدث:

```text
props تغيرت
```

React يفعل:

```text
re-render للـ Button
```

---

# مثال أوضح

```jsx
function App() {
  const [movie, setMovie] = useState("Play");

  return (
    <>
      <Button text={movie} />
      <button onClick={() => setMovie("Pause")}>
        Change
      </button>
    </>
  );
}
```

هنا:

1️⃣ البداية:

```text
movie = "Play"
```

Button يعرض:

```text
Play
```

---

2️⃣ عند الضغط:

```text
setMovie("Pause")
```

النتيجة:

```text
props تغيرت
text="Pause"
```

React يعيد render للـ Button.

---

# الفكرة المهمة

React يعيد render عندما يحدث:

```text
1️⃣ state تغير
2️⃣ props تغير
```

---

# تصور العلاقة

```text
App (parent)
│
│ props
▼
Button (child)
```

لو تغيرت البيانات في **App** →
React يرسل props جديدة →
`Button` يعيد render.

---

# الخلاصة

**تغير props يعني:**

```text
القيمة التي يرسلها parent للـ child تغيرت
```

وعندها:

```text
React يعيد render للـ child component
```

---

سؤال ممتاز 👌 والإجابة هي: **السبب الأساسي هو تغيّر الـ state**.

خلينا نمشيها خطوة خطوة.

---

# 1️⃣ ماذا حدث أولًا؟

في المثال:

```jsx
const [movie, setMovie] = useState("Play");
```

عند الضغط:

```jsx
setMovie("Pause")
```

هنا الذي حدث أولًا:

```text
state تغيرت
```

---

# 2️⃣ ماذا يفعل React بعد تغيّر state؟

React يعيد **render للـ component الذي يملك هذه state**.

في المثال:

```text
App
```

إذًا React يشغل:

```text
App()
```

مرة ثانية.

---

# 3️⃣ ماذا يحدث داخل App بعد render؟

عند إعادة تشغيل `App`:

```jsx
<Button text={movie} />
```

الآن `movie` أصبحت:

```text
Pause
```

إذًا:

```text
props الجديدة = "Pause"
props القديمة = "Play"
```

---

# 4️⃣ ماذا يحدث للـ Button؟

React يرى أن:

```text
props تغيرت
```

لذلك يعيد **render للـ Button أيضًا**.

---

# التسلسل الكامل

```text
User Click
↓
setMovie("Pause")
↓
state تغيرت
↓
React يعيد render لـ App
↓
App يرسل props جديدة
↓
Button يستقبل props جديدة
↓
Button يعيد render
```

---

# الخلاصة المهمة

الـ **trigger الحقيقي** هو:

```text
state change
```

أما **props change** فهي نتيجة لذلك.

---

# تصور بسيط

```text
state change
     ↓
Parent render
     ↓
props change
     ↓
Child render
```

---

💡 قاعدة مهمة في React:

```text
State changes trigger renders
Props changes cause child components to render
```

---


