خلّينا نشرح المثال خطوة خطوة حتى تفهم فكرة **components** في React 👇

---

## 1️⃣ أول Component اسمه Profile

```jsx
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}
```

هيدا **Component**.

ببساطة هو **function في JavaScript** بيرجع **HTML-like code** (اسمه JSX).

يعني كل ما React يشغّل `Profile()` رح يطبع:

```html
<img src="..." alt="Katherine Johnson" />
```

يعني **صورة واحدة**.

---

## 2️⃣ Component اسمه Gallery

```jsx
export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

هون صار في شغلة مهمة:

Component اسمه **Gallery** عم يستخدم **Profile**.

---

## 3️⃣ كيف React يقرأ هيدا الكود

React يشوف:

```jsx
<Profile />
```

فيفهم:

> شغّل الـ function `Profile` واطبع النتيجة.

ولأنك حاططها **3 مرات**:

```jsx
<Profile />
<Profile />
<Profile />
```

React رح يطبع **3 صور**.

---

## 4️⃣ النتيجة على الصفحة

الـ HTML النهائي تقريباً هيك:

```html
<section>
  <h1>Amazing scientists</h1>

  <img src="..." alt="Katherine Johnson">
  <img src="..." alt="Katherine Johnson">
  <img src="..." alt="Katherine Johnson">

</section>
```

---

## 5️⃣ ليش هيدا مهم؟

لأن React بيعتمد على فكرة:

**Component داخل Component**

مثل شجرة:

```
Gallery
 ├── Profile
 ├── Profile
 └── Profile
```

---

## 6️⃣ ملاحظة مهمة جداً في React

اسم الـ component **لازم يبدأ بحرف كبير**.

✔ صح:

```jsx
function Profile() {}
```

❌ غلط:

```jsx
function profile() {}
```

لأن React يعتبر الحروف الصغيرة **HTML elements**.

---

## 7️⃣ شو رح يجي بعد هيدا الدرس

غالباً الدرس الجاي في React رح يكون عن:

* **Props** (تمرير بيانات للـ component)
* تغيير الصورة أو النص لكل Profile

مثال:

```jsx
<Profile name="Katherine" />
<Profile name="Albert" />
```

---

إذا بدك، فيني كمان أشرحلك **ليش React كتبوا `<Profile />` بدل `Profile()`**
وهيدا سر صغير في React معظم المبتدئين ما بيعرفوه 👀.
