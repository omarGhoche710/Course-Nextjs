أكيد، عملتلك **note مختصرة وواضحة** تقدر تحفظها أو تحطها بملف ملاحظاتك.

# Difference Between params vs searchParams (Next.js)

## 1) params

### What is it?

Value that is part of the **URL path itself**.

### Where does it appear?

Before the `?` in the URL.

### Example URL

```
/products/123
```

### Value

```
123 → params.id
```

### When do we use params?

Use **params** when:

* You navigate to a different page
* You have an ID
* You have a slug
* The value is required to load the page

### Common Use Cases

```
/products/123
/users/42
/blog/react-hooks
/categories/electronics
```

### Example Code

```ts
export default async function Page({ params }) {
  const { id } = await params

  return <div>Product {id}</div>
}
```

---

## 2) searchParams

### What is it?

Value that is added as an **option or filter** to the page.

### Where does it appear?

After the `?` in the URL.

### Example URL

```
/products?page=2
```

### Value

```
page=2 → searchParams.page
```

### When do we use searchParams?

Use **searchParams** when:

* You search inside the same page
* You filter data
* You paginate results
* You sort items
* You switch tabs

### Common Use Cases

```
/products?search=iphone
/products?page=2
/products?sort=price
/products?category=phones
/products?tab=reviews
```

### Example Code

```ts
export default async function Page({ searchParams }) {
  const { page } = await searchParams

  return <div>Page {page}</div>
}
```

---

## Example Using Both Together

URL:

```
/products/123?page=2
```

Meaning:

```
123      → params.id
page=2   → searchParams.page
```

Code:

```ts
export default async function Page({ params, searchParams }) {
  const { id } = await params
  const { page } = await searchParams

  return (
    <div>
      Product {id} — Page {page}
    </div>
  )
}
```

---

## Quick Rule to Remember

```
Before ?  → params
After ?   → searchParams
```

