# Next.js 16 Upgrade Guide (From Next.js 15)

This document is a practical, beginner-friendly reference that explains what changed from **Next.js 15 → Next.js 16**, with short explanations and migration notes.

---

# 1) Baseline Requirements Changed

## What changed

* **Node.js minimum:** `20.9.0` (Node 18 no longer supported)
* **TypeScript minimum:** `5.1`
* **Browser support:**

  * Chrome `111+`
  * Edge `111+`
  * Firefox `111+`
  * Safari `16.4+`

## Why this matters

You must upgrade your runtime and toolchain first, or installs and builds may fail.

---

# 2) Turbopack is Now Default for Dev and Build

## What changed

* `next dev` and `next build` now use **Turbopack** by default.
* `--turbopack` flag is no longer required.

## Migration notes

* If your app uses custom **webpack** config, builds may fail.
* Use:

```bash
next build --webpack
```

To opt out temporarily.

* Turbopack config moved from:

```ts
experimental.turbopack
```

To:

```ts
turbopack
```

---

# 3) Async Request APIs Are Fully Enforced (Breaking)

## What changed

Synchronous compatibility introduced in v15 was removed in v16.

These APIs must now be accessed **asynchronously**:

* `cookies`
* `headers`
* `draftMode`
* `params`
* `searchParams`

## Mental model

Treat request-bound values as **Promises** and `await` them.

---

# 4) Async params/id for Metadata Image Routes (Breaking)

## What changed

In image generating functions:

* `params` and `id` are now **async**

Applies to:

* `opengraph-image`
* `twitter-image`
* `icon`
* `apple-icon`

## Important

`generateImageMetadata` still receives synchronous params.

---

# 5) Async id for Sitemap (Breaking)

## What changed

The `id` passed into `sitemap()` is now **async**.

---

# 6) React 19.2 in App Router

## What changed

Next.js 16 App Router now tracks the React canary line including:

* `ViewTransition`
* `useEffectEvent`
* `Activity`

## What to do

Validate third-party libraries for compatibility with React 19.2.

---

# 7) React Compiler Support is Stable

## What changed

`reactCompiler` moved from experimental to stable.

## Not enabled by default

You must explicitly enable it.

## Setup

Install:

```bash
npm install babel-plugin-react-compiler
```

Then benchmark performance.

---

# 8) Caching APIs Updates

## New / Updated APIs

### revalidateTag

Now supports a **cache life profile** argument.

### updateTag

New API for Server Actions.

Enables:

* read-your-writes behavior

### refresh

Allows Server Actions to refresh the client router.

### Stable APIs

* `cacheLife`
* `cacheTag`

Removed prefix:

```ts
unstable_
```

---

# 9) Routing / Navigation Internals Overhauled

## Improvements

* Layout deduplication during prefetch
* Incremental prefetching

## Important

No code changes required.

You may see:

* More requests
* Fewer transferred bytes

---

# 10) PPR Model Changed: Use cacheComponents

## What changed

Removed:

```ts
experimental_ppr
```

Use instead:

```ts
cacheComponents: true
```

---

# 11) middleware Deprecated → Use proxy

## What changed

File renamed:

```ts
middleware.ts
```

Becomes:

```ts
proxy.ts
```

Export renamed:

```ts
middleware
```

Becomes:

```ts
proxy
```

## Important caveat

`proxy` runs on:

* Node.js runtime only

Not supported:

* Edge runtime

---

# 12) next/image Changes (Breaking + Deprecations)

## Changes

### Local image query strings

Must define:

```ts
images.localPatterns.search
```

### Default values changed

```ts
minimumCacheTTL: 14400 // 4 hours
```

Removed:

```ts
16
```

From:

```ts
imageSizes
```

### Default qualities

```ts
[75]
```

### Security change

Local IP optimization is blocked by default.

Enable manually:

```ts
dangerouslyAllowLocalIP: true
```

### Redirect limit

```ts
maximumRedirects: 3
```

### Deprecated

```ts
next/legacy/image
images.domains
```

Use instead:

```ts
images.remotePatterns
```

---

# 13) next dev and next build Can Run Concurrently

## What changed

Separate output directories:

```bash
.next/dev
```

Lockfile prevents duplicate concurrent runs.

## What to do

Update scripts that depended on old trace paths.

---

# 14) Parallel Route Slots Require default.tsx

## What changed

Build fails if a parallel slot does not include:

```tsx
default.tsx
```

---

# 15) ESLint Flat Config + next lint Removal

## What changed

Removed:

```bash
next lint
```

And:

```ts
eslint config option in next.config
```

## New approach

Use ESLint CLI directly:

```bash
npm run lint
```

---

# 16) Scroll Behavior Override Changed

## What changed

Next.js no longer forces instant scroll during navigation.

## Restore old behavior

Add to:

```tsx
<html>
```

```html
data-scroll-behavior="smooth"
```

---

# 17) Performance and Output Changes

## Improvements

* Faster dev/start performance
* Better terminal UX

## Removed from build output

* Size metrics
* First Load JS metrics

Reason:

They are misleading with React Server Components.

---

# 18) next.config Loading Behavior Changed

## What changed

Config is no longer loaded twice during dev startup.

## Recommendation

Instead of:

```ts
process.argv
```

Use:

```ts
NODE_ENV === "development"
```

Or config phase APIs.

---

# 19) Build Adapters API (Alpha)

## What changed

New adapter hooks for:

* deployment platforms
* build integrations

## Mostly relevant for

* platform authors
* tooling maintainers

---

# 20) Modern Sass API Support

## What changed

Updated:

```bash
sass-loader v16
```

Now uses the modern Sass API.

---

# 21) Removals

## Removed Features

* AMP support (`next/amp`)
* `next lint`
* `serverRuntimeConfig`
* `publicRuntimeConfig`
* `unstable_rootParams`
* `experimental.dynamicIO`

## Use Instead

```env
environment variables
```

---

# Useful Codemods

## Main upgrade codemod

```bash
npx @next/codemod@canary upgrade latest
```

## Other codemods

```bash
remove-experimental-ppr
remove-unstable-prefix
middleware-to-proxy
next-lint-to-eslint-cli
next-async-request-api
```

---

# How To Test This Project End-To-End

## Start development server

```bash
npm run dev
```

## Visit and verify routes

```text
/ 
/async-demo/hello?from=search-param
/async-demo/hello/opengraph-image
/image-query
/cache-demo
/parallel-demo
/sitemap.xml
```

### What each route tests

* `/` → index page with navigation links
* `/async-demo/hello?from=search-param` → async params and searchParams behavior
* `/async-demo/hello/opengraph-image` → async image route props
* `/image-query` → local image query string allowlist
* `/cache-demo` → updateTag and revalidateTag behavior
* `/parallel-demo` → parallel route default slot requirement
* `/sitemap.xml` → async sitemap id flow

---

## Validate production build

```bash
npm run build
```

---

## Validate lint

```bash
npm run lint
```

---

# Codemods To Know (Official)

## Most useful for 15 → 16 migration

```bash
npx @next/codemod@canary upgrade latest
```

## Other relevant codemods

```bash
remove-experimental-ppr
remove-unstable-prefix
middleware-to-proxy
next-lint-to-eslint-cli
next-async-request-api
```

---

# Notes

Some updates are framework-internal or ecosystem-level (for example routing internals and terminal output changes), so they are explained here but not always directly visible through one file diff.

---

# Deep Source References (Local)

You can inspect the official upgrade documentation directly inside node_modules:

```text
node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md
node_modules/next/dist/docs/01-app/02-guides/upgrading/codemods.md
```
