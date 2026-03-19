فهمك قريب جدًا 👍 لكن في تصحيح مهم صغير.

**`setState` في React مش async مثل `setTimeout` أو `fetch`.**
هو **scheduled update** يعني React **يجدول update** لوقت لاحق أثناء الـ render cycle.

خلّينا نمشي خطوة خطوة على الكود 👇

```js
console.log(count);  // 0
setCount(count + 1);
console.log(count);  // still 0
```

## ماذا يحدث فعليًا؟

لنفترض أن هذا داخل **render رقم 1**.

```
Render 1
count = 0
```

### الخطوة 1

```js
console.log(count)
```

يطبع

```
0
```

لأن snapshot هذا الـ render هو:

```
count = 0
```

---

### الخطوة 2

```js
setCount(count + 1)
```

React لا يغيّر المتغير مباشرة.

بدل ذلك يعمل:

```
queue update
next state = 1
```

يعني:

```
React: أوكي سأعمل render جديد لاحقًا
```

لكن **لم يحصل render بعد**.

---

### الخطوة 3

```js
console.log(count)
```

ما زلنا داخل **نفس render**.

لذلك:

```
count = 0
```

فتظهر:

```
0
```

---

## بعد أن ينتهي الكود

React يقوم بالـ update:

```
Render 2
count = 1
```

الـ component يعاد رسمه.

---

## التصحيح على كلامك

أنت قلت:

> setState mtl async function

ليس تمامًا.

الأصح:

```
setState schedules an update
```

يعني:

```
queue → render later
```

وليس:

```
async → await
```

---

## تخيلها هكذا

React لديه **طابور updates**:

```
setCount(1)
setCount(2)
setCount(3)
```

React يجمعهم ثم يعمل:

```
Render واحد فقط
```

وهذا اسمه:

```
Batching
```

في **React**.

---

## قاعدة مهمة جدًا

داخل نفس الـ render:

```
state ثابت
```

لن يتغير أبدًا.

التغيير يظهر فقط في:

```
next render
```

---

إذا أردت، أشرح لك **خطأ مشهور جدًا يقع فيه كل من يتعلم React** مع هذا المثال:

```js
setCount(count + 1)
setCount(count + 1)
setCount(count + 1)
```

وستتوقع أن تصبح `3` لكن React يعطيك `1` 😅
وفهم هذا المثال يجعلك تفهم **90% من state في React**.


تمام، هذا مثال مشهور في **React** ويشرح فكرة **snapshot + batching**.

خلّينا نشوفه خطوة خطوة.

---

# الكود

```js
setCount(count + 1)
setCount(count + 1)
setCount(count + 1)
```

لنفرض أن:

```js
count = 0
```

---

# ماذا تتوقع أنت؟

كثير ناس تتوقع:

```
0 + 1 = 1
1 + 1 = 2
2 + 1 = 3
```

النتيجة:

```
count = 3
```

لكن React لا يعمل هكذا ❌

---

# ماذا يحدث فعليًا؟

تذكر القاعدة:

```
كل render عنده snapshot ثابت من state
```

يعني داخل هذا الـ render:

```
count = 0
```

لن يتغير.

---

## React يرى الكود هكذا

```js
setCount(0 + 1)
setCount(0 + 1)
setCount(0 + 1)
```

يعني:

```js
setCount(1)
setCount(1)
setCount(1)
```

---

# ثم ماذا يفعل React؟

React يجمعهم في **batch** ويعمل **render واحد فقط**.

النتيجة النهائية:

```
count = 1
```

وليس 3.

---

# الحل الصحيح

إذا أردت أن تعتمد على القيمة السابقة يجب استعمال **functional update**.

```js
setCount(c => c + 1)
setCount(c => c + 1)
setCount(c => c + 1)
```

---

## ماذا يحدث الآن؟

React ينفذهم هكذا:

```
c = 0 → 1
c = 1 → 2
c = 2 → 3
```

النتيجة:

```
count = 3
```

---

# القاعدة الذهبية في React

إذا كنت تبني state اعتمادًا على state السابق استخدم:

```
setState(prev => newValue)
```

وليس:

```
setState(value)
```

---

الجواب هو: **سيظهر Alice** وليس Bob.

وهذا بسبب فكرة **State snapshot** في **React**.

خلّينا نمشي بالسيناريو خطوة خطوة 👇

---

# 1️⃣ الحالة في البداية

```js
to = "Alice"
message = "Hello"
```

---

# 2️⃣ تضغط Send

تنفذ الدالة:

```js
handleSubmit
```

في هذه اللحظة React يعطي الدالة **snapshot من state الحالي**:

```js
to = "Alice"
message = "Hello"
```

ثم ينفذ:

```js
setTimeout(() => {
  alert(`You said ${message} to ${to}`);
}, 5000);
```

الدالة داخل `setTimeout` **أغلقت (closure)** على هذه القيم.

يعني:

```js
message = "Hello"
to = "Alice"
```

---

# 3️⃣ بعد الضغط تغيّر الشخص إلى Bob

هذا يحدث:

```js
setTo("Bob")
```

فيعمل React:

```
Render جديد
to = "Bob"
```

لكن هذا **render جديد**.

الـ `setTimeout` ما زال يستخدم **snapshot القديم**.

---

# 4️⃣ بعد 5 ثواني

تنفذ الدالة داخل `setTimeout`.

فتظهر:

```
You said Hello to Alice
```

وليس Bob.

---

# الفكرة الأساسية

كل **render** في React يملك نسخة ثابتة من state:

```
Render 1
to = Alice
```

```
Render 2
to = Bob
```

والدوال تستخدم القيم من **الـ render الذي أُنشئت فيه**.

---

# لماذا هذا مفيد؟

لأنه يمنع bugs غريبة مثل:

* تغير القيم فجأة داخل async code
* race conditions
* نتائج غير متوقعة

---

💡 ملاحظة مهمة:
هذا المثال يجمع بين مفهومين مهمين في **React**:

1. **State snapshot**
2. **JavaScript closures**

---


