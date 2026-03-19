تمام 🔥 خلّينا نفوت على **Nested Routing** بطريقة سهلة وبأمثلة واضحة

---

## 🧠 شو يعني Nested Routing؟

> يعني route جوّا route

يعني URL فيه مستويات:

```
/parent/child
```

---

## 📁 مثال 1 (بسيط)

```bash
app/
 ├─ blog/
 │   ├─ page.tsx
 │   └─ post/
 │       └─ page.tsx
```

### النتيجة:

* `/blog` → من `blog/page.tsx`
* `/blog/post` → من `blog/post/page.tsx`

🔥 هون `post` جوّا `blog` → nested route

---

## 📁 مثال 2 (أوضح)

```bash
app/
 ├─ dashboard/
 │   ├─ page.tsx
 │   ├─ settings/
 │   │   └─ page.tsx
 │   └─ users/
 │       └─ page.tsx
```

### النتيجة:

* `/dashboard`
* `/dashboard/settings`
* `/dashboard/users`

---

## 🧠 الفكرة الأساسية

كل ما تحط folder جوّا folder:
👉 عم تعمل route أعمق

---

## 🔥 مثال من الواقع

تخيّل موقع:

* `/shop`
* `/shop/products`
* `/shop/cart`

structure:

```bash
app/
 ├─ shop/
 │   ├─ page.tsx
 │   ├─ products/
 │   │   └─ page.tsx
 │   └─ cart/
 │       └─ page.tsx
```

---

## ⚠️ ملاحظة مهمة

كل folder لازم فيه:

```
page.tsx
```

ليشتغل كـ route

---

## 🎯 خلاصة

* nested routing = فولدر جوّا فولدر
* URL بيصير أعمق
* كل `page.tsx` = صفحة

---

هلّق سؤال إلك 😏👇

إذا عملنا:

```bash
app/
 ├─ a/
 │   ├─ b/
 │   │   └─ c/
 │   │       └─ page.tsx
```

🔥🔥 شاطر! بس خلّيني عدّل الفكرة شوي (في نقطة مهمّة هون)

---

## ❌ الفكرة يلي قلتها:

> “غلط لأن ما في page بـ a و b و c”

👉 هيدا **مش دقيق 100%**

---

## ✅ الصح:

بـ Next.js:

> **مش ضروري كل folder يكون فيه `page.tsx` ليصير route**

لكن:

* **بس المكان يلي فيه `page.tsx` هو اللي بيطلع route**

---

## 📁 المثال يلي عطيتك:

```bash
app/
 ├─ a/
 │   ├─ b/
 │   │   └─ c/
 │   │       └─ page.tsx
```

## 👉 النتيجة:

✅ في route واحد بس:

```
/a/b/c
```

---

## ❗ ليش اشتغل؟

لأن:

* Next.js بيمشي بالfolders كـ path
* أول ما يلاقي `page.tsx` → بيعمل route

---

## 🧠 نقطة ذهبية:

| Folder | فيه page؟ | بيعمل route؟ |
| ------ | --------- | ------------ |
| a      | ❌         | ❌            |
| b      | ❌         | ❌            |
| c      | ✅         | ✅ `/a/b/c`   |

---

## 🔥 لو بدك يصيرو كلن routes:

لازم تعمل:

```bash
a/page.tsx        → /a
b/page.tsx        → /a/b
c/page.tsx        → /a/b/c
```

---

## 💡 الخلاصة

* وجود `page.tsx` = route
* الفولدرات بدون page بس بتكمل الـ path
* مش لازم كل level يكون page

---

إذا فهمت هيدي 👍
فيك تسألني هلق عن:
👉 dynamic routes (أهم شي فعليًا 😏)

