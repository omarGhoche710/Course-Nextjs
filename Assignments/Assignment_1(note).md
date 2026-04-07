نعم، هذا **assignment مبني على التطبيق اللي عم تشتغلوا عليه** (platform للمطورين).
رح أترجملك النص **بالعربي الواضح** مع توضيح بسيط للمصطلحات التقنية 👇

---

# Assignment 1

## بناء الأساس لمنصة مجتمع المطورين باستخدام **Next.js 16**

---

# الهدف (Goal)

هذا الواجب يركّز على **بناء الهيكل الأساسي للواجهة الأمامية (Frontend)** لمنصة مجتمع المطورين باستخدام **Next.js 16**.

الطلاب سيتدرّبون على:

- Routing (التنقل بين الصفحات)
- Nested Routes (مسارات داخل مسارات)
- Dynamic Routes (مسارات ديناميكية)
- Route Groups (تنظيم الصفحات داخل مجموعات)
- هيكل الملفات في Next.js
- الفرق بين:
  - **Server Components**
  - **Client Components**

---

# فكرة المشروع (Project Idea)

أنت تبني منصة حيث يمكن للمطورين:

- تصفح المجتمعات (Communities)
- مشاهدة المنشورات (Posts)
- استكشاف المواضيع (Topics)
- زيارة ملفات المطورين (Profiles)

**مهم:**
في هذا الواجب ستبني فقط:

- الواجهة (UI)
- نظام الصفحات والتنقل (Routing)

**لا يوجد:**

- قاعدة بيانات
- تسجيل دخول

يمكنك استخدام بيانات ثابتة (Static Data).

---

# المتطلبات (Requirements)

## 1️⃣ إنشاء مشروع

أنشئ مشروع جديد باستخدام:

- **Next.js 16**
- **App Router**

---

## 2️⃣ إنشاء الصفحات التالية

لازم تعمل هذه الصفحات:

```
/
 /about
 /communities
 /topics
 /developers
```

يعني:

- Home
- About
- Communities
- Topics
- Developers

---

## 3️⃣ إنشاء Nested Routes داخل Communities

داخل:

```
/communities
```

أنشئ صفحات فرعية مثل:

```
/communities/web-development
/communities/mobile-development
/communities/ui-ux
```

---

## 4️⃣ إنشاء Nested Routes داخل Developers

داخل:

```
/developers
```

أنشئ:

```
/developers/top-rated
/developers/new-members
```

---

## 5️⃣ إنشاء Dynamic Route للمجتمعات

أنشئ:

```
/communities/[slug]
```

مثال:

```
/communities/react
/communities/javascript
```

ويجب أن تعرض:

اسم المجتمع.

---

## 6️⃣ إنشاء Dynamic Route للمطورين

أنشئ:

```
/developers/[username]
```

مثال:

```
/developers/omar
/developers/ahmad
```

ويجب أن تعرض:

معلومات المطور.

---

## 7️⃣ إنشاء Nested Dynamic Route

أنشئ:

```
/developers/[username]/posts/[postId]
```

مثال:

```
/developers/omar/posts/1
```

---

## 8️⃣ استخدام Route Group

يجب استخدام:

Route Group واحد على الأقل.

مثال:

```
(app)
/(marketing)
/dashboard)
```

أو:

```
(app)
(community)
```

فقط لتنظيم الملفات.

---

## 9️⃣ إنشاء Layout مشترك

لازم تعمل:

Shared Layout يحتوي:

- Navbar
- Footer

---

## 10️⃣ Navbar يجب أن يحتوي روابط

```
Home
About
Communities
Topics
Developers
```

---

## 11️⃣ استخدام Server Component

لازم تستخدم **Component واحد على الأقل** من نوع:

Server Component

مثال:

صفحة تعرض بيانات من ملف static.

---

## 12️⃣ استخدام Client Component

لازم تستخدم **Component واحد على الأقل** فيه interactivity.

مثال:

- Join button
- Toggle section
- Show / Hide

