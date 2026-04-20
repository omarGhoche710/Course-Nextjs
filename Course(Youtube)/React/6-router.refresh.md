أكيد، خلّينا نختصر **كل شي عن `router.refresh()`** بأبسط شكل ممكن 👇

---

## شو هي `router.refresh()` ؟

**تعيد تحميل بيانات الصفحة الحالية من السيرفر بدون full reload.** 🔄

يعني:

* الصفحة ما تعمل reload كامل
* البيانات تنعاد من السيرفر
* الـ UI يضل سريع

---

## شو بتعمل بالضبط؟

```ts
router.refresh();
```

تعمل:

1. إعادة تنفيذ الـ **page الحالية**
2. إعادة تشغيل كل `fetch` و Server Components
3. تحديث البيانات على الشاشة

---

## على أي صفحة بتأثر؟

> **الـ route الحالي كله**

يعني:

```plaintext
layout.tsx
page.tsx
loading.tsx
fetch data
```

كلهم ينفذوا من جديد.

---

## هل بتعمل reload كامل؟

لا ❌

```ts
window.location.reload();
```

هيدا reload كامل.

أما:

```ts
router.refresh();
```

فقط refresh للبيانات.

---

## متى تستخدمها؟

بعد:

* create
* update
* delete
* server action
* error retry

مثال:

```ts
await deleteUser(id);
router.refresh();
```

---

## أهم ملاحظة

إذا `fetch` cached:

```ts
fetch(url);
```

ممكن:

> `refresh()` يعطي نفس النتيجة

إذا بدك بيانات جديدة دائمًا:

```ts
fetch(url, {
  cache: "no-store",
});
```

---

## جملة تحفظها للامتحان أو الشرح

> **`router.refresh()` re-fetches the current route data without reloading the page.**
