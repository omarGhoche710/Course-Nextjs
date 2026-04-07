تمام، هول نقطتين من **Next.js 16 breaking changes** شوي تقنيين، بس الفكرة تبعهم بسيطة. خليني أشرحهم خطوة خطوة وبأسلوب عملي.

---

# 1) Async params/id for metadata image routes (breaking)

## أولًا — شو هي image routes؟

هيدي ملفات مثل:

```text
opengraph-image.tsx
twitter-image.tsx
icon.tsx
apple-icon.tsx
```

تستخدمها Next.js لتوليد صور تلقائيًا لما تشارك الرابط على السوشال ميديا.

مثال:

```text
/async-demo/hello/opengraph-image
```

---

## شو تغيّر في Next.js 16؟

قبل (Next.js 15):

```ts
export default function Image({ params }) {
  const slug = params.slug
}
```

كان:

```text
params → synchronous
```

---

الآن (Next.js 16):

```ts
export default async function Image({ params }) {
  const { slug } = await params
}
```

صار:

```text
params → Promise
```

لازم تعمل:

```text
await params
```

---

## مثال واضح

### Next.js 15

```ts
export default function Image({ params }) {
  const slug = params.slug
}
```

### Next.js 16

```ts
export default async function Image({ params }) {
  const { slug } = await params
}
```

---

## ملاحظة مهمة

في function اسمها:

```ts
generateImageMetadata
```

هيدي **ما تغيّرت**.

يعني:

```ts
export function generateImageMetadata({ params }) {
  const slug = params.slug
}
```

تبقى:

```text
synchronous
```

---

## خلاصة الجزء الأول

| المكان                | params        |
| --------------------- | ------------- |
| image function        | async (await) |
| generateImageMetadata | sync          |

---

# 2) Async id for sitemap (breaking)

## شو هو sitemap؟

ملف:

```text
app/sitemap.ts
```

يولّد:

```text
/sitemap.xml
```

يستخدمه Google و SEO.

---

## شو تغيّر؟

قبل:

```ts
export default function sitemap({ id }) {
  return [...]
}
```

الآن:

```ts
export default async function sitemap({ id }) {
  const value = await id
}
```

صار:

```text
id → Promise
```

---

## مثال عملي

### Next.js 15

```ts
export default function sitemap({ id }) {
  console.log(id)
}
```

---

### Next.js 16

```ts
export default async function sitemap({ id }) {
  const value = await id

  console.log(value)
}
```

---

# ليش عملوا هالتغيير؟

نفس سبب:

```text
params
searchParams
cookies
headers
```

صاروا async.

الفكرة:

```text
كل شي مرتبط بالـ request → Promise
```

---

# قاعدة ذهبية في Next.js 16

إذا شفت:

```ts
params
searchParams
id
cookies
headers
draftMode
```

فكر مباشرة:

```text
لازم await
```

---

# هل لازم تغيّر شي بمشروعك؟

فقط إذا عندك:

```text
opengraph-image.tsx
twitter-image.tsx
icon.tsx
apple-icon.tsx
sitemap.ts
```

وكنت تستخدم:

```ts
params.slug
id
```

بدون:

```ts
await
```

---

# مثال كامل صحيح في Next.js 16

## opengraph-image.tsx

```ts
export default async function Image({ params }) {
  const { slug } = await params

  return <div>{slug}</div>
}
```

---

## sitemap.ts

```ts
export default async function sitemap({ id }) {
  const value = await id

  return [
    {
      url: `https://example.com/${value}`,
    },
  ]
}
```

---
