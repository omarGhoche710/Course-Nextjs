آه فهمتك 😎
بدك تستخدم **public route group** في **Next.js App Router** — يعني كل صفحات الجمهور common layout (مثلاً navbar/footer) بدون أي auth.

خلينا نشرحها خطوة خطوة.

---

## 1️⃣ إنشاء Public Route Group

في **Next.js App Router**، نستخدم **parent folder** مع الأقواس:

```text
app/
  (public)/
    layout.tsx
    page.tsx
    about/page.tsx
    speakers/page.tsx
```

* `(public)` → **route group**
* لا يظهر في الـ URL
* يسمح لك بمشاركة **layout** بين عدة صفحات

---

## 2️⃣ Public layout

في `app/(public)/layout.tsx`:

```tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

* كل صفحات `(public)` تستخدم نفس layout تلقائياً
* URL ما يتغير `(public)` مجرد تنظيم داخلي

---

## 3️⃣ مثال على صفحة

`app/(public)/about/page.tsx`:

```tsx
export default function AboutPage() {
  return <h1>About Us</h1>;
}
```

* هالصفحة تستخدم **Navbar + Footer** من layout
* URL: `/about` → **بدون `(public)` في URL**

---

## 4️⃣ Nested routes داخل public group

مثلاً `speakers` و `talks`:

```text
app/
  (public)/
    speakers/
      page.tsx
      [username]/
        page.tsx
        talks/[slug]/page.tsx
```

* كل هالصفحات تستخدم **public layout**
* URL example:

  * `/speakers`
  * `/speakers/khaled`
  * `/speakers/khaled/talks/nested-routes-nextjs`

---

## ✅ خلاصة استخدام public route group

1. **لا يظهر في URL**
2. **يسمح بمشاركة layout واحد لعدة صفحات**
3. **مثالي للصفحات العامة** (about, speakers, categories…)
4. **يسهل تنظيم الملفات داخل app folder**

---

3️⃣ ليش نستخدمها؟
لنفصل صفحات layout مشترك عن بعضها:
(public) → layout عام للجمهور (Navbar, Footer)
(auth) → layout لصفحات تسجيل الدخول أو لوحة تحكم
بدون هذه الأقواس، كان سيضطرّ المبرمج لتكرار layouts لكل صفحة