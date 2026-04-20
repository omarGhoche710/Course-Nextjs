## 📝 Note: `usePathname` in Next.js

### What is `usePathname`?

`usePathname` هو **Hook** من `next/navigation` بيخلّيك تجيب الـ **current URL path** داخل **Client Component**.

يعني بيعطيك المسار الحالي مثل:

```
/products/1/reviews/2
```

---

### Import

```tsx
import { usePathname } from "next/navigation";
```

⚠️ لازم يكون الملف:

```tsx
"use client";
```

لأن `usePathname` بيشتغل فقط داخل **Client Components**.

---

### Basic Example

```tsx
"use client";

import { usePathname } from "next/navigation";

const Example = () => {
  const pathname = usePathname();

  return <h1>{pathname}</h1>;
};

export default Example;
```

لو الرابط هو:

```
/about
```

النتيجة:

```
/about
```

---

## Example: Extracting Dynamic Params from URL

لو كان عندك URL مثل:

```
/products/1/reviews/2
```

بدنا نجيب:

* `productId = 1`
* `reviewId = 2`

نستخدم `split("/")`.

```tsx
"use client";

import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();

  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  return (
    <div>
      <h2>
        Review {reviewId} not found for product {productId}
      </h2>
    </div>
  );
};

export default NotFound;
```

---

## How `split("/")` Works

لو:

```
pathname = /products/1/reviews/2
```

فبيصير:

```js
pathname.split("/");
```

النتيجة:

```js
["", "products", "1", "reviews", "2"]
```

لذلك:

```js
[2] → productId
[4] → reviewId
```

---

## Important Notes ⚠️

### 1) `usePathname` is Client Only

لازم:

```tsx
"use client";
```

---

### 2) Better way (Server Components)

في أغلب الحالات، الأفضل تستخدم `params` بدل `usePathname`.

مثال:

```tsx
export default function Page({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <h2>
      Review {params.reviewId} not found for product {params.productId}
    </h2>
  );
}
```

هذا:

* cleaner
* type-safe
* recommended في Next.js

---

## When to Use `usePathname`

استخدمه لما بدك:

* تعرف الصفحة الحالية
* تعمل active link في navbar
* تعمل logic حسب الـ route
* تقرأ path داخل Client Component

مثال شائع:

```tsx
const pathname = usePathname();

if (pathname === "/login") {
  console.log("User is on login page");
}
```

---

