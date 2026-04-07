# ⏳ loading.tsx — Designing the Waiting Experience

## 📌 What It Is

`loading.tsx` is a special file in Next.js that shows a **loading UI while a route segment is waiting for data from the server**.

---

## ⚙️ Basic Example

```tsx
// app/dashboard/loading.tsx
export default function Loading() {
  return <h2>Loading dashboard...</h2>
}
```

---

## 🧠 What Happens Internally

When your page does async work:

```tsx
// app/dashboard/page.tsx
export default async function Page() {
  const data = await fetch("https://api.com/data")

  return <div>Dashboard</div>
}
```

👉 Next.js automatically wraps your page with Suspense:

```tsx
<Suspense fallback={<Loading />}>
  <Page />
</Suspense>
```

---

## 🧠 Mental Model

```text
User visits page
   ↓
Server starts fetching data
   ↓
⏳ loading.tsx renders
   ↓
Data is ready
   ↓
✅ page.tsx replaces it
```

---

## 📍 Scope (Very Important)

If you place:

```bash
app/dashboard/loading.tsx
```

It affects:

* dashboard/page.tsx if there's fetching of data
* all nested routes inside dashboard if there's fetching of data    
---

## ⚠️ Important Insight

> loading.tsx replaces the ENTIRE segment UI

Even if only a small part of the page is loading.

---

# 💥 The Problem with loading.tsx

## ❌ Example Situation

Your page has:

* Small widget (dynamic)

---

### What happens?

👉 loading.tsx replaces EVERYTHING

```text
❌ All route page doesn't appear
```

---

## 🧠 Why This Happens

Because:

> loading.tsx works at the **route level**, not component level

---

# ✅ When You SHOULD Use loading.tsx

Use it when:

* The whole page depends on server data
* Nothing meaningful can render before data arrives

---

## ✔️ Good Example

```tsx
// Entire page needs data
const data = await fetchDashboard()

return <Dashboard data={data} />
```

---

## 🎯 Rule

> If the page cannot render partially → use loading.tsx

---

# 🚫 When You SHOULD NOT Use It

Avoid loading.tsx when:

* Only part of the page is dynamic
* You want better UX
* You want progressive loading

---

# 🔥 Better Alternative: React Suspense

Instead of loading the whole page, load only parts.

---

## ⚙️ Example with Suspense

```tsx
import { Suspense } from 'react'

export default function Page() {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <Suspense fallback={<p>Loading widget...</p>}>
        <Widget />
      </Suspense>
    </div>
  )
}
```

---

## 🧠 What Happens Now

```text
Navbar ✅ stays visible
Sidebar ✅ stays visible
Widget ⏳ loads independently
```

---

## ⚙️ Example Widget (Async)

```tsx
// components/Widget.tsx
export default async function Widget() {
  const data = await fetch("https://api.com/widget")

  return <div>{data.title}</div>
}
```

---

# ⚖️ loading.tsx vs Suspense

| Feature     | loading.tsx      | Suspense        |
| ----------- | ---------------- | --------------- |
| Scope       | Route-level      | Component-level |
| Control     | Automatic        | Manual          |
| UX          | Full page loader | Partial loading |
| Flexibility | Low              | High            |

---

# 🧠 The Real Engineering Insight

> Next.js gives you **coarse control**
> React gives you **fine control**

---

## 🎯 TechTalks Rule

> Use loading.tsx for structure
> Use Suspense for precision

---

# ⚠️ Common Mistakes

## ❌ 1. Using loading.tsx everywhere

→ leads to bad UX

---

## ❌ 2. Full-page loaders for small data

→ unnecessary and annoying

---

## ❌ 3. Ignoring Suspense

→ missing better user experience

---

# 🧠 Final Insight

`loading.tsx` is not about loading…

> It’s about **how your app behaves while waiting**

---

# 🎤 Final Teaching Line

> “Bad apps freeze while loading…
> Great apps stay alive.”