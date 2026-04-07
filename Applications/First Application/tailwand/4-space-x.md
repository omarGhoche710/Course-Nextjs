تمام 😄 خلينا نفسر `space-x-*` بنفس الطريقة ونوضح الفرق عن `space-y-*`

---

## 1️⃣ معنى `space-x-*`

* `space-x-*` = **horizontal spacing between children**
* يضيف **مسافة أفقية بين كل عنصر وآخر** داخل container
* لا يضيف margin على العنصر نفسه، فقط بين العناصر المتجاورة

---

### مثال عملي

```tsx
<div className="flex space-x-4 bg-gray-100 p-4">
  <button className="btn">Button 1</button>
  <button className="btn">Button 2</button>
  <button className="btn">Button 3</button>
</div>
```

* هنا الـ `space-x-4` → يضيف **1rem = 16px** بين كل زر والآخر
* الـ flex direction افتراضي row → لذلك المسافة أفقية

---

### الفرق بين `space-x-*` و `space-y-*`

| Class       | اتجاه spacing     | مثال الاستخدام             |
| ----------- | ----------------- | -------------------------- |
| `space-y-4` | عمودي (vertical)  | عناصر في column (flex-col) |
| `space-x-4` | أفقي (horizontal) | عناصر في row (flex row)    |

---

### جدول القيم

| Tailwind class | rem     | px تقريباً |
| -------------- | ------- | ---------- |
| `space-x-1`    | 0.25rem | 4px        |
| `space-x-2`    | 0.5rem  | 8px        |
| `space-x-3`    | 0.75rem | 12px       |
| `space-x-4`    | 1rem    | 16px       |
| `space-x-6`    | 1.5rem  | 24px       |
| `space-x-8`    | 2rem    | 32px       |

> نفس جدول `space-y-*` لكن هنا **أفقياً**

---
