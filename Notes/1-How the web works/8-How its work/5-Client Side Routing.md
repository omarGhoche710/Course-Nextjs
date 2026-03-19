خلّينا نفسّر الفقرة **ببساطة خطوة خطوة** 👇
هي تتكلم عن كيف يتم **التنقل بين الصفحات في تطبيق React باستخدام React Router**.

---

# 1️⃣ ما هو React Router ؟

هو مكتبة تسمح لك بعمل **صفحات داخل تطبيق React** بدون إعادة تحميل الصفحة.

يعني بدل:

```id="d1l0yq"
request جديد للسيرفر
+
reload الصفحة
```

React يغيّر الصفحة **داخل المتصفح فقط**.

---

# 2️⃣ ماذا يحدث عندما تغيّر الصفحة؟

لنفترض عندك موقع فيه:

```
/home
/about
/contact
```

في الموقع التقليدي:

1️⃣ تضغط رابط
2️⃣ المتصفح يرسل request للسيرفر
3️⃣ السيرفر يرسل HTML جديد
4️⃣ الصفحة تعمل **reload**

---

لكن مع **React Router** يحدث شيء مختلف.

### الخطوات

1️⃣ تضغط الرابط

```
/about
```

2️⃣ لا يذهب الطلب للسيرفر.

3️⃣ React Router يقرأ **URL الجديد**.

4️⃣ يعرض **component جديد**.

مثلاً:

```id="q5h37l"
HomePage
AboutPage
ContactPage
```

يعني React يبدّل **component فقط**.

---

# 3️⃣ لماذا لا يحصل refresh للصفحة؟

لأن React Router يعمل داخل المتصفح.

يعني:

```id="ms9ww0"
Change URL
↓
React Router
↓
Render Component
```

بدون reload.

---

# 4️⃣ ماذا لو احتجنا بيانات من السيرفر؟

النص يقول:

> If the new page requires fetching data from the server

يعني:

إذا الصفحة الجديدة تحتاج بيانات.

مثال:

صفحة منتجات:

```
/products
```

React سيطلب البيانات:

```id="8b2yq9"
fetch("/api/products")
```

ثم يعرضها في component.

---

# 5️⃣ مثال بسيط بالكود

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

هنا:

* `/` يعرض **Home**
* `/about` يعرض **About**

بدون reload.

---

# 6️⃣ خلاصة الفكرة

مع **React Router**:

```
User clicks link
↓
URL changes
↓
React Router
↓
Render new component
```

بدون طلب HTML جديد من السيرفر.

---

💡 هذه الفكرة تسمى:

**Client Side Routing**

وهي شيء أساسي في React.

---

السؤال ممتاز 👌
السبب أن **React Router لا يترك المتصفح يطلب صفحة جديدة من السيرفر**.

خلّيني أوضحها خطوة خطوة.

---

# 1️⃣ في المواقع العادية

عندما تضغط رابط:

```html
<a href="/about">About</a>
```

المتصفح يعمل:

```text
Request جديد للسيرفر
↓
السيرفر يرسل HTML جديد
↓
الصفحة تعمل refresh
```

لأن المتصفح يذهب فعليًا إلى صفحة جديدة.

---

# 2️⃣ في React مع React Router

عندما تضغط الرابط، React Router **يمنع السلوك الطبيعي للمتصفح**.

بدل أن يحدث هذا:

```text
Browser → Server → HTML جديد
```

يحدث هذا:

```text
React Router
↓
يغير الـ URL
↓
يبدّل الـ Component
```

فقط.

---

# 3️⃣ كيف يتغير الرابط بدون refresh؟

React Router يستعمل شيء في المتصفح اسمه:

**History API**

هذا يسمح له:

```text
تغيير URL
بدون إعادة تحميل الصفحة
```

مثال:

```text
localhost:3000/
↓
localhost:3000/about
```

لكن الصفحة نفسها لم تُعاد تحميلها.

---

# 4️⃣ ماذا يفعل React بعد تغيير الرابط؟

React يقول:

```text
URL = /about
↓
اعرض About component
```

بدل:

```text
اعرض Home component
```

---

# 5️⃣ مثال بسيط

في React:

```jsx
<Link to="/about">About</Link>
```

عند الضغط:

1️⃣ يتغير الرابط
2️⃣ React Router يعرض component جديد
3️⃣ لا يحدث refresh

---

# خلاصة الفكرة

السبب أن الصفحة لا تعمل refresh:

```text
React Router يمنع request للسيرفر
ويغير فقط components داخل الصفحة
```

---

💡 معلومة ستجعل Next.js واضحًا لك:

في **Next.js** يحدث شيء ذكي:

* أول تحميل → من السيرفر
* التنقل بين الصفحات → مثل React (بدون refresh)

---

إذا أردت، أريك **الرسم الذي يوضح الفرق بين 3 أشياء** (وهذا يجعل 90٪ من الناس يفهمون الموضوع فورًا):

1️⃣ المواقع التقليدية
2️⃣ React
3️⃣ Next.js.

