تمام 🔥 هيدا أهم أمر بـ Git تقريبًا، خلّيني أبسّطها لدرجة تحفظها 😏

---

# 🧠 شو يعني:

```bash
git commit -m "commit-name"
```

👉 يعني:
**"يا Git، إحفظ التغييرات اللي أنا جهّزتها، وحطّ لها اسم"**

---

# 🔍 نفكّكها

## 🟢 `git commit`

👉 بيعمل **snapshot (صورة)** للمشروع بهاللحظة 📸

---

## 🟡 `-m`

👉 اختصار لـ **message**
يعني بدك تعطي اسم / وصف لهيدا الـ commit

---

## 🔵 `"commit-name"`

👉 هيدا هو الاسم

مثلاً:

```bash
git commit -m "add navbar"
git commit -m "fix login bug"
git commit -m "update styles"
```

---

# 🎯 شو بصير فعليًا؟

قبل:

* عدّلت ملفات
* عملت `git add`

بعد:

```bash
git commit -m "add navbar"
```

👉 Git بيقول:

> "أوكي، رح إحفظ هالحالة من المشروع باسم add navbar"

---

# 🧠 ليش الاسم مهم؟

لأنو بعدين بتعمل:

```bash
git log
```

وبتشوف:

```bash
add navbar
fix bug
add login page
```

👉 بيعطيك تاريخ مشروعك 🕒

---

# 🤯 مثال واقعي

انت شغلك:

1. عملت Navbar

```bash
git commit -m "add navbar"
```

2. عدّلت عليه

```bash
git commit -m "improve navbar design"
```

3. صلّحت bug

```bash
git commit -m "fix navbar bug"
```

👉 صار عندك history مرتب 🔥

---

# ⚠️ أهم نصيحة

❌ غلط:

```bash
git commit -m "update"
git commit -m "fix"
```

✅ صح:

```bash
git commit -m "fix login validation error"
```

👉 خليه واضح لحتى تفهمه بعدين

---

# 🧠 الخلاصة

👉 `git commit -m`
= **احفظ + سمّي التغييرات**

---

