# React Server Component

## The evolution of React

CSR-> SSR -> Suspense for SSR

Suspense for SSR brought us closer to a seamless rendering experience

Challenges

- Large bundle sizes causing excessive downloads for users

- Unnecessary hydration delaying interactivity

- Heavy client-side processing leading to poorer performance

---

## React Server Components (RSC)

React Server Components (RSC) represent a new architecture designed by the
React team

This approach leverages the strengths of both server and client environments to
optimize efficiency, load times, and interactivity

The architecture introduces a dual-component model

- Client Components
- Server Components

This distinction is based not on the components' functionality but rather on their
execution environment and the specific systems they are designed to interact with

--- 

## Client Components

Client Components are the familiar React components we've been using

They are typically rendered on the client-side (CSR) but, they can also be
rendered to HTML on the server (SSR), allowing users to immediately see the
page's HTML content rather than a blank screen

"client components" can render on the server

Optimization strategy

Client components primarily operate on the client but can (and should ) also run
once on the server for better performance

---

## Client Components contd.

Client Components have full access to the client environment, such as the
browser, allowing them to use state, effects, and event listeners for handling
interactivity

They can also access browser-exclusive APIs like geolocation or localStorage,
allowing you to build UI for specific use cases

In fact, the term "Client Component" doesn't signify anything new; it simply helps
differentiate these components from the newly introduced Server Components

---

أكيد، إليك ترجمة وتبسيط هذه المفاهيم التقنية بأسلوب "السهل الممتنع"، لتربط المعلومات الجديدة بالتي شرحناها سابقاً:

---

## **مكونات ريأكت الخادمية (React Server Components - RSC)**

### **تطور ريأكت:**
**CSR (الرندرة عند العميل) ← SSR (الرندرة عند الخادم) ← Suspense للـ SSR**

تقنية الـ **Suspense for SSR** قربتنا جداً من تجربة تحميل سلسة، لكن بقيت هناك تحديات:
* **أحجام ملفات (Bundles) ضخمة:** تجبر المستخدم على تحميل بيانات كثيرة.
* **ترطيب (Hydration) غير ضروري:** يؤخر الوقت الذي يصبح فيه الموقع قابلاً للتفاعل.
* **معالجة ثقيلة عند العميل:** تؤدي إلى أداء ضعيف (خاصة على الأجهزة القديمة).

---

## **بنية الـ RSC الجديدة**
تم تصميم هذه المعمارية بواسطة فريق React لاستغلال نقاط القوة في **الخادم** و**العميل** معاً لتحسين السرعة والتفاعل.

تقدم هذه البنية نظاماً ثنائياً للمكونات:
1.  **مكونات العميل (Client Components)**.
2.  **مكونات الخادم (Server Components)**.

الفرق بينهما ليس في "ماذا يفعل المكون"، بل في **"أين يتم تنفيذه"** ومع أي أنظمة يتفاعل.

---

## **مكونات العميل (Client Components)**
هي نفس مكونات React التقليدية التي نعرفها ونستخدمها دائماً.

* **أين تعمل؟** هي تُنفذ عادةً عند العميل (CSR)، ولكن يمكن أيضاً تحويلها لـ HTML على الخادم (SSR) لكي يرى المستخدم محتوى الصفحة فوراً بدلاً من شاشة بيضاء.
* **استراتيجية التحسين:** تعمل بشكل أساسي عند العميل، ولكنها "تستطيع (ويجب)" أن تعمل مرة واحدة على الخادم لتحسين الأداء الأولي.

---

## **خصائص مكونات العميل (Client Components)**
تتمتع هذه المكونات بصلاحيات كاملة للوصول إلى بيئة المتصفح (Browser)، مما يسمح لها بـ:
* **التفاعل:** استخدام الحالة (`state`) والآثار الجانبية (`effects`) ومستمعي الأحداث (`event listeners`).
* **APIs المتصفح:** الوصول لميزات حصرية مثل الموقع الجغرافي (`geolocation`) أو التخزين المحلي (`localStorage`).

**ملاحظة هامة:** مصطلح "Client Component" ليس شيئاً جديداً تماماً؛ هو فقط اسم أُطلق لتمييز هذه المكونات التقليدية عن "مكونات الخادم" (Server Components) الجديدة.

