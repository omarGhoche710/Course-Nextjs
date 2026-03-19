تمام 😄 خلينا نشرح هذا المثال خطوة خطوة بشكل واضح:

---

# 📘 React Notes — Rendering Lists with map & Keys

## 1️⃣ الفكرة الأساسية

* في كثير من الأحيان تريد عرض **عدة عناصر مشابهة** بناءً على **بيانات موجودة في array**.
* في React، الطريقة المثالية لذلك هي استخدام:

1. `map()` → لتحويل كل عنصر في array إلى JSX element
2. `filter()` → إذا أردت فقط بعض العناصر (اختياري)
3. `key` → لتحديد كل عنصر بشكل فريد حتى إذا تغيرت القائمة

---

## 2️⃣ البيانات

```javascript
export const people = [
  {
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  },
  ...
]
```

* كل عنصر يمثل **scientist**
* `id` → يستخدم كـ **key** في React
* `name`, `profession`, `accomplishment` → لعرض معلومات
* `imageId` → لعرض الصورة عبر `getImageUrl`

---

## 3️⃣ دالة getImageUrl

```javascript
export function getImageUrl(person) {
  return 'https://i.imgur.com/' + person.imageId + 's.jpg';
}
```

* تحول `imageId` إلى **رابط الصورة على imgur**
* `s.jpg` = حجم صغير للصورة

---

## 4️⃣ تحويل البيانات إلى عناصر JSX

```jsx
const listItems = people.map(person =>
  <li key={person.id}>
    <img src={getImageUrl(person)} alt={person.name} />
    <p>
      <b>{person.name}:</b> {person.profession} known for {person.accomplishment}
    </p>
  </li>
);
```

### شرح:

1. `people.map(person => …)`

   * يحوّل كل شخص في array إلى عنصر `<li>`
2. `key={person.id}`

   * React يحتاج **key فريد لكل عنصر في القائمة** لتتبع أي عنصر يتغير أو يُضاف أو يُحذف
3. `<img>`

   * يعرض صورة كل شخص
4. `<p>`

   * يعرض الاسم والمهنة والإنجاز

---

## 5️⃣ إظهار القائمة في الصفحة

```jsx
return (
  <article>
    <h1>Scientists</h1>
    <ul>{listItems}</ul>
  </article>
);
```

* `listItems` → array من `<li>` عناصر JSX
* React يعرف كيف يعرضها **داخل `<ul>`**

---

## 6️⃣ لماذا نحتاج key؟

* بدون `key` → React يعطي **warning**
* السبب: React يحتاج أن يعرف **أي عنصر هو نفس العنصر القديم وأي عنصر جديد** عند تحديث القائمة
* الحل: استخدام `id` من البيانات كـ **key فريد**

---

## 7️⃣ الخلاصة

1. لديك array من البيانات (`people`)
2. استخدم `map()` لتحويل كل عنصر إلى JSX
3. ضع `key` فريد لكل عنصر
4. React يعرض **القائمة بأكملها ديناميكيًا**
5. يمكنك لاحقًا استخدام `filter()` إذا أردت **عرض فقط بعض العناصر**

---

💡 **مثال لتطبيق filter مع map**:

```jsx
const chemists = people
  .filter(person => person.profession === 'chemist')
  .map(person => (
    <li key={person.id}>
      {person.name} — {person.accomplishment}
    </li>
  ));
```

هكذا تظهر **قائمة الكيميائيين فقط**.

---

إذا تحب، أقدر أرسم لك **رسم توضيحي يبين flow من data array → map → JSX → React rendering** لتفهم كل شيء بصريًا.

هل تريد أن أفعل ذلك؟
