## CSR (useEffect)

```js
"use client";

import { useEffect, useState } from "react";

// import PostTitle from "@/components/PostTitle";
// import Link from "next/link";
// import React, { Suspense } from "react";

const Page = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  if (!posts) {
    return <div>Loading posts...</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2 className="text2xl font-bold">{post.title}</h2>
        </div>
      ))}
    </div>
  );

export default Page;
```
---

## SSR
```js
// import PostTitle from "@/components/PostTitle";
// import Link from "next/link";
// import React, { Suspense } from "react";

const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await response.json();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default page;
```

## SSG

```js
// import PostTitle from "@/components/PostTitle";
// import Link from "next/link";
// import React, { Suspense } from "react";

const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const posts = await response.json();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
        </div>
      ))}
    </div>
  );

}
export default page;
```

## ISR

```js
// import PostTitle from "@/components/PostTitle";
// import Link from "next/link";
// import React, { Suspense } from "react";

const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 },
  });
  const posts = await response.json();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
        </div>
      ))}
    </div>
  );

}
export default page;
```
