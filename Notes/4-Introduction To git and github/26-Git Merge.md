تمام 🔥 هلق وصلنا لأهم مفهوم فعليًا بـ Git 👌

# 🧠 شو يعني `git merge`؟

👉 **`git merge` = دمج branch مع branch تاني**

---

# 🎯 الفكرة ببساطة

```text
branch A + branch B → branch واحد
```

---

# 🧪 مثال عملي

## عندك:

```text
main:
A --- B --- C

feature-login:
A --- B --- C --- D --- E
```

---

## إذا كنت على `main` وعملت:

```bash
git merge feature-login
```

👉 شو بصير؟

```text
main:
A --- B --- C --- D --- E
```

✔ كل شغل `feature-login` راح على `main`

---

# ⚠️ أهم نقطة

👉 لازم تكون واقف على الفرع يلي بدك **تدمج فيه**

```bash
git switch main
git merge feature-login
```

---

# 🤯 سيناريو تاني (conflict)

إذا:

```text
main:
A --- B --- C --- X

feature:
A --- B --- C --- Y
```

👉 و X و Y عدّلوا نفس السطر 😬

لما تعمل merge:

❗ بيطلع:

```text
CONFLICT
```

👉 لازم تحلّه بإيدك

---

# 🔥 أنواع merge

## 1️⃣ Fast-forward (سهل)

👉 بس بيضيف commits (ما في تعارض)

## 2️⃣ Merge commit

👉 بيعمل commit جديد لدمج الفرعين

---

# 🎮 مثال بالحياة

انت اشتغلت على:

```bash
feature-login
```

خلصت 😎

👉 بتروح:

```bash
git switch main
git merge feature-login
```

💥 صار شغلك بالمشروع الأساسي

---

# 💡 جملة تحفظها

> **merge = ضمّ شغل branch إلى branch تاني**

---

# 🧠 ربط سريع مع اللي تعلمتو

* `fetch` → يجيب بدون دمج
* `pull` → يجيب + يدمج
* `merge` → دمج فقط

---

