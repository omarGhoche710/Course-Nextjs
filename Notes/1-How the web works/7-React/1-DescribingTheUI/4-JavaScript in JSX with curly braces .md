الفكرة في الدرس هي **استخدام JavaScript داخل JSX** في React عن طريق **الأقواس `{}`**. خلّيني أشرح المثال خطوة خطوة 👇

---

# 1️⃣ تعريف object في JavaScript

في البداية يوجد object اسمه `person`:

```javascript
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};
```

هذا object يحتوي:

* `name`
* `theme` (ستايل للصفحة)

---

# 2️⃣ استخدام JavaScript داخل JSX

في React يمكنك إدخال JavaScript داخل JSX باستخدام:

```jsx
{}
```

مثال:

```jsx
<h1>{person.name}'s Todos</h1>
```

React سيقرأ:

```js
person.name
```

والنتيجة في الصفحة:

```
Gregorio Y. Zara's Todos
```

---

# 3️⃣ استخدام object للـ style

في هذا السطر:

```jsx
<div style={person.theme}>
```

React سيأخذ:

```js
person.theme
```

وهو:

```javascript
{
  backgroundColor: 'black',
  color: 'pink'
}
```

وبالتالي سيطبق CSS:

```css
background-color: black;
color: pink;
```

---

# 4️⃣ أين نستخدم `{}` في JSX

الأقواس تسمح لك باستخدام **JavaScript expressions** مثل:

### متغير

```jsx
<h1>{name}</h1>
```

### عملية حسابية

```jsx
<h1>{2 + 2}</h1>
```

### property من object

```jsx
<h1>{person.name}</h1>
```

---

# 5️⃣ متى لا نستخدم `{}`

لا نستخدمها مع النص العادي.

✔ صحيح:

```jsx
<h1>Hello</h1>
```

❌ خطأ:

```jsx
<h1>{"Hello"}</h1>
```

(ممكن يعمل لكن غير ضروري)

---

✅ **الخلاصة**

في React:

```
{} = نافذة لكتابة JavaScript داخل JSX
```

---

💡 قريباً ستستخدم `{}` لشيء مهم جداً في React مثل:

```jsx
{isLoggedIn && <Profile />}
{users.map(user => <User />)}
```

نعم 👍 فهمك قريب جدًا، دعني أوضح الفكرة بشكل دقيق:

## ما هو **JSX** ؟

**JSX** هو طريقة تسمح لك أن تكتب **HTML داخل JavaScript**.

لكن في الحقيقة **المتصفح لا يفهم JSX مباشرة**.

لذلك يحصل شيء مهم:

**React يقوم بتحويل JSX إلى JavaScript عادي.**

---

## مثال

نكتب في React:

```jsx
const element = <h1>Hello</h1>;
```

هذا يبدو مثل **HTML**، لكن React يحوله في الخلفية إلى JavaScript مثل:

```javascript
const element = React.createElement("h1", null, "Hello");
```

---

## ماذا يحدث بالترتيب؟

1️⃣ أنت تكتب **JSX**
2️⃣ أداة مثل **Babel** تقوم بتحويله
3️⃣ يصبح **JavaScript عادي**
4️⃣ المتصفح ينفذ الكود

---

## مثال آخر

JSX:

```jsx
function App() {
  return <h1>Hello Omar</h1>;
}
```

بعد التحويل يصبح تقريبًا:

```javascript
function App() {
  return React.createElement("h1", null, "Hello Omar");
}
```

---

## لماذا نستخدم JSX؟

لأنه يجعل كتابة الواجهة **أسهل بكثير**.

بدل كتابة:

```javascript
React.createElement("div", null,
  React.createElement("h1", null, "Hello"),
  React.createElement("p", null, "Welcome")
);
```

نكتب ببساطة:

```jsx
<div>
  <h1>Hello</h1>
  <p>Welcome</p>
</div>
```

---

## خلاصة سهلة

JSX = **HTML داخل JavaScript**
لكن React **يحوّله إلى JavaScript عادي قبل التشغيل**.

---

💡 إذا أردت، يمكنني أيضًا أن أشرح لك شيئًا مهمًا جدًا:

**لماذا نكتب `{}` داخل JSX** مثل:

```jsx
<h1>{name}</h1>
```

هذا مفهوم أساسي في React وكثير من الطلاب يخطئون فيه.
