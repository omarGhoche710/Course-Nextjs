تمام! 

**شو هي الـ Session؟**

بعد ما المستخدم عمل login — المتصفح لازم يتذكر إنه دخل. هيدا اسمه session.

```
بدون session:
→ عمل login ✅
→ راح لصفحة ثانية ❌ ما بيعرف مين هو
→ لازم يعمل login كل مرة 😅

مع session:
→ عمل login ✅
→ راح لصفحة ثانية ✅ بيعرف مين هو
→ ما محتاج يعمل login مرة ثانية 🙂
```

---

**كيف بتشتغل؟**

```
1. المستخدم عمل login
2. الـ server بيعمل session وبيحفظها
3. بيبعت الـ session للمتصفح كـ cookie
4. المتصفح بيبعث الـ cookie مع كل request تلقائياً
5. الـ server بيقرأ الـ cookie ويعرف مين المستخدم
```

---

تمام! هلأ نطبقها بالكود باستخدام **iron-session**:

---

**خطوة 1 — تثبيت المكتبة:**
```bash
npm install iron-session
```

---

**خطوة 2 — إعداد الـ session:**
```ts
// lib/session.ts
import { SessionOptions } from "iron-session"

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET as string, // كلمة سر طويلة
  cookieName: "my-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
}
```

---

**خطوة 3 — Login + حفظ الـ session:**
```ts
// app/api/auth/login/route.ts
import { getIronSession } from "iron-session"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = await User.findOne({ email })
  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) return Response.json({ error: "Wrong password" }, { status: 401 })

  // احفظ الـ session
  const session = await getIronSession(req, Response, sessionOptions)
  session.userId = user._id.toString()
  await session.save() // ← بيبعت الـ cookie للمتصفح

  return Response.json({ success: true })
}
```

---

**خطوة 4 — تحقق من الـ session بأي route:**
```ts
// app/api/profile/route.ts
export async function GET(req: Request) {
  const session = await getIronSession(req, Response, sessionOptions)

  if (!session.userId) {
    return Response.json({ error: "Not logged in" }, { status: 401 })
  }

  const user = await User.findById(session.userId)
  return Response.json(user)
}
```

---
