تمام Omar 👍 هذا الدرس مهم جدًا في React واسمه:

```
Sharing State Between Components
```

وسأشرح لك **الفكرة + الكود خطوة خطوة + notes مهمة**.

---

# الفكرة الأساسية

أحيانًا يكون لدينا **عدة components** ويجب أن تتغير حالتها **معًا**.

مثلاً في Accordion:

``` 
Panel 1
Panel 2
Panel 3
```

المطلوب:

```
فقط Panel واحد مفتوح
```

عند فتح واحد يجب أن **يغلق الآخر**.

---

# المشكلة لو كل Panel لديه state خاص

لو كتبنا هكذا:

```javascript
function Panel() {
  const [isActive, setIsActive] = useState(false);
}
```

سيصبح:

```
Panel 1 مفتوح
Panel 2 مفتوح
Panel 3 مفتوح
```

كل واحد مستقل.

وهذا **ليس ما نريده**.

---

# الحل

React يقول:

```
ارفع الـ state للأب
```

وهذا يسمى:

```
Lifting State Up
```

---

# أين وضعنا الـ state

داخل:

```javascript
export default function Accordion()
```

هنا:

```javascript
const [activeIndex, setActiveIndex] = useState(0);
```

هذا المتغير يخزن:

```
أي Panel مفتوح
```

---

# معنى activeIndex

مثلاً:

```
activeIndex = 0
```

يعني:

```
Panel الأول مفتوح
```

لو:

```
activeIndex = 1
```

يعني:

```
Panel الثاني مفتوح
```

---

# الآن نمرر المعلومات للـ Panel

هنا:

```javascript
<Panel
  title="About"
  isActive={activeIndex === 0}
  onShow={() => setActiveIndex(0)}
>
```

الـ props هي:

```
title
isActive
onShow
children
```

---

# شرح isActive

```javascript
isActive={activeIndex === 0}
```

React يفحص:

```
هل activeIndex = 0 ؟
```

إذا نعم:

```
true
```

إذا لا:

```
false
```

---

# مثال

لو:

```
activeIndex = 1
```

سيصبح:

```
Panel 0 → false
Panel 1 → true
```

---

# عند الضغط على Show

هنا:

```javascript
<button onClick={onShow}>
```

والـ onShow هو:

```javascript
onShow={() => setActiveIndex(0)}
```

عند الضغط:

```
setActiveIndex(0)
```

React يعمل:

```
render جديد
```

---

# الآن داخل Panel

```javascript
function Panel({
  title,
  children,
  isActive,
  onShow
})
```

الـ props التي يستقبلها.

---

# عرض العنوان

```javascript
<h3>{title}</h3>
```

مثلاً:

```
About
Etymology
```

---

# Conditional Rendering

هنا أهم سطر:

```javascript
{isActive ? (
  <p>{children}</p>
) : (
  <button onClick={onShow}>
    Show
  </button>
)}
```

إذا:

```
isActive = true
```

يظهر:

```
النص
```

إذا:

```
isActive = false
```

يظهر:

```
زر Show
```

---

# children

مثلاً هنا:

```javascript
<Panel title="About">
  With a population...
</Panel>
```

كل النص يصبح:

```
children
```

ويعرض هنا:

```javascript
<p>{children}</p>
```

---

# ماذا يحدث خطوة خطوة

### 1️⃣ أول render

```
activeIndex = 0
```

النتيجة:

```
Panel 1 مفتوح
Panel 2 مغلق
```

---

### 2️⃣ المستخدم يضغط Show في Panel 2

React ينفذ:

```
setActiveIndex(1)
```

---

### 3️⃣ React يعمل render جديد

الآن:

```
activeIndex = 1
```

النتيجة:

```
Panel 1 مغلق
Panel 2 مفتوح
```

---

# Notes مهمة

### 1️⃣ رفع الـ state

```
state يجب أن يكون في أقرب parent مشترك
```

---

### 2️⃣ الطفل لا يملك state

Panel لا يملك state.

الأب يتحكم به.

---

### 3️⃣ البيانات تنزل عبر props

```
Parent → Child
```

---

### 4️⃣ الأحداث تصعد للأب

```
Child → Parent
```

عن طريق functions مثل:

```
onShow
```

---

# قاعدة React مهمة

```
State lives in the parent
Data flows down via props
Events go up via callbacks
```

---

# لماذا هذا مهم جدًا

هذا النمط يستخدم في:

```
tabs
accordions
menus
modals
dropdowns
```

وستراه كثيرًا في:

* React
* Next.js
* React apps الكبيرة

---

