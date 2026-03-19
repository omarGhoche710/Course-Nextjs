هذا الملف اسمه **`package.json`**، وهو أهم ملف في أي مشروع يعمل بـ **Node.js**.
وظيفته أن يعرّف المشروع ويحدد **المكتبات (packages)** والأوامر التي يستخدمها.

بما أنك تعمل على مشروع **Next.js** مع **React**، فهذا الملف يخبر النظام كيف يشغّل المشروع وما المكتبات التي يحتاجها.

---

# أولًا: معلومات المشروع

```json
"name": "test",
"version": "0.1.0",
"private": true
```

* **name** → اسم المشروع
* **version** → نسخة المشروع
* **private** → يعني لا يمكن نشره على **npm**

---

# ثانيًا: scripts (الأوامر)

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

هذه الأوامر تشغلها باستخدام **npm**.

### تشغيل المشروع

```bash
npm run dev
```

يشغّل:

```bash
next dev
```

أي يبدأ **Next.js development server**.

### build للمشروع

```bash
npm run build
```

يحضر المشروع للإنتاج.

### تشغيل النسخة النهائية

```bash
npm start
```

يشغل المشروع بعد الـ build.

### فحص الكود

```bash
npm run lint
```

يشغّل **ESLint** للبحث عن الأخطاء.

---

# ثالثًا: dependencies

```json
"dependencies": {
  "next": "16.1.6",
  "react": "19.2.3",
  "react-dom": "19.2.3"
}
```

هذه المكتبات الأساسية التي يحتاجها المشروع ليعمل:

* **Next.js**
* **React**
* **react-dom**

---

# رابعًا: devDependencies

```json
"devDependencies": {
  "@tailwindcss/postcss": "^4",
  "@types/node": "^20",
  "@types/react": "^19",
  "eslint": "^9",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

هذه أدوات **للتطوير فقط** وليست ضرورية لتشغيل الموقع عند المستخدم.

مثل:

* **Tailwind CSS** → لتصميم الواجهة
* **TypeScript** → لفحص الأنواع
* **ESLint** → لفحص أخطاء الكود

---

# الفرق المهم

| النوع           | متى يستخدم     |
| --------------- | -------------- |
| dependencies    | لتشغيل التطبيق |
| devDependencies | للتطوير فقط    |

---

# ماذا يحدث عند كتابة

```bash
npm install
```

يقوم **npm** بـ:

1️⃣ قراءة `package.json`
2️⃣ تنزيل كل المكتبات
3️⃣ وضعها داخل `node_modules`

---

✅ **الخلاصة**

`package.json` هو:

* تعريف المشروع
* قائمة المكتبات
* أوامر تشغيل المشروع

---
