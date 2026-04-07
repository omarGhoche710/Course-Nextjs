`backdrop-blur` في **Tailwind CSS** هو تأثير يجعل **الخلفية وراء العنصر تصبح ضبابية (blur)** — مثل زجاج شفاف (glass effect). ✨

---

# الفكرة ببساطة

```text
العنصر نفسه شفاف
لكن ما وراءه يصبح ضبابي
```

مثل:

```text
Navbar شفاف
لكن المحتوى خلفه يصبح blur
```

---

# مثال سريع

```tsx
<header className="backdrop-blur bg-white/70">
  Navbar
</header>
```

النتيجة:

* الخلفية نصف شفافة
* المحتوى خلفها يصبح blur

---

# كيف يعمل تقنياً

```css
backdrop-filter: blur(...)
```

لكن Tailwind يعطيك class جاهزة.

---

# الدرجات (Sizes)

```text
backdrop-blur-sm
backdrop-blur
backdrop-blur-md
backdrop-blur-lg
backdrop-blur-xl
backdrop-blur-2xl
backdrop-blur-3xl
```

تقريباً:

```text
sm  → blur قليل
lg  → blur متوسط
3xl → blur قوي
```

---

# مثال عملي (Navbar احترافي)

```tsx
<header className="sticky top-0 backdrop-blur bg-white/70 border-b">
  <nav className="container flex justify-between items-center py-4">
    Navbar
  </nav>
</header>
```

هذا يعطي:

```text
Navbar ثابت فوق
خلفيته شفافة
وما وراءه blur
```

يستخدم كثير في:

```text
Navbar
Modal
Sidebar
Glass UI
```

---

# شرط مهم ليعمل `backdrop-blur`

لازم يكون في:

```text
background شفاف
```

مثلاً:

```tsx
bg-white/70
bg-black/50
bg-gray-100/60
```

إذا وضعت:

```tsx
bg-white
```

لن ترى blur لأن الخلفية ليست شفافة.

---

# مثال كامل (Glass effect)

```tsx
<div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 shadow">
  Glass Card
</div>
```

هذا يسمى:

```text
Glassmorphism
```

---

إذا تحب، أشرح لك بعدها:

* الفرق بين `blur` و `backdrop-blur`
* أو نطبقها مباشرة على الـ Navbar في مشروعك