---

## Server Components

Server Components represent a new type of React component specifically
designed to operate exclusively on the server

And unlike client components, their code stays on the server and is never
downloaded to the client

This design choice offers multiple benefits to React applications

---
## **مكونات الخادم (Server Components)**

تمثل مكونات الخادم نوعاً جديداً من مكونات ريأكت، تم تصميمها خصيصاً لتعمل **حصرياً** على الخادم.

وعلى عكس مكونات العميل، فإن الكود الخاص بها **يبقى على الخادم** ولا يتم تحميله أبداً إلى جهاز العميل (المتصفح).



### **فوائد هذا التصميم:**
هذا الخيار في التصميم يقدم فوائد متعددة لتطبيقات ريأكت:

1.  **حجم أقل للملفات (Zero Bundle Size):** بما أن الكود لا ينزل للمتصفح، فالمستخدم لا يستهلك بياناته في تحميل كود الأجزاء الساكنة.
2.  **أمان أعلى:** يمكنك كتابة كود يتصل بقاعدة البيانات مباشرة أو يستخدم مفاتيح سرية (API Keys) دون الخوف من وصولها للمتصفح.
3.  **أداء أسرع:** الخادم يقوم بكل العمليات المعقدة ويرسل النتيجة النهائية فقط.

---

**ملاحظة بسيطة:** تذكر دائماً أن "مكون الخادم" هو القطعة التي لا تتغير ولا تتحرك، مثل نص المقال أو الهيدر الثابت، ولهذا السبب ليس هناك حاجة لإرسال الكود الخاص بها للمتصفح؛ فالنتيجة (الـ HTML) كافية تماماً.

---

# Benefits of Server Components

- Smaller bundle sizes

  Since Server Components stay on the server, all their dependencies stay there too

  This is fantastic for users with slower connections or less powerful devices since
  they don't need to download, parse, and execute that JavaScript

  Plus, there's no hydration step, making your app load and become interactive
  faster

- Direct access to server-side resources

  Server Components can talk directly to databases and file systems, making data
  fetching super efficient without any client-side processing

  They use the server's power and proximity to data sources to manage
  compute-intensive rendering tasks

- Enhanced security

  Since Server Components run only on the server, sensitive data and logic - like
  API keys and tokens - never leave the server

- Improved data fetching

  Server Components allow you to move data fetching to the server, closer to your
  data source

  This can improve performance by reducing time it takes to fetch data needed for
  rendering, and the number of requests the client needs to make

- Caching

  When you render on the server, you can cache the results and reuse them for
  different users and requests

  This means better performance and lower costs since you're not re-rendering and
  re-fetching data all the time

- Faster initial page load and First Contentful Paint

  By generating HTML on the server, users see your content immediately - no
  waiting for JavaScript to download and execute

- Improved SEO

  Search engine bots can easily read the server-rendered HTML, making your
  pages more indexable

- Efficient streaming

  Server Components can split the rendering process into chunks that stream to the
  client as they're ready
  This means users start seeing content faster instead of waiting for the entire page
  to render on the server

---

## RSC contd.

Server Components handle data fetching and static rendering, while Client
Components take care of rendering the interactive elements

The beauty of this setup is that you get the best of both server and client
rendering while using a single language, framework, and set of APIs

---

## RSC key takeaways

React Server Components offer a new approach to building React apps by
separating components into two: Server Components and Client Components

Server Components run exclusively on the server - they fetch data and prepare
content without sending code to the browser

This makes your app faster because users download less code

However, they can't handle any interactions

Client Components, on the other hand, run in the browser and manage all the
interactive parts like clicks and typing

They can also get an initial server render for faster page loads

---

## RSC and Next.js

"Okay Vishwas, this is all great information about React's rendering evolution, but
how does this connect to Next.js?"

The App Router in Next.js is built entirely on the RSC architecture

All these benefits we've discussed? They're already built into the latest version of
Next.js

Understanding the evolution of React's rendering provides the foundation needed
for you to grasp what we're about to explore as we dive deeper into Next.js