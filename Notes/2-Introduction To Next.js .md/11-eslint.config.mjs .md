هذا الملف هو **إعدادات ESLint للمشروع**، وغالبًا يكون في ملف اسمه مثل:

```
eslint.config.mjs
```

ووظيفته فحص الكود والبحث عن الأخطاء أو الممارسات السيئة أثناء الكتابة.

يُستخدم مع **ESLint** داخل مشروع **Next.js** و **TypeScript**.

---

# الفكرة العامة

**ESLint** هو أداة تقوم بـ:

* اكتشاف الأخطاء
* تحسين جودة الكود
* فرض قواعد كتابة موحدة

مثال خطأ يمكن أن يكتشفه:

```js
const x = 5
console.log(x)
```

قد يقترح إضافة `;` أو تعديل أسلوب الكتابة.

---

# شرح الكود

## 1️⃣ استيراد الأدوات

```js
import { defineConfig, globalIgnores } from "eslint/config";
```

هنا نستورد أدوات من ESLint:

* `defineConfig` → لتعريف إعدادات ESLint
* `globalIgnores` → لتحديد الملفات التي لا يجب فحصها

---

## 2️⃣ استيراد إعدادات Next.js

```js
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
```

هذه إعدادات جاهزة من **Next.js**.

### core-web-vitals

تضيف قواعد مرتبطة بالأداء.

### typescript

تضيف قواعد خاصة بـ **TypeScript**.

---

## 3️⃣ إنشاء الإعدادات

```js
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
```

هنا نقول لـ ESLint:

استخدم القواعد الموجودة في:

* core-web-vitals
* typescript

---

## 4️⃣ تجاهل بعض الملفات

```js
globalIgnores([
  ".next/**",
  "out/**",
  "build/**",
  "next-env.d.ts",
])
```

هذه ملفات **لا نريد أن يفحصها ESLint**.

مثلاً:

`.next`

هذا مجلد يبنيه **Next.js** تلقائيًا.

---

## 5️⃣ تصدير الإعدادات

```js
export default eslintConfig;
```

هنا نصدر الإعدادات حتى يستخدمها ESLint.

---

# متى يعمل هذا الملف؟

عندما تشغل:

```bash
npm run lint
```

سيستخدم **ESLint** هذا الملف لفحص الكود.

---

# الخلاصة

هذا الملف:

* إعدادات **ESLint**
* خاص بمشروع **Next.js**
* يضيف قواعد لـ **TypeScript**
* يتجاهل ملفات build

---

* IT 's like the coach that you lead your code