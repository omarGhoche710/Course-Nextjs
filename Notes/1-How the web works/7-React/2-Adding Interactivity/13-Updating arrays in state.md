تمام! هيا نعمل لك **note مفصلة** مع شرح الكودين: واحد باستخدام `useState` وآخر باستخدام `useImmer`. سأوضح **الفكرة الرئيسية لتحديث الـ arrays في React** مع أمثلة عملية.

---

# Updating Arrays in State (React Notes)

## 1️⃣ المشكلة الأساسية

في **React**:

* الـ `state` يجب أن يُعامل **كـ read-only**.
* أي تحديث يجب أن يتم **عن طريق إنشاء نسخة جديدة** من object أو array.

مثال على array من العناصر (artworks):

```js
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];
```

إذا أردنا تحديث قيمة `seen` في عنصر، **لا نعدل الـ array مباشرة**.

---

## 2️⃣ Updating array using `useState`

### الكود:

```js
const [list, setList] = useState(initialList);

function handleToggle(artworkId, nextSeen) {
  setList(list.map(artwork => {
    if (artwork.id === artworkId) {
      // نعمل نسخة جديدة من العنصر مع تعديل seen
      return { ...artwork, seen: nextSeen };
    } else {
      return artwork;
    }
  }));
}
```

### كيف يعمل؟

1. `list.map(...)` تنشئ **نسخة جديدة من array**.
2. لكل عنصر:

   * إذا كان `id` يطابق، نعمل نسخة من العنصر مع `seen` الجديد.
   * غير ذلك نرجع العنصر كما هو.
3. `setList` يحدّث state بالـ array الجديدة → React يعيد render.

✅ **ميزة:** يعمل مع أي array ويضمن **immutability**.

---

## 3️⃣ Updating array using `useImmer`

**Immer** يسهل التعامل مع state المعقدة، خصوصًا arrays وnested objects.

### الكود:

```js
const [list, updateList] = useImmer(initialList);

function handleToggle(artworkId, nextSeen) {
  updateList(draft => {
    const artwork = draft.find(a => a.id === artworkId);
    artwork.seen = nextSeen;
  });
}
```

### كيف يعمل؟

1. `draft` هو نسخة مؤقتة يمكن تعديلها مباشرة.
2. نبحث عن العنصر المطلوب بـ `find`:

   ```js
   const artwork = draft.find(a => a.id === artworkId);
   ```
3. نعدّل `seen` مباشرة:

   ```js
   artwork.seen = nextSeen;
   ```
4. **Immer** يتكفل بإنشاء نسخة جديدة من الـ state تلقائيًا.
5. React يعيد render.

✅ **ميزة:**

* لا حاجة لـ `map` و `...spread`
* الكود أبسط وأوضح، خصوصًا إذا كانت عناصر الـ array nested objects.

---

## 4️⃣ الفرق بين الطريقتين

| الطريقة                      | متى تستخدم                       | مزايا                             | عيوب                                    |
| ---------------------------- | -------------------------------- | --------------------------------- | --------------------------------------- |
| `useState + map + ...spread` | arrays أو objects صغيرة          | لا تحتاج مكتبات إضافية            | يصبح الكود طويل ومعقد مع nested objects |
| `useImmer`                   | arrays أو objects كبيرة / nested | تعديل مباشر بدون spread، كود أنظف | تحتاج تثبيت مكتبة `use-immer`           |

---

## 5️⃣ Handling checkboxes (controlled inputs)

في المثال:

```jsx
<input
  type="checkbox"
  checked={artwork.seen}
  onChange={e => {
    onToggle(artwork.id, e.target.checked)
  }}
/>
```

### الشرح:

* `checked={artwork.seen}` → checkbox يتحكم فيه React (controlled input)
* `e.target.checked` → القيمة الجديدة التي اختارها المستخدم
* `onToggle` → دالة لتحديث الـ state

---

## 6️⃣ تسلسل العملية

1. المستخدم يضغط checkbox
2. `onChange` يُرسل `id` والقيمة الجديدة (`checked`)
3. نحدّث state (`setList` أو `updateList`)
4. React يعيد render
5. checkbox يعكس القيمة الجديدة

---

## 7️⃣ خلاصة

* **لا تعدّل الـ arrays أو objects مباشرة** في state!
* استخدم `map` و `...spread` أو مكتبة **Immer** لتسهيل التحديثات.
* مع **checkboxes**، دائماً اعتمد على **controlled inputs** (`checked`) وليس `value`.
* Immer ممتاز لتقليل تعقيد الكود خاصة مع arrays و nested objects.

---
