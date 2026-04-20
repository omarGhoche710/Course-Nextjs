```plainText
app/
│
├── layout.tsx            // Root layout (required)
├── page.tsx              // Home page
│
├── products/
│   │
│   ├── page.tsx          // /products (list all products)
│   ├── layout.tsx        // Layout for all products pages
│   │
│   ├── create/
│   │   └── page.tsx      // /products/create
│   │
│   └── [productId]/
│       │
│       ├── layout.tsx    // Layout for single product pages
│       ├── page.tsx      // /products/:productId
│       │
│       ├── edit/
│       │   └── page.tsx  // /products/:productId/edit
│       │
│       └── reviews/
│           └── page.tsx  // /products/:productId/reviews
│
└── api/
    └── products/
        ├── route.ts      // GET, POST /api/products
        └── [productId]/
            └── route.ts  // GET, PUT, DELETE /api/products/:productId
```