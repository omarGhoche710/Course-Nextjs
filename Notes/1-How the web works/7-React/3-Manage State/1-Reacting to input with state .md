حسنًا يا Omar 👍 سأعطيك **Notes + شرح الكود خطوة خطوة** حتى تفهم الفكرة جيدًا.

---

# Reacting to Input with State

## الفكرة الأساسية

في **React** لا نتحكم بالواجهة مباشرة مثل JavaScript العادي.

❌ لا نفعل:

```javascript
button.disabled = true
showMessage()
```

✔ بدل ذلك نصف الواجهة حسب **الحالة (state)**.

React يقوم بتحديث الواجهة تلقائيًا.

الفكرة الأساسية:

```
UI = function(state)
```

أي:

```
state يتغير → React يعمل render جديد → الواجهة تتغير
```

---

# شرح الكود خطوة خطوة

## 1️⃣ استيراد useState

```javascript
import { useState } from 'react';
```

`useState` هو **Hook** يسمح لنا بحفظ بيانات داخل الـ component.

---

# 2️⃣ إنشاء الـ State

```javascript
const [answer, setAnswer] = useState('');
const [error, setError] = useState(null);
const [status, setStatus] = useState('typing');
```

هنا لدينا **3 حالات**.

### answer

يحفظ النص الذي يكتبه المستخدم.

```
"Lima"
"Paris"
"London"
```

---

### error

يحفظ رسالة الخطأ إذا كانت الإجابة خاطئة.

```
Error("Wrong answer")
```

---

### status

يمثل حالة التطبيق.

القيم الممكنة:

```
typing
submitting
success
```

---

# 3️⃣ Conditional Rendering

```javascript
if (status === 'success') {
  return <h1>That's right!</h1>
}
```

إذا كانت الحالة:

```
success
```

React سيعرض فقط:

```
That's right!
```

ولن يظهر الفورم.

---

# 4️⃣ عند إرسال النموذج

```javascript
async function handleSubmit(e) {
  e.preventDefault();
```

`preventDefault()` يمنع إعادة تحميل الصفحة.

---

## تغيير الحالة

```javascript
setStatus('submitting');
```

الآن React سيعمل render جديد.

الواجهة تصبح:

```
textarea disabled
button disabled
```

---

# 5️⃣ إرسال الطلب

```javascript
await submitForm(answer);
```

هنا نحاكي طلب إلى السيرفر.

ينتظر **1.5 ثانية**.

---

# 6️⃣ إذا كانت الإجابة صحيحة

```javascript
setStatus('success');
```

React يعمل render جديد.

يظهر:

```
That's right!
```

---

# 7️⃣ إذا كانت الإجابة خاطئة

```javascript
catch (err) {
  setStatus('typing');
  setError(err);
}
```

React:

```
يعيد الحالة typing
ويعرض الخطأ
```

---

# 8️⃣ تحديث textarea

```javascript
function handleTextareaChange(e) {
  setAnswer(e.target.value);
}
```

كلما كتب المستخدم حرفًا:

```
state يتغير
React يعيد render
```

---

# 9️⃣ ربط textarea بالـ state

```javascript
<textarea
  value={answer}
  onChange={handleTextareaChange}
  disabled={status === 'submitting'}
/>
```

### value

يجعل textarea **controlled component**.

القيمة تأتي من `state`.

---

### disabled

إذا كانت الحالة:

```
submitting
```

سيتم تعطيل textarea.

---

# 🔟 تعطيل زر الإرسال

```javascript
<button disabled={
  answer.length === 0 ||
  status === 'submitting'
}>
```

الزر يتعطل إذا:

```
textarea فارغ
OR
الحالة submitting
```

---

# 11️⃣ عرض رسالة الخطأ

```javascript
{error !== null &&
  <p className="Error">
    {error.message}
  </p>
}
```

إذا كان هناك خطأ يظهر النص.

مثال:

```
Good guess but a wrong answer. Try again!
```

---

# 12️⃣ محاكاة السيرفر

```javascript
function submitForm(answer) {
  return new Promise((resolve, reject) => {
```

هنا نصنع **Promise**.

---

### delay

```javascript
setTimeout(() => {
```

ننتظر **1.5 ثانية**.

---

### التحقق من الإجابة

```javascript
let shouldError = answer.toLowerCase() !== 'lima'
```

إذا لم تكن الإجابة:

```
lima
```

يحدث خطأ.

---

### خطأ

```javascript
reject(new Error('Wrong answer'))
```

---

### نجاح

```javascript
resolve();
```

---

# Flow كامل

```
User types
↓
answer state updates
↓
User click submit
↓
status = submitting
↓
Request to server
↓
Correct answer → success
Wrong answer → show error
```

---

# أهم فكرة في هذا الدرس

React لا يتحكم بالـ UI مباشرة.

بدل:

```
disable button
show error
hide form
```

نغير **state فقط**.

React يحدّث الواجهة.

---

# القاعدة الذهبية

```
State drives the UI
```

---

إذا أردت، أشرح لك أيضًا **أهم درس بعد هذا في React** وهو:

**State as a Snapshot**

وهو من أكثر الأشياء التي تجعل React مفهومة 100%.
