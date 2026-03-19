تمام 👍 خلينا نعمل نوت واضحة عن **Conditional Rendering** باستخدام المثال اللي أعطيتنا إياه.

---

# 📘 React Notes — Conditional Rendering

## 1️⃣ ما هو Conditional Rendering؟

* في React، أحيانًا تريد **عرض شيء معين فقط إذا تحقق شرط**
* يمكن استخدام **JavaScript syntax** مثل:

  * `if` statements
  * `&&` (AND) operator
  * ternary `? :` operator

---

## 2️⃣ مثال من الكود

```jsx
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}
```

### شرح:

* `isPacked && '✅'`

  * إذا `isPacked = true` → يعرض `'✅'`
  * إذا `isPacked = false` → React يتجاهلها، لا يظهر شيء

---

## 3️⃣ استخدام Component مع قائمة

```jsx
export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
```

* كل `<Item />` يأخذ **props** مختلفة (`name` و `isPacked`)
* Conditional rendering يعرض ✅ فقط للعناصر المعبأة (`isPacked=true`)

---

## 4️⃣ النتيجة على الصفحة

```html
<section>
  <h1>Sally Ride's Packing List</h1>
  <ul>
    <li class="item">Space suit ✅</li>
    <li class="item">Helmet with a golden leaf ✅</li>
    <li class="item">Photo of Tam</li>
  </ul>
</section>
```

---

## 5️⃣ قواعد مهمة

1️⃣ استخدام `&&` مفيد **لإظهار شيء واحد فقط إذا تحقق الشرط**
2️⃣ يمكن استخدام ternary `? :` إذا تريد **عرض عنصر مختلف إذا الشرط false**:

```jsx
{isPacked ? '✅ Packed' : '❌ Not packed'}
```

3️⃣ React يتجاهل القيم falsy (`false`, `null`, `undefined`, `""`) عند العرض

---

✅ **خلاصة Conditional Rendering:**

```text
condition && <JSX />       → يعرض JSX إذا condition true
condition ? <A /> : <B />  → يعرض A إذا true و B إذا false
```

---

إذا تحب، أقدر أصنع لك **رسم توضيحي لكيفية Conditional Rendering لكل Item في القائمة** لتفهمه بصريًا أسرع.

هل تريد أن أفعل ذلك؟
