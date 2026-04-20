أكيد 👍
هاي **note مركّزة** عن `use()` — مناسبة تحتفظ فيها مع ملاحظاتك عن **Next.js / React 19**.

---

# 📝 Note — `use()` in React / Next.js

## What is `use()` ?

`use()` هو **React hook** بيستخدم لقراءة قيمة من:

* **Promise**
* **Context**
* **Resource**

بدل استخدام `await` أو `useContext`.

---

## Basic Syntax

```tsx
import { use } from "react";

const data = use(promise);
```

---

## 1) Using `use()` with Promise

```tsx
import { use } from "react";

const fetchUsers = async () => {
  const res = await fetch("https://api.example.com/users");
  return res.json();
};

const UsersPage = () => {
  const users = use(fetchUsers());

  return <div>{users.length} users</div>;
};
```

---

## 2) Using `use()` with params (Next.js)

```tsx
import { use } from "react";

const Page = ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = use(params);

  return <h1>ID: {id}</h1>;
};
```

---

## 3) Using `use()` with searchParams

```tsx
const { lang = "en" } = use(searchParams);
```

---

# Where can `use()` be used ?

`use()` works in:

* Server Components ✅
* Client Components ✅

---

# Important Rule

## Server Component

Use:

```tsx
await
```

or:

```tsx
use()
```

Both work.

---

## Client Component

You must use:

```tsx
use()
```

Because:

```tsx
async component ❌
```

Client components cannot be async.

---

# `use()` vs `await`

## Server Component (recommended)

```tsx
const Page = async ({ params }) => {
  const { id } = await params;
};
```

---

## Alternative

```tsx
const Page = ({ params }) => {
  const { id } = use(params);
};
```

---

# `use()` vs `useParams()`

## `use()`

```tsx
const { id } = use(params);
```

Works in:

* Server
* Client

---

## `useParams()`

```tsx
"use client";

const params = useParams();
```

Works in:

* Client only

---

# When should you use `use()` ?

Use `use()` when:

* Component is **Client**
* You receive a **Promise**
* You want to read `params` or `searchParams`
* You use **Suspense**
* You cannot use `await`

---

# When should you NOT use `use()` ?

Do not use `use()` when:

* You are in Server Component
* You can use `await`
* Code is simple

---

# Best Practice (Next.js)

## Prefer this:

```tsx
const Page = async ({ params }) => {
  const { id } = await params;
};
```

## Use `use()` when needed:

```tsx
"use client";

const { id } = use(params);
```

---

# Golden Rule

**Server Component → `await`**
**Client Component → `use()`**
