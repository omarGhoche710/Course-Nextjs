تمام، خليني أبسّط لك 💡

أنت ما فهمت **شو فايدة `sitemap.ts`** وإيمتى تستخدمه. خلينا نشرح خطوة خطوة:

---

# 1️⃣ شو هو `sitemap.ts`؟

هو **ملف يولّد `sitemap.xml`** تلقائيًا.
`Sitemap.xml` هو ملف خاص لمحركات البحث (Google, Bing …) يخبرهم عن كل صفحات موقعك، ووقت آخر تعديل لكل صفحة، وأهميتها.

فكرة بسيطة: **محركات البحث بتعرف كل صفحاتك بسهولة وبسرعة.**

---

# 2️⃣ شو فايدته لك كمطور؟

* يسهّل SEO (ترتيب صفحاتك في Google).
* يحسّن indexation لكل صفحات موقعك، خاصة الصفحات الديناميكية مثل `/communities/[slug]` أو `/developers/[username]`.
* ما بتحتاج تكتب الروابط يدويًا كل مرة.

---

# 3️⃣ متى تستخدمه؟

* **إذا عندك موقع كبير** مع صفحات ديناميكية (مثلاً: مجتمع، مستخدمين، مقالات …).
* **إذا بدك Google يعرف كل صفحاتك** بسرعة.
* **مش ضروري** لموقع تجريبي أو صفحة واحدة فقط.

---

# 4️⃣ وين تحطه؟

في **Next.js 16 مع App Router**:

```text
app/
  sitemap.ts
```

**مش داخل folder**، فقط مباشرة داخل `app`.

---

# 5️⃣ كيف يشتغل؟

1. شغل dev server:

```bash
npm run dev
```

2. افتح الرابط:

```text
http://localhost:3000/sitemap.xml
```

3. راح تشوف كل الصفحات اللي انت حددتهم في الملف (static + dynamic).

---

# 6️⃣ مثال عملي على مشروعك

لو عندك:

* Communities: `/communities/react`, `/communities/vue`
* Developers: `/developers/omar`, `/developers/sara`
* Posts: `/developers/omar/posts/nextjs`

فـ `sitemap.ts` يولّد:

```xml
<urlset>
  <url>
    <loc>http://localhost:3000/</loc>
  </url>
  <url>
    <loc>http://localhost:3000/communities/react</loc>
  </url>
  <url>
    <loc>http://localhost:3000/developers/omar</loc>
  </url>
  <url>
    <loc>http://localhost:3000/developers/omar/posts/nextjs</loc>
  </url>
</urlset>
```

Google يقرأ هذا الملف، ويعرف كل الصفحات بدون ما يضطر “يتصفح” الموقع كله.

---

