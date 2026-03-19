تمام 👌 خلّينا نشرح `git switch` بطريقة سهلة وسريعة 🔥

---

# 🧠 شو هو `git switch`؟

👉 أمر حديث بـ Git
بيستعملوه بس لشي واحد:

**التنقّل بين الـ branches أو إنشاء branch جديد**

---

# 🎯 ليش عملوه؟

قبل كنا نستعمل:

```bash
git checkout
```

بس هيدا كان يعمل **أكتر من شغلة** (switch + restore ملفات) 🤯

👉 فـ Git عمل:

* `git switch` → للـ branches
* `git restore` → للملفات

---

# 🚀 استخداماته

## 1️⃣ التنقّل بين branches

```bash
git switch main
```

👉 بيرجعك على branch اسمو main

---

## 2️⃣ تروح على branch موجود

```bash
git switch login
```

👉 بتنقل لهون مباشرة

---

## 3️⃣ إنشاء branch جديد + تروح عليه

```bash
git switch -c login
```

👉 نفس:

```bash
git checkout -b login
```

---

# 🎮 مثال عليك

عندك:

```id="z5p8nl"
main
```

بدك تعمل feature:

```bash id="ijj3wp"
git switch -c navbar
```

👉 صار عندك:

```id="rg1my4"
main
 └── navbar
```

وبلّشت تشتغل عليه 🔥

---

# 🤯 الفرق السريع

| الأمر         | شو بيعمل                |
| ------------- | ----------------------- |
| git switch    | تنقّل بين branches      |
| git switch -c | create + switch         |
| git checkout  | قديم + بيعمل أكتر من شي |

---

# 💡 نصيحة

✔ استعمل `git switch` من هلق
❌ خفف استخدام `checkout` (رح يختفي تدريجيًا)

---

# 🧠 الخلاصة

👉 `git switch`
= **روح على branch أو اعمل واحد جديد وروح عليه**

---

