تمام، خليني فوت **بعمق** بهول الملفات واحد واحد — شو هن، وين يُستخدموا، وليش مهمين، ومتى تحتاجهم فعلًا في مشروعك (خصوصًا مع Next.js 16).
رح أعطيك الفهم الحقيقي العملي، مش بس تعريفات.

---

# أولًا: الفكرة العامة — هول اسمهم Metadata Routes

هول ملفات خاصة بـ **SEO + Social Sharing + Browser UI**.
Next.js بيستخدمهم ليولّد أشياء تلقائيًا مثل:

* صورة لما تشارك الرابط على WhatsApp / LinkedIn
* أيقونة الموقع (favicon)
* sitemap لمحركات البحث

---

# 1) opengraph-image.tsx

## شو وظيفته؟

يولّد الصورة اللي تظهر لما حدا يشارك رابط موقعك على السوشال ميديا.

مثال:

لما تبعت رابط:

```text
https://your-site.com/blog/react
```

بتطلع صورة كبيرة فيها:

* عنوان المقال
* خلفية
* لوجو

هاي الصورة جاية من:

```text
opengraph-image.tsx
```

---

## ليش اسمها Open Graph؟

لأنها تستخدم معيار:

```text
Open Graph Protocol
```

اللي تستخدمه:

* Facebook
* LinkedIn
* WhatsApp
* Slack
* Discord

---

## مثال حقيقي

```text
/app/blog/[slug]/opengraph-image.tsx
```

يعني:

لكل مقال:

```text
/blog/react
/blog/nextjs
```

بيتولد صورة مختلفة.

---

## كود عملي (Next.js 16)

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
      }}
    >
      Blog: {slug}
    </div>
  );
}
```

---

## متى تستخدمه؟

تستخدمه إذا:

* عندك Blog
* عندك Products
* بدك صورة مخصصة لكل صفحة
* بدك SEO قوي

---

# 2) twitter-image.tsx

## شو وظيفته؟

نفس الفكرة، لكن مخصصة لـ Twitter (X).

---

## الفرق عن opengraph؟

تقنيًا:

```text
Twitter عنده meta tags خاصة
```

لكن Next.js بيعالجهم بنفس الطريقة.

---

## مثال

```text
/app/blog/[slug]/twitter-image.tsx
```

---

## هل ضروري؟

غالبًا:

```text
لا
```

لأن:

```text
opengraph-image يغطي أغلب المنصات
```

Twitter بس استثناء.

---

# 3) icon.tsx

## شو وظيفته؟

يولّد:

```text
favicon
```

اللي يظهر في:

* تبويب المتصفح
* bookmarks
* history

---

## مثال

```text
/app/icon.tsx
```

يعني:

```text
/favicon.ico
```

---

## مثال كود

```tsx
import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "black",
        color: "white",
        width: "100%",
        height: "100%",
      }}
    >
      A
    </div>
  );
}
```

---

## هل لازم تستخدمه؟

لا.

بدل هيك غالبًا تستخدم:

```text
/public/favicon.ico
```

وخلص.

---

# 4) apple-icon.tsx

## شو وظيفته؟

أيقونة خاصة لما المستخدم:

```text
Add to Home Screen
```

على:

* iPhone
* iPad

---

## مثال

```text
/app/apple-icon.tsx
```

---

## متى تحتاجه؟

إذا:

```text
بدك PWA أو تجربة iOS ممتازة
```

غير هيك:

```text
مش ضروري
```

---

# 5) sitemap.ts

## شو وظيفته؟

يولّد:

```text
/sitemap.xml
```

---

## شو هو sitemap؟

ملف فيه كل روابط موقعك.

مثال:

```xml
<urlset>
  <url>
    <loc>https://site.com/</loc>
  </url>

  <url>
    <loc>https://site.com/blog</loc>
  </url>
</urlset>
```

---

## ليش مهم؟

لـ:

```text
SEO
Google indexing
Search engines
```

---

## مثال عملي

```text
/app/sitemap.ts
```

---

## كود Next.js 16

```ts
export default async function sitemap() {
  return [
    {
      url: "https://example.com",
    },
    {
      url: "https://example.com/blog",
    },
  ];
}
```

---

## التغيير في Next.js 16

صار:

```ts
id
```

يكون:

```text
Promise
```

يعني:

```ts
const value = await id;
```

---

# هل تحتاج هول الملفات في مشروعك؟

حسب نوع المشروع تبعك.

من اللي عم تبنيه (Dev / Next.js learning / community style app):

## غالبًا تحتاج:

```text
sitemap.ts
opengraph-image.tsx
```

---

## غالبًا ما تحتاج الآن:

```text
twitter-image.tsx
apple-icon.tsx
icon.tsx
```

إلا إذا:

* مشروع production
* SEO مهم
* Branding مهم

---

# الفرق بينهم بسرعة

| الملف           | الوظيفة                    | مهم؟           |
| --------------- | -------------------------- | -------------- |
| opengraph-image | صورة عند مشاركة الرابط     | مهم للـ SEO    |
| twitter-image   | صورة خاصة Twitter          | اختياري        |
| icon            | favicon                    | عادة في public |
| apple-icon      | iOS home screen icon       | اختياري        |
| sitemap         | روابط الموقع لمحركات البحث | مهم            |

---

# أهم نقطة في Next.js 16 (Breaking)

داخل:

```text
opengraph-image.tsx
sitemap.ts
```

صار لازم:

```ts
await params
await id
```

---
