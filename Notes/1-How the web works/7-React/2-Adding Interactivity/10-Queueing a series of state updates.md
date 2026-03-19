ممكن تكتب **note قصيرة ومرتبة** عن هذا المفهوم في **React** هكذا:

---

# Queueing a Series of State Updates

## المشكلة

عندما نكتب:

```js
setScore(score + 1);
setScore(score + 1);
setScore(score + 1);
```

React لا يغيّر `score` مباشرة، لأن **state هي Snapshot**.

يعني أثناء تنفيذ الكود تبقى القيمة نفسها.

مثال:

```js
console.log(score); // 0
setScore(score + 1); // 0 + 1
console.log(score); // 0
setScore(score + 1); // 0 + 1
console.log(score); // 0
```

لذلك النتيجة تصبح:

```
score = 1
```

وليس `3`.

---

# السبب

في React:

* `setState` **لا يغيّر state فورًا**
* بل **يطلب إعادة render**
* لذلك تبقى القيمة القديمة داخل نفس execution.

---

# الحل

نستخدم **updater function**:

```js
setScore(prev => prev + 1);
```

مثال:

```js
setScore(s => s + 1);
setScore(s => s + 1);
setScore(s => s + 1);
```

الآن React يفعل:

```
0 → 1
1 → 2
2 → 3
```

النتيجة:

```
score = 3
```

---

# القاعدة

إذا كانت الـ **state الجديدة تعتمد على الـ state السابقة** استخدم:

```
setState(prev => newValue)
```

وليس:

```
setState(value)
```

---

💡 **مفهوم مهم:**
React يعمل **Queue** لتحديثات الـ state ويطبقها عند الـ render التالي.
