/settings.json
---

## 1️⃣ Formatter و Format on Save

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
```

* كل الملفات يتم تنسيقها تلقائياً عند الحفظ باستخدام **Prettier**
* ممتاز للحفاظ على **consistency** بالكود

---

## 2️⃣ Code Actions on Save (ESLint + imports)

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.addMissingImports": "explicit"
}
```

* `"source.fixAll.eslint"` → يصلح كل الأخطاء القابلة للإصلاح من ESLint تلقائياً
* `"source.addMissingImports"` → يضيف أي imports ناقصة تلقائياً
* `"explicit"` يعني أن VS Code لن يفعلها تلقائياً إلا عند الحفظ (واضح للمستخدم)

---

## 3️⃣ إعدادات Prettier

```json
"prettier.tabWidth": 2,
"prettier.useTabs": false,
"prettier.semi": true,
"prettier.singleQuote": false,
"prettier.jsxSingleQuote": false,
"prettier.trailingComma": "es5",
"prettier.arrowParens": "always"
```

* `tabWidth: 2` → المسافة 2 space لكل indent
* `useTabs: false` → لا تستخدم tabs، فقط spaces
* `semi: true` → نقط فاصلة في نهاية كل statement
* `singleQuote: false` → تستخدم double quotes
* `jsxSingleQuote: false` → double quotes في JSX أيضاً
* `trailingComma: es5` → فاصلة إضافية في نهاية objects/arrays إذا ممكن
* `arrowParens: always` → دائماً ضع الأقواس حول param في arrow functions

> ملخص: كود مرتب وجاهز للتعاون الجماعي

---

## 4️⃣ Formatter لكل نوع ملف

```json
"[json]": {"editor.defaultFormatter": "esbenp.prettier-vscode"},
"[typescript]": {"editor.defaultFormatter": "esbenp.prettier-vscode"},
"[typescriptreact]": {"editor.defaultFormatter": "esbenp.prettier-vscode"},
"[javascriptreact]": {"editor.defaultFormatter": "esbenp.prettier-vscode"}
```

* هذا يضمن **Prettier** هو الافتراضي لكل أنواع الملفات المهمة في مشروع Next.js/React/TS

---

## 5️⃣ TypeScript SDK

```json
"typescript.tsdk": "node_modules/typescript/lib"
```

* يستخدم نسخة TypeScript الموجودة في المشروع وليس نسخة VS Code الافتراضية
* مهم لتوافق مع إعدادات Next.js و ESLint

---

## 6️⃣ Files exclude (إخفاء الملفات)

```json
"files.exclude": {
    "**/.next": true,
    "**/node_modules": true,
    "**/next-env.d.ts": true,
    "**/eslint*": true,
    "**/prettier*": true,
    "**/tsconfig*": true,
    "**/postcss*": true,
    "**/README*": true,
    "**/.gitignore": true,
    "**/next.config*": true
}
```

* يخفي الملفات والمجلدات غير المهمة في **Explorer**
* يعطي **واجهة نظيفة** للمشروع
* لا يؤثر على عمل المشروع أو Git

---

## ✅ الخلاصة

* **تنسيق الكود تلقائياً** → prettier + ESLint
* **إدارة imports تلقائياً**
* **نظام مسافات واضح ومحدد**
* **ملفات غير مهمة مخفية** في VS Code
* مناسب تماماً لمشاريع Next.js + React + TypeScript

---

إذا بدك، أقدر أعمللك **version مختصر للنوتس العملية** بحيث تستخدمها كمرجع سريع لكل مشروع جديد.
هل تحب أعملها لك؟
