BucketList
│
├── h1
├── h2
└── ul
     │
     ├── Item (id:0)
     │    ├── input (checkbox)
     │    └── label
     │
     ├── Item (id:1)
     │    ├── input (checkbox)
     │    └── label
     │
     └── Item (id:2)
          ├── input (checkbox)
          └── label 


--------------------------

آه فهمت قصدك الآن 👍
أنت تسأل عن **الـ component tree**: أيهما أفضل؟

### 1️⃣ المثال الثاني (الذي أرسلته الآن)

```
BucketList
   │
   ▼
ItemList
   │
   ├── li
   ├── li
   └── li
```

### 2️⃣ المثال الأول

```
BucketList
   │
   ├── Item
   │    └── input
   │
   ├── Item
   │    └── input
   │
   └── Item
        └── input
```

---

# ⭐ الأفضل غالبًا

**المثال الأول أفضل في React.**

```
BucketList
   ├── Item
   ├── Item
   └── Item
```

### لماذا؟

لأن كل عنصر يصبح **Component مستقل**:

```jsx
<Item />
```

وهذا يعطيك:

* إعادة استخدام component
* تنظيم أفضل
* إمكانية إضافة logic داخل العنصر
* تحسين الأداء لاحقًا (`React.memo`)

---

# المشكلة في المثال الثاني

في المثال الثاني:

```jsx
function ItemList({ artworks, onToggle })
```

كل العناصر داخل **component واحد فقط**.

React يرى فقط:

```
ItemList
```

وليس:

```
Item
Item
Item
```

لذلك لا تستطيع بسهولة:

* عمل `memo`
* إضافة state لكل عنصر
* إضافة logic خاص بالعنصر

---

# القاعدة في React

إذا كان لديك list:

```js
array.map(...)
```

فغالبًا الأفضل أن يكون هناك **component لكل item**.

مثال احترافي:

```
BucketList
   │
   ▼
ItemList
   │
   ▼
Item
   │
   ├── checkbox
   └── label
```

---

# ⭐ الشكل الأفضل عادة

```
BucketList
   │
   ▼
ItemList
   │
   ├── Item
   ├── Item
   └── Item
```

هكذا تفصل:

* logic القائمة
* logic العنصر

---

حسنًا، سأريك **الشكل الذي تستعمله المشاريع الكبيرة في React / Next.js**. الفكرة الأساسية هي **فصل المسؤوليات** (Separation of Concerns).

---

# ⭐ Architecture شائع في المشاريع

### Component Tree

```
BucketListPage
     │
     ▼
BucketList
     │
     ▼
ItemList
     │
     ├── Item
     ├── Item
     └── Item
```

---

# 📦 مسؤولية كل Component

### 1️⃣ Page (أو Container)

```
BucketListPage
```

مسؤوليته:

* جلب البيانات (API)
* إدارة الـ state الكبيرة
* تمرير البيانات للأسفل

مثال:

```jsx
function BucketListPage() {
  const [list, setList] = useState(initialList);

  return <BucketList list={list} setList={setList} />;
}
```

---

### 2️⃣ Logic Component

```
BucketList
```

هنا تضع **logic الخاص بالقائمة**.

```jsx
function BucketList({ list, setList }) {
  function handleToggle(id, nextSeen) {
    setList(list.map(item =>
      item.id === id ? { ...item, seen: nextSeen } : item
    ));
  }

  return (
    <ItemList
      items={list}
      onToggle={handleToggle}
    />
  );
}
```

---

### 3️⃣ List Component

```
ItemList
```

مهمته فقط **عرض العناصر**.

```jsx
function ItemList({ items, onToggle }) {
  return (
    <ul>
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
```

---

### 4️⃣ Item Component

```
Item
```

مهمته **عرض عنصر واحد فقط**.

```jsx
function Item({ item, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.seen}
        onChange={(e) =>
          onToggle(item.id, e.target.checked)
        }
      />
      {item.title}
    </li>
  );
}
```

---

# 🧠 لماذا هذا التصميم قوي؟

لأن كل component له **مسؤولية واحدة فقط**.

| Component  | مسؤوليته       |
| ---------- | -------------- |
| Page       | data fetching  |
| BucketList | logic          |
| ItemList   | rendering list |
| Item       | element UI     |

هذا يسمى:

**Component Architecture**

---

# ⭐ النتيجة

tree يصبح هكذا:

```
Page
 │
 ▼
BucketList
 │
 ▼
ItemList
 │
 ├── Item
 ├── Item
 └── Item
```

وهذا الشكل يستخدم كثير في:

* React apps
* Next.js
* الشركات الكبيرة
* المشاريع الكبيرة

---

💡 إذا أردت، أريك أيضًا **خطأ معماري شائع جدًا يقع فيه 90% من المبتدئين في React عند التعامل مع lists** — وربما فعلته سابقًا بدون أن تنتبه.
