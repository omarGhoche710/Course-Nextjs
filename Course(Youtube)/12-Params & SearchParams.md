# params and searchParams

For a given URL,<b>

- params is a promise that resolves to an object containing the dynamic route
parameters (like id)

- searchParams is a promise that resolves to an object containing the query
parameters(like filters and sorting)

- While page.tsx has access to both params and searchParams, layout.tsx only has
access to params

## EX:

```ts
"use client";

import Link from "next/link";
import { use } from "react";

const NewsArticle = ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) => {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div>
      <h1>News articles {articleId}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`} className="mr-4">
          English
        </Link>
        <Link href={`/articles/${articleId}?lang=fr`} className="mr-4">
          French
        </Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      </div>
    </div>
  );
};

export default NewsArticle;
```