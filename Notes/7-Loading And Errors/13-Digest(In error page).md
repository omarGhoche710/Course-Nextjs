# 🧠 digest — Short Note

**`digest`** هو:

> **ID للخطأ (Error ID)**

---

## ليش موجود؟

* لتتبع الخطأ على السيرفر
* بدون إظهار تفاصيل حساسة للمستخدم

---

## هل دائمًا موجود؟

```ts
digest?: string
```

يعني:

> ممكن يكون موجود
> وممكن لا (optional)

---

## مثال

```ts
error.message = "Database failed"
error.digest  = "abc123"
```

---

## خلاصة سريعة

```text
message → شو الخطأ
digest  → رقم الخطأ
```
