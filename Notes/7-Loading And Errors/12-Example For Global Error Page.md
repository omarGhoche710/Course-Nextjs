```js
"use client";

import Link from "next/link";
import { useEffect } from "react";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function GlobalError({
  error,
  unstable_retry,
}: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-white px-6 py-20 text-gray-900">
        <main className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Application error
          </p>

          <h1 className="mt-3 text-3xl font-bold">Something went wrong</h1>

          <p className="mt-3 text-gray-600">
            We hit an unexpected issue while loading this view. Please try
            again, or return to the home page.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => unstable_retry()}
              className="rounded-lg bg-black px-4 py-2 text-white"
            >
              Try again
            </button>

            <Link
              href="/"
              className="rounded-lg bg-gray-200 px-4 py-2 text-gray-800"
            >
              Back home
            </Link>
          </div>

          {error.digest ? (
            <p className="mt-4 text-xs text-gray-400">Ref: {error.digest}</p>
          ) : null}
        </main>
      </body>
    </html>
  );
}
```