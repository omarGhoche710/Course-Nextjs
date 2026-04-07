تمام 👌 رح أعطيك **جدول واضح لكل ما له علاقة بـ `sm`, `md`, `lg`, `xl`, `2xl` في Tailwind** من ناحية **pixels** — لأن هول مهمين جداً في **responsive design**.

---

# أولاً: Breakpoints (أحجام الشاشات)

هذه تستخدم مع:

```tsx
md:text-lg
lg:flex
xl:grid
```

## جدول الـ Breakpoints

| Prefix | اسم الشاشة  | يبدأ من (px) |
| ------ | ----------- | ------------ |
| `sm`   | Small       | **640px**    |
| `md`   | Medium      | **768px**    |
| `lg`   | Large       | **1024px**   |
| `xl`   | Extra Large | **1280px**   |
| `2xl`  | 2X Large    | **1536px**   |

---

## مثال

```tsx
className="text-sm md:text-lg lg:text-xl"
```

يعني:

```text
أقل من 768px  → text-sm
من 768px وفوق → text-lg
من 1024px وفوق → text-xl
```

---

# ثانياً: Sizes مثل `max-w-xl` و `text-xl`

هنا `xl` لا تعني breakpoint، بل **size scale**.

---

# جدول `max-width`

| Class       | px     |
| ----------- | ------ |
| `max-w-sm`  | 384px  |
| `max-w-md`  | 448px  |
| `max-w-lg`  | 512px  |
| `max-w-xl`  | 576px  |
| `max-w-2xl` | 672px  |
| `max-w-3xl` | 768px  |
| `max-w-4xl` | 896px  |
| `max-w-5xl` | 1024px |
| `max-w-6xl` | 1152px |
| `max-w-7xl` | 1280px |

---

# ثالثاً: Font sizes (`text-xl`)

| Class       | px   |
| ----------- | ---- |
| `text-sm`   | 14px |
| `text-base` | 16px |
| `text-lg`   | 18px |
| `text-xl`   | 20px |
| `text-2xl`  | 24px |
| `text-3xl`  | 30px |
| `text-4xl`  | 36px |
| `text-5xl`  | 48px |
| `text-6xl`  | 60px |

---

# رابعاً: Container widths

إذا تستخدم:

```tsx
className="container"
```

فهذه القيم:

| Screen | container width |
| ------ | --------------- |
| `sm`   | 640px           |
| `md`   | 768px           |
| `lg`   | 1024px          |
| `xl`   | 1280px          |
| `2xl`  | 1536px          |

---

# الفرق المهم جداً

## 1️⃣ `xl` كـ breakpoint

```tsx
xl:flex
```

يعني:

```text
طبق flex عندما الشاشة ≥ 1280px
```

---

## 2️⃣ `xl` كـ size

```tsx
max-w-xl
```

يعني:

```text
max-width = 576px
```

---

# خلاصة سريعة (احفظها)

```text
sm = 640px
md = 768px
lg = 1024px
xl = 1280px
2xl = 1536px
```

---

### Short
تمام وصلت الفكرة 👍
بدك **الأرقام فقط بدون شرح طويل**.

---

# Breakpoints في Tailwind (بالـ px)

```text
sm  = 640px
md  = 768px
lg  = 1024px
xl  = 1280px
2xl = 1536px
```

---

# `max-w-*` (أحجام العرض)

```text
max-w-sm  = 384px
max-w-md  = 448px
max-w-lg  = 512px
max-w-xl  = 576px
max-w-2xl = 672px
max-w-3xl = 768px
max-w-4xl = 896px
max-w-5xl = 1024px
max-w-6xl = 1152px
max-w-7xl = 1280px
```

---

# `text-*` (حجم الخط)

```text
text-sm  = 14px
text-base = 16px
text-lg  = 18px
text-xl  = 20px
text-2xl = 24px
text-3xl = 30px
text-4xl = 36px
text-5xl = 48px
text-6xl = 60px
```
