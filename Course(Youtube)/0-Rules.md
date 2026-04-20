* Handling the /docs Base Route
  - We should use `[[...slug]]` instead of `[...slug]` if we want `/docs` to work. If we use `[...slug]`, opening `/docs` will result in **Not Found**.

* Next.js Docs Routing — Which to Use?
  - If the page UI is **static** → use `page.tsx`
  - If the page UI is **dynamic based on the URL** → use `[[...slug]]/page.tsx`


* **Name React components using PascalCase, and name their files using kebab-case.** ✅
  - product-card.tsx   // file (kebab-case)
  - ProductCard        // component (PascalCase)

* URL Underscore:
  - if you actially want an underscore in your URL, use "%5F
  instead. That's just the URL-encoded version of and underscore.s

* Layouts:
  - layout.tsx is required — deleting it will cause Next.js to recreate it automatically.

* How Metadata Works in Next.js

  1. Metadata is read from top to bottom (Root → Page)
  2. Metadata from different levels is merged together
  3. Page metadata overrides layout metadata when properties match

* Important Note About Metadata in Next.js
  - Metadata cannot be used in Client Components.

  - You must define metadata only in Server Components,
  - such as layout.tsx or page.tsx files without "use client".

* Important Note About Link Component
  - we can use a prop ["replace"] that replace the current url by the url cliked 

* Client Component and async:
  - we can't use aysnc with client component, if we wand to get params or searchParams without await we can use "use". Ex: use(params).

* Redirect Vs useRouter
  - Server  → redirect()
  - Client  → useRouter()

* Template File:
  - layout   → يحافظ على state بين الصفحات
  - template → يعيد ضبط state عند كل navigation

* Special Files:
  - page.tsx
  - layout.tsx
  - template.tsx
  - not-found.tsx
  - loading.tsx
  - error.tsx

* Error Handle:
  - To see the error in production write npm run build
  then npm run start.
  - ErrorBoundary must be client component.

* Component hierarchy:
```plainText
  <Layout>
      <Template>
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <ErrorBoundary fallback={<NotFound />}>
              <Page />
            </ErrorBoundary>
        </Suspense>
      </ErrorBoundary>
    </Template>
  </Layout>
```

* Router Refresh  
  - **`router.refresh()` re-fetches the current route data without reloading the page.**

* Global Error
  - works only in production mode
  - requires html and body tags to be rendered

* Parallel Routes:
  - If one slot is dynamic, all slots at that level must be dynamic
  - Slot are not route segment and don't affect your url structure.
  - children prop is actually an implicit slot, that doesn't need its own folder, complex-dashboard/page.tsx is the same as complex dashboard/@children/page.tsx
  - Slots are combined with the regular Page component to form the final page

* Import Type:
  - Use import type when only referencing a name for type-checking (e.g., req:        NextRequest), as it is erased during compilation.
    Use a regular import when you need the runtime value, such as instantiating a class with new NextRequest().
    Would you like to see a one-line example of how to combine both?

* Default Content Type:
  - By default content type is text/plain