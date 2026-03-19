سؤال ممتاز 👌 وهذا من أهم الأشياء لفهم React.

سؤالك:
**ليش نستخدم `useState` بدل متغير عادي مثل**

```javascript
const index = 0;
```

---

# المشكلة مع المتغير العادي

لو كتبنا:

```javascript
let index = 0;

function handleNextClick() {
  index = index + 1;
}
```

المتغير **سيتغير فعلاً**، لكن React **لن يعيد رسم الواجهة**.

يعني:

```text
index تغير
لكن UI لم تتغير
```

لأن React لا يعرف أن المتغير تغير.

---

# لماذا `useState` مختلف

عندما نكتب:

```javascript
const [index, setIndex] = useState(0);
```

React يفهم أن:

```text
index = state
```

وعندما نستخدم:

```javascript
setIndex(index + 1);
```

React يفعل شيئين:

1️⃣ يغير القيمة
2️⃣ يعيد **render للـ component**

---

# ماذا يحدث فعليًا

التسلسل:

```text
User clicks button
↓
handleNextClick()
↓
setIndex(...)
↓
React updates state
↓
React re-renders component
↓
UI يتحدث
```

---

# مثال بسيط

بدون state:

```javascript
let count = 0;

function increment() {
  count++;
}
```

المشكلة:

```text
count يتغير
لكن الصفحة لا تتغير
```

---

مع state:

```javascript
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}
```

النتيجة:

```text
count يتغير
React يعيد render
UI يتحدث
```

---

# نقطة مهمة جدًا

عند كل render:

```text
React يعيد تشغيل component من البداية
```

يعني لو كتبنا:

```javascript
let index = 0;
```

سيصبح دائمًا:

```text
index = 0
index = 0
index = 0
```

لأن component يعاد تشغيله.

لكن `useState` يجعل React **يحفظ القيمة بين الـ renders**.

---

# الخلاصة

المتغير العادي:

```text
لا يحفظ القيمة بين renders
ولا يسبب إعادة render
```

أما `useState`:

```text
يحفظ القيمة بين renders
ويخبر React أن يعيد render
```

---

سؤال ذكي 👌 لأن هذا يوضح كيف يعمل **React render cycle**.

أنت تقصد شيئًا مثل:

```javascript
let index = 0;

export default function Gallery() {

  function handleNextClick() {
    index = index + 1;
  }

  return (
    <button onClick={handleNextClick}>
      Next
    </button>
  );
}
```

وتسأل:
**إذا وضعنا `index` خارج الـ function، لماذا لا نستخدمه بدل `useState`؟**

---

# 1️⃣ نعم، القيمة ستتغير

لو ضغطت الزر:

```text
index = 0
click → index = 1
click → index = 2
click → index = 3
```

المتغير سيتغير فعلاً.

لكن المشكلة:

```text
React لن يعيد render
```

يعني الواجهة **لن تتحدث**.

---

# 2️⃣ React لا يراقب المتغيرات

React لا يعرف أن:

```javascript
index = index + 1
```

حصلت.

React يعيد render فقط عندما يحدث:

* `setState`
* `setIndex`
* `setShowMore`
* أو props تتغير

---

# 3️⃣ مشكلة أكبر: Shared variable

لو كتبنا:

```javascript
let index = 0;
```

خارج component، يصبح **مشترك بين كل instances** من component.

مثال:

```jsx
<Gallery />
<Gallery />
```

النتيجة:

```text
Gallery 1 يغير index
Gallery 2 يتغير معه
```

وهذا **سلوك خطير جدًا**.

---

# 4️⃣ React يريد state محلي

`useState` يجعل البيانات:

```text
Local to the component
```

يعني:

```text
Gallery 1 → index خاص بها
Gallery 2 → index خاص بها
```

---

# 5️⃣ الفرق الحقيقي

| متغير عادي                 | useState           |
| -------------------------- | ------------------ |
| React لا يراقبه            | React يراقبه       |
| لا يسبب render             | يسبب render        |
| لا يحفظ القيمة بين renders | يحفظها             |
| قد يكون shared             | محلي لكل component |

---

# الخلاصة

حتى لو كتبنا:

```javascript
let index = 0;
```

خارج component:

* React **لن يعيد render**
* المتغير قد يصبح **مشترك**
* التطبيق يصبح **غير قابل للتوقع**

لهذا نستخدم:

```javascript
useState
```

---

💡 معلومة مهمة:
React نفسه **يخزن الـ state خارج component** لكنه يعيده لك عند كل render.

لهذا نقول أن:

```text
Component functions are re-run
لكن state تبقى محفوظة
```

---

إذا أردت، أشرح لك أيضًا **كيف React يخزن state داخليًا** (فكرة hooks array) وهي من أمتع الأشياء لفهم React بعمق.
