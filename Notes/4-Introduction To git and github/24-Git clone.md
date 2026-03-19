تمام 🔥 هيدي من أهم أوامر Git

# 🧠 شو يعني `git clone`؟

👉 **`git clone` = تنسخ مشروع كامل من GitHub لعندك على الكمبيوتر**

---

# 🎯 يعني عمليًا

```text
GitHub → جهازك
```

👉 بينزّل:

* الكود كامل
* كل الـ commits (history)
* كل الـ branches

---

# 🔹 مثال

```bash
git clone https://github.com/omarGhoche710/React-Fundamntals.git
```

👉 شو بيصير؟

* بينشئ folder جديد
* بيحط فيه المشروع
* بيعمل setup تلقائي للـ `origin`

---

# 🤯 الفرق عن download zip

❌ Download ZIP:

* بس الكود
* ما في Git
* ما في commits

✅ `git clone`:

* الكود
* * history
* * branches
* * تقدر تشتغل Git عادي

---

# 🧠 بعد clone شو فيك تعمل؟

```bash
git pull    # تجيب تحديثات
git push    # ترفع شغلك
git branch  # تشوف branches
```

👉 كأنك صاحب المشروع

---

# 🎮 مثال بالحياة

👉 رفيقك عنده مشروع على GitHub

بدك تشتغل عليه:

```bash
git clone <link>
```

💥 صار المشروع عندك بالكامل

---

# 💡 جملة تحفظها

> **`git clone` = نزّل المشروع كامل مع تاريخه من GitHub**

---
سؤال ممتاز 👌🔥

# 🧠 الجواب

👉 **لا ❌ ما بينزل جوّا `test`**
👉 بينزل **folder جديد جنب `test`**

---

# 🎯 كيف بيشتغل `git clone`؟

لما تعمل:

```bash
git clone https://github.com/omarGhoche710/React-Fundamntals.git
```

Git بيعمل:

```text
test/
React-Fundamntals/
```

👉 يعني:

* ما بيفوت جوّا `test`
* بيعمل folder جديد باسم المشروع

---

# 🧠 ليش؟

لأنو:
👉 `clone` = مشروع كامل
👉 لازم يكون إلو folder خاص فيه

---

# 🔥 إذا بدك ينزل جوّا `test`

لازم تفوت أول شي:

```bash
cd test
```

وبعدين:

```bash
git clone https://github.com/omarGhoche710/React-Fundamntals.git
```

👉 ساعتها:

```text
test/
   React-Fundamntals/
```

---

# 😏 حركة ذكية

فيك كمان تغيّر الاسم:

```bash
git clone https://github.com/omarGhoche710/React-Fundamntals.git my-project
```

👉 بصير:

```text
my-project/
```

---

# 💡 جملة تحفظها

> **clone بيعمل folder جديد باسم المشروع بالمكان يلي انت واقف فيه**

---


