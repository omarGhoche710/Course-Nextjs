بـ **Next.js**، الـ **Dynamic Route** يعني إنك تعمل صفحة URL فيها جزء متغيّر بدل ما يكون ثابت.

خليني بسّطها 👇

---

## 🔹 شو يعني Dynamic Route؟

يعني بدل ما يكون عندك route ثابت مثل:

```
/products
```

بتصير تعمل route فيه متغيّر:

```
/products/1
/products/2
/products/abc
```

هيدا المتغيّر (1 أو 2 أو abc) اسمو **parameter**.

---

## 🔹 كيف نعملها بـ Next.js؟

### 📁 باستخدام App Router (Next 13+)

بتعمل folder اسمو بين `[]`:

```
app/products/[id]/page.tsx
```

🔸 `[id]` يعني route dynamic

---

## 🔹 كيف نوصل للـ id؟

```tsx
const Page = ({ params }: { params: { id: string } }) => {
  return <h1>Product ID: {params.id}</h1>;
};

export default Page;
```

---

## 🔹 مثال حقيقي

لو فتحت:

```
/products/5
```

النتيجة:

```
Product ID: 5
```

---

## 🔹 ليش منستعمل Dynamic Routes؟

* صفحة لكل منتج (product details)
* صفحة لكل مستخدم (user profile)
* صفحة لكل مقال (blog post)

يعني بدل ما تعمل 100 صفحة، بتعمل صفحة وحدة dynamic 👍

---

## 🔹 أنواع Dynamic Routes

### 1. Single param

```
[id]
```

### 2. Nested

```
/products/[category]/[id]
```

### 3. Catch-all

```
[...slug]
```

مثال:

```
/docs/a/b/c
```

---

## 🔹 الفرق بين static و dynamic

| Static   | Dynamic          |
| -------- | ---------------- |
| `/about` | `/products/[id]` |
| ثابت     | متغيّر           |

---

