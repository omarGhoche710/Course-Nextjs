تمام، هذي ملاحظة مختصرة وواضحة عن أفضل ممارسات **Next.js 13 + TypeScript**:

---

# 📝 Note: ملاحظات عن Components و TypeScript في Next.js 13

1️⃣ **Components خارج مجلد `app/`**

* يفضل يكون عندك مجلد مستقل للـ Components مثل:

```
components/
 ├── Header.tsx
 ├── Footer.tsx
 ├── Button.tsx
```

* السبب:

  * فصل الكود عن صفحات ومجلد `app/`
  * يسهل إعادة الاستخدام والتنظيم

---

2️⃣ **استخدام `.tsx` وليس `.jsx`**

* TypeScript يتطلب ملفات **`.tsx`** للـ React components
* `.tsx` يسمح لك بكتابة JSX مع **Type Checking**

مثال:

```tsx id="u7qlm2"
type ButtonProps = {
  label: string;
  onClick: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

* لو استخدمت `.jsx` → **TypeScript لن يتحقق من الأنواع**
* `.tsx` يعطيك حماية أفضل ويكشف الأخطاء قبل التشغيل

---

3️⃣ **الهيكل المقترح للمشروع مع app و components**

```
app/
 ├── layout.tsx
 ├── page.tsx
 └── contact/
      ├── layout.tsx
      └── page.tsx

components/
 ├── Header.tsx
 ├── Footer.tsx
 ├── ContactForm.tsx
 └── Map.tsx
```

✅ **النتيجة:**

* صفحات ومجلد `app/` خاص بالـ Routing و Layouts
* Components خارجه لإعادة الاستخدام
* كل شيء منظم وواضح

---

💡 **الخلاصة:**

* Components خارج `app/` → modular + reusable
* ملفات `.tsx` → TypeScript + JSX + type checking
* هذا أسلوب محترف لبناء مشاريع Next.js 13 قوية ومنظمة

---

