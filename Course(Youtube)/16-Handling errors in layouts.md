# Handling errors in layouts

- An error.tsx file will handle errors for all its nested child segments

- There's an interesting catch with layout.tsx components in the same segment

- The error boundary won't catch errors thrown in layout.tsx within the same
segment because of how the component hierarchy works

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

