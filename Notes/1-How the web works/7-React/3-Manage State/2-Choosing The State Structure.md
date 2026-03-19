سؤالك مهم جدًا يا Omar 👍 لأن هذا الدرس من أهم مفاهيم **React state design**.
خلينا نفهم **ماذا يحدث ولماذا حذفنا `fullName` من state**.

---

# الفكرة الأساسية في الدرس

React يقول:

> **لا تضع معلومات مكررة داخل state**

لأن هذا يسبب **bugs**.

---
V
# المثال الأول (الكود الخطأ)

```javascript
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [fullName, setFullName] = useState('');
```

هنا لدينا **3 states**.

لكن لاحظ:

```
fullName = firstName + lastName
```

يعني `fullName` **يمكن حسابه** من المتغيرين الآخرين.

إذن هو **معلومة مكررة (redundant state)**.

---

# ماذا يحدث عند الكتابة

عندما يكتب المستخدم:

```
firstName = Omar
lastName = Ahmad
```

يجب أن يصبح:

```
fullName = Omar Ahmad
```

لذلك الكود يفعل:

```javascript
setFirstName(e.target.value);
setFullName(e.target.value + ' ' + lastName);
```

---

# المشكلة هنا

تخيل هذا السيناريو:

1️⃣ المستخدم يكتب first name
2️⃣ React يعمل render
3️⃣ المستخدم يكتب last name

هناك احتمال أن يحدث **عدم تزامن** بين القيم.

مثلاً يصبح:

```
firstName = Omar
lastName = Ahmad
fullName = Omar
```

لأنك نسيت تحديثه في مكان ما.

هذا ما يسمى:

```
state synchronization bug
```

---

# الحل الأفضل

بدل تخزين `fullName` في state، نحسبه.

```javascript
const fullName = firstName + ' ' + lastName;
```

لاحظ هنا:

```
fullName ليس state
```

بل **value محسوبة**.

---

# ماذا يحدث الآن

عندما يكتب المستخدم:

### يكتب first name

```javascript
setFirstName("Omar")
```

React يعمل render.

---

### أثناء render

React ينفذ:

```javascript
const fullName = firstName + ' ' + lastName;
```

فتصبح:

```
fullName = Omar
```

---

### عندما يكتب last name

```javascript
setLastName("Ahmad")
```

React يعمل render جديد.

---

### أثناء render الجديد

```javascript
const fullName = firstName + ' ' + lastName;
```

فتصبح:

```
fullName = Omar Ahmad
```

بدون أي `setFullName`.

---

# الفرق بين الطريقتين

## الطريقة الأولى (سيئة)

```
firstName state
lastName state
fullName state
```

لدينا **معلومات مكررة**.

---

## الطريقة الثانية (الصحيحة)

```
firstName state
lastName state
```

و

```
fullName = derived value
```

---

# قاعدة مهمة في React

إذا كانت قيمة يمكن **حسابها من state آخر** فلا تضعها في state.

مثال:

```
❌ totalPrice state
✔ totalPrice = items.reduce(...)
```

---

# مثال آخر مشابه

بدل:

```javascript
const [items, setItems] = useState([]);
const [itemsCount, setItemsCount] = useState(0);
```

الأفضل:

```javascript
const itemsCount = items.length;
```

---

# قاعدة ذهبية

React يقول:

```
Avoid redundant state
```

يعني:

```
Don't store what you can calculate
```

---

# خلاصة الدرس

```
state يجب أن يحتوي فقط على البيانات الأساسية
```

أما البيانات التي يمكن حسابها:

```
احسبها أثناء render
```

---
