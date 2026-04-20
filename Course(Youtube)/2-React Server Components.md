# React Server Components (RSC)

## Server Components
- By default, Nextjs treats all components as Server components.
- These components can perform server-side tasks like reading files or fetching data directly from a database.
- The trade-off is that they can't use React hooks or handle use interactions.

الترجمة للعربي:

* **بشكل افتراضي، يتعامل Next.js مع جميع المكوّنات على أنها Server Components.**
* **هذه المكوّنات يمكنها تنفيذ مهام على السيرفر** مثل قراءة الملفات أو جلب البيانات مباشرةً من قاعدة البيانات.
* **لكن المقابل (trade-off)** هو أنها **لا تستطيع استخدام React hooks** أو التعامل مع تفاعل المستخدم (user interactions).

## Client Components
- We use "use client"
- While CC can't perform server-side tasks like reading files, they can use hooks and handle user interactions
- CC are the traditional React Components you're already familiar with from previous versions of React

الترجمة للعربي:

* **نستخدم `"use client"`** لتحديد أن المكوّن هو **Client Component**.
* **رغم أن الـ Client Components لا تستطيع تنفيذ مهام على السيرفر** مثل قراءة الملفات، إلا أنها **تستطيع استخدام hooks** والتعامل مع تفاعل المستخدم (user interactions).
* **الـ Client Components هي مكوّنات React التقليدية** التي أنت معتاد عليها من الإصدارات السابقة من React.


## React Server Components and Routing
As we get into routing, you'll see practical examples of both types
Work with server components that wait for certain operations to complete before rendering content
Use client components to take advantage of hooks from the routing module

الترجمة للعربي:

* **مع دخولنا في موضوع الـ routing، سترى أمثلة عملية على كلا النوعين** (Server Components و Client Components).
* **سنعمل مع Server Components** التي تنتظر اكتمال بعض العمليات قبل عرض المحتوى (rendering).
* **وسنستخدم Client Components** للاستفادة من الـ hooks الخاصة بوحدة الـ routing.

