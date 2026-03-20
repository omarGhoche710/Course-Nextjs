سؤال مهم 🔥 وفرق أساسي لازم تفهمه منيح بـ **Next.js**

---

## 🔹 ليش منستعمل `Link` بدل `<a>` ؟

### ✅ 1. ما بيعمل reload للصفحة (SPA behavior)

لما تستخدم:

```html
<a href="/about">About</a>
```

المتصفح بيعمل **reload كامل للصفحة** ❌

بس مع:

```tsx
import Link from "next/link";

<Link href="/about">About</Link>
```

✔️ بيصير navigation **بدون reload**
✔️ أسرع بكتير
✔️ user experience أحسن

---

## 🔹 2. أسرع (Prefetch 🚀)

`Link` بـ Next.js بيعمل شغلة ذكية:

👉 لما اللينك يكون ظاهر على الشاشة
بيعمل **prefetch** للصفحة تلقائي

يعني:

* الصفحة بتكون جاهزة قبل ما تكبس
* بتفتح instantly ⚡

---

## 🔹 3. بيحافظ على state

مع `<a>`:

* كل شي بيرجع من الأول (state, scroll…)

مع `Link`:

* بيحافظ على الـ state تبع التطبيق 👍

---

## 🔹 4. مخصص للـ routing تبع Next.js

`Link` متكامل مع:

* App Router
* Dynamic Routes `[id]`
* Layouts

---

## 🔹 متى منستعمل `<a>`؟

بس لما تكون رايح على:

* موقع خارجي 🌍

```html
<a href="https://google.com">Google</a>
```

---

## 🔥 خلاصة سريعة

|               | `<a>`  | `Link` |
| ------------- | ------ | ------ |
| Reload        | ❌ نعم  | ✅ لا   |
| سرعة          | ❌ أبطأ | ✅ أسرع |
| Prefetch      | ❌      | ✅      |
| مناسب لـ Next | ❌      | ✅      |

---

## 💡 نصيحة

دايماً:

* داخل المشروع 👉 استخدم `Link`
* خارج المشروع 👉 استخدم `<a>`

---

