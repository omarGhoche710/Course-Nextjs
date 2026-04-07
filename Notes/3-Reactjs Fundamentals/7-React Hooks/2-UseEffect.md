حسناً! منرجع للأساس تماماً 🙌

---

## فكرة واحدة بس — اقرأها بتمعّن

تخيّل عندك مطعم.

```text
الطاهي = React
الطبق = الـ UI اللي يظهر للمستخدم
```

شغلة الطاهي الأساسية هي:

```text
يحضّر الطبق ويقدّمه
```

بس أحياناً في أشياء **خارج المطبخ** لازم تصير — مثل:

```text
- تلفن لمورّد يجيب مواد (fetch من API)
- يشغّل موقّت (timer)
- يفتح باب (event listener)
```

هاي الأشياء مش جزء من تحضير الطبق مباشرةً — بس لازم تصير.

هاي بالضبط هي **Side Effects.**

---

## إذاً useEffect بكلمة واحدة:

```text
useEffect = "بعد ما تحضّر الطبق،
              روح اعمل هاي الأشياء الخارجية"
```

---

## مثال حقيقي بسيط جداً

عندك صفحة بدها تجيب اسم المستخدم من الإنترنت:

```tsx
function Profile() {

  // 1. مكان نحفظ فيه البيانات
  const [name, setName] = useState("");

  // 2. بعد ما الصفحة تظهر، روح جيب البيانات
  useEffect(() => {
    fetch("/api/user")
      .then(res => res.json())
      .then(data => setName(data.name));
  }, []);

  // 3. اعرض البيانات
  return <h1>{name}</h1>;
}
```

الترتيب اللي بيصير:

```text
1. الصفحة تظهر (فاضية)
        ↓
2. useEffect يشتغل
        ↓
3. يجيب البيانات من الإنترنت
        ↓
4. setName → يحفظ الاسم
        ↓
5. الصفحة تتحدّث وتعرض الاسم
```

---

سؤال ممتاز! 👌

لو ما استخدمنا `useEffect` وكتبنا الكود مباشرةً داخل المكوّن:

```tsx
function Profile() {
  const [name, setName] = useState("");

  // ❌ مباشرة بدون useEffect
  fetch("/api/user")
    .then(res => res.json())
    .then(data => setName(data.name));

  return <h1>{name}</h1>;
}
```

اللي رح يصير:

```text
1. الصفحة تظهر
        ↓
2. fetch يشتغل
        ↓
3. setName → يحفظ الاسم
        ↓
4. setName سبّبت render جديد
        ↓
5. الصفحة تظهر من جديد
        ↓
6. fetch يشتغل من جديد !!
        ↓
7. setName من جديد !!
        ↓
8. render من جديد !!
        ↓
9. ♾️ loop لا نهائي
```

---

يعني `useEffect` بيحمي من هاد الـ loop بكيفية بسيطة:

```text
"لا تشغّل هاد الكود أثناء الـ render
 شغّله بعد ما الـ render خلص"
```

---

تمام! خلّينا نكمل على نفس المثال 👇

---

## شو هي dependencies؟

رجعنا للمطعم 😄

تخيّل الطاهي قال:

```text
"بدي أتصل بالمورّد
  بس مش كل شي — بس لما تخلص المواد"
```

يعني مش رح يتصل كل دقيقة — رح يتصل **بس لما يتغيّر شي معيّن.**

هاد بالضبط هو الـ `dependencies` —

```text
قائمة الأشياء اللي إذا تغيّرت
→ useEffect يشتغل من جديد
```

---

## الحالات الثلاث

**١. بدون dependencies:**

```tsx
useEffect(() => {
  console.log("run");
});
```

```text
يشتغل بعد كل render
بدون استثناء
```

---

**٢. قائمة فاضية:**

```tsx
useEffect(() => {
  console.log("run");
}, []);
```

```text
يشتغل مرة واحدة بس
عند أول render فقط
```

---

**٣. فيها قيمة:**

```tsx
useEffect(() => {
  console.log("run");
}, [userId]);
```

```text
يشتغل في البداية
+
يشتغل كل مرة userId يتغيّر
```

---

## مثال حقيقي

تخيّل عندك صفحة بروفايل — كل مستخدم إله ID مختلف:

```tsx
function Profile({ userId }) {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(`/api/user/${userId}`)
      .then(res => res.json())
      .then(data => setName(data.name));
  }, [userId]); // 👈 بس لما userId يتغيّر

  return <h1>{name}</h1>;
}
```

اللي بيصير:

```text
فتحت صفحة userId = 1
        ↓
useEffect يشتغل → يجيب بيانات المستخدم 1
        ↓
غيّرت لـ userId = 2
        ↓
useEffect يشتغل من جديد → يجيب بيانات المستخدم 2
        ↓
ما تغيّر شي
        ↓
useEffect ما اشتغل ❌
```

