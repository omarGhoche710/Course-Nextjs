# Handling errors in nested routes

- Errors always bubble up to find the closest parent error boundary

- An error.tsx file handles errors not just for its own folder, but for all the nested child
segments below it too

- By strategically placing error.tsx files at different levels in your route folders, you
can control exactly how detailed your error handling gets

- Where you put your error.tsx file makes a huge difference - it determines exactly
which parts of your UI get affected when things go wrong.

---

## 📝 Note — `error.tsx` in Nested Routes

> **The nearest `error.tsx` handles errors for its segment and replaces the layout and page of that segment and all its children.**

---

## Scenario

```plaintext
products/
│
├── error.tsx
│
└── [productId]/
        ├── layout.tsx
        ├── page.tsx
        │
        └── reviews/
                └── [reviewId]/
                        └── page.tsx   ← error happens here
```

---

## Result

```plaintext
products/error.tsx   ✅ will render

[productId]/layout.tsx   ❌ will NOT render
[productId]/page.tsx     ❌ will NOT render
reviews/.../page.tsx     ❌ will NOT render
```

---

## Why?

```plaintext
Error bubbles up to the nearest error.tsx
and replaces the entire subtree below it.
```

يعني:
**`products/error.tsx` بياخد مكان كل شي تحته** (layout + pages).

---

## If you want the layout to stay visible

ضع `error.tsx` بنفس مستوى الـ layout:

```plaintext
products/
│
└── [productId]/
        ├── layout.tsx
        ├── error.tsx   ← هنا
        │
        └── reviews/
                └── [reviewId]/
                        └── page.tsx
```

---

## New Result

```plaintext
[productId]/layout.tsx   ✅ will render
[productId]/error.tsx    ✅ will render inside layout
```

---

## Rule تحفظها بسرعة ⚡

```plaintext
error.tsx replaces the layout of its segment.
```
