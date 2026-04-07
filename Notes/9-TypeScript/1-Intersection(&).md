# 🧠 TypeScript Note — `Error & { digest?: string }`

## 📌 الكود

```ts
type PublicErrorPageProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};
```

---

# 1️⃣ شو يعني `Error & { digest?: string }`

يعني:

> خُد كل خصائص `Error`
> وزيد عليها property اسمها `digest` (اختيارية)

---

## `&` اسمها

**Intersection Type**

تعني:

```text
Type A + Type B
```

---

## `digest?` تعني

```text
Optional
```

يعني:

```text
ممكن تكون موجودة  
ممكن لا
```

---

# 2️⃣ ليش ما كتبنا `{ ...Error, digest }` ؟

لأن:

```text
Error هو Type
مش Object
```

و:

```text
Spread (...) يُستخدم مع Objects فقط
```

---

## القاعدة الذهبية 🟡

```text
دمج Objects  →  استخدم spread (...)

دمج Types    →  استخدم &
```

---

# مثال عملي

## دمج Objects

```ts
const user = {
  name: "Omar"
};

const newUser = {
  ...user,
  age: 25
};
```

✅ صحيح

---

## دمج Types

```ts
type User = {
  name: string;
};

type Admin = User & {
  isAdmin: boolean;
};
```

✅ صحيح

---

## خطأ شائع

```ts
type Wrong = {
  ...User
  isAdmin: boolean
};
```

❌ Syntax Error

---

# 3️⃣ Mental Model

```text
Object  = data (شي موجود فعلياً)

Type    = blueprint (مخطط)
```

---

## لذلك:

```text
Spread (...)  → مع data

&             → مع blueprint
```

---

# 4️⃣ مثال قريب من Next.js error

```ts
error: Error & { digest?: string }
```

يعني:

```ts
{
  name: string
  message: string
  stack: string
  digest?: string
}
```

---

# الخلاصة السريعة

```text
?  → optional

&  → دمج types

... → دمج objects
```
