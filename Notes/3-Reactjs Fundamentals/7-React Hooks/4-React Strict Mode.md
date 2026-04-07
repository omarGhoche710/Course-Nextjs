---

## React Strict Mode & useEffect

بالـ **development mode**، React بتعمل:
1. Mount المكون
2. Unmount (cleanup)
3. Re-mount تاني

**وهيك بتشوف الـ log مرتين** — مش bug، هي by design عشان تتأكد إن الـ cleanup تبعتك صح

```
Connecting...     ← Mount أول
Disconnected...   ← Strict Mode Unmount
Connecting...     ← Strict Mode Re-mount
```

> بالـ **production** بتتصل مرة وحدة بس ✅

---

## Strict Mode مش بس مع useEffect

Strict Mode بتعمل نفس الشي مع **كل مكون** — مش بس لما يكون في `useEffect`

بتعمل mount، unmount، mount تاني عشان تختبر إنو المكون شغال صح بكل حالة

بس اللي **بتشوفه بالـ console** بيكون واضح أكتر لما يكون في `useEffect` لأنك عم تعمل side effects