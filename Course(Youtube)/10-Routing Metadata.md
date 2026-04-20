# Routing metadata


- The Metadata API in Next.js is a powerful feature that lets us define metadata for each page
Metadata ensures our content looks great when it's shared or indexed by search engines
Two ways to handle metadata in layout.tsx or page.tsx files:
  1. export a static metadata object
  2. export a dynamic generateMetadata function

* **Metadata API** في **Next.js** هي ميزة قوية تسمح لنا بتعريف **البيانات الوصفية (metadata)** لكل صفحة.
* هذه البيانات تضمن أن يظهر المحتوى بشكل جميل عند مشاركته أو عند فهرسته بواسطة محركات البحث.

**هناك طريقتان للتعامل مع metadata داخل ملفات `layout.tsx` أو `page.tsx`:**

1. تصدير كائن ثابت باسم `metadata`
2. تصدير دالة ديناميكية باسم `generateMetadata`

---
## Configuring metadata

Metadata rules:

- Both layout.tsx and page.tsx can export metadata. Layout metadata applies to all
its pages, while page metadata is specific to that page

- Metadata follows a top-down order, starting from the root level

- When metadata exists in multiple places along a route, they merge together, with
page metadata overriding layout metadata for matching properties


- كل من `layout.tsx` و `page.tsx` يمكنهما تصدير **metadata**.  
  **Metadata** الخاصة بالـ `layout` تُطبّق على جميع الصفحات بداخله،  
  بينما **Metadata** الخاصة بالـ `page` تكون مخصّصة لتلك الصفحة فقط.

- **Metadata** تتبع ترتيبًا من الأعلى إلى الأسفل (**Top-Down Order**)،  
  أي تبدأ من المستوى الجذري (**Root**) ثم تنزل إلى المستويات الأدنى.

- عندما توجد **metadata** في أكثر من مكان على نفس المسار (**Route**)،  
  يتم دمجها معًا (**Merge**)،  
  لكن **metadata** الخاصة بالـ `page` تقوم باستبدال (**Override**) خصائص الـ `layout` إذا كانت بنفس الاسم.

---
## Explain:

# 1) **Both layout.tsx and page.tsx can export metadata**

## الفكرة

* **`layout.tsx`** يحدد metadata لكل الصفحات تحته
* **`page.tsx`** يحدد metadata لصفحة واحدة فقط

## مثال

### layout.tsx

```ts
export const metadata = {
  title: "Dashboard",
};
```

### page.tsx (داخل dashboard)

```ts
export const metadata = {
  title: "Revenue",
};
```

## النتيجة

* صفحة **Revenue** عنوانها: `"Revenue"`
* أي صفحة ثانية داخل نفس layout عنوانها: `"Dashboard"`

يعني:

**layout = default**
**page = specific**

---

# 2) **Metadata follows a top-down order, starting from the root level**

## الفكرة

Next.js يقرأ metadata من فوق لتحت، مثل الشجرة.

## مثال tree

```plainText
app/
 ├─ layout.tsx        (root)
 │
 └─ dashboard/
     ├─ layout.tsx
     │
     └─ revenue/
         └─ page.tsx
```

## الترتيب الفعلي

Next.js يعمل:

1. يقرأ `app/layout.tsx`
2. ثم `dashboard/layout.tsx`
3. ثم `revenue/page.tsx`

يعني:

```text
root → nested layout → page
```

كل واحد يضيف metadata فوق السابق.

---

# 3) **When metadata exists in multiple places, they merge together**

هذه أهم نقطة.

## كلمة merge تعني:

Next.js يجمع metadata من كل الأماكن.

لكن:

## **page overrides layout**

إذا نفس الخاصية موجودة في الاثنين → الصفحة تفوز.

---

## مثال واضح

### Root layout

```ts
export const metadata = {
  title: "My App",
  description: "Default description",
};
```

---

### Dashboard layout

```ts
export const metadata = {
  title: "Dashboard",
};
```

---

### Revenue page

```ts
export const metadata = {
  title: "Revenue",
};
```

---

## النتيجة النهائية

```ts
{
  title: "Revenue",
  description: "Default description"
}
```

## ليش؟

* `title` تغيّر 3 مرات
  root → dashboard → page
  وآخر واحد هو الصفحة

* `description` موجود فقط في root
  لذلك بقي كما هو

---

# الصورة الذهنية الصح

فكر فيها هكذا:

```text
layout = default settings
page   = override settings
```

أو مثل CSS:

```css
.parent {
  color: blue;
}

.child {
  color: red; /* override */
}
```

---

# مثال قريب من مشروعك (dashboard)

أنت عندك:

```plainText
app/
 ├─ layout.tsx
 └─ (marking)/
     ├─ layout.tsx
     ├─ revenue/
     │   └─ page.tsx
     └─ customers/
         └─ page.tsx
```

## Root layout

```ts
export const metadata = {
  title: "Admin Panel",
  description: "System dashboard",
};
```

## marking layout

```ts
export const metadata = {
  title: "Marking",
};
```

## revenue page

```ts
export const metadata = {
  title: "Revenue",
};
```

## النتيجة

```ts
{
  title: "Revenue",
  description: "System dashboard"
}
```

---
---

## generateMetadata function:

* Ex:
```js
  import { Metadata } from "next";

  type Props = {
    params: Promise<{ productId: string }>;
  };

  export const generateMetadata = async ({
    params,
  }: Props): Promise<Metadata> => {
    const { productId } = await params;
    const title = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(`iPhone ${productId}`);
      }, 100);
    });

    return {
      title: `Product ${title}`,
    };
  };

  export default async function ProductDetails({ params }: Props) {
    const productId = (await params).productId;
    return <h1>Details about product {productId}</h1>;
  }

```