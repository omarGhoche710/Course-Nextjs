تمام، خليني أعطيك **طريقة عملية 100%**:
**وين تحط `opengraph-image.tsx` و `sitemap.ts`، كيف ترتّب الملفات، وكيف تشتغل.**

رح نمشي خطوة خطوة كأنك عم تضيفهم لأول مرة في مشروع Next.js 16.

---

# أولًا: وين نحط الملفات؟ (Structure)

إذا عندك App Router، هيك الترتيب:

```text
app/
│
├── layout.tsx
├── page.tsx
│
├── sitemap.ts
│
├── blog/
│   └── [slug]/
│       ├── page.tsx
│       └── opengraph-image.tsx
│
└── icon.tsx (اختياري)
```

---

# 1) sitemap.ts — وين نحطه؟

تحطه مباشرة داخل:

```text
app/sitemap.ts
```

مش داخل folder.

---

## خطوة 1 — أنشئ الملف

```text
app/
  sitemap.ts
```

---

## خطوة 2 — اكتب الكود

```ts
export default async function sitemap() {
  return [
    {
      url: "https://example.com",
      lastModified: new Date(),
    },
    {
      url: "https://example.com/blog",
      lastModified: new Date(),
    },
  ];
}
```

---

## النتيجة

لما تشغل:

```bash
npm run dev
```

وتفتح:

```text
http://localhost:3000/sitemap.xml
```

رح تشوف:

```xml
<urlset>
  <url>
    <loc>https://example.com</loc>
  </url>
</urlset>
```

---

# مثال حقيقي لمشروعك (Communities)

لو عندك:

```text
/communities
/topics
/developers
```

اكتب:

```ts
export default async function sitemap() {
  return [
    {
      url: "http://localhost:3000",
    },
    {
      url: "http://localhost:3000/communities",
    },
    {
      url: "http://localhost:3000/topics",
    },
    {
      url: "http://localhost:3000/developers",
    },
  ];
}
```

---

# 2) opengraph-image.tsx — وين نحطه؟

تحطه داخل الصفحة اللي بدك صورة خاصة إلها.

مثلاً:

```text
/blog/[slug]/opengraph-image.tsx
```

يعني:

لكل blog post صورة مختلفة.

---

# مثال Structure

```text
app/
  blog/
    [slug]/
      page.tsx
      opengraph-image.tsx
```

---

# خطوة 1 — أنشئ الملف

```text
app/blog/[slug]/opengraph-image.tsx
```

---

# خطوة 2 — اكتب الكود

```tsx
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params }) {
  const { slug } = await params;

  return new ImageResponse(
    <div
      style={{
        fontSize: 60,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Post: {slug}
    </div>
  );
}
```

---

# كيف تتأكد أنه شغال؟

افتح:

```text
http://localhost:3000/blog/react/opengraph-image
```

رح تشوف صورة.

---

# مثال مناسب لمشروعك (Communities)

لو عندك:

```text
/communities/[id]
```

اعمل:

```text
app/
  communities/
    [id]/
      page.tsx
      opengraph-image.tsx
```

---

## الكود

```tsx
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params }) {
  const { id } = await params;

  return new ImageResponse(
    <div
      style={{
        fontSize: 50,
        background: "black",
        color: "white",
        width: "100%",
        height: "100%",
      }}
    >
      Community {id}
    </div>
  );
}
```

---

# الترتيب النهائي المهم

## إذا عندك صفحات عادية

```text
app/
  sitemap.ts
```

---

## إذا عندك dynamic page

```text
app/
  communities/
    [id]/
      page.tsx
      opengraph-image.tsx
```

---

# متى تستخدم كل واحد؟

## استخدم sitemap.ts لما:

* بدك SEO
* بدك Google يعرف صفحاتك
* الموقع production

---

## استخدم opengraph-image.tsx لما:

* بدك صورة عند مشاركة الرابط
* عندك blog أو community
* بدك SEO أقوى

---

# هل لازم تستخدمهم الآن؟

بصراحة لمشروعك الحالي (تعليمي / DevConnect style):

## الأفضل تبدأ بـ:

```text
sitemap.ts
```

سهل ومفيد.

---

## opengraph-image.tsx

اختياري الآن.

---

# إذا بدك نطبّق مباشرة على مشروعك

ابعتلي structure تبعك مثل:

```text
app/
  communities/
    page.tsx
    [id]/
      page.tsx
```
