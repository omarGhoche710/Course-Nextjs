نعم هذا طبيعي 👍 وهذا بالضبط فائدة **TypeScript**.

أنت عرّفت الـ props هكذا:

```ts
type Props = {
  name: string
  role: string
}
```

هذا يعني أن **TypeScript** يفهم أن:

* `name` **مطلوب**
* `role` **مطلوب**

لذلك إذا كتبت:

```tsx
<Card />
```

سيعطيك error مثل:

```
Property 'name' is missing
Property 'role' is missing
```

لأن **React** ينتظر هذه القيم.

---

# كيف تجعلها غير إجبارية (optional)

إذا أردت أن تعمل بدون error:

```ts
type Props = {
  name?: string
  role?: string
}
```

علامة `?` تعني **اختياري**.

الآن هذا يعمل:

```tsx
<Card />
```

وهذا يعمل:

```tsx
<Card name="Omar" />
```

---

# لكن انتبه لمشكلة

لو كانت القيم optional يجب أن تتعامل معها:

```tsx
const Card = ({ name, role }: Props) => {
  return (
    <div>
      <p>{name || "No Name"}</p>
      <p>{role || "No Role"}</p>
    </div>
  )
}
```

---

# لماذا هذا جيد

هذه واحدة من أقوى ميزات **TypeScript** مع **Next.js**:

يساعدك على اكتشاف الأخطاء قبل تشغيل الموقع.

---

💡 قاعدة يستخدمها المطورون:

| الحالة          | ماذا نفعل |
| --------------- | --------- |
| القيمة ضرورية   | بدون `?`  |
| القيمة اختيارية | نضيف `?`  |

---

إذا أردت، يمكنني أن أريك **خطأ مشهور جدًا في props يقع فيه 90٪ من المبتدئين في React + TypeScript**.
