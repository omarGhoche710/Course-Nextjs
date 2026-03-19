تمام، خلينا نشرح كل شيء خطوة خطوة ونوضح **الفكرة الأساسية + الكود** بطريقة سهلة. 😄

---

# 🟢 الفكرة الأساسية

React عندها **state داخل الـ component**.
مثال في تطبيق **Chat**:

```jsx
const [text, setText] = useState('');
```

هذا `text` يمثل ما يكتبه المستخدم في حقل الرسائل.

---

## 1️⃣ ما يحدث افتراضياً (بدون `key`)

لو كتب المستخدم رسالة، ثم اختار **مستلم آخر**:

```jsx
<Chat contact={to} />
```

* React ترى أن **Chat** هو نفس الـ component (نفس النوع).
* React **تحافظ على state السابقة** (`text`) لأنها تعتبر component نفسها.

النتيجة:

> حقل الرسالة لا يتم مسحه، وقد يرسل المستخدم رسالة إلى شخص خاطئ.

---

## 2️⃣ لماذا نحتاج `key`

React تفرق بين **re-render** و **re-mount**:

* **Re-render**: إعادة عرض component مع تحديث props، **لكن state تبقى**.
* **Re-mount**: إنشاء component جديد من الصفر، **state يتم إعادة تهيئته**.

باستخدام:

```jsx
<Chat key={to.email} contact={to} />
```

أخبرنا React:

> "إذا تغير `key`، اعتبر هذا component جديد."

* عند اختيار مستلم جديد، `to.email` مختلف → React يعيد إنشاء Chat من الصفر → `text` يصبح `''`.

---

# 3️⃣ مثال عملي

### الكود بدون `key`:

```jsx
import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat contact={to} />
    </div>
  )
}

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];
```

### النتيجة:

1. اخترت **Taylor** → كتبت رسالة `"Hi"`
2. اخترت **Alice** → حقل الرسالة لا يزال يحتوي `"Hi"`
3. خطر إرسال الرسالة للشخص الخطأ 🚨

---

### الكود مع `key`:

```jsx
import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.email} contact={to} />
    </div>
  )
}

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];
```

### النتيجة:

1. اخترت **Taylor** → كتبت رسالة `"Hi"`
2. اخترت **Alice** → حقل الرسالة يصبح فارغ `''`
3. لا خطر إرسال الرسالة للشخص الخطأ ✅

---

# 4️⃣ الفكرة المهمة

* **React يحاول دائماً الحفاظ على state** عندما يرى نفس component.
* أحياناً نريد **إعادة إنشاء component جديد** → نستخدم `key`.
* أي تغيير في `key` = component جديد + state جديد.

---

# 5️⃣ الرسم التوضيحي

```
[Messenger] state: to = Taylor
  |
  v
[Chat key="taylor@mail.com"] state: text = "Hi"

-- user switches to Alice --

[Messenger] state: to = Alice
  |
  v
[Chat key="alice@mail.com"] state: text = ""  <-- re-mount because key changed
```

---

# ✅ خلاصة

| بدون key                     | مع key                                    |
| ---------------------------- | ----------------------------------------- |
| State داخل Chat تبقى         | State يتم إعادة تهيئة                     |
| خطر إرسال رسالة للشخص الخطأ  | لا يوجد خطر، كل مستلم جديد يبدأ بحقل فارغ |
| React تقوم فقط بــ re-render | React تقوم بــ re-mount                   |

---

إذا تحب، أقدر أرسم لك **diagram بسيط يوضح re-render vs re-mount** لتستوعب الفرق بصرياً أكثر.

هل تحب أعمله؟
