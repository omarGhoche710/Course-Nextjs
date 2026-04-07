# 🧩 The Complete Error Flow

## 🧠 How Next.js Decides What to Render

```
Request
   ↓
Route exists?
   ❌ → global-not-found.tsx
   ↓
Data exists?
   ❌ → not-found.tsx
   ↓
Runtime error?
   ❌ → error.tsx
   ↓
Root layout crash?
   ❌ → global-error.tsx
   ↓
✅ Success
```

---

## 🧠 Key Insight

> Next.js routes failures just like it routes pages
