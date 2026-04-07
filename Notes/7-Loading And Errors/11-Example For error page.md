```js
"use client";

import Link from "next/link";
import { useEffect } from "react";

type PublicErrorPageProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function PublicErrorPage({
  error,
  unstable_retry,
}: PublicErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="py-20 text-center">
      <div className="mx-auto max-w-xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Something went wrong
        </p>

        <h1 className="text-3xl font-bold text-gray-900">
          We could not load this page
        </h1>

        <p className="text-gray-600">
          Please try again. If the issue continues, return to the home page and
          continue browsing.
        </p>

        <div className="flex justify-center gap-3 pt-2">
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
          <p className="text-xs text-gray-400">Ref: {error.digest}</p>
        ) : null}
      </div>
    </section>
  );
}
```