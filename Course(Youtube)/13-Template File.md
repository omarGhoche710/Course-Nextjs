أكيد، هاي ترجمة واضحة للنص:

---

# `template.js`

**آخر تحديث: 8 أبريل 2026**

ملف **template** يشبه **layout** من حيث أنه يغلّف (`wrap`) صفحة أو layout.
لكن على عكس **layouts** التي تبقى موجودة بين التنقلات (`routes`) وتحافظ على الحالة (`state`)، فإن **templates** يتم إعطاؤها **مفتاحًا فريدًا (unique key)**، مما يعني أن **Client Components** الموجودة بداخلها يتم **إعادة ضبط حالتها (reset state)** عند التنقل بين الصفحات.

---

## يتم استخدام `template` عندما تحتاج إلى:

### 1) إعادة مزامنة `useEffect` عند التنقل

```text
يعني useEffect يشتغل من جديد كل مرة تنتقل فيها لصفحة أخرى.
```

---

### 2) إعادة ضبط حالة (`state`) مكونات Client الفرعية عند التنقل

مثال:

```text
حقل إدخال (input field) يتم مسح قيمته عند الانتقال لصفحة أخرى.
```

---

### 3) تغيير السلوك الافتراضي للإطار (framework)

مثال:

```text
حدود Suspense داخل layout تعرض fallback فقط عند أول تحميل،
بينما داخل template تعرض fallback في كل عملية تنقل.
```

---

# Note صغيرة تحفظها

```text
layout   → يحافظ على state بين الصفحات
template → يعيد ضبط state عند كل navigation
```

# Mention:

- You can actually use both layout.tsx and template.tsx
together, in this case the layout renders first and then its children are replaced by template components output.
Templates are not common requirement and layouts should be your go-to for shared UI.