## 🧩 الفرق عن `error.tsx`
| العنصر | `error.tsx` | `global-error.tsx` |
|--------|-------------|---------------------|
| **المكان** | داخل segment معيّن (مثلاً: `app/users/error.tsx`) | تحت جذر المشروع `app/global-error.tsx` |
| **النطاق** | خطأ محلي بصفحة أو مسار محدد | خطأ عام بالتطبيق كله |
| **السلوك** | بيظهر واجهة fallback للـ segment فقط | بيظهر واجهة fallback للتطبيق كامل |
| **HTML** | مجرد React component | لازم صفحة HTML كاملة |

---
