ممتاز 👌 هذا المثال يشرح فكرة **State في React** بشكل عملي. خلينا نفهمه خطوة خطوة وببساطة.

---

# 1️⃣ ما هو State؟

**State = ذاكرة الـ component**

يعني أشياء يحتاج الـ component أن **يتذكرها** أثناء استخدام المستخدم للتطبيق.

أمثلة:

* أي صورة يتم عرضها الآن
* هل التفاصيل ظاهرة أم مخفية
* ماذا كتب المستخدم في input

في React هذه الذاكرة اسمها **state**.

---

# 2️⃣ كيف نضيف State؟

نستخدم **Hook اسمه `useState`**.

مثال:

```javascript
const [index, setIndex] = useState(0);
```

`useState` يعطينا شيئين:

| الشيء      | المعنى             |
| ---------- | ------------------ |
| `index`    | القيمة الحالية     |
| `setIndex` | دالة لتغيير القيمة |

---

# 3️⃣ State في هذا المثال

لدينا **state اثنين**:

```javascript
const [index, setIndex] = useState(0);
const [showMore, setShowMore] = useState(false);
```

### الأول

```javascript
index
```

يمثل **رقم التمثال الحالي** في القائمة.

---

### الثاني

```javascript
showMore
```

يمثل:

```text
true  → عرض التفاصيل
false → إخفاء التفاصيل
```

---

# 4️⃣ زر Next

```javascript
function handleNextClick() {
  if (hasNext) {
    setIndex(index + 1);
  } else {
    setIndex(0);
  }
}
```

عند الضغط على **Next**:

* إذا كان هناك عنصر بعده → نزيد index
* إذا وصلنا للنهاية → نرجع للبداية

مثال:

```text
0 → 1 → 2 → 3 → 4 → 0
```

---

# 5️⃣ زر Show / Hide details

```javascript
function handleMoreClick() {
  setShowMore(!showMore);
}
```

هنا نقلب القيمة:

```text
false → true
true → false
```

---

# 6️⃣ إظهار أو إخفاء الوصف

هذا السطر مهم:

```javascript
{showMore && <p>{sculpture.description}</p>}
```

معناه:

```text
إذا showMore = true → اعرض الوصف
إذا showMore = false → لا تعرضه
```

---

# 7️⃣ اختيار التمثال الحالي

```javascript
let sculpture = sculptureList[index];
```

يعني:

* إذا `index = 0` → أول عنصر
* إذا `index = 1` → ثاني عنصر
* وهكذا

---

# 8️⃣ عرض رقم العنصر

```javascript
({index + 1} of {sculptureList.length})
```

مثال:

```text
1 of 12
2 of 12
3 of 12
```

أضفنا `+1` لأن العد في البرمجة يبدأ من **0**.

---

# 9️⃣ الفكرة الكاملة للتطبيق

```text
Gallery Component
│
├─ state: index
├─ state: showMore
│
├─ Next Button → يغير index
├─ Show Details Button → يغير showMore
│
└─ يعرض sculpture حسب index
```

---

# 🔑 أهم فكرة في هذا الدرس

```text
State = ذاكرة خاصة بالـ component
عندما تتغير → React يعيد render تلقائياً
```

يعني:

```text
setIndex(...)
setShowMore(...)
```

→ React يعيد رسم الواجهة بالقيم الجديدة.

---

إذا أردت، أشرح لك أيضًا **أحد أهم مفاهيم React التي تأتي مباشرة بعد هذا الدرس وهي:**

**Why state should not be mutated (ليش ما نغير state مباشرة)**

وهذه نقطة تسبب أخطاء كثيرة للمبتدئين في React.
