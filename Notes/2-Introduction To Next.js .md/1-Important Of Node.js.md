سؤال مهم 👍 لأن فهم **Node.js** يساعدك كثير عندما تتعلم **Next.js**.

خلّيني أبسّط لك الفكرة.

---

# ما هو Node.js ؟

ببساطة:

**Node.js يسمح لنا بتشغيل JavaScript خارج المتصفح.**

قبل Node.js كان JavaScript يعمل فقط داخل المتصفح.

مثال:

```text
Browser → JavaScript يعمل
Server → لا
```

بعد Node.js أصبح:

```text
Browser → JavaScript
Server → JavaScript
```

---

# لماذا هذا مهم؟

لأنه يسمح لنا ببناء **backend باستخدام JavaScript**.

يعني يمكنك عمل:

* server
* API
* database connection
* authentication

باستخدام JavaScript فقط.

---

# مثال بسيط

سيرفر بسيط في Node.js:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000);
```

هذا الكود يشغّل **server**.

---

# أين يستخدم Node.js؟

يستخدم في أشياء كثيرة مثل:

### 1️⃣ Backend development

عمل APIs.

مثال:

* تسجيل مستخدم
* login
* جلب بيانات من database

---

### 2️⃣ تشغيل frameworks

مثل:

* Next.js
* Express.js

هذه frameworks تعمل فوق Node.js.

---

### 3️⃣ أدوات التطوير

كثير من أدوات JavaScript تعمل باستخدام Node.js مثل:

* npm
* Vite

---

# علاقته بـ React و Next.js

### مع React

Node.js يستخدم فقط أثناء **التطوير**.

لكن الموقع النهائي يعمل في **المتصفح**.

---

### مع Next.js

Node.js مهم جدًا لأن:

```text
Next.js server
↓
runs on Node.js
```

وهو الذي يقوم:

* SSR
* API routes
* data fetching

---

# الخلاصة

أهمية **Node.js**:

1️⃣ تشغيل JavaScript على السيرفر
2️⃣ بناء backend باستخدام JavaScript
3️⃣ تشغيل frameworks مثل Next.js
4️⃣ تشغيل أدوات التطوير

---

💡 نصيحة لك بما أنك تتعلم React:
لا تحتاج أن تصبح خبير Node.js الآن.
يكفي أن تفهم **كيف يعمل** لأن Next.js سيستخدمه تلقائيًا.

---

إذا أردت، أشرح لك أيضًا **لماذا Next.js يحتاج Node.js تحديدًا** (هناك سبب مهم جدًا يجعل الاثنين مرتبطين دائمًا).
