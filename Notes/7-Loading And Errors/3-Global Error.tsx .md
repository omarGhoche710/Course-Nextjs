# 🌍 `global-error.tsx` — انهيار كامل للتطبيق

## 📌 ما هو؟
Fallback عالمي لما **كل التطبيق يفشل**.

---

## 🧠 ليش موجود؟
لأن:

> `error.tsx` ما بيقدر يلتقط الأخطاء داخل الـ root layout (حسب [Next.js][1])

---

## ⚡ السلوك
- بيستبدل التطبيق بالكامل.
- لازم يحتوي على `<html>` و `<body>`.

---

## 📍 النطاق
- فشل الـ root layout.
- الانهيارات الحرجة.

---

## 🧠 النموذج الذهني
> "آخر خط دفاع"

---

##  مثال عملي
```tsx
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <head>
        <title>Application Error</title>
      </head>
      <body>
        <h1>Something went wrong globally</h1>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
```
---

## 🎤 الجملة التعليمية
> إذا هذا الملف اشتغل… معناته تطبيقك أصلاً مات.



