ممتاز 👌 هذا الدرس يشرح **كيف React يعرض الواجهة فعليًا**. العملية اسمها:

**Render → Commit**

React شبّهها بالمطعم 🍽️. خلينا نشرحها ببساطة.

---

# الفكرة العامة

عندما يتغير شيء في التطبيق، React يمر **بـ 3 مراحل**:

```text
1️⃣ Trigger Render
2️⃣ Render Component
3️⃣ Commit to DOM
```

---

# 1️⃣ Triggering a Render

هذه المرحلة تعني:

```text
شيء حدث وطلب من React تحديث الواجهة
```

الأسباب تكون عادة:

1. أول مرة يفتح التطبيق
2. تغير state
3. تغير props

مثال:

```javascript
setIndex(index + 1);
```

عندما تضغط زر **Next**

```text
setIndex
↓
React يبدأ render جديد
```

---

# 2️⃣ Rendering the Component

هنا React يقوم بـ:

```text
تشغيل الـ component functions
```

يعني React ينفذ:

```javascript
Gallery()
```

ثم ينفذ JSX ويحوّله إلى **React elements**.

مثال:

```javascript
return (
  <h2>{sculpture.name}</h2>
);
```

React لا يغير الصفحة هنا بعد.

هو فقط **يحسب الشكل الجديد للواجهة**.

تخيل:

```text
React يرسم نسخة جديدة من الصفحة في الذاكرة
```

---

# 3️⃣ Commit to the DOM

الآن React يقارن:

```text
الواجهة القديمة
VS
الواجهة الجديدة
```

ثم يغير فقط الأشياء التي تغيرت في **DOM**.

مثال:

لو تغير فقط النص:

```text
Image 1 → Image 2
```

React يغير فقط:

```text
img src
text
```

وليس كل الصفحة.

هذه العملية تسمى:

```text
DOM Update
```

---

# تشبيه المطعم 🍽️

React شرحها هكذا:

### 1️⃣ Trigger

```text
الزبون طلب وجبة
```

---

### 2️⃣ Render

```text
الطباخ يجهز الطبق في المطبخ
```

---

### 3️⃣ Commit

```text
النادل يضع الطبق على الطاولة
```

---

# مثال من كودك

عندما تضغط **Next**:

```text
User Click
↓
handleNextClick
↓
setIndex
↓
Trigger Render
↓
React runs Gallery()
↓
React creates new JSX
↓
React compares DOM
↓
Commit changes
↓
الصورة تتغير
```

---

# نقطة مهمة جدًا

في مرحلة **render**

React **لا يلمس DOM**.

هو فقط:

```text
يحسب UI الجديد
```

التغيير الحقيقي يحصل فقط في **commit**.

---

# الخلاصة

```text
Trigger → شيء طلب تحديث الواجهة
Render → React يحسب الشكل الجديد
Commit → React يغير DOM
```

---

💡 إذا أردت، أشرح لك بعد هذا الدرس **أحد أهم أسرار React** والذي يأتي مباشرة بعده وهو:

**Why React renders twice in development (Strict Mode)**

وهذا الشيء سبب حيرة لك سابقًا عندما ظهر:

```
Tea cup for guest #2
#4
#6
```
