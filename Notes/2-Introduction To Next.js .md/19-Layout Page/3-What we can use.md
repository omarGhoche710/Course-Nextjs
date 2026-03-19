إيه أكيد 👍 تقدر تعمل **description مختلف لصفحة معيّنة** حتى لو عندك description افتراضي في `layout`.

خلينا نشوف المثال 👇

---

# 1️⃣ Metadata الافتراضي في `layout.tsx`

```ts
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website",
  },
  description: "هذا الوصف الافتراضي للموقع",
};
```

هذا الوصف رح ينحط لكل الصفحات **إلا إذا غيرته**.

---

# 2️⃣ صفحة بدك تغير description فيها

مثلاً `contact/page.tsx`

```ts
export const metadata = {
  title: "Contact",
  description: "تواصل معنا لأي استفسار أو مساعدة",
};
```

النتيجة في `<head>`:

```html
<title>Contact | My Website</title>
<meta name="description" content="تواصل معنا لأي استفسار أو مساعدة">
```

---

# 3️⃣ صفحة ما غيرت فيها description

مثلاً:

```ts
export const metadata = {
  title: "About",
};
```

النتيجة:

```html
<title>About | My Website</title>
<meta name="description" content="هذا الوصف الافتراضي للموقع">
```

يعني:

* `title` يتغير حسب الصفحة
* `description` يبقى الافتراضي إلا إذا غيرته

---

✅ الخلاصة:

* `layout.tsx` → metadata افتراضي للموقع
* `page.tsx` → تقدر **تغير title أو description أو الاثنين**

---

💡 نصيحة مهمة في **Next.js**:
غالباً يعملوا:

* description عام بالموقع
* description خاص لصفحات مهمة مثل:

  * contact
  * blog
  * product

---
  