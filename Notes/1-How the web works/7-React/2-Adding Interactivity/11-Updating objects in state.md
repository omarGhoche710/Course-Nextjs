أكيد، هذه **note مرتبة + شرح الكود** لتفهم الفكرة جيدًا في **React**.

---

# Updating Objects in React State

## الفكرة

في React يمكن أن يحتوي **state** على أي نوع من القيم مثل:

* numbers
* strings
* arrays
* objects

لكن **لا يجب تعديل object أو array داخل state مباشرة**.

بدل ذلك يجب:

1️⃣ إنشاء **نسخة (copy)** من الـ object
2️⃣ تعديل النسخة
3️⃣ تحديث state بالنسخة الجديدة

---

# لماذا؟

React يعتمد على **تغيير reference** حتى يعرف أن state تغيرت ويعيد **render**.

لذلك نقول أن:

```text
State is immutable
```

أي لا نعدلها مباشرة.

---

# مثال الكود

```jsx id="3x9b4q"
const [person, setPerson] = useState({
  name: "Niki de Saint Phalle",
  artwork: {
    title: "Blue Nana",
    city: "Hamburg",
    image: "https://i.imgur.com/Sd1AgUOm.jpg",
  },
});
```

## شرح

هنا أنشأنا **state object** اسمه `person`.

يحتوي:

```
person
 ├─ name
 └─ artwork
      ├─ title
      ├─ city
      └─ image
```

---

# تحديث name

```jsx id="sz8fdn"
function handleNameChange(e) {
  setPerson({
    ...person,
    name: e.target.value,
  });
}
```

## ماذا يحدث؟

```text
1. ننسخ object person باستخدام ...
2. نغير فقط name
3. باقي القيم تبقى كما هي
```

مثال:

قبل:

```js id="9mq6h1"
{
 name: "Niki",
 artwork: {...}
}
```

بعد:

```js id="9mnhz7"
{
 name: "Omar",
 artwork: {...}
}
```

---

# تحديث object متداخل (nested object)

```jsx id="q4l36p"
function handleTitleChange(e) {
  setPerson({
    ...person,
    artwork: {
      ...person.artwork,
      title: e.target.value
    }
  });
}
```

## ماذا يحدث هنا؟

```text
1. ننسخ person
2. ننسخ artwork
3. نغير title فقط
```

النتيجة:

قبل:

```js id="pjuaxp"
artwork: {
 title: "Blue Nana",
 city: "Hamburg"
}
```

بعد:

```js id="88f8bb"
artwork: {
 title: "New Title",
 city: "Hamburg"
}
```

لاحظ أن `city` لم تتغير.

---

# لماذا ننسخ مرتين؟

لأن لدينا **object داخل object**.

```
person
   └─ artwork
```

لذلك ننسخ:

```
person
artwork
```

---

# مثال input

```jsx id="6s7jkr"
<input
  value={person.artwork.title}
  onChange={handleTitleChange}
/>
```

## ماذا يحدث؟

1️⃣ المستخدم يكتب في input
2️⃣ `onChange` يعمل
3️⃣ يتم تحديث state
4️⃣ React يعيد render
5️⃣ تظهر القيمة الجديدة

---

# القاعدة الذهبية

عند تحديث object في React:

```
copy object → update property → setState
```

غالبًا باستخدام:

```js
...spread operator
```

---

💡 نصيحة مهمة في **React**:
إذا أصبح الـ state **nested كثيرًا** يصبح الكود معقدًا، لذلك في المشاريع الكبيرة نحاول **تبسيط structure للـ state**.
