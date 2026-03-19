ممتاز 👍 هذا المثال يشرح **كيف React يتعامل مع الأحداث (events)** مثل الضغط على زر. دعنا نفهمه خطوة خطوة.

---

# 1️⃣ الفكرة الأساسية — Responding to Events

React يسمح لك بإضافة **event handlers** داخل JSX.

مثال:

```jsx
<button onClick={handleClick}>
```

يعني:

> عندما يضغط المستخدم على الزر → نفّذ الدالة `handleClick`.

الأحداث يمكن أن تكون مثل:

* `onClick`
* `onChange`
* `onMouseEnter`
* `onSubmit`
* `onFocus`

---

# 2️⃣ ماذا يحدث في الكود الذي أرسلته

## أول Component

```jsx
export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  );
}
```

هنا `App` يمرر **دالتين كـ props** إلى `Toolbar`.

* `onPlayMovie`
* `onUploadImage`

كل واحدة عبارة عن function.

---

# 3️⃣ داخل Toolbar

```jsx
function Toolbar({ onPlayMovie, onUploadImage }) {
```

هنا React **يستقبل props**.

ثم:

```jsx
<Button onClick={onPlayMovie}>
  Play Movie
</Button>
```

و

```jsx
<Button onClick={onUploadImage}>
  Upload Image
</Button>
```

يعني:

* زر أول → يشغّل `onPlayMovie`
* زر ثاني → يشغّل `onUploadImage`

---

# 4️⃣ Component Button

```jsx
function Button({ onClick, children }) {
```

هذا component عام (Reusable).

```jsx
<button onClick={onClick}>
  {children}
</button>
```

يعني:

* يأخذ `onClick` من props
* يعطيه للزر الحقيقي في HTML
* `children` هو النص داخل الزر

---

# 5️⃣ ماذا يحدث عند الضغط

لو ضغط المستخدم **Play Movie**

التسلسل:

```
User Click
↓
button
↓
onClick
↓
onPlayMovie
↓
alert("Playing!")
```

ولو ضغط **Upload Image**

```
User Click
↓
button
↓
onClick
↓
onUploadImage
↓
alert("Uploading!")
```

---

# 6️⃣ نقطة مهمة في React

في **HTML العادي**:

```html
<button onclick="playMovie()">
```

لكن في **React**:

```jsx
<button onClick={playMovie}>
```

الفرق:

* React يستخدم **camelCase**
* تمرر **function وليس string**

---

# 7️⃣ لماذا نمرر event من الأعلى؟

هذا يسمى **Passing event handlers as props**

الفائدة:

* يجعل `Button` **component عام reusable**
* يمكن استخدامه لأي زر

مثال:

```
App
 └─ Toolbar
     ├─ Button (Play Movie)
     └─ Button (Upload Image)
```

---

✅ **الخلاصة**

* الأحداث في React تضاف مثل `onClick`
* يمكن تمرير **functions كـ props**
* Components الصغيرة مثل `Button` يمكن إعادة استخدامها
* `children` هو المحتوى داخل component

---

إذا أردت، يمكنني أن أشرح لك أيضًا **فكرة مهمة جدًا بعدها في React اسمها Event Propagation (بابلينغ الأحداث)** وهي غالبًا تأتي مباشرة بعد هذا الدرس وتسبب لخبطة للطلاب.
