النص يشرح **كيف يعمل Next.js عندما يستخدم Server Rendering**.
خلّينا نمشي فيه خطوة خطوة 👇

---

# 1️⃣ الفكرة الأساسية

مطوروا Vercel (الذين صنعوا Next.js) أعطونا ميزة مهمة:

يمكنك اختيار أين يتم **render** للصفحة:

```text
Client
أو
Server
```

يعني يمكنك استخدام:

* Client Rendering (مثل React)
* Server Rendering

---

# 2️⃣ ماذا يحدث عندما يزور المستخدم موقع Next.js ؟

عندما يفتح المستخدم الموقع:

```text
User → Request → Server
```

السيرفر يبدأ بتنفيذ **React Components**.

---

# 3️⃣ السيرفر يبني الصفحة

السيرفر يقوم بـ:

```text
تشغيل React Components
↓
جلب البيانات (fetch data)
↓
بناء HTML
↓
إرسال الصفحة للمتصفح
```

يعني بدل أن المتصفح يبني الصفحة، **السيرفر يبنيها**.

---

# 4️⃣ ماذا يرسل السيرفر للمتصفح؟

السيرفر يرسل:

```text
HTML جاهز
+
CSS
+
JavaScript
```

لكن الفرق أن:

```text
HTML يحتوي على المحتوى الحقيقي
```

مثال:

```html
<h1>Product</h1>
<p>Price: 20$</p>
```

الصفحة جاهزة.

---

# 5️⃣ لماذا الصفحة تظهر بسرعة؟

لأن المتصفح لا ينتظر JavaScript.

في **React العادي:**

```text
HTML فارغ
↓
تحميل JavaScript
↓
JavaScript يبني الصفحة
```

لكن في **Next.js:**

```text
Server يبني الصفحة
↓
يرسل HTML جاهز
↓
المتصفح يعرضه فورًا
```

---

# 6️⃣ ماذا يحدث بعد ذلك؟

بعد أن تظهر الصفحة:

JavaScript يبدأ بالعمل ليضيف التفاعل.

هذه العملية اسمها:

```text
Hydration
```

---

# 7️⃣ الخلاصة

في **Next.js**:

```text
User → Request
↓
Server يشغل React Components
↓
Server يبني HTML
↓
Browser يعرض الصفحة فورًا
↓
JavaScript يضيف التفاعل
```

---

💡 هذه الجملة من أهم الجمل لفهم Next.js:

> **Next.js يشغّل React على السيرفر أولاً ثم على المتصفح.**

---
خلّينا نفكّك الفقرة **خطوة خطوة** لأن فيها فكرة مهمة جدًا في Next.js وهي **Hydration و SSR** 👇

---

# 1️⃣ هل Next.js يرسل JavaScript أم لا؟

النص يقول:

> But it doesn’t mean we don’t receive any JavaScript files.

يعني:

حتى لو استخدمنا **Server Side Rendering**، السيرفر **ما زال يرسل JavaScript**.

لماذا؟

لأن JavaScript هو الذي يعطي الصفحة **التفاعل**.

مثال:

* الضغط على زر
* فتح menu
* إضافة منتج إلى cart

---

# 2️⃣ ماذا يحدث أولاً في Next.js ؟

عندما تفتح الصفحة:

السيرفر يقوم بـ:

```text
تشغيل React Components
↓
إنشاء HTML
↓
إرساله للمتصفح
```

فتظهر الصفحة فورًا.

---

# 3️⃣ ماذا يحدث بعد ذلك؟ (Hydration)

بعد أن تظهر الصفحة، يبدأ JavaScript بالتحميل.

ثم يقوم React بعملية اسمها:

**Hydration**

Hydration يعني:

```text
إضافة التفاعل إلى HTML الجاهز
```

مثال:

HTML الذي وصل من السيرفر:

```html
<button>Add to cart</button>
```

في البداية هو مجرد **HTML عادي**.

بعد Hydration يصبح:

```text
زر + event listener
```

أي يمكن الضغط عليه.

---

# 4️⃣ لماذا يحدث Hydration Error ؟

أحيانًا يحصل خطأ يسمى:

**Hydration Error**

يحدث عندما:

```text
HTML من السيرفر
≠
ما يريد React رسمه في المتصفح
```

مثال بسيط:

السيرفر يرسل:

```html
<p>5</p>
```

لكن React في المتصفح يريد:

```html
<p>6</p>
```

هنا يحدث عدم تطابق.

فيظهر الخطأ.

---

# 5️⃣ ما هو SSR الذي ذكره النص؟

SSR يعني:

**Server Side Rendering**

أي:

```text
React يعمل على السيرفر
↓
يبني HTML
↓
يرسله للمتصفح
```

وهذه من أهم ميزات Next.js.

---

# 6️⃣ الصورة الكاملة

كيف تعمل الصفحة في Next.js:

```text
User opens page
↓
Server runs React
↓
Server sends HTML
↓
Browser shows page immediately
↓
JavaScript loads
↓
Hydration adds interactivity
```

---

# الخلاصة

* **SSR** → السيرفر يبني الصفحة.
* **Hydration** → JavaScript يجعل الصفحة تفاعلية.

وهذا ما يميز **Next.js عن React العادي.

---

💡 إذا أردت، أريك **أبسط مثال يسبب Hydration Error في Next.js** (شيء يحدث لكثير من المبرمجين المبتدئين).
