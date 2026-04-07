تمام 👌 خلينا نشرح **فكرة `hover`** نفسها بشكل واضح وبسيط.

---

# ما معنى `hover` في Tailwind / CSS؟

```text
hover = عندما يمر الماوس فوق العنصر
```

يعني:

```text
إذا المستخدم حط الماوس على الزر → يتغير الشكل
```

---

## مثال من كودك

```tsx
hover:bg-cyan-50
hover:scale-105
```

هذا يعني:

```text
عند مرور الماوس:
- الخلفية تتغير
- الزر يكبر قليلاً
```

---

# كيف تعمل `hover`؟

Tailwind يستخدم نفس فكرة CSS:

```css
button:hover {
  background-color: lightblue;
}
```

لكن في Tailwind نكتبها هكذا:

```tsx
hover:bg-cyan-50
```

---

# نشرح كودك سطر سطر

```tsx
className="
inline-block
border border-cyan-300
bg-white
px-4 py-2
rounded-lg
hover:bg-cyan-50
hover:scale-105
transition
duration-300
"
```

---

## قبل hover (الوضع الطبيعي)

الزر:

```text
- خلفية بيضاء
- border cyan
- حجم طبيعي
```

---

## عند hover

```text
hover:bg-cyan-50
```

يعني:

```text
الخلفية تصبح cyan فاتح
```

---

```text
hover:scale-105
```

يعني:

```text
الزر يكبر 5%
```

---

```text
transition duration-300
```

يعني:

```text
التغيير يحدث خلال 300ms
بشكل ناعم
```

بدونها:

```text
التغيير فجائي
```

معها:

```text
التغيير smooth
```

---

# تخيّل الحركة

```text
قبل hover:

[ View Speakers ]

بعد hover:

[  View Speakers  ]
(أكبر قليلاً + لون أخف)
```

---

# أمثلة أخرى شائعة لـ hover

```tsx
hover:text-blue-600
```

```text
يتغير لون النص
```

---

```tsx
hover:border-red-500
```

```text
يتغير لون border
```

---

```tsx
hover:shadow-lg
```

```text
يظهر ظل
```

---

```tsx
hover:opacity-75
```

```text
يصبح شفاف قليلاً
```

---

# القاعدة العامة

```text
hover:property-value
```

مثلاً:

```text
hover:bg-blue-500
hover:scale-110
hover:shadow-lg
hover:text-white
hover:rotate-3
```

---


