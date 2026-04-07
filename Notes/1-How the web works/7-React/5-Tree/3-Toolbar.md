كلمة **Toolbar** معناها بالعربي:

**شريط الأدوات**.

---

## ماذا يعني شريط الأدوات؟

**Toolbar** هو مكان يجمع عدة **أزرار أو أدوات** تقوم بوظائف مختلفة.

مثلًا:

* زر تشغيل
* زر رفع صورة
* زر حفظ
* زر حذف

كل هذه توضع داخل **شريط واحد**.

---

## في كودك ماذا يفعل Toolbar؟

في كود **React** الذي كتبته:

```jsx
function Toolbar({ onPlayMovie, onUploadImage }) {
```

هذا **component** وظيفته جمع الأزرار.

---

### داخله يوجد زرين

```jsx
<Button onClick={onPlayMovie}>
  Play Movie
</Button>
```

زر يقوم بـ:

```
تشغيل الفيلم
```

---

والزر الثاني:

```jsx
<Button onClick={onUploadImage}>
  Upload Image
</Button>
```

يقوم بـ:

```
رفع صورة
```

---

## الشكل المنطقي للكود

```
App
 └── Toolbar
       ├── Button (Play Movie)
       └── Button (Upload Image)
```

---

## لماذا سموه Toolbar؟

لأنه يشبه **شريط الأدوات في البرامج** مثل:

* **Microsoft Word**
* **Photoshop**

حيث يوجد شريط يحتوي عدة أزرار.

---

## مثال واقعي

تخيل موقع فيديو:

```
[ Play ] [ Pause ] [ Upload ]
```

هذه كلها داخل **Toolbar**.

---

💡 ملاحظة:
اسم **Toolbar** ليس كلمة خاصة في **React**، بل مجرد **اسم component اختاره المبرمج**. يمكنك تسميته:

```
Actions
Controls
ButtonsGroup
```

لكن **Toolbar** اسم شائع.
