النص يشرح فكرة **الكتابة بـ JSX داخل React**. خلّيني أبسّطه لك 👇

---

## 1️⃣ كل Component هو function

في React، الـ **component** هو **function في JavaScript**.

داخل هذا الـ function يمكن أن تكتب **markup** (شكل الصفحة).

مثال:

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

هنا `<h1>` هو **markup** سيظهر في المتصفح.

---

## 2️⃣ ما هو JSX؟

**JSX** هو **syntax يشبه HTML** لكن يُكتب داخل JavaScript.

مثال JSX:

```jsx
<h1>Hello</h1>
```

لكن في الحقيقة React سيحوّله إلى JavaScript.

---

## 3️⃣ لماذا JSX مهم؟

لأنه يسمح لك بعرض **معلومات ديناميكية**.

مثال:

```jsx
function App() {
  const name = "Omar";

  return <h1>Hello {name}</h1>;
}
```

React سيعرض:

```
Hello Omar
```

لاحظ الأقواس `{}`
هذه تعني **JavaScript داخل JSX**.

---

## 4️⃣ لماذا يقول النص إن HTML لا يعمل دائماً؟

لأن **JSX أكثر صرامة من HTML**.

يعني إذا نسخت HTML عادي ووضعته في React قد يعطي خطأ.

مثلاً:

### ❌ HTML عادي

```html
<img src="logo.png">
```

في JSX هذا خطأ.

---

### ✔ الصحيح في JSX

```jsx
<img src="logo.png" />
```

لأن JSX يطلب **إغلاق جميع العناصر**.

---

## 5️⃣ فروقات مهمة بين HTML و JSX

| HTML              | JSX                     |
| ----------------- | ----------------------- |
| class             | className               |
| for               | htmlFor                 |
| <img>             | `<img />`               |
| style="color:red" | `style={{color:"red"}}` |

---

✅ الخلاصة:

* JSX يشبه **HTML**
* لكنه يعمل داخل **JavaScript**
* وهو الطريقة التي يستخدمها React لبناء الواجهة.

---

💡 قريباً في React ستتعلم شيئاً مهماً جداً اسمه **Embedding JavaScript in JSX** مثل:

```jsx
{user.name}
{2 + 2}
{isLoggedIn && <Profile />}
```

وهو أحد أهم مفاهيم React.
