# Notes — Speakers & Talks in Tech Events Project

## 1) Speaker (المتحدث)

**Speaker = الشخص اللي بيعطي session أو محاضرة داخل event.**

### Properties of Speaker:

* **id** → رقم مميز للشخص
* **username** → اسم المستخدم (للروابط)
* **name** → الاسم الكامل
* **title** → الوظيفة أو اللقب المهني
* **bio** → نبذة عن الشخص وخبرته

### Example:

```ts
export const speakers = [
  {
    id: 1,
    username: "khaled",
    name: "Khaled Frayji",
    title: "Next.js Mentor",
    bio: "Passionate about teaching web development and modern React frameworks.",
  }
];
```

### Meaning:

* **title** → وظيفة الشخص
* **bio** → معلومات عن الشخص

---

## 2) Talk / Session (المحاضرة)

**Talk = الموضوع أو النصائح أو الشرح اللي بيقدمه الـ speaker.**

### Properties of Talk:

* **id** → رقم مميز للمحاضرة
* **slug** → رابط الصفحة
* **title** → عنوان المحاضرة
* **content** → شرح عن المحاضرة
* **speakerId / username** → الشخص اللي بيعطيها

### Example:

```ts
export const talks = [
  {
    id: 1,
    username: "khaled",
    slug: "nested-routes-nextjs",
    title: "Mastering Nested Routes in Next.js",
    content:
      "A practical talk about organizing large applications with the App Router.",
  }
];
```

### Meaning:

* **title** → اسم المحاضرة
* **content** → تفاصيل المحاضرة

---

## 3) Relationship Between Speaker and Talk

```
Speaker (الشخص)
      ↓
Talk / Session (الموضوع)
```

### Example:

```
Speaker: Khaled Frayji
Title: Next.js Mentor

Talk: Mastering Nested Routes in Next.js
Content: شرح عن تنظيم التطبيقات الكبيرة
```

---

## 4) الفرق بين Title في Speaker و Title في Talk

```
Speaker.title = وظيفة الشخص
Talk.title    = عنوان المحاضرة
```

### Example:

```
Speaker.title → Mobile Engineer
Talk.title    → Building Better Mobile Experiences
```

---

## 5) الفرق بين Bio و Content

```
bio     = معلومات عن الشخص
content = معلومات عن المحاضرة
```

### Example:

```
bio:
"Focused on building high-quality cross-platform apps."

content:
"A talk about performance and UX in mobile apps."
```

---

## 6) Structure المشروع

```
Event
   ├── Speakers
   └── Talks
```

---

## 7) Rule تحفظها

```
Speaker = الشخص
Talk    = المحاضرة

title (speaker) = وظيفة
title (talk)    = اسم المحاضرة

bio     = معلومات عن الشخص
content = معلومات عن المحاضرة
```
