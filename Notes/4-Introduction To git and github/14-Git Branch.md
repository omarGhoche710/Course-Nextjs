سؤال ناري 🔥🔥
إذا فهمت **branch** صح، بتصير تشتغل متل المحترفين 👌

---

# 🧠 أول شي: شو هو الـ branch؟

👉 الـ **branch** هو:
**نسخة منفصلة من المشروع تشتغل عليها بدون ما تخرب النسخة الأساسية**

---

# 🎮 تخيّلها هيك

عندك المشروع الأساسي:

```
main
```

بدك تضيف feature جديد (مثلاً login)

بدل ما تشتغل مباشرة على `main` ❌
بتعمل branch:

```
main
 └── login-feature
```

👉 بتشتغل هون براحتك 😎

---

# 🎯 ليش لازم نستعمل branch؟

## 1️⃣ ما تخرب المشروع الأساسي

لو اشتغلت مباشرة على `main`:

* ممكن تكسر الكود ❌

بس مع branch:

* المشروع الأساسي بيضل شغّال ✅

---

## 2️⃣ تجرّب براحتك

بدك:

* تغيّر design
* تعمل feature
* تجرّب فكرة

👉 اشتغل على branch
إذا زبطت 👍 merge
إذا خربت ❌ احذفها

---

## 3️⃣ شغل التيم 👥

تخيّل 3 أشخاص:

* واحد login
* واحد navbar
* واحد dashboard

كل واحد بيشتغل على branch خاص فيه:

```
main
 ├── login
 ├── navbar
 └── dashboard
```

👉 وبالأخير:
كلهم بيندمجوا بـ main 🔥

---

## 4️⃣ تنظيم المشروع

بدل history يكون عشوائي:

```
fix
update
ehh
```

بيصير مرتب:

```
feature/login
feature/navbar
bugfix/header
```

---

# 🔁 كيف بتستعمله؟

## ✨ تعمل branch:

```bash id="9r3xnl"
git branch login
```

## 🚀 تنتقل عليه:

```bash id="c0a7q1"
git checkout login
```

(أو shortcut)

```bash id="i3zq3h"
git checkout -b login
```

---

## 🔄 بعد ما تخلص:

بترجع لـ main:

```bash id="7zz0o8"
git checkout main
```

وتدمج:

```bash id="nq19l1"
git merge login
```

---

# 🧠 أهم فكرة

👉 **branch = playground آمن**
👉 **main = النسخة الرسمية**

---

# 💡 مثال عليك (Next.js)

عم تشتغل على Next.js:

* main → شغّال 100%
* branch → عم تضيف navbar

إذا خرب:
❌ ما بيأثر على main

---

# 🧠 الخلاصة

👉 ليش نستعمل branch؟

* نحمي المشروع
* نجرّب بدون خوف
* نشتغل team
* ننظّم الكود

---

