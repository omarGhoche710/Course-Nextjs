# Handling global errors

If an error boundary can't catch errors in the layout.tsx file from the same
segment, what about errors in the root layout? It doesn't have a parent segment - how do we handle those errors?

- Next.js provides a special file called global-error.tsx that goes in your root app
directory

- This is your last line of defense when something goes catastrophically wrong at
the highest level of your app

- works only in production mode
- requires html and body tags to be rendered
