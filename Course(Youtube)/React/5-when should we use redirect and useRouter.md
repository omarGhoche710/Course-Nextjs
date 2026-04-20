أكيد 👍
هاي **note صغيرة وواضحة** عن متى نستخدم `redirect` ومتى نستخدم `useRouter`.

---

# 📝 When to use `redirect` vs `useRouter`

```ts id="f6c1az"
redirect("/login");   // use in Server Components / Server Actions (server-side)

router.push("/login"); // use in Client Components (client-side)
```

---

## Use `redirect` when:

```text id="2s8t8n"
- inside Server Component
- inside Server Action
- inside API / route handler
- protecting routes (auth)
- before rendering the page
```

Example:

```tsx id="m1p9xg"
if (!user) {
  redirect("/login");
}
```

---

## Use `useRouter` when:

```text id="6k2s3f"
- inside Client Component
- after button click
- after form submit
- after user interaction
```

Example:

```tsx id="q7h4vd"
router.push("/dashboard");
```

---

# Quick Rule (احفظها)

```ts id="n9x2kq"
Server  → redirect()
Client  → useRouter()
```
