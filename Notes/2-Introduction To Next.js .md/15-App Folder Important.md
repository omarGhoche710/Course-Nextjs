آه فهمتك 👌، خلينا نصحح الفكرة ش

في **Next.js 13+** مع `app/`، فكرة الـ Layouts هي **تراكب هرمي (nested layouts)** وليس “استبدال كامل”. يعني:

---

# 1️⃣ الـ RootLayout

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <header>Header</header>
        {children}  {/* هنا سيتم إدراج Layoutات أو صفحات الأبناء */}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
```

* كل Layout أو صفحة داخل أي مجلد **ستدخل مكان `{children}` هنا**.
* Header و Footer تبقى موجودة دائمًا ما لم تستبدلها Layout خاص.

---

# 2️⃣ Layout خاص بالـ Contact

```tsx
export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: "2px solid blue", padding: "20px" }}>
      <h2>Contact Section</h2>
      {children}  {/* هنا سيتم إدراج صفحة Contact نفسها */}
    </div>
  );
}
```

* هذا Layout **يُضاف فوق RootLayout**.
* النتيجة: الصفحة ستصبح:

```
<html>
  <body>
    <header>Header</header>
    <div style="border: 2px solid blue; padding: 20px;">
      <h2>Contact Section</h2>
      <main>
        <p>هذا نموذج الاتصال بنا</p>
      </main>
    </div>
    <footer>Footer</footer>
  </body>
</html>
```

> Header و Footer ما تختفي أبداً لأنهما في RootLayout.

---

# 3️⃣ الخلاصة

* **RootLayout**: Layout عام لكل الموقع
* **ContactLayout**: Layout خاص بالمجلد `contact/`
* **page.tsx داخل contact/**: الصفحة نفسها

Next.js يدمجهم تلقائيًا **هرمياً**:

```
RootLayout
 └── ContactLayout
      └── ContactPage
```

---

أه صح 😎، وهنا يبين قوة الـ **nested layouts** في Next.js 13+

مثال: صفحة Contact فيها **عدة أجزاء (parts)** مثل:

* عنوان Contact
* نموذج الاتصال
* خريطة الموقع
* معلومات التواصل

---

# الهيكل مع `app/`

```
app/
 ├── layout.tsx         ← RootLayout (Header + Footer)
 └── contact/
      ├── layout.tsx    ← ContactLayout (border + عنوان Contact)
      ├── form.tsx      ← نموذج الاتصال
      ├── map.tsx       ← خريطة الموقع
      └── page.tsx      ← الصفحة نفسها، يدمج كل الأجزاء
```

---

# كيف يتم التركيب (composition)

* RootLayout يضيف Header + Footer
* ContactLayout يضيف قسم خاص بالـ Contact (مثلاً border + عنوان)
* page.tsx يدمج كل الأجزاء: form.tsx + map.tsx + أي جزء آخر

مثال في `page.tsx`:

```tsx
import Form from "./form";
import Map from "./map";

export default function ContactPage() {
  return (
    <main>
      <Form />
      <Map />
    </main>
  );
}
```

> النتيجة النهائية: كل شيء داخل **ContactLayout**، وRootLayout فوق الجميع

---

# النتيجة النهائية في المتصفح

```html
<html>
  <body>
    <header>Header</header>   <!-- من RootLayout -->
    <div style="border: 2px solid blue; padding: 20px;"> <!-- ContactLayout -->
      <h2>Contact Section</h2>
      <main>                   <!-- page.tsx -->
        <form>...</form>
        <div>خريطة الموقع</div>
      </main>
    </div>
    <footer>Footer</footer>   <!-- من RootLayout -->
  </body>
</html>
```

---

✅ **الميزة هنا:**

* يمكنك تقسيم الصفحة إلى أجزاء صغيرة (`form.tsx`, `map.tsx`)
* كل شيء يبقى منظم تحت Layout هرمي
* لا تحتاج لتكرار Header/Footer أو تصميم كل جزء من الصفر

---

إذا تحب، أقدر أرسم لك **رسم يوضح كل شيء: RootLayout → ContactLayout → Page → Parts** بحيث يكون الأمر بصري وسهل الفهم.

تحب أعمله؟
