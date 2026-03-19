تمام 👌 خلّينا نشرحها ببساطة:

# 🧠 شو بتعمل `git branch`؟

👉 بتفرجيك **كل الbranches الموجودة عندك محليًا**

---

# 🎯 مثال

```bash
git branch
```

رح يعطيك شي مثل:

```text
feature-login
* main
```

---

# 🧠 شو يعني هيدا؟

* `main` ← عندها نجمة `*`
  👉 يعني انت واقف عليها هلق

* `feature-login`
  👉 branch موجود بس مش شغال عليه

---

# 🔥 استخدامات مهمة

## 1️⃣ تشوف الbranches

```bash
git branch
```

---

## 2️⃣ تعمل branch جديد

```bash
git branch navbar-feature
```

👉 بس بينشئه، ما بينقلك عليه

---

## 3️⃣ تحذف branch

```bash
git branch -d navbar-feature
```

---

# ⚠️ فرق مهم

## ❌ هيدا:

```bash
git branch login
```

👉 بس بيعمل branch

## ✅ الأفضل غالبًا:

```bash
git switch -c login
```

👉 بيعمل branch **وينقلك عليه فورًا**

---

# 💡 جملة تحفظها

> **`git branch` = إدارة الbranches (عرض / إنشاء / حذف)**

---

