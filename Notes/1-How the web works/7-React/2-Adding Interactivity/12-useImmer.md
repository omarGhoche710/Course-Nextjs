سأعمل لك **note مرتبة** مع شرح فكرة **Immer** مع **React** بناءً على الكود الذي أرسلته.

---

# Using Immer in React (Notes)

## الفكرة الأساسية

عند العمل مع **state معقّد** داخل **React** (object داخل object)، يصبح تحديثه باستخدام `useState` مزعجًا لأننا نحتاج نسخ كل مستوى من الـ object.

مثال بدون **Immer**:

```js
setPerson(prev => ({
  ...prev,
  artwork: {
    ...prev.artwork,
    title: e.target.value
  }
}));
```

هذا يسمى **immutable update** ويحتاج الكثير من `...spread`.

لهذا نستخدم **Immer** لتبسيط الكود.

---

# Importing Immer

```js
import { useImmer } from 'use-immer';
```

`useImmer` يعمل مثل `useState` لكنه يسمح لنا **بتعديل state بشكل مباشر داخل draft**.

---

# Creating State

```js
const [person, updatePerson] = useImmer({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});
```

هنا أنشأنا state اسمه `person` يحتوي:

* `name`
* `artwork` object

  * `title`
  * `city`
  * `image`

---

# Updating State with Immer

بدل أن ننسخ objects، نستعمل **draft**.

## Changing name

```js
function handleNameChange(e) {
  updatePerson(draft => {
    draft.name = e.target.value;
  });
}
```

ما يحدث هنا:

1. **Immer** ينشئ نسخة مؤقتة اسمها `draft`
2. نعدّلها مباشرة
3. **Immer** ينشئ نسخة جديدة من state تلقائيًا

---

## Changing nested data

```js
function handleTitleChange(e) {
  updatePerson(draft => {
    draft.artwork.title = e.target.value;
  });
}
```

الميزة هنا:

يمكننا تعديل **nested objects** بسهولة.

بدل:

```
person.artwork.title
```

بدون كتابة عدة `...spread`.

---

# Same logic for other fields

```js
draft.artwork.city = e.target.value;
```

```js
draft.artwork.image = e.target.value;
```

كلها تعدّل الـ state بطريقة بسيطة.

---

# Displaying the data

React يعرض القيم من الـ state:

```jsx
<i>{person.artwork.title}</i>
{' by '}
{person.name}
```

والصورة:

```jsx
<img
  src={person.artwork.image}
  alt={person.artwork.title}
/>
```

كلما تغيّر state، يقوم **React** بإعادة render تلقائيًا.

---

# لماذا نستخدم Immer؟

بدون **Immer** يصبح الكود طويلًا:

```js
setPerson(prev => ({
  ...prev,
  artwork: {
    ...prev.artwork,
    city: e.target.value
  }
}));
```

مع **Immer**:

```js
updatePerson(draft => {
  draft.artwork.city = e.target.value;
});
```

أسهل بكثير.

---

# القاعدة المهمة في Immer

داخل `updatePerson`:

✔ يمكنك **تعديل draft مباشرة**

```js
draft.name = "Ali"
```

❌ لا يجب أن تعمل `return` object جديد.

---

# Summary

**Immer** يجعل تحديث الـ state في **React** أسهل عندما يكون لدينا **nested objects**.

الميزة الأساسية:

* لا نحتاج `...spread`
* يمكننا تعديل `draft` مباشرة
* الكود يصبح أبسط وأنظف

---
