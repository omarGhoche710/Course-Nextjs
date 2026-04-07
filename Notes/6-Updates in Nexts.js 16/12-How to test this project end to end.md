تمام، خلينا نرتب لك **خطوات اختبار المشروع بعد الترقية لـ Next.js 16** بشكل عملي وسهل 👌

---

# 1️⃣ بدء السيرفر في وضع التطوير (Dev)

```bash
npm run dev
```

> هذا يشغل **Next.js 16** مع جميع ميزات App Router الجديدة، Turbopack، cacheComponents، وما إلى ذلك.

---

# 2️⃣ زيارة المسارات والتحقق

### التحقق من كل ميزة جديدة:

| Path                                  | ماذا تتحقق                                                    |
| ------------------------------------- | ------------------------------------------------------------- |
| `/`                                   | الصفحة الرئيسية مع روابط لجميع الأقسام                        |
| `/async-demo/hello?from=search-param` | **Async params & searchParams** تعمل كما يجب                  |
| `/async-demo/hello/opengraph-image`   | **Async image route props** تعمل بشكل صحيح                    |
| `/image-query`                        | **Local image query string allowlist**، مثل `/next.svg?v=1`   |
| `/cache-demo`                         | أزرار لتجربة `updateTag` و `revalidateTag`                    |
| `/parallel-demo`                      | التحقق من **Parallel route default slot** (ملف `default.tsx`) |
| `/sitemap.xml`                        | التحقق من **async sitemap id**                                |

---

# 3️⃣ التحقق من **Production Build**

```bash
npm run build
```

> تأكد أن البناء يتم بنجاح، بدون أخطاء من Turbopack، async params، أو Parallel routes.

---

# 4️⃣ التحقق من **Linting**

```bash
npm run lint
```

> يستخدم **ESLint CLI** الآن بدل `next lint`.
> تأكد أن كل القواعد مطبقة بدون تحذيرات خطيرة.

---

# 5️⃣ Codemods هامة للترقية

لتسهيل الترقية من **Next.js 15 → 16**، استخدم هذه codemods:

```bash
npx @next/codemod@canary upgrade latest
npx @next/codemod@canary remove-experimental-ppr
npx @next/codemod@canary remove-unstable-prefix
npx @next/codemod@canary middleware-to-proxy
npx @next/codemod@canary next-lint-to-eslint-cli
npx @next/codemod@canary next-async-request-api
```

> هذه الأدوات تلقائيًا تعدّل الملفات لتتوافق مع Next.js 16.

---

# 6️⃣ ملاحظات

* بعض التغييرات **framework-internal** أو متعلقة بالـ ecosystem (مثل routing internals أو terminal output).
* قد لا ترى كل الفرق في diff واحد، لكنها موجودة عند التشغيل الفعلي للمشروع.
* للتفاصيل الكاملة:

```
node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md
node_modules/next/dist/docs/01-app/02-guides/upgrading/codemods.md
```

---
