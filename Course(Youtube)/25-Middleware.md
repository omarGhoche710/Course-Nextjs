# Middleware

Middleware in Next.js is a powerful feature that lets you intercept and control the
flow of requests and responses throughout your application

It does this at a global level, significantly enhancing features like redirects, URL
rewrites, authentication, headers, cookies, and more

- steps:
  - add file [proxy.ts] in you app 
  - Export function
    ```tsx
    export function proxy(request: NextRequest) {}
    ```
  - Config variable: (to tell nextjs that you want this middelware to applied only on profile page)
    ```tsx
    export const config = {
      matcher: "/profile"
    }
    ```
  - Condition: we can use it instead of config variable
    ```tsx 
      if (request.nextUrl.pathname === '/profile')
      return NextResponse.redirect(new URL('/', request.nextUrl));
    ```

Ex:
  - URL:
    ```tsx
      if (request.nextUrl.pathname === '/profile')
      return NextResponse.rewrite(new URL('/', request.nextUrl));
    ```
  - Cookies:
    ```tsx
      const response = NextResponse.next();
      const themePreference = request.cookies.get('theme');
      if (!themePreference) {
        response.cookies.set('theme', 'dark')
      }
      return response;
    ```
  - Haeders:
    ```tsx
      response.headers.set('custom-header', "value-header");
    ```

- Note:
    - rewrites: take you to the new URL but no changing in the url at the http://...  
    - custom-header: custome headers are super useful for passing extra information wich can be used by client side scripts of for debugging.
    - request.nextUrl: 
      ```plaintText 
          إليك ملخص تقني (Note) يشرح منطق استخدام `request.nextUrl` في عملية التوجيه (Redirect) داخل Next.js:

          ---

          ### **الموضوع: فهم استخدام `request.nextUrl` في الـ Redirect**

          **1. المبدأ الأساسي (The Absolute URL Rule):**
          في Next.js، وتحديداً داخل الـ Middleware، دالة `NextResponse.redirect` لا تقبل مساراً نسبياً (مثل `/` أو `/login`). هي تتطلب **رابطاً مطلقاً كاملاً** يتضمن البروتوكول (http/https) واسم النطاق (Domain).

          **2. وظيفة `request.nextUrl`:**
          هذا الكائن يحتوي على كافة تفاصيل الرابط الذي طلبه المستخدم حالياً. عندما نمرره كمعامل ثاني لـ `new URL()`، فنحن نستخدمه كـ **"مرجع للموقع" (Base URL)**.

          **3. تحليل الكود:**
          ```typescript
          return NextResponse.redirect(new URL('/', request.nextUrl));
          ```
          * **`'/'`**: هو المسار الوجهة (Target Path) الذي نريد إرسال المستخدم إليه.
          * **`request.nextUrl`**: هو المصدر (Source) الذي نستخرج منه "الأصل" (مثل `http://localhost:3000` أو `https://your-app.com`).



          **4. لماذا نستخدم هذه الطريقة؟**
          * **تجنب الأخطاء:** منع ظهور خطأ "Relative redirects are not allowed" في بيئة Node.js/Edge Runtime.
          * **الديناميكية:** الكود سيعمل تلقائياً في أي بيئة (Localhost, Staging, Production) دون الحاجة لتغيير الرابط يدوياً.
          * **الحفاظ على البيانات:** كائن `nextUrl` يحمل معه أيضاً معلومات إضافية مثل الـ Query Parameters إذا احتجنا لاستخدامها.

          **5. مثال عملي لما يحدث خلف الكواليس:**
          إذا كان المستخدم يحاول الدخول إلى `https://example.com/admin` وهو غير مسجل:
          1.  المتصفح يرسل طلب لـ `request.nextUrl` (قيمته: `https://example.com/admin`).
          2.  الكود ينشئ رابطاً جديداً: يدمج `/` مع `https://example.com`.
          3.  النتيجة: يتم توجيه المستخدم إلى `https://example.com/`.

          --- 
          *هذه الملاحظة مفيدة جداً عند بناء أنظمة الحماية (Auth Middleware) لضمان انتقال المستخدم بين الصفحات بشكل آمن ومنطقي.*
      ```