# Optional Property in TypeScript — Note

## 1) معنى `?` في TypeScript

```ts
slug?: string[]
```

تعني:

```ts
slug: string[] | undefined
```

يعني الـ property:

* ممكن تكون موجودة
* أو تكون undefined
* أو ما تكون موجودة أصلاً

---

## 2) هل `| undefined` ضرورية مع `?`

```ts
slug?: string[] | undefined
```

❌ **زيادة (redundant)**
لأن `?` already includes `undefined`.

الأفضل والأبسط:

```ts
slug?: string[]
```

---

## 3) الفرق المهم

### Optional property

```ts
slug?: string[]
```

ممكن:

```ts
{}
```

---

### Required property لكن ممكن تكون undefined

```ts
slug: string[] | undefined
```

لازم تكون موجودة:

```ts
{ slug: undefined }
```

---

## 4) في Next.js — Optional Catch-all

Folder:

```
[[...slug]]
```

Type:

```ts
params: {
  slug?: string[]
}
```

Example values:

```
/shop        → slug = undefined
/shop/a      → slug = ["a"]
/shop/a/b    → slug = ["a", "b"]
```

---

## أهم نقطة تحفظها ⭐

```
?  = optional
?  already includes undefined
```
