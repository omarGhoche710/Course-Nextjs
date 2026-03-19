أكيد 👍 سأجمع لك **كل الفكرة كنوت مرتبة** حتى تراجعها بسهولة.

---

# 📘 React Notes — Passing Props

## 1️⃣ ما هي props

**props = properties**

هي طريقة **تمرير معلومات من component إلى آخر**.

```text
Parent Component → Child Component
```

مثال:

```jsx
function App() {
  return <User name="Omar" age={22} />;
}
```

هنا `App` يرسل props إلى `User`.

الـ props:

```
name = "Omar"
age = 22
```

---

# 2️⃣ استقبال props

كل component يستقبل **props كـ object**.

```javascript
function User(props) {
  return <h1>{props.name}</h1>;
}
```

شكل props يكون:

```javascript
props = {
  name: "Omar",
  age: 22
}
```

---

# 3️⃣ Destructuring (الطريقة المختصرة)

بدل:

```javascript
function User(props) {
  return <h1>{props.name}</h1>;
}
```

نكتب:

```javascript
function User({ name }) {
  return <h1>{name}</h1>;
}
```

وهذا اختصار لـ:

```javascript
const name = props.name
```

---

# 4️⃣ مثال من الكود

```jsx
<Avatar
  size={100}
  person={{
    name: "Katsuko Saruhashi",
    imageId: "YfeOqp2"
  }}
/>
```

هنا نرسل props إلى `Avatar`.

الـ props:

```javascript
{
  size: 100,
  person: {
    name: "Katsuko Saruhashi",
    imageId: "YfeOqp2"
  }
}
```

---

# 5️⃣ استقبالها في Avatar

```javascript
function Avatar({ person, size }) {
```

هذا يعني:

```javascript
const person = props.person
const size = props.size
```

---

# 6️⃣ children prop

`children` هو **prop خاص في React**.

يمثل **المحتوى داخل component**.

مثال:

```jsx
<Card>
  <Avatar />
</Card>
```

React يحولها إلى:

```javascript
Card({
  children: <Avatar />
})
```

---

# 7️⃣ استخدام children

```javascript
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
```

هذا يعني أن `Card` سيعرض أي شيء بداخله.

---

# 8️⃣ الطريقة العادية لـ children

```javascript
function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}
```

---

# 9️⃣ خطأ شائع

❌ غلط:

```javascript
function Card(children)
```

لأن React يرسل **object وليس مباشرة children**.

---

# 🔑 خلاصة الدرس

1️⃣ Components يتواصلون باستخدام **props**

2️⃣ props دائمًا **object**

3️⃣ يمكن استعمال **destructuring** لتسهيل الكود

4️⃣ `children` هو prop خاص يمثل **المحتوى داخل component**

---

سأشرح لك **ماذا يحدث في الكود خطوة خطوة** حتى ترى كيف React ينفذ الكود.

سنمشي مع الكود من البداية.

---

# 1️⃣ تشغيل Component الأساسي

React يبدأ من:

```jsx
export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
```

هنا React يرى:

```jsx
<Card>
  <Avatar ... />
</Card>
```

يعني سيشغّل **Card component**.

---

# 2️⃣ ماذا يرسل React إلى Card

React يأخذ كل ما داخل `<Card>` ويضعه داخل **children**.

يعني يصبح:

```javascript
Card({
  children: <Avatar size={100} person={{...}} />
})
```

---

# 3️⃣ تشغيل Card

React ينفذ:

```javascript
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
```

بما أن `children` هو:

```jsx
<Avatar size={100} person={{...}} />
```

النتيجة تصبح:

```jsx
<div className="card">
  <Avatar size={100} person={{...}} />
</div>
```

الآن React يجب أن يشغّل **Avatar**.

---

# 4️⃣ إرسال props إلى Avatar

React يمرر props:

```javascript
{
  size: 100,
  person: {
    name: "Katsuko Saruhashi",
    imageId: "YfeOqp2"
  }
}
```

---

# 5️⃣ تشغيل Avatar

React ينفذ:

```javascript
function Avatar({ person, size }) {
```

هذا يعني:

```javascript
person = {
  name: "Katsuko Saruhashi",
  imageId: "YfeOqp2"
}

size = 100
```

---

# 6️⃣ إنشاء عنصر الصورة

React ينفذ:

```jsx
<img
  className="avatar"
  src={getImageUrl(person)}
  alt={person.name}
  width={size}
  height={size}
/>
```

---

# 7️⃣ تشغيل الدالة getImageUrl

React ينفذ:

```javascript
getImageUrl(person)
```

الدالة:

```javascript
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}
```

القيم تصبح:

```
person.imageId = YfeOqp2
size = s
```

الرابط النهائي:

```
https://i.imgur.com/YfeOqp2s.jpg
```

---

# 8️⃣ النتيجة النهائية في الصفحة

React يبني هذا الـ HTML:

```html
<div class="card">
  <img
    class="avatar"
    src="https://i.imgur.com/YfeOqp2s.jpg"
    width="100"
    height="100"
    alt="Katsuko Saruhashi"
  />
</div>
```

---

# الشكل النهائي للـ Components

```
Profile
  ↓
Card
  ↓
Avatar
  ↓
img
```

---

# الفكرة الكبيرة التي يريد الدرس تعليمك إياها

1️⃣ **Component داخل Component**

```
Card → Avatar
``` 

2️⃣ **تمرير البيانات باستخدام props**

```
Profile → Avatar
```

3️⃣ **children لعرض المحتوى داخل component**

```
<Card>
  Avatar
</Card>
```

---

إذا أردت، أريك أيضًا **رسم بسيط جدًا يوضح كيف React يبني الواجهة من Components (وهو أهم مفهوم في React)**.

