تمام! 😄 خلينا نشرح الفرق بين **re-render** و **re-mount** في React مع أمثلة عملية لكل واحدة.

---

# 1️⃣ **Re-render**

### الفكرة:

* React تعيد **عرض (render) component** بسبب تحديث **props أو state**.
* **State داخل component تبقى كما هي.**
* React لا تعيد إنشاء component من الصفر.

### مثال:

```jsx
import { useState } from "react";

function Counter({ step }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + step)}>Increase</button>
    </div>
  );
}

export default function App() {
  const [step, setStep] = useState(1);

  return (
    <div>
      <Counter step={step} />
      <button onClick={() => setStep(step + 1)}>Change Step</button>
    </div>
  );
}
```

#### ماذا يحدث هنا؟

1. المستخدم يضغط **Increase** → `count` يزيد → Re-render فقط.
2. المستخدم يضغط **Change Step** → `step` يتغير → React تعيد **render** الـ Counter.
3. **لكن `count` تبقى محفوظة** لأنها state داخل الـ Counter.

> هذه هي **Re-render**: تحديث العرض، لكن component نفسها **موجودة**، state محفوظة.

---

# 2️⃣ **Re-mount**

### الفكرة:

* React **تنشئ component جديد تماماً**.
* كل state داخلي يتم **إعادة تهيئته**.
* هذا يحدث عادة عندما نغير **key**.

### مثال:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default function App() {
  const [id, setId] = useState(1);

  return (
    <div>
      <Counter key={id} />
      <button onClick={() => setId(id + 1)}>Reset Counter</button>
    </div>
  );
}
```

#### ماذا يحدث هنا؟

1. المستخدم يضغط **Increase** → `count` يزيد → Re-render داخل Counter.
2. المستخدم يضغط **Reset Counter** → `id` يتغير → React تعتبر Counter **جديدة** (re-mount).
3. **Count يتم إعادة تهيئته إلى 0**.

> هذه هي **Re-mount**: React تنشئ component جديد، state القديم يختفي.

---

# 🔹 الفرق الأساسي

| النوع     | ماذا يحدث بالـ state   | مثال شائع                             |
| --------- | ---------------------- | ------------------------------------- |
| Re-render | state محفوظة           | تغيير props فقط، مثال step في Counter |
| Re-mount  | state يتم إعادة تهيئته | تغيير key لفرض إنشاء component جديد   |

---

# 3️⃣ ربط مع تطبيق Chat

* في **Messenger بدون key** → تغيير المستلم → Re-render → **state text تبقى محفوظة** → خطر إرسال رسالة للشخص الخطأ.
* في **Messenger مع key** → تغيير المستلم → Re-mount → **state text يتم مسحه** → سلوك صحيح.

```jsx
<Chat key={to.email} contact={to} />
```

---

