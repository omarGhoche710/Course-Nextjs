تمام، رح اشرحلك **النقطتين هدول** بطريقة بسيطة وعملية، خصوصًا كمطوّر Next.js عم تشتغل فعليًا على مشاريع. 👨‍💻

---

# 2) Turbopack is now default for dev and build

## أول شي: شو هو Turbopack؟

**Turbopack** هو الـ bundler الجديد تبع Next.js.
يعني بدل **Webpack**، صار في أداة أسرع لبناء المشروع وتشغيله.

ببساطة:

* Webpack = القديم
* Turbopack = الجديد (أسرع بكتير ⚡)

---

## شو تغيّر في Next.js 16؟

قبل (Next.js 15):

إذا بدك تستخدم Turbopack، لازم تكتب:

```json
"scripts": {
  "dev": "next dev --turbopack"
}
```

هلّق (Next.js 16):

```json
"scripts": {
  "dev": "next dev"
}
```

صار **Turbopack هو الافتراضي**.

يعني:

```bash
next dev
```

يستخدم Turbopack تلقائيًا.

---

## ليش هيدا مهم؟

لأنو:

* dev server أسرع
* rebuild أسرع
* hot reload أسرع

بس بنفس الوقت:

**إذا عندك webpack config مخصص**
ممكن يصير error.

---

## مثال حقيقي على المشكلة

إذا عندك:

```ts
// next.config.ts

webpack(config) {
  config.resolve.alias = {
    "@": "./src"
  }
  return config
}
```

هيدا config خاص بـ Webpack.

لما Next.js 16 يستخدم Turbopack:

ممكن يطلع:

```bash
Build failed due to custom webpack configuration
```

---

## الحل إذا صار error

تقدر ترجع مؤقتًا لـ Webpack:

```bash
next build --webpack
```

أو:

```json
"build": "next build --webpack"
```

بس الأفضل:

تحدّث config ليشتغل مع Turbopack.

---

## تغيير مهم بالـ config

قبل:

```ts
experimental: {
  turbopack: {}
}
```

هلّق:

```ts
turbopack: {}
```

صار:

**top-level**

---

# 3) Async Request APIs are fully enforced (breaking)

هيدا من أهم التغييرات في Next.js 16.

---

## شو المشكلة؟

في Next.js 15:

كان مسموح تستخدم:

```ts
params
searchParams
cookies
headers
```

بشكل synchronous.

في Next.js 16:

صار لازم تستخدمهم:

**async فقط**

---

## مثال بسيط

## قبل (كان يشتغل)

```ts
export default function Page({ params }) {
  const slug = params.slug

  return <div>{slug}</div>
}
```

---

## هلّق (لازم async)

```ts
export default async function Page({ params }) {
  const { slug } = await params

  return <div>{slug}</div>
}
```

لاحظ:

```ts
await params
```

صار إجباري.

---

## نفس الشي لـ searchParams

قبل:

```ts
export default function Page({ searchParams }) {
  const from = searchParams.from
}
```

هلّق:

```ts
export default async function Page({ searchParams }) {
  const { from } = await searchParams
}
```

---

## نفس الفكرة مع cookies

قبل:

```ts
const cookieStore = cookies()
```

هلّق:

```ts
const cookieStore = await cookies()
```

---

## ليش عملوا هالتغيير؟

لأن Next.js صار يعتمد أكتر على:

* Server Components
* Streaming
* Async rendering

فصار:

**request data ما بيوصل فورًا**

بل:

**Promise**

---

## الـ Mental Model المهم

تخيّل:

```ts
params
```

هي:

```ts
Promise
```

يعني:

```ts
await params
```

---

## مثال حقيقي قريب من مشروعك

Route:

```text
app/async-demo/[slug]/page.tsx
```

URL:

```text
/async-demo/hello?from=search-param
```

الكود:

```ts
export default async function Page({ params, searchParams }) {
  const { slug } = await params
  const { from } = await searchParams

  return (
    <div>
      {slug} from {from}
    </div>
  )
}
```

---

## شو بيصير إذا ما عملت await؟

غالبًا:

```bash
Error: params must be awaited
```

أو:

```bash
TypeError: Cannot read properties of undefined
```

---

## خلاصة سريعة

### Turbopack

* صار default في Next.js 16
* ما عاد تحتاج `--turbopack`
* إذا عندك webpack config → ممكن build يفشل
* تقدر تستخدم:

```bash
next build --webpack
```

---

### Async Request APIs

هول صاروا async:

* params
* searchParams
* cookies
* headers
* draftMode

لازم:

```ts
await
```

---

إذا بدك، فيني أشرحلك النقطة الجاية بنفس الأسلوب:

**Async params/id for metadata image routes**
لأنها كمان breaking change.
