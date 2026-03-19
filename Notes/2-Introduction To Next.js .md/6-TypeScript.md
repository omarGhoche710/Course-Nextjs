سؤالك ممتاز 👍

الجواب: **ليس لازم** تستخدم `throw`، لكن يعتمد على **ماذا تريد أن تفعل عندما يكون الإدخال خطأ** في **TypeScript** أو **JavaScript**.

خلينا نقارن الطريقتين.

---

# 1️⃣ استخدام `return` (كما كتبت أنت)

```ts
function sum(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  return "inputs must be numbers";
}
```

هنا:

* إذا القيم صحيحة → يرجع الناتج
* إذا خطأ → يرجع رسالة

مثال:

```ts
sum(2, 3)      // 5
sum("2", 3)    // "inputs must be numbers"
```

المشكلة هنا:

الدالة قد ترجع **نوعين مختلفين**:

* `number`
* `string`

وهذا أحيانًا يسبب مشاكل في الأنواع.

---

# 2️⃣ استخدام `throw` (أفضل في كثير من الحالات)

```ts
function sum(a: number | string, b: number | string): number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  throw new Error("inputs must be numbers");
}
```

هنا:

* إذا الإدخال صحيح → يرجع number
* إذا خطأ → يرمي error

مثال الاستخدام:

```ts
try {
  sum("2", 3);
} catch (error) {
  console.log(error);
}
```

---

# لماذا `throw` أفضل أحيانًا؟

لأن الدالة تصبح **واضحة النوع**:

```ts
number
```

بدل:

```ts
number | string
```

وهذا يجعل **TypeScript** يعمل بشكل أفضل.

---

✅ **الخلاصة**

| الطريقة  | متى نستخدمها                 |
| -------- | ---------------------------- |
| `return` | عندما تريد إرجاع رسالة       |
| `throw`  | عندما يكون الإدخال خطأ حقيقي |

في أغلب المشاريع الكبيرة مثل **React** و **Next.js** يفضل استخدام **`throw`**.

---

