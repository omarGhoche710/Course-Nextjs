
```ts
// middleware.ts
import { getIronSession } from "iron-session"
import { NextResponse } from "next/server"

export async function middleware(req: Request) {
  const session = await getIronSession(req, NextResponse.next(), sessionOptions)

  // إذا ما في session → رجعه لـ login
  if (!session.userId) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next() // ✅ في session → كمل
}

// حدد أي صفحات تحميها
export const config = {
  matcher: ["/profile/:path*", "/dashboard/:path*", "/api/profile/:path*"]
}
```

---

**الفرق:**

| | بكل route | middleware |
|---|---|---|
| الكود | متكرر بكل مكان | مرة وحدة بس |
| الحماية | يدوي | تلقائي ✅ |
| الأسهل | ❌ | ✅ |