---

## 13️⃣ إنشاء ملفات بيانات ثابتة

أنشئ ملفات مثل:

```
data/
  communities.ts
  developers.ts
  posts.ts
```

---

# متطلبات الواجهة (Minimum UI Requirements)

## كل صفحة يجب أن تحتوي:

- Title (عنوان)
- Description (وصف قصير)

---

## صفحة Communities يجب أن تعرض:

```
List of communities
```

مثال:

- Web Development
- Mobile Development
- UI/UX

---

## صفحة Developers يجب أن تعرض:

```
List of developers
```

---

## صفحة Developer Profile يجب أن تعرض:

- username
- role / title
- bio

مثال:

```
Omar
Frontend Developer
Passionate about React and UI design.
```

---

## صفحة Community Details يجب أن تعرض:

- معلومات المجتمع
- زر:

```
Join
```

زر وهمي (Fake button).

---

# القواعد (Rules)

لازم:

- استخدام **Next.js 16**
- استخدام **App Router**
- استخدام **TypeScript**
- تنظيم الملفات بشكل نظيف
- استخدام Dynamic Routes و Nested Routes بشكل صحيح
- وجود:
  - Server Component واحد على الأقل
  - Client Component واحد على الأقل

---

# مهام إضافية (Bonus — اختياري)

إذا عملتها تأخذ نقاط إضافية:

### 1️⃣ Active Link Styling

يعني:

الصفحة الحالية يظهر رابطها بلون مختلف في Navbar.

---

### 2️⃣ إنشاء:

```
not-found.tsx
```

صفحة 404.

---

### 3️⃣ إضافة:

Loading UI

مثل:

```
Loading...
```

---

### 4️⃣ إنشاء:

Reusable Card Component

مثال:

```
CommunityCard
DeveloperCard
```

---

### 5️⃣ استخدام:

Tailwind CSS

لعمل styling بسيط.

---

# التسليم (Submission)

يجب إرسال المشروع كـ:

- GitHub repository
  أو
- ملف مضغوط

ويجب:

- كل routes تعمل
- التنقل بين الصفحات يعمل بشكل صحيح

---

# نعم — هذا assignment مبني على التطبيق الذي تعملونه

خصوصًا أنك اشتغلت سابقًا على:

- routing
- nested routes
- dynamic routes
- layouts
- navbar / footer

فهو نفس الفكرة لكن بشكل structured assignment.

---

فهمت عليك — بدك **فكرة المشروع نفسها** (شو هو المشروع وكيف يشتغل) مش الكود.
خليني أشرحها لك بطريقة بسيطة كأنك تشرحها للدكتور أو للطلاب.

---

# فكرة المشروع (Project Idea)

المشروع هو:

**منصة لمجتمع المطورين (Developer Community Platform)**
حيث يمكن للمطورين الدخول للموقع وتصفح مجتمعات، مشاهدة مواضيع، واستكشاف ملفات مطورين آخرين.

يعني مثل:

- منتدى للمطورين
- أو مجتمع تقني
- أو مكان يجتمع فيه المبرمجون

لكن في هذا الـ assignment:
أنت تبني فقط **الشكل والتنقل بين الصفحات**، وليس نظام حقيقي مع قاعدة بيانات.

---

# ماذا يستطيع المستخدم أن يفعل في المشروع؟

المستخدم يدخل الموقع ويستطيع:

## 1️⃣ رؤية الصفحة الرئيسية (Home)

مثلاً:

- Welcome to DevConnect
- Join developer communities
- Explore topics

---

## 2️⃣ تصفح المجتمعات (Communities)

مثلاً:

- Web Development
- Mobile Development
- UI/UX

وعند الضغط على مجتمع:

يرى معلومات عنه وزر:

**Join**

(زر وهمي فقط)

---

## 3️⃣ استكشاف المواضيع (Topics)

مثلاً:

- JavaScript
- React
- UI Design
- Backend

---

