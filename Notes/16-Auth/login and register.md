تمام! خليني أشرحها خطوة خطوة.

---

**الفكرة الكاملة:**

```
1. المستخدم بيدخل email + password
2. بتتحقق من قاعدة البيانات
3. إذا صح → بتعطيه session
4. بيقدر يدخل الصفحات المحمية
```

---

**خطوة 1 — Register:**
```ts
// app/api/auth/register/route.ts
import bcrypt from "bcrypt"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  await connectMongo()

  // تحقق إذا الـ email موجود
  const exists = await User.findOne({ email })
  if (exists) return Response.json({ error: "Email already exists" }, { status: 400 })

  // احفظ الـ password مشفر
  const hashed = await bcrypt.hash(password, 10)
  await User.create({ email, password: hashed })

  return Response.json({ success: true })
}
```

---

**خطوة 2 — Login:**
```ts
// app/api/auth/login/route.ts
export async function POST(req: Request) {
  const { email, password } = await req.json()

  await connectMongo()

  // تحقق من الـ user
  const user = await User.findOne({ email })
  if (!user) return Response.json({ error: "User not found" }, { status: 404 })

  // تحقق من الـ password
  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) return Response.json({ error: "Wrong password" }, { status: 401 })

  // ✅ صح — احفظ الـ session
  // هون رح نحكي عنها
}
```

---

