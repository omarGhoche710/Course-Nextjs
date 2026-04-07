تمام! خلينا نعمل لك **ملف Markdown مختصر** يجمع كل أهم نقاط Next.js 16 اللي لازم تعرفها كمطور، مع أمثلة عملية لكل نقطة. 👌

---

# 📄 UPGRADE-16-KEY-NOTES.md

````md
# Next.js 16 – أهم النقاط التي يجب معرفتها

هذه الملاحظات مختصرة لكل شيء تغير في Next.js 16 ويجب الانتباه له عند تطوير مشروعك.

---

## 1️⃣ Turbopack (الـ Dev Compiler الجديد)

- **افتراضي الآن**، لا تحتاج `--turbopack`.
- **الفرق عن Webpack القديم**:
  - الصفحات تُبنى فورًا عند التصفح (`compile instantly`).
  - تجربة التطوير أسرع، خصوصًا بالمشاريع الكبيرة.
- إذا عندك **Webpack مخصص**، `next build` قد يفشل → استخدم `--webpack` مؤقتًا.

---

## 2️⃣ Async Request APIs

- كل شيء متعلق بالـ request أصبح **async**:
  - `params`, `searchParams`, `cookies`, `headers`, `draftMode`.
- **أمثلة**:

```ts
// app/async-demo/[slug]/page.tsx
export default async function Page({ params, searchParams }) {
  const slug = await params.slug; // لازم await
  const from = await searchParams.from;
  return <div>{slug} - {from}</div>;
}
````

---

## 3️⃣ cacheComponents

* **Server Components صار فيها caching صارم**.
* أي access للوقت الحالي (`new Date()`) أو بيانات ديناميكية قبل request-bound APIs يسبب خطأ.
* **حلول**:

  1. جعل المكون Client Component
  2. استخدام Cache Component بشكل صحيح

**مثال Footer Client Component**:

```ts
"use client";

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} DevConnect
    </footer>
  );
}
```

---

## 4️⃣ Metadata Image Routes

* ملفات الصور مثل `opengraph-image.tsx`, `twitter-image.tsx`, `icon.tsx`, `apple-icon.tsx`
* **params / id صاروا promises**:

```ts
export default async function OpenGraphImage({ params }) {
  const slug = await params.slug;
  return new ImageResponse(...);
}
```

* Sitemap أيضًا صار `id` async.

---

## 5️⃣ Scroll Behavior

* **لم يعد Next.js يفرض scroll behavior تلقائيًا**.
* إذا تريد السلوك القديم:

```tsx
<html data-scroll-behavior="smooth">
```

---

## 6️⃣ ESLint

* `next lint` تمت إزالته.
* استخدم **ESLint CLI** مباشرة في `package.json`:

```json
"scripts": {
  "lint": "eslint . --ext .js,.ts,.tsx"
}
```

---

## 7️⃣ Next/Image تحديثات

* Local query strings صار يتطلب `images.localPatterns.search`.
* Default cache TTL: 4 ساعات
* Default qualities: `[75]`
* Local IP optimization محظور افتراضيًا → `dangerouslyAllowLocalIP` إذا احتجت.
* `next/legacy/image` و `images.domains` deprecated

---

## 8️⃣ Parallel Route Slots

* كل Parallel slot يحتاج `default.tsx` أو `default.js`.
* Builds تفشل بدونها.

---

## 9️⃣ Dev/Build Behavior

* Output directories مفصولة: `.next/dev` للـ dev.
* Lockfile يمنع تشغيل نفس الأمر مرتين.
* Build output لم يعد يظهر **First Load JS** metrics.

---

## 🔧 نصائح عملية:

1. تأكد Node >= 20.9 و TypeScript >= 5.1
2. تحقق من كل async params و searchParams قبل استخدامهم
3. أي وقت ديناميكي في Server Component → Client Component
4. استخدم Turbopack لتجربة dev أسرع
5. تأكد من تحديث Sass و ESLint حسب الملاحظات

---

## 10️⃣ Codemods مفيدة

```bash
npx @next/codemod@canary upgrade latest
npx @next/codemod@canary remove-experimental-ppr
npx @next/codemod@canary remove-unstable-prefix
npx @next/codemod@canary middleware-to-proxy
npx @next/codemod@canary next-lint-to-eslint-cli
npx @next/codemod@canary next-async-request-api
```

> تسهّل الترقية من Next.js 15 → 16 بشكل آمن.

---

## 11️⃣ مصادر رسمية

* [Next.js 16 Upgrade Guide](node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md)
* [Next.js Codemods](node_modules/next/dist/docs/01-app/02-guides/upgrading/codemods.md)

```

---

إذا تحب، أقدر أجهزه لك كـ **ملف جاهز داخل مشروعك**، بحيث تضيفه في root المشروع باسم:

```

UPGRADE-16-KEY-NOTES.md

```


