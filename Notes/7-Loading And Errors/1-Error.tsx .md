تمام 👍 خلّينا نمشي **فكرة فكرة** متل ما بدك.
نبدأ بأول اثنين بس:

* **01 → Mental Model**
* **02 → error.tsx**

وما ننتقل لغيرهم لحد ما تكون مرتاح فيهم.

---

# 01 → Mental Model (الفكرة الذهنية)

## الفكرة الأساسية

في **Next.js**، كل route أو folder هو **منطقة مستقلة**، وإذا صار خطأ داخلها، عندها صفحة error خاصة فيها.

تخيّلها مثل هيك:

```
app
 ├─ layout.tsx
 ├─ error.tsx
 └─ dashboard
     ├─ layout.tsx
     ├─ error.tsx
     └─ page.tsx
```

## السيناريو

إذا صار error داخل:

```
dashboard/page.tsx
```

مين يمسك الخطأ؟

**dashboard/error.tsx**

مش:

```
app/error.tsx
```

---

## القاعدة الذهبية (احفظها)

**Error يمسكه أقرب error.tsx فوقه.**

يعني النظام يطلع لفوق ليلقى أقرب واحد.

مثل:

```
page → error.tsx → error.tsx أعلى → global-error.tsx
```

---

## مثال واقعي بسيط

### page.tsx

```tsx
export default function Page() {
  throw new Error("Crash!");
}
```

إذا عندك:

```
app/profile/error.tsx
```

رح يظهر:

```
Profile error page
```

---

## ليش هيدا مهم؟

لأنه بيسمحلك تعمل:

* error خاص للـ dashboard
* error خاص للـ auth
* error عام للتطبيق

مش كل errors نفس الشي.

---

# 02 → error.tsx (Local Error Page)

هيدا أهم ملف بهالموضوع.

## شو هو؟

**صفحة تظهر لما يصير error داخل route معيّن.**

---

## وين ينحط؟

مثال:

```
app
 └─ dashboard
     ├─ page.tsx
     └─ error.tsx
```

يعني:

```
dashboard/error.tsx
```

---

## متى يشتغل؟

إذا صار error داخل:

* page.tsx
* component
* fetch
* server action

داخل نفس folder.

---

## مثال حقيقي

### error.tsx

```tsx
"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong</h2>

      <button onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
```

---

## ليش لازم `"use client"` ؟

لأن:

```
reset()
```

هو event (button click)،
والـ events لازم تكون Client Component.

بدون:

```
"use client";
```

ما رح يشتغل.

---

## شو هنّي props؟

### 1) error

```tsx
error.message
```

مثال:

```tsx
<p>{error.message}</p>
```

---

### 2) reset()

هيدا:

**يعيد محاولة تشغيل الصفحة**

مثال:

```tsx
<button onClick={reset}>
  Try again
</button>
```

---

## مثال كامل بسيط

### page.tsx

```tsx
export default function Page() {
  throw new Error("Database failed");
}
```

### error.tsx

```tsx
"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div>
      <h2>Something went wrong</h2>

      <p>{error.message}</p>

      <button onClick={reset}>
        Try again
      </button>
    </div>
  );
};

export default Error;
```

النتيجة:

* الصفحة تكراش
* يظهر error.tsx
* تضغط Try again
* يعيد المحاولة

---

## أهم 3 أشياء تحفظهم عن error.tsx

1. لازم يكون:

```
"use client"
```

2. يمسك errors داخل نفس folder

3. عنده:

```
error
reset
```

---

سؤال ممتاز 👌 ويدل إنك فهمت **Mental Model** صح.
خلّيني جاوبك مباشرة وبوضوح ضمن سياق **Next.js**.

---

# الحالة يلي سألت عنها

عندك structure مثل:

```
app
 └─ dashboard
     ├─ error.tsx
     └─ settings
         └─ page.tsx
```

وسؤالك:

> إذا صار error داخل `settings`، هل `dashboard/error.tsx` بيمسكه؟

## الجواب: نعم ✅

**إذا ما في `settings/error.tsx`،
فـ `dashboard/error.tsx` رح يمسك الخطأ.**

---

# القاعدة العامة

**Next.js يطلع لفوق ليلقى أقرب `error.tsx`.**

يعني:

```
settings → dashboard → app → global-error
```

---

# خلّينا نشوف كل الحالات

## الحالة 1: ما في error داخل settings

```
app
 └─ dashboard
     ├─ error.tsx   ← رح يمسك الخطأ
     └─ settings
         └─ page.tsx
```

إذا صار error داخل:

```
settings/page.tsx
```

النتيجة:

```
dashboard/error.tsx
```

---

## الحالة 2: في error داخل settings

```
app
 └─ dashboard
     ├─ error.tsx
     └─ settings
         ├─ error.tsx   ← الأقرب
         └─ page.tsx
```

إذا صار error داخل:

```
settings/page.tsx
```

النتيجة:

```
settings/error.tsx
```

مش:

```
dashboard/error.tsx
```

---

# تخيّلها مثل شجرة

```
settings
   ↑
dashboard
   ↑
app
   ↑
global-error
```

النظام يطلع لفوق ليلقى أول `error.tsx`.

---

# مثال سريع بالكود

### settings/page.tsx

```tsx
export default function Page() {
  throw new Error("Settings crashed");
}
```

إذا:

```
dashboard/error.tsx
```

موجود
و:

```
settings/error.tsx
```

مش موجود

→ **dashboard/error.tsx رح يظهر**

---

# ملخص سريع تحفظه

* `settings/error.tsx`
  يمسك errors داخل settings

* إذا مش موجود
  `dashboard/error.tsx` يمسك

* إذا مش موجود
  `app/error.tsx` يمسك

* إذا مش موجود
  `global-error.tsx` يمسك

---

## ⚠️ Important Rule
It does NOT catch:

Errors in the same layout.tsx
