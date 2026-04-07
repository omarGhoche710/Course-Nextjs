آه تمام 😄
خلينا نشرحها ببساطة:

---

## معنى `h-screen` في Tailwind CSS

* `h-screen` = **height: 100vh**
* يعني **ارتفاع العنصر يساوي ارتفاع شاشة العرض بالكامل** (viewport height)

---

### مثال عملي

```tsx
<div className="h-screen bg-blue-200">
  <h1>مرحبا!</h1>
</div>
```

* هذا الـ div **يمتد من أعلى الصفحة لأسفل الشاشة بالكامل**
* حتى لو محتواه قليل، سيملأ ارتفاع الشاشة

---

### متى نستخدمها؟

* صفحات **landing page / hero section**
* لتوسيط محتوى بالمنتصف (مع flex + justify-center + items-center)
* أي مكان تريد أن يغطي العنصر **كل ارتفاع الشاشة**

---

### العلاقة مع flex

إذا عندك:

```tsx
<div className="flex items-center justify-center h-screen">
  <h1>Center me!</h1>
</div>
```

* `h-screen` → العنصر يغطي كامل ارتفاع الشاشة
* `flex` + `items-center` + `justify-center` → المحتوى داخل الـ div **موسّط تماماً عمودياً وأفقياً**

---

باختصار:

```text
h-screen = 100% of viewport height
```
