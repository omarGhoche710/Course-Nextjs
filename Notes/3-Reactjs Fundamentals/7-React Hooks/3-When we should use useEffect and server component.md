سؤال ممتاز — وهاد القرار بتاخذه كتير بالشغل الحقيقي 👇

---

## القاعدة البسيطة

```text
بدك تجيب data؟
        ↓
عندك تفاعل مع المستخدم؟
        ↓
     نعم → useEffect
     لا  → Server Component
```

---

## Server Component + async

```text
متى؟
لما البيانات مش مرتبطة بأي تفاعل من المستخدم
```

```tsx
// ✅ بيانات ثابتة — مش محتاج تتغيّر
async function UsersList() {
  const users = await fetch("/api/users");

  return (
    <ul>
      {users.map(user => <li>{user.name}</li>)}
    </ul>
  );
}
```

```text
أمثلة:
- صفحة مقالات
- قائمة منتجات
- بروفايل مستخدم
- نتائج بحث
```

---

## useEffect

```text
متى؟
لما البيانات مرتبطة بتفاعل من المستخدم
```

```tsx
// ✅ البيانات بتتغيّر بناءً على المستخدم
function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]); // 👈 لما المستخدم يغيّر الغرفة
}
```

```text
أمثلة:
- chat بيتغيّر بناءً على اختيار المستخدم
- timer
- بيانات بتتحدّث كل X ثانية
- event listeners
```

---

## الفرق الجوهري

```text
Server Component → بيانات جاهزة قبل ما المستخدم يشوف الصفحة
useEffect        → بيانات بتيجي أو بتتغيّر بسبب المستخدم
```

---

## في الشغل الحقيقي

```text
حاول تستخدم Server Component قدر الإمكان
لأنو:
- أسرع
- ما يحتاج JavaScript بالمتصفح
- أبسط

واستخدم useEffect بس لما مجبور
```
