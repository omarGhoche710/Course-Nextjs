تمام، خلينا نعمل **قائمة واضحة لأنواع `font-*` في Tailwind** — خاصة `font-semibold` وأخواتها.

---

# أنواع `font-weight` في Tailwind

هذه تتحكم في **سماكة الخط (boldness)**.

```text
font-thin       = 100
font-extralight = 200
font-light      = 300
font-normal     = 400
font-medium     = 500
font-semibold   = 600
font-bold       = 700
font-extrabold  = 800
font-black      = 900
```

---

## مثال سريع

```tsx
<h1 className="font-semibold">Title</h1>
```

يعني:

```text
سماكة الخط = 600
أقوى من normal
أخف من bold
```

---

# ترتيبها من الأخف للأثقل

```text
thin
extralight
light
normal
medium
semibold
bold
extrabold
black
```

---

# الأكثر استخداماً عملياً

```text
font-normal   → نص عادي
font-medium   → أقوى قليلاً
font-semibold → عناوين فرعية
font-bold     → عناوين رئيسية
```

---

# مثال واقعي

```tsx
<div className="space-y-2">
  <h1 className="text-3xl font-bold">Main Title</h1>
  <h2 className="text-xl font-semibold">Section Title</h2>
  <p className="text-gray-600 font-normal">Description text</p>
</div>
```

---
