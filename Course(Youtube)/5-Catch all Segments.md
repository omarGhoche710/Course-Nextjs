# Catch-all vs Optional Catch-all — Quick Note

## 1) Catch-all Segment

Folder:

```
[...slug]
```

### Type

```ts
params: {
  slug: string[]
}
```

### Behavior

* slug **always exists**
* always an array
* can be empty only theoretically, but in practice route requires at least one segment

### Examples

```
/docs/a        → slug = ["a"]
/docs/a/b      → slug = ["a", "b"]
```

---

## 2) Optional Catch-all Segment

Folder:

```
[[...slug]]
```

### Type

```ts
params: {
  slug?: string[]
}
```

### Behavior

* slug **may be undefined**
* used when the base route is allowed

### Examples

```
/docs          → slug = undefined
/docs/a        → slug = ["a"]
/docs/a/b      → slug = ["a", "b"]
```

---

# متى نستخدم slug.length vs slug?.length

## استخدم:

```ts
slug.length
```

فقط عندما تكون متأكد أن slug موجودة:

```
[...slug]
```

Example:

```ts
if (slug.length === 2) {
  // safe
}
```

---

## استخدم:

```ts
slug?.length
```

عندما slug ممكن تكون undefined:

```
[[...slug]]
```

Example:

```ts
if (slug?.length === 2) {
  // safe
}
```

---

# لماذا نستخدم ?.

لأن:

```ts
slug = undefined
```

وهذا يسبب error:

```ts
slug.length
```

لكن هذا آمن:

```ts
slug?.length
```

---

# Example:

```js
export default async function Docs({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  }

  if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }

  return <h1>Docs Home page</h1>;
}
```
# Rule تحفظها بسرعة ⭐

```
[...slug]   → slug موجود → استخدم slug.length

[[...slug]] → slug ممكن undefined → استخدم slug?.length
```

---

* **`/docs/page.tsx`** (Simple Route)

  * Use this when the UI is **always the same** regardless of the URL.
  * For example: a static docs page that does not change.

* **`/docs/[[...slug]]/page.tsx`** (Optional Catch-All Route)

  * Use this when the UI **changes based on the URL**.
  * For example: `/docs/intro` displays different content than `/docs/advanced/routing`.
  * The `slug` captures all URL segments, and you can use it to decide what to render.

* **Practical Difference:**

  | URL           | `page.tsx` | `[[...slug]]/page.tsx` |
  | ------------- | ---------- | ---------------------- |
  | `/docs`       | ✅          | ✅                      |
  | `/docs/intro` | ❌          | ✅                      |
  | `/docs/a/b/c` | ❌          | ✅                      |

* **Rule:**

  * If the page UI is **static** → use `page.tsx`
  * If the page UI is **dynamic based on the URL** → use `[[...slug]]/page.tsx`