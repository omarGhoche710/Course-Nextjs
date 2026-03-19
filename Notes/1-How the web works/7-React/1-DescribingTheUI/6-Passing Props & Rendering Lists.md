سؤالك ممتاز 👍 لأن **`key` في React كثير من الناس يخلط بينها وبين props عادية**.

الجواب القصير:
❌ **لا تتحول إلى `data-key`** داخل `Card`.

---

# ما هو `key` في React؟

عندما تكتب:

```jsx
<Card key={person.imageId}>
```

هذا **ليس prop عادي**.

React يستخدم `key` **داخليًا فقط** ليعرف كيف يدير العناصر داخل list.

---

# مثال

```jsx
{scientists.map((person) => (
  <Card key={person.imageId}>
    <Avatar person={person} size={100} />
  </Card>
))}
```

React يستعمل `key` ليعرف:

```text
هذا العنصر 1
هذا العنصر 2
هذا العنصر 3
```

حتى عندما يحدث **re-render** يعرف أي عنصر تغيّر.

---

# شيء مهم

`key` **لا يصل إلى component**.

يعني داخل `Card` لا يمكنك فعل هذا:

```javascript
function Card({ key }) {
```

لن يعمل ❌

---

# لماذا؟

لأن React يستعمله **قبل أن يمرر props**.

---

# مثال توضيحي

إذا كتبنا:

```jsx
<Card key="123" title="Profile" />
```

React يرسل إلى `Card`:

```javascript
props = {
  title: "Profile"
}
```

لكن **`key` غير موجود**.

---

# إذا أردت إرسال key كـ prop

يجب أن ترسله هكذا:

```jsx
<Card key={person.imageId} id={person.imageId}>
```

ثم داخل `Card`:

```javascript
function Card({ id }) {
```

---

# الخلاصة

```jsx
<Card key={person.imageId}>
```

✔ React يستخدمه داخليًا
❌ لا يتحول إلى `data-key`
❌ لا يصل إلى props

---

💡 قاعدة React مهمة:

```text
key هو شيء خاص بـ React وليس prop عادي
```

---

إذا أردت، أشرح لك **لماذا React يطلب `key` في `.map()` تحديدًا** (هناك سبب ذكي جدًا يجعل React سريع جدًا).
