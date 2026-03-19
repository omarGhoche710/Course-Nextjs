سؤال ممتاز 👍 خلّيني أريك **كيف تظهر المشكلة فعليًا** في **React**.

---

# مثال يوضح المشكلة

لنفرض هذا الكود:

```jsx
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
```

وعند الضغط على الزر:

```jsx
<button onClick={handleClick}>+3</button>
```

---

# ماذا نتوقع؟

نحن كتبنا:

```
+1
+1
+1
```

إذن نتوقع:

```
count = 3
```

---

# ماذا يحدث فعليًا؟

النتيجة تكون:

```
count = 1
```

---

# لماذا؟

لأن React يعمل **Batching** للتحديثات.

يعني React يرى هذا:

```
count = 0
```

ثم ينفذ الثلاثة هكذا:

```
setCount(0 + 1)
setCount(0 + 1)
setCount(0 + 1)
```

كلهم يعتمدون على **نفس القيمة القديمة**.

---

# الحل الصحيح

نستخدم `prev`:

```jsx
function handleClick() {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
}
```

الآن React يفعل:

```
prev = 0 → 1
prev = 1 → 2
prev = 2 → 3
```

النتيجة:

```
count = 3
```

---

# قاعدة ذهبية في React

إذا كانت القيمة الجديدة تعتمد على القيمة السابقة:

```
setState(prev => newValue)
```

وليس:

```
setState(value)
```

---

💡 معلومة مهمة:
السبب الحقيقي لهذه المشكلة هو نظام **Batching** في **React** الذي يجعل React أسرع.

---

إذا أردت، أريك **مثالًا أخطر قليلًا يحدث كثيرًا في المشاريع الحقيقية عندما تستخدم setState داخل async function**. 🚀
