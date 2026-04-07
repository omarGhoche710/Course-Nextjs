حلو 👍 خلينا نعطيك **قاعدة عملية سريعة**:
**متى نستخدم كل `max-w-*`** في المشاريع.

---

# جدول عملي — أي `max-w` أستخدم؟

```text
max-w-sm   → Form صغير / Card
max-w-md   → Login / Signup
max-w-lg   → Article قصير
max-w-xl   → Content متوسط
max-w-2xl  → Blog post
max-w-3xl  → صفحة قراءة
max-w-4xl  → Section عادي
max-w-5xl  → Layout متوسط
max-w-6xl  → Navbar / Main layout ⭐
max-w-7xl  → Dashboard / موقع كبير
```

---

# 1️⃣ Navbar — الأكثر شيوعاً

```tsx
<nav className="max-w-6xl mx-auto px-6 py-4">
```

نستخدم:

```text
max-w-6xl
```

لأنه:

```text
واسع
لكن ليس بعرض الشاشة
```

---

# 2️⃣ Content / Section

```tsx
<section className="max-w-4xl mx-auto px-6">
```

نستخدم:

```text
max-w-4xl
```

لأن النص يحتاج عرض مريح للقراءة.

---

# 3️⃣ Form (Login / Register)

```tsx
<div className="max-w-md mx-auto">
```

نستخدم:

```text
max-w-md
```

لأن الفورم يجب أن يكون ضيق ومركّز.

---

# 4️⃣ Dashboard أو Grid كبير

```tsx
<div className="max-w-7xl mx-auto">
```

نستخدم:

```text
max-w-7xl
```

لأنه يحتاج مساحة أكبر.

---

# قاعدة ذهبية تحفظها

```text
Navbar / Layout      → max-w-6xl
Content / Section    → max-w-4xl
Form / Card          → max-w-md
Dashboard / Grid     → max-w-7xl
```

---

# مثال من مشروعك (أفضل practice)

```tsx
<header className="border-b backdrop-blur bg-white/70 sticky top-0">
  <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    Navbar
  </nav>
</header>
```


