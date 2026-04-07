سؤال ممتاز 👌
**ليش استخدمنا `max-w-6xl` داخل الـ `<nav>`؟** خلينا نفهمها عملياً.

```tsx
<nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
```

---

# الفكرة الأساسية من `max-w-6xl`

```text
نحدد أقصى عرض للـ Navbar
حتى لا يتمدد بعرض الشاشة بالكامل
```

يعني:

```text
الشاشة كبيرة (مثلاً 1920px)
لكن المحتوى يبقى بعرض مريح للقراءة
```

---

# بدون `max-w-6xl`

```text
|--------------------------------------------------------------|
| Logo                                     Links               |
|--------------------------------------------------------------|
```

الـ Navbar يمتد على كامل الشاشة — هذا غالباً غير مريح بصرياً.

---

# مع `max-w-6xl`

```text
|--------------------------------------------------------------|
|        Logo                    Links                          |
|--------------------------------------------------------------|
```

المحتوى يصبح:

```text
محدود العرض
وموجود في المنتصف
```

بفضل:

```text
max-w-6xl + mx-auto
```

---

# كم يساوي `6xl` بالـ pixel ؟

تقريباً:

```text
max-w-6xl = 72rem = 1152px
```

---

# جدول سريع لأشهر القيم

```text
max-w-sm   = 384px
max-w-md   = 448px
max-w-lg   = 512px
max-w-xl   = 576px
max-w-2xl  = 672px
max-w-3xl  = 768px
max-w-4xl  = 896px
max-w-5xl  = 1024px
max-w-6xl  = 1152px
max-w-7xl  = 1280px
```

---

# لماذا اخترنا تحديداً `6xl` للـ Navbar؟

لأنه:

```text
عرض مناسب لمعظم المواقع
واسع لكن ليس مبالغ فيه
```

يستخدم كثير في:

```text
Navbar
Main container
Sections
Layouts
```

---

# pattern شائع جداً في المشاريع

```tsx
<header>
  <nav className="max-w-6xl mx-auto px-6 py-4">
    ...
  </nav>
</header>
```

هذا يسمى:

```text
Centered Container Layout
```

---

# دور كل class في السطر

```text
max-w-6xl   → يحدد أقصى عرض
mx-auto     → يضعه في المنتصف
px-6        → padding يمين ويسار
py-4        → padding فوق وتحت
flex        → layout أفقي
items-center → توسيط عمودي
justify-between → توزيع العناصر يمين ويسار
```

---

