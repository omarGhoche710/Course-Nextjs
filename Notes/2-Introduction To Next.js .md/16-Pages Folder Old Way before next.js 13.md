تمام 😄، خلينا نشرح **كيف كانت فكرة `pages/` قبل Next.js 13** بطريقة سهلة:

---

# 🏛️ هيكل `pages/` (قبل Next.js 13)

```
pages/
 ├── _app.tsx       ← Layout عام لكل الموقع
 ├── index.tsx      ← الصفحة الرئيسية
 ├── about.tsx      ← صفحة “عن الموقع”
 └── blog/
      └── [id].tsx  ← صفحة ديناميكية للمدونة
```

---

## 1️⃣ فكرة الـ Routing

* **كل ملف داخل `pages/` يصبح Route تلقائيًا**

  * index.tsx → `/`
  * about.tsx → `/about`
  * blog/[id].tsx → `/blog/1`, `/blog/2`, …

---

## 2️⃣ Layout واحد فقط

* كان `_app.tsx` **الملف المسؤول عن Layout عام**
* أي Header أو Footer كان يوضع هنا فقط
* صعب عمل Layout مختلف لكل قسم من الموقع

مثال `_app.tsx`:

```tsx id="2tvk7v"
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>Header</header>
      <Component {...pageProps} />
      <footer>Footer</footer>
    </>
  );
}
```

> كل صفحة من صفحات `pages/` تمر داخل `_app.tsx`
> أي ما في Layout فرعي لكل قسم.

---

## 3️⃣ مشاكل نظام `pages/`

1️⃣ **صعب تقسيم Layout لكل قسم**
2️⃣ **التعامل مع أجزاء الصفحة (loading states، parallel routes) محدود**
3️⃣ **Server Components غير متاحة بشكل افتراضي**
4️⃣ مشاريع كبيرة تصبح صعبة الصيانة

---

## 4️⃣ الخلاصة

* فكرة `pages/` بسيطة وسهلة للمشاريع الصغيرة
* كل صفحة مستقلة لكن **Layout عام واحد فقط**
* كان النظام محدود مقارنة بـ `app/` في Next.js 13+

---

