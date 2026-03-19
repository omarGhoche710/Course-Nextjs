إيه فهمك قريب من الصح 👍 خلّيني رتّبلك الفكرة شوي بــ **React**.

لما يكون عندك **عدة checkboxes**، في طريقتين شائعتين لإدارة الـ **state**:

---

## 1️⃣ تعمل state لكل checkbox (مش أفضل حل)

مثلاً:

```jsx
const [checked1, setChecked1] = useState(false);
const [checked2, setChecked2] = useState(false);
const [checked3, setChecked3] = useState(false);
```

وتستعملهم هكذا:

```jsx
<input
  type="checkbox"
  checked={checked1}
  onChange={() => setChecked1(!checked1)}
/>
```

المشكلة هنا:

* الكود يكبر كثير
* صعب تديرهم إذا صاروا 10 أو 20 checkbox

---

# 2️⃣ الطريقة الأفضل (Array أو Object في state)

عادة نعمل **array فيها معلومات كل checkbox**.

### مثال:

```jsx
const [items, setItems] = useState([
  { id: 1, label: "HTML", checked: false },
  { id: 2, label: "CSS", checked: false },
  { id: 3, label: "JavaScript", checked: false }
]);
```

وبعدين نعمل **render**:

```jsx
{items.map(item => (
  <label key={item.id}>
    <input
      type="checkbox"
      checked={item.checked}
      onChange={() => handleChange(item.id)}
    />
    {item.label}
  </label>
))}
```

ودالة التغيير:

```jsx
function handleChange(id) {
  setItems(items.map(item =>
    item.id === id
      ? { ...item, checked: !item.checked }
      : item
  ));
}
```

---

# 💡 الفكرة الأساسية

بدل ما تعمل **useState لكل checkbox** ❌

تعمل:

* **state واحدة**
* فيها **array أو object**
* كل عنصر فيها يمثل checkbox

وReact يعمل **render تلقائي** لما يتغير الـ state.

---

✅ هيدي الطريقة اسمها:

* **controlled inputs**
* وبتستعمل كثير في **forms**

---

💡 سؤال صغير إلك (لحتى أتأكد فهمتها):

لو عندك **10 checkboxes**، أي أفضل؟

1️⃣ تعمل `10 useState`
2️⃣ تعمل `array في useState` فيها كل checkboxes ؟


---

سؤال ممتاز 👍
السبب أننا كتبنا `...item` مهم جدًا في **React**.

خلينا نشوف الكود:

```js
function handleChange(id) {
  setItems(items.map(item =>
    item.id === id
      ? { ...item, checked: !item.checked }
      : item
  ));
}
```

## لماذا استعملنا `...item` ؟

`...item` اسمها **spread operator**.
هي تقوم **بنسخ كل خصائص الـ object**.

مثال:

```js
const item = {
  id: 1,
  label: "HTML",
  checked: false
};
```

لو كتبنا:

```js
{ checked: true }
```

سيصبح الـ object:

```js
{ checked: true }
```

❌ اختفى `id` و `label`.

---

لكن عندما نكتب:

```js
{ ...item, checked: true }
```

النتيجة:

```js
{
  id: 1,
  label: "HTML",
  checked: true
}
```

✅ احتفظنا بكل المعلومات وغيرنا فقط `checked`.

---

## لماذا هذا مهم في React؟

في React **لا نعدل الـ state مباشرة**.

❌ هذا خطأ:

```js
item.checked = true
```

لأنك عدلت نفس الـ object.

✅ الصحيح:

* نعمل **object جديد**
* ننسخ القيم القديمة
* نغير القيمة المطلوبة

وهذا ما يفعله:

```js
{ ...item, checked: !item.checked }
```

---

## الفكرة بشكل بسيط

نقول لReact:

> خذ كل معلومات `item` القديمة
> وغير فقط `checked`.

---

```js
import { useState } from "react"

function CheckboxList() {
  const [items, setItems] = useState([
    { id: 1, label: "HTML", checked: false },
    { id: 2, label: "CSS", checked: false },
    { id: 3, label: "JavaScript", checked: false }
  ]);

  function handleChange(id) {
    const item = items.find((item) => item.id === id);
    alert(`${item.id}: VAlUE = ${item.label}, ${!item.checked && '✅'}`);

    setItems(items.map((item) => 
      item.id === id
      ? {...item, checked: !item.checked}
      : item
    ));
  }

  return (
    <div className="checkboxList">
      {items.map((item) => (
        <div className="checkbox" key={item.id}>
          <input 
            id={item.id}
            type="checkbox" 
            checked={item.checked}
            onChange={() => handleChange(item.id)}
          />
          <label htmlFor={item.id}>{item.label}</label>
        </div>
      ))}
    </div>
  )
}

export default CheckboxList
```

