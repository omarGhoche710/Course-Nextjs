# 🚫 not-found.tsx — Expected 404

## 📌 What It Is

Handles cases where data does not exist.

---

## 🧠 Trigger

```ts
notFound()
```

---

## ⚡ Behavior

* Renders UI for missing data
* Controlled, expected outcome

👉 It is NOT an error

---

## 📍 Scope

* Route segment only

---

## 🧠 Mental Model

> “Absence is not failure”

---

## 🎤 Teaching Line

> 404 is not a crash… it’s a valid state

---

## الفرق بين الحالتين يعود إلى **طبيعة التصدير (export)** في مكتبة **Next.js**:

---

### الحالة الأولى: `notFound` القادمة من `"next/navigation"`

هذه الدالة هي **named export** وليست `default export`.
لذلك يجب استخدام الأقواس المعقوفة `{}` عند الاستيراد:

```ts
import { notFound } from "next/navigation";
```

هذا الاستدعاء يعيد دالة جاهزة من **Next.js** تقوم برمي خطأ داخليًا (internally) وتحوّل المستخدم مباشرةً إلى صفحة **404** الافتراضية.

---

### الحالة الثانية: عندما تكتب الكود بنفسك

```tsx
const notFound = () => { ... }

export default notFound;
```

هنا أنت أنشأت **مكوّن React خاصًا بك** باسم `notFound` وقمت بتصديره كـ **default export**.
لذلك عند استيراده في مكان آخر، لا تحتاج إلى الأقواس `{}`:

```ts
import NotFound from "@/app/not-found";
```

---

## الخلاصة

* `{ notFound }` مع الأقواس
  ➜ لأن الدالة قادمة من مكتبة **Next.js** كـ **named export**.

* `NotFound` بدون أقواس
  ➜ لأنك أنت قمت بتصدير مكوّن خاص بك كـ **default export**.

---

صحيح، القاعدة في **Next.js App Router** هي أنّ المكوّن `not-found.tsx` الذي سيتم استخدامه هو الأقرب في شجرة المسارات (Route Tree).  

### الخلاصة المختصرة
- عند استدعاء `notFound()`، يبحث Next.js عن أقرب ملف `not-found.tsx` في نفس الـ segment.  
- إذا لم يجده، ينتقل إلى الأب (Parent)، ثم إلى الأعلى، وأخيرًا إلى الملف العام `app/not-found.tsx`.  
- هذه القاعدة تُسمّى: **Nearest boundary wins**.

### مثال سريع
```
app/
├── not-found.tsx          ← عام
├── dashboard/
│   ├── not-found.tsx      ← خاص بالـ dashboard
│   └── users/
│       └── page.tsx
```

إذا استدعيت `notFound()` داخل `users/page.tsx`، سيُستخدم:
```
dashboard/not-found.tsx
```
وليس الملف العام، لأنه الأقرب.

