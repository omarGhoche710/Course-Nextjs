# Route handlers

We've learned how to route to pages

The app router lets you create custom request handlers for your routes using a
feature called Route Handlers

Unlike page routes, which give us HTML content, Route Handlers let us build
RESTful endpoints with complete control over the response

Think of it like building a Node + Express app

There's no need to set up and configure a separate server

## Route handlers contd.

Route Handlers are great when making external API requests as well

For example, if you're building an app that needs to talk to third-party services

Route handlers run server-side, our sensitive info like private keys stays secure
  ```privateKey
     # Private Key
     هو: مفتاح سري يُستخدم للاتصال بخدمة خارجية أو لتوقيع بيانات أو للوصول إلى API
  ```
and never reaches the browser.

Route Handlers are the equivalent of API routes in Page router

Next.js supports GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS

If an unsupported method is called, Next.js will return a 405 Method Not Allowed
response.