**Utilities classes** هي **كلاسات CSS صغيرة جدًا** تعمل **مهمة واحدة فقط** وتعيد استخدامها في كل المشروع.

الفكرة منتشرة جدًا في **Tailwind CSS** وتستخدم أيضًا مع **Next.js** و **React**.

---

# الفكرة ببساطة

بدل ما تكتب CSS جديد كل مرة، تعمل **كلاسات جاهزة** تستعملها في أي مكان.

مثال:

```css
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mt-20 {
  margin-top: 20px;
}

.text-center {
  text-align: center;
}
```

---

# كيف نستخدمها

```html
<div class="flex-center mt-20 text-center">
  Hello
</div>
```

كل class يعمل **شيء واحد فقط**.

---

# مثال عملي

بدل هذا:

```css
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
```

تعمل utilities:

```css
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mt-20 {
  margin-top: 20px;
}
```

وتستعملهم:

```html
<div class="flex-center mt-20">
```

---

# لماذا نستخدم utilities

1️⃣ إعادة استخدام الكود
2️⃣ CSS أقل
3️⃣ تطوير أسرع
4️⃣ كود أوضح

---

# مثال مشهور

في **Tailwind CSS** كل شيء utilities.

مثال:

```html
<div class="flex justify-center items-center mt-5 text-center">
```

كل كلمة هنا **utility class**.

---

# أمثلة utilities شائعة

```css
.container
.flex
.flex-center
.grid-center
.text-center
.mt-10
.mb-20
.hidden
```

---

💡 نصيحة للمبتدئين في **Next.js**:
إذا ستستخدم **Tailwind CSS** غالبًا لن تحتاج إنشاء utilities بنفسك.

---

إذا حاب، فيني أعطيك **5 utility classes مهمة جدًا يستعملها كل المطورين تقريبًا في كل مشروع**.
