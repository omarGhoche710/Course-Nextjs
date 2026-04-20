# Catch-all vs Optional Catch-all — Tree

```
Routing

├── Catch-all
│   └── [...slug]
│
│       slug: string[]
│       slug always exists
│
│       Use:
│       slug.length
│
│       Examples:
│       /docs/a
│       /docs/a/b
│
│       Code:
│       if (slug.length === 2) {
│           // safe
│       }

│
└── Optional Catch-all
    └── [[...slug]]

        slug?: string[]
        slug may be undefined

        Use:
        slug?.length

        Examples:
        /docs
        /docs/a
        /docs/a/b

        Code:
        if (slug?.length === 2) {
            // safe
        }
```

---

# Quick Memory Rule ⭐

```
[...slug]    → slug موجود
             → slug.length

[[...slug]]  → slug ممكن undefined
             → slug?.length
```
