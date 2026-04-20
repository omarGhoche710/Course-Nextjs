# Error Page

```tsx
"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => reload()}>Try again</button>
    </div>
  );
}

```

## reset

الجملة:

> **Attempt to recover by re-fetching and re-rendering the segment**

معناها ببساطة:

> **محاولة إصلاح المشكلة عن طريق إعادة جلب البيانات (re-fetch) وإعادة عرض الجزء (segment) من الصفحة.**

---

## شرح الكلمات بسرعة

* **Attempt to recover**
  → محاولة التعافي / إصلاح الخطأ

* **re-fetching**
  → إعادة جلب البيانات من السيرفر

* **re-rendering**
  → إعادة عرض المكوّن (component)

* **segment**
  → جزء من الصفحة (route segment) مثل:
  `dashboard` أو `products/[id]`

---

## المعنى في سياق Next.js (خاصة مع `error.tsx`)

لما يصير error في جزء من التطبيق، Next.js يحاول:

```text
1) يجيب البيانات من جديد (re-fetch)
2) يعيد render للجزء اللي صار فيه الخطأ (segment)
3) إذا نجحت العملية → يرجع يعرض الصفحة
4) إذا فشلت → يضل error ظاهر
```

---

## مثال سريع

```plaintext
app/
  dashboard/
    page.tsx
    error.tsx
```

إذا صار error داخل:

```plaintext
dashboard
```

ولما تضغط:

```text
Try again
```

Next.js يعمل:

> **Attempt to recover by re-fetching and re-rendering the segment**

يعني:

* يعيد fetch البيانات
* يعيد render لجزء `dashboard`
* يحاول يصلّح الخطأ

---

## ترجمة قصيرة تحفظها

> **Attempt to recover by re-fetching and re-rendering the segment**
> = **محاولة إصلاح الخطأ عبر إعادة جلب البيانات وإعادة عرض الجزء المتأثر من الصفحة.**

---