---

تمام! خلّينا نفككها بشكل بسيط 👇

---

## شو هو `setInterval`؟

```tsx
setInterval(() => {
  console.log("tick");
}, 1000);
```

```text
كل ثانية → اطبع "tick"
كل ثانية → اطبع "tick"
كل ثانية → اطبع "tick"
♾️ للأبد
```

---

## المشكلة

لو المكوّن انحذف من الصفحة — الـ timer لسا شغّال بالخلفية!

```text
المكوّن انحذف
        ↓
بس timer لسا شغّال ♾️
        ↓
낭낭낭낭 مشكلة بالذاكرة
```

---

## الحل — cleanup function

```tsx
useEffect(() => {

  // 1. شغّل الـ timer واحفظ ID تبعه
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  // 2. لما المكوّن ينحذف → وقّف الـ timer
  return () => {
    clearInterval(id); // 👈 وقّف الـ timer باستخدام الـ ID
  };

}, []);
```

الترتيب:

```text
المكوّن ظهر
        ↓
timer اشتغل (tick كل ثانية)
        ↓
المكوّن انحذف
        ↓
cleanup اشتغل → timer وقف ✅
```

---

## تشبيه بسيط

```text
فتحت التلفزيون        = setInterval
طلعت من الغرفة       = المكوّن انحذف
رجعت وسكّرت التلفزيون = cleanup function
```

سؤال مهم! 👌

---

## شو يعني "المكوّن انحذف"؟

يعني المكوّن **اختفى من الصفحة** — مش موجود بالـ UI.

---

## مثال بسيط

تخيّل عندك صفحتين:

```tsx
// لما تكون بصفحة Profile → المكوّن موجود ✅
// لما تروح لصفحة Settings → المكوّن انحذف ❌
```

```text
فتحت صفحة Profile
        ↓
مكوّن Profile ظهر → timer اشتغل
        ↓
ضغطت على Settings
        ↓
مكوّن Profile انحذف من الصفحة
        ↓
cleanup اشتغل → timer وقف ✅
```

---

## مثال ثاني — بالكود

```tsx
function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(false)}>إخفاء</button>
      {show && <Timer />} {/* 👈 لما show = false → Timer انحذف */}
    </div>
  );
}
```

```text
show = true  → Timer موجود ✅
ضغطت الزر
show = false → Timer انحذف ❌ → cleanup يشتغل
```

---

بكلمة تقنية واحدة:

```text
المكوّن انحذف = Unmount
```

## Ex

```js
import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
  	const connection = createConnection(serverUrl, roomId);
    connection.connect();
  	return () => {
      connection.disconnect();
  	};
  }, [serverUrl, roomId]);
  // ...
}
```

بالضبط!! 🎯 فهمت الفكرة منيح جداً —

وهاد مش بس "شي ممتاز" — هاد اسمه:

```text
Resource Management
إدارة الموارد
```

---

## ليش مهم؟

تخيّل ما عملنا `disconnect`:

```text
المستخدم فتح ChatRoom → connection 1 ✅
راح لصفحة ثانية      → connection 1 لسا شغّال ❌
رجع لـ ChatRoom       → connection 2 ✅
راح لصفحة ثانية      → connection 1 و 2 لسا شغّالين ❌
راح وجا 10 مرات      → 10 connections شغّالين بالخلفية 💀
```

```text
نتيجة:
- الخادم محمّل بلا سبب
- المتصفح بياكل ذاكرة
- ممكن يصير bugs غريبة
```

---

## مع الـ cleanup:

```text
فتح ChatRoom  → connect ✅
راح لصفحة ثانية → disconnect ✅
رجع           → connect جديد ✅
راح           → disconnect ✅
دايماً connection واحد بس 🎯
```

---

يعني الـ cleanup مش بس "تنظيف" —

```text
هي ضمان إنو التطبيق
يشتغل بشكل صح ومش يأكل موارد بلا سبب
```

---

## useEffect Cleanup

الـ cleanup بتشتغل لما **dependencies** تتغير — مش علاقتها بالـ re-render

```javascript
useEffect(() => {
    connection.connection();

    return () => {
      connection.disconnection(); // ← بتشتغل لما dependency تتغير
    };
  }, [serverUrl, roomId]); // ← هدول الـ dependencies
```

### الترتيب

```
dependency اتغيرت  →  cleanup (disconnect)  →  effect تاني (connect)
```

### بالاختصار

| اللي بيخلي الـ re-render | اللي بيخلي الـ cleanup |
|---|---|
| تغيير state أو props | تغيير الـ dependency array |

هدول شيئين منفصلين — الـ re-render مش بالضرورة بيعمل cleanup ✅