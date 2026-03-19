آه 👌 هلق فهمت شو عم تشوف على GitHub 👀

👉 والجواب: **إي طبيعي 100%** 😄
بس خلّيني فسّرلك ليش عم تشوف نفس الـ commits بكل branch 👇

---

# 🧠 ليش نفس الـ commits ظاهرين؟

لأنو:

👉 لما عملت:

```bash
git switch -c feature-login
```

Git أخد:

* كل الـ commits من `main`
* وحطّهم كأساس للـ branch الجديد

---

# 🎯 يعني شو صار؟

## قبل:

```text
main:
A --- B --- C
```

## بعد ما عملت branch:

```text
main:
A --- B --- C

feature-login:
A --- B --- C
```

👉 نفس الـ commits

---

## بعد ما عملت commit جديد على feature-login:

```text
main:
A --- B --- C

feature-login:
A --- B --- C --- D
```

👉 بس commit (D) خاص بالـ branch الجديد

---

# 🤯 ليش GitHub عم يفرجيك الكل؟

لأنو:

👉 عم تعرض:
**Commit History للمشروع ككل**

مش بس لbranch واحد

---

# 🧪 جرّب هيك على GitHub

من فوق:
👉 غيّر branch من:

```
main → feature-login
```

رح تلاحظ:

* `feature-login` فيه commit زيادة
* `main` ما فيه هيدا commit

---

# 🧠 أهم فكرة

👉 الbranches:

* بيشتركوا بالتاريخ القديم
* بس كل واحد فيه commits جديدة لحالو

---

# 💡 جملة تحفظها

> **الـ branch بيبلّش من نفس التاريخ، وبعدين بيصير عندو طريق خاص**

---

# 🎯 الخلاصة

❌ مش إنو كل branch نفس الشي
✅ بس بالبداية بيكونوا نفسهم، وبعدين بيفترقوا

---

