حلو 👌 هيدا من أهم أوامر Git وبدك تكون حافظه عن ظهر قلب 😄

## 🧠 شو بيعمل `git status`؟

ببساطة:
👉 بيخبرك **شو وضع المشروع هلق**

يعني:

* شو في ملفات تغيّرت
* شو في ملفات جاهزة للـ commit
* شو في ملفات بعد ما أضفتها

---

## 🎯 لما تكتب:

```bash
git status
```

رح يعطيك معلومات متل:

---

## 🟢 1. ملفات تغيّرت بس مش مضافة (modified)

```bash
modified: navbar.js
```

📌 يعني:

* عدّلت الملف
* بس ما عملتلو `git add` بعد

👉 هون Git عم يقلك:
"في تغييرات بس أنا مش عم حضّرها للـ commit بعد"

---

## 🟡 2. ملفات مضافة (staged)

```bash
changes to be committed:
  new file: style.css
```

📌 يعني:

* عملت `git add`
* جاهزة للـ commit

---

## 🔴 3. ملفات Git ما بيعرفها (untracked)

```bash
untracked files:
  test.js
```

📌 يعني:

* ملف جديد
* ما عملتلو `git add`

---

## 🔁 كيف بتستعمله فعليًا

سيناريو منك 👇

1. عدّلت navbar:

```bash
git status
```

➡️ بيقلك modified

2. عملت:

```bash
git add navbar.js
```

3. رجعت:

```bash
git status
```

➡️ صار "جاهز للـ commit"

---

## 🧠 الخلاصة

`git status` =
👀 "شو صاير بالمشروع تبعي هلق؟"

---


سؤال قوي 👌🔥

## 🧠 الجواب القصير:

👉 إي نعم، **بيختفوا من `git status`**… بس مش لأنهم انمسحوا ❗
بل لأنو **صاروا محفوظين رسميًا بـ Git**

---

## 🎯 خلّيني فسّرها بطريقة واضحة:

قبل الـ commit كان عندك:

```bash
Untracked files
```

أو:

```bash
changes to be committed
```

---

## ✅ بعد ما تعمل:

```bash
git commit -m "first commit"
```

إذا عملت:

```bash
git status
```

رح تشوف:

```bash
nothing to commit, working tree clean
```

---

## 🧠 شو يعني هيدا؟

👉 يعني:

* ما في تغييرات جديدة
* كل شي محفوظ (committed)
* المشروع "نظيف" ✨

---

## 🎮 تخيّلها هيك:

| الحالة    | شو يعني            |
| --------- | ------------------ |
| Untracked | Git ما بيعرف الملف |
| Staged    | جاهز ينحفظ         |
| Committed | انحفظ وانتهى       |

---

## ⚠️ نقطة مهمّة

"اختفوا" من status
❌ مش يعني انحذفوا
✅ يعني صاروا جزء من history

---

## 🔁 وإذا عدّلت بعدين؟

مثلاً عدّلت `navbar.js` بعد commit:

```bash
git status
```

بيرجع يقول:

```bash
modified: navbar.js
```

👉 يعني رجع في تغييرات جديدة

---

## 🧠 الخلاصة

`git status` دايمًا بيحكي عن:
👉 **شو تغيّر من آخر commit**

---
