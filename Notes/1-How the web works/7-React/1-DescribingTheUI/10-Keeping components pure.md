بالضبط ✅ هذه نقطة مهمة جدًا في React (وفي البرمجة عامة): **الحفاظ على Components نظيفة (Pure)**. خلينا نشرحها بشكل واضح:

---

# 📘 React Notes — Keeping Components Pure

## 1️⃣ ما هو Component Pure؟

* **Pure Function**: دالة لا تغيّر أي شيء خارجها، وتعطي نفس النتيجة دائمًا لنفس المدخلات.
* **في React**، يعني أن الـ Component:

  1. لا يغيّر متغيرات أو بيانات خارجية موجودة قبل استدعائها.
  2. يعتمد فقط على **props** و/أو **state الداخلي**.
  3. يعطي **نفس JSX لكل نفس القيم**.

---

## 2️⃣ مثال على Component غير Pure (Impure)

```javascript
let guest = 0;

function Cup() {
  // ❌ Bad: تغيير متغير خارجي
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
```

### المشكلة:

* `Cup()` يغير المتغير الخارجي `guest`.
* النتيجة تعتمد على **عدد مرات استدعاء Cup()** → سلوك غير متوقع.
* صعب تتبع الأخطاء عند الكود يكبر.

---

## 3️⃣ الحل — جعل Component Pure

```javascript
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```

### لماذا الآن Pure؟

* `Cup` يعتمد فقط على **props.guest**.
* **لا يغيّر أي شيء خارج نفسه**.
* إذا أعطيت `guest=1` → دائمًا يظهر نفس النتيجة `<h2>Tea cup for guest #1</h2>`

---

## 4️⃣ الفائدة

* **أقل أخطاء غير متوقعة** عند تغيير الكود لاحقًا
* React يمكنه **إعادة Render بشكل آمن**
* يجعل الكود **قابل لإعادة الاستخدام** بسهولة

---

💡 **خلاصة القاعدة الذهبية:**

```text
كل Component حاول أن يكون Pure → يعتمد فقط على props و/أو state داخلي
لا تغيّر متغيرات خارجية
نفس المدخلات → نفس المخرجات
```

---

آه فهمتك 😄 أنت تسأل لماذا في **الحالة الأولى (Impure Cup)** يخرج شيء مثل:

```
Tea cup for guest #2
Tea cup for guest #4
Tea cup for guest #6
```

بدل ما يكون 1, 2, 3. دعنا نشرح **بالتفصيل**.

---

## 1️⃣ الكود الأول (Impure)

```javascript
let guest = 0;

function Cup() {
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
```

### ما يحدث:

* كل مرة React يستدعي `<Cup />` → **يزيد المتغير الخارجي `guest`**
* React أحيانًا **يعيد استدعاء Components أثناء التطوير (Strict Mode)**

  * في **React 18+ في وضع التطوير**، React يقوم **بعمل double rendering** لبعض الComponents لتجربة side effects
  * هذا يعني أنه يتم استدعاء `Cup()` **مرتين لكل عنصر** في الوضع التطويري

---

## 2️⃣ حساب القيمة

* `guest = 0` البداية
* استدعاء `<Cup />` الأول → guest = 1
* React يعيد استدعاء `<Cup />` (Strict Mode) → guest = 2
* استدعاء `<Cup />` الثاني → guest = 3 ثم إعادة استدعاء → guest = 4
* استدعاء `<Cup />` الثالث → guest = 5 ثم إعادة استدعاء → guest = 6

✅ لذلك يظهر لك:

```
Tea cup for guest #2
Tea cup for guest #4
Tea cup for guest #6
```

---

## 3️⃣ السبب الرئيسي

* **المتغير الخارجي `guest` تم تغييره داخل Component**
* React في وضع التطوير (Strict Mode) **يعيد render Components للتأكد من النقاء**
* أي تغييرات خارجية تصبح **غير متوقعة**

---

## 4️⃣ الحل

* استخدم **Pure Component** يعتمد فقط على **props**:

```javascript
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

<TeaSet>
  <Cup guest={1} />
  <Cup guest={2} />
  <Cup guest={3} />
</TeaSet>
```

* الآن كل Cup **يعتمد فقط على props** → لن تحدث مشكلة double rendering
* سيظهر دائمًا:

```
Tea cup for guest #1
Tea cup for guest #2
Tea cup for guest #3
```

---

💡 **خلاصة:**

* أي Component يغيّر متغيرات خارجية → يمكن يعطي نتائج **غير متوقعة خاصة في React 18+**
* الحل: اجعل Components **Pure** → تعتمد فقط على props و state داخلي

---
    