## 4️⃣ مشاهدة المطورين (Developers)

مثلاً:

- Omar — Frontend Developer
- Ahmad — Backend Developer
- Sara — UI Designer

---

## 5️⃣ زيارة ملف مطور (Profile)

عند الضغط على مطور:

يرى:

- username
- role
- bio

مثلاً:

Omar
Frontend Developer
Passionate about React and building UI.

---

## 6️⃣ مشاهدة منشورات المطور

مثلاً:

- Post 1: How to learn React
- Post 2: CSS Tips
- Post 3: Next.js Guide

---

# تخيّل المشروع كأنه موقع بسيط

```
Home
About
Communities
   ├── Web Development
   ├── Mobile Development
   └── UI/UX

Topics

Developers
   ├── Top Rated
   ├── New Members
   └── Omar
         └── Posts
               └── Post 1
```

هذا هو المشروع بالكامل.

---

# ما الهدف من المشروع؟

ليس بناء موقع حقيقي.

الهدف هو أن تتعلم:

- Routing
- Nested Routes
- Dynamic Routes
- Layout
- Server vs Client Components
- File Structure

---

# مثال كيف تشرح المشروع للدكتور

تقدر تقول:

**هذا المشروع عبارة عن منصة لمجتمع المطورين، حيث يمكن للمستخدم تصفح المجتمعات التقنية، استكشاف المواضيع، ومشاهدة ملفات المطورين ومنشوراتهم. المشروع يركز على بناء هيكل الصفحات والتنقل بينها باستخدام Next.js، مع استخدام بيانات ثابتة فقط بدون قاعدة بيانات.**

هذه جملة جاهزة للشرح.

---

# مثال واقعي مشابه للمشروع

المشروع يشبه:

- Stack Overflow
- GitHub Community
- Reddit (للبرمجة)
- Dev.to

لكن نسخة بسيطة.

---

إذا بدك، أقدر بعد ذلك:

- نكتب description رسمي للمشروع
- أو نرسم structure كامل للفولدرات
- أو نحدد features صفحة صفحة

---

إيه، استخدام **`text-gray-500`** للـ `<p>` هو اختيار ممتاز 👌 خصوصًا للـ **description / subtitle** تحت العنوان. هيدا pattern شائع جدًا في تصميم الـ UI لأنه بيخلي العنوان يبرز أكثر ويخفف حدة النص الثانوي.

## مثال على الكود المناسب

```jsx
<div className="space-y-2">
  <h1 className="text-4xl font-bold">
    Welcome to
    <span className="text-[var(--main-color)]">DevConnect</span>
  </h1>

  <p className="text-gray-500">
    Explore communities and topics to connect with developers like you, share
    knowledge, collaborate on projects, and grow your skills in a supportive
    tech environment.
  </p>
</div>
```

---

## ليش `text-gray-500` مناسب؟ 🎯

- بيخلي النص **ثانوي** (secondary text)
- بيحافظ على readability
- بيعطي design احترافي
- مستخدم في أغلب الـ dashboards و landing pages

---

## Rule سريعة تعتمدها في مشروعك **DevConnect**

| العنصر                       | اللون المقترح              |
| ---------------------------- | -------------------------- |
| Title (`h1`)                 | `text-gray-900`            |
| Subtitle / description (`p`) | `text-gray-500`            |
| Links / buttons              | `text-[var(--main-color)]` |
| Secondary info               | `text-gray-400`            |

---

## ملاحظة UX صغيرة

إذا الخلفية **بيضاء**:

- `text-gray-500` → ممتاز
- إذا حسيت النص خفيف زيادة → استخدم `text-gray-600`
- إذا بدك subtle أكثر → `text-gray-400`

---

إذا بدك خطوة تالية طبيعية لتصميمك:
غالبًا هتستخدم:

```jsx
<p className="text-gray-500 max-w-2xl">
```

ليش؟
حتى ما يصير السطر طويل زيادة ويظل شكله مرتب في الـ layout.
