سؤال ممتاز 👌
**ليش عملنا هيك structure للـ Navbar؟** خلينا نفهمها من ناحية **HTML + Layout + Best Practice**.

الكود:

```tsx
<header>
  <nav>
    <Link>Tech Events</Link>
    <div>
      <Link>Categories</Link>
      <Link>Speakers</Link>
      <Link>About</Link>
    </div>
  </nav>
</header>
```

---

# الفكرة الأساسية من الـ structure

نحن نقسم الـ Navbar إلى **3 مستويات منطقية**:

```text
header
  └── nav
        ├── Logo / Brand
        └── Links
```

يعني:

```text
[ Logo ]        [ Categories | Speakers | About ]
```

---

# 1️⃣ `<header>`

```html
<header>
```

هذا يعني:

```text
هذا رأس الصفحة
```

Semantic HTML — مفيد لـ:

* SEO
* Accessibility
* تنظيم الصفحة

عادة يحتوي:

```text
Navbar
Logo
Navigation
```

---

# 2️⃣ `<nav>`

```html
<nav>
```

هذا يعني:

```text
هنا روابط التنقل في الموقع
```

المتصفح و Google يفهمون:

```text
هذه روابط أساسية للتنقل
```

---

# 3️⃣ أول `Link` (الـ Brand)

```tsx
<Link>Tech Events</Link>
```

هذا هو:

```text
Logo / اسم الموقع
```

عادة يذهب إلى:

```tsx
<Link href="/">Tech Events</Link>
```

يعني:

```text
الضغط عليه يرجع للـ Home
```

---

# 4️⃣ الـ `div` الذي يحتوي الروابط

```tsx
<div>
  <Link>Categories</Link>
  <Link>Speakers</Link>
  <Link>About</Link>
</div>
```

ليش وضعناهم داخل `div`؟

لأننا نريد:

```text
Group واحد للـ navigation links
```

حتى نتحكم فيهم مع بعض بالـ CSS.

مثلاً:

```tsx
<div className="flex gap-4">
```

يعطي:

```text
Categories   Speakers   About
```

---

# الشكل النهائي بصرياً

```text
Tech Events                Categories  Speakers  About
```

وهذا يتحقق بسهولة باستخدام:

```tsx
<nav className="flex justify-between items-center">
```

---

# Structure أفضل (النسخة الاحترافية)

```tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          Tech Events
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link href="/categories">Categories</Link>
          <Link href="/speakers">Speakers</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
```

---

# الخلاصة

نستخدم هذا structure لأن:

```text
header → لتحديد رأس الصفحة
nav → لتحديد روابط التنقل
Link الأول → Logo / Home
div → لتجميع الروابط والتحكم فيها بالـ layout
```

وهذا **standard structure** لأي Navbar في React / Next.js.
