```plainText
app/
│
│
├── (marketing)/              // Route Group (does NOT appear in URL)
│   │
│   ├── layout.tsx            // Layout for marketing pages
│   ├── page.tsx              // /  (marketing home page)
│   │
│   ├── revenue/
│   │   └── page.tsx          // /revenue
│   │
│   └── customers/
│       └── page.tsx          // /customers
│
└── (auth)/                   // Route Group for authentication
    │
    ├── layout.tsx            // Auth layout (login/register design)
    │
    ├── login/
    │   └── page.tsx          // /login
    │
    └── register/
        └── page.tsx          // /register
```