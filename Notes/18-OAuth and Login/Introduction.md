يعني تجمع email/password مع GitHub login؟

---

**المشكلة:**
- email/password → بتستخدم **iron-session**
- GitHub login → بتستخدم **AuthJS**

الاثنين عندهم session منفصلة — يعني ما بيتفاهموا مع بعض. 😅

---

**الحل — تستخدم AuthJS للاثنين:**

AuthJS بيدعم email/password كمان عن طريق **Credentials Provider:**

```ts
// auth.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GitHub, // ← GitHub login
    Credentials({ // ← email/password login
      async authorize(credentials) {
        const user = await User.findOne({ email: credentials.email })
        if (!user) return null

        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) return null

        return user // ✅ صح → AuthJS بيعمل session لحاله
      }
    })
  ]
})
```

---
