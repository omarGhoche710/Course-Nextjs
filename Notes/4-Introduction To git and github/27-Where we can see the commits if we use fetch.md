سؤال قوي 🔥 هيدا بالضبط ليش منستعمل `git fetch` 👌

---

# 🧠 بعد ما تعمل `git fetch` شو صار؟

👉 صار عندك تحديث من GitHub
بس **مش مدموج مع شغلك بعد**

---

# 🎯 كيف تشوف الأشياء الجديدة؟

## 🥇 الطريقة الأشهر

```bash
git log main..origin/main
```

👉 شو بتعمل؟

* بتفرجيك **الـ commits الجديدة بس**
* يلي موجودة على GitHub ومش عندك

---

## 🥈 طريقة أوضح (شكل حلو)

```bash
git log --oneline --graph --all
```

👉 بتشوف:

* كل الbranches
* وين في commits جديدة

---

## 🥉 تشوف الفرق بالكود نفسه

```bash
git diff main origin/main
```

👉 هيدا:

* بيورجيك **شو تغيّر بالكود حرفيًا**

---

# 🤯 مثال

بعد fetch:

```text
Local main:
A --- B --- C

origin/main:
A --- B --- C --- D --- E
```

---

## إذا عملت:

```bash
git log main..origin/main
```

👉 رح تشوف:

```text
D
E
```

---

# 🔥 بعدها شو تعمل؟

إذا عجبك التغيير:

```bash
git merge origin/main
```

أو:

```bash
git pull
```

---

# 💡 جملة تحفظها

> **fetch بيجيب التحديثات، و `log` أو `diff` بيخلّيك تشوفها**

---

