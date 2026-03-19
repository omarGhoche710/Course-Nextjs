مجلد **`public`** في مشروع **Next.js** هو المكان الذي تضع فيه **الملفات الثابتة (static files)** التي يمكن الوصول إليها مباشرة من المتصفح.

---

# الفكرة ببساطة

أي ملف تضعه داخل `public` يصبح له **URL مباشر** في الموقع.

مثال:

إذا وضعت صورة هنا:

```
public/logo.png
```

يمكن الوصول إليها من المتصفح عبر:

```
http://localhost:3000/logo.png
```

---

# أمثلة لما نضعه في public

عادة نضع:

* الصور
* الأيقونات
* favicon
* ملفات pdf
* ملفات static أخرى

مثال:

```
public/
   logo.png
   images/
       hero.jpg
   icons/
       menu.svg
```

الوصول لها يكون هكذا:

```
/logo.png
/images/hero.jpg
/icons/menu.svg
```

---

# مثال استخدام داخل **React** component

```jsx
<img src="/logo.png" alt="logo" />
```

لاحظ:

❌ لا نكتب `public/logo.png`
✅ فقط `/logo.png`

---

# مثال آخر مع صورة

في **Next.js** غالبًا نستخدم:

```jsx
import Image from "next/image";

<Image src="/logo.png" width={200} height={100} alt="logo" />
```

---

# الفرق بين public وباقي المشروع

| المكان           | الاستخدام    |
| ---------------- | ------------ |
| `public`         | ملفات static |
| `app` أو `pages` | صفحات الموقع |
| `components`     | مكونات React |

---

# الخلاصة

مجلد **`public`**:

* لتخزين الملفات الثابتة
* يمكن الوصول لها مباشرة عبر URL
* لا تحتاج import

---

💡 معلومة مهمة:
الملفات داخل `public` **لا تمر عبر bundler** في **Next.js**، لذلك تُستخدم فقط للملفات التي لا تحتاج معالجة.

---

