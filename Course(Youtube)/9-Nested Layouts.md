# Nested Layouts:

```plainText
|___products/
      |___[productId]/
        |___layout.tsx
        |___page.tsx
```

# Ex:

```js
export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <h2>Featured products</h2>
    </>
  );
}
```