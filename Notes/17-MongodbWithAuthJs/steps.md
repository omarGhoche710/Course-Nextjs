
---

**خطوة 1 — تثبيت:**
```bash
npm install next-auth@beta
```

---

**خطوة 2 — إعداد AuthJS:**
```ts
// auth.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise), // ← بيحفظ الـ user بـ MongoDB
  providers: [GitHub],                    // ← GitHub login
})
```

---

**خطوة 3 — route واحد بيتعامل مع كل شي:**
```ts
// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth"
export const { GET, POST } = handlers
```

---

**خطوة 4 — زر الـ login بالصفحة:**
```ts
// app/login/page.tsx
import { signIn } from "@/auth"

export default function LoginPage() {
  return (
    <form action={async () => {
      "use server"
      await signIn("github")  // ← بيوجهه لـ GitHub
    }}>
      <button type="submit">Sign in with GitHub</button>
    </form>
  )
}
```

---

**خطوة 5 — تحقق من الـ session:**
```ts
// أي صفحة أو route
import { auth } from "@/auth"

const session = await auth()

if (!session) {
  // ما في session → مش مسجل
}

console.log(session.user) // ← معلومات المستخدم
```

---
