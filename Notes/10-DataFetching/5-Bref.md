أكيد — عملت لك الموضوع كـ **Note مرتب وسريع للمراجعة** 📘

---

# 🧠 Rendering Methods in Next.js — Notes

## 1️⃣ SSR — Server-Side Rendering

### التعريف

الصفحة تنعمل **من جديد على السيرفر** عند كل request.

### behavior

* كل request → fetch جديد
* البيانات دائمًا أحدث نسخة وقت الطلب
* الصفحة **لا تتحدث لحالها** بعد العرض

### إذا تغيّرت البيانات

* تتحدث الصفحة **عند request جديد فقط**
  (refresh أو navigation)

### مثال ذهني

```
User opens page
     ↓
Server fetches data
     ↓
New HTML returned
```

### Use cases

* Dashboards
* بيانات تتغير كثير
* user-specific data

---

## 2️⃣ ISR — Incremental Static Regeneration

### التعريف

صفحة static لكن **تتحدث بعد وقت محدد**.

### behavior

* الصفحة cached
* بعد انتهاء الوقت (مثلاً 30 دقيقة)
* أول request بعد الوقت → يعمل fetch جديد

### إذا تغيّرت البيانات

* لا تتحدث فورًا
* تتحدث **عند أول request بعد انتهاء الوقت**

### مثال

```
revalidate: 1800
```

يعني:

```
كل 30 دقيقة
مسموح تحديث الصفحة
```

### Use cases

* Blogs
* News
* Products

---

## 3️⃣ SSG — Static Site Generation

### التعريف

الصفحة تنبنى مرة واحدة وقت build.

### behavior

* البيانات ثابتة
* الصفحة cached دائمًا

### إذا تغيّرت البيانات

* الصفحة **لا تتحدث**
* حتى لو عملت refresh
* لازم:

```
build جديد
أو deploy جديد
```

### Use cases

* Landing pages
* About page
* Documentation

---

# ⚡ Quick Comparison

| النوع | متى يعمل fetch | إذا data تغيّرت | هل تتحدث الصفحة؟          |
| ----- | -------------- | --------------- | ------------------------- |
| SSR   | كل request     | نعم             | عند request جديد          |
| ISR   | بعد وقت محدد   | نعم             | عند أول request بعد الوقت |
| SSG   | وقت build فقط  | نعم             | لا (إلا build جديد)       |

---

# Mental Model سريع

```
SSR  → Always fresh
ISR  → Fresh every X time
SSG  → Frozen until rebuild
```

---

إذا بدك، الخطوة الجاية فينا نعمل:

* **Note تانية** عن:

  * `cache: "no-store"`
  * `revalidate`
  * `force-cache`
    (هيدي أهم 3 options بالـ fetch في Next.js)
