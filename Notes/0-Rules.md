# Validation

**Always validate request data before saving to the database — use Zod for type-safe validation.**

```ts
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
})

const result = schema.safeParse(await req.json())
if (!result.success) return Response.json({ error: result.error }, { status: 400 })
```
---

# .env.local:

```plainText
.env,إعدادات عامة لكل البيئات.,غالباً نعم (إلا إذا منعت ذلك).
.env.local,أسرارك الشخصية (مثل API Key لـ Claude).,أبداً لا (يجب أن يبقى فقط على جهازك).
.env.production,إعدادات خاصة بالنسخة المرفوعة أونلاين.,حسب الحاجة (يفضل لا).
```

---

# Diff between relational and non-relational DB

  | وجه المقارنة                 | SQL (قواعد بيانات علائقية)                     | NoSQL (قواعد بيانات غير علائقية)                |
| ---------------------------- | ---------------------------------------------- | ----------------------------------------------- |
| **شكل التخزين**              | جداول منظمة تحتوي على صفوف وأعمدة              | مستندات، مفاتيح-قيم، أعمدة، أو رسوم بيانية      |
| **المرونة (Schema)**         | منخفضة – تتطلب مخطط ثابت (Schema ثابت)         | عالية – يمكن تغيير المخطط بسهولة                |
| **العلاقات (Relationships)** | قوية جداً وتدعم العلاقات المعقدة باستخدام JOIN | محدودة أو تتم إدارتها داخل التطبيق              |
| **التوسعة (Scalability)**    | توسعة رأسية (زيادة قوة الخادم)                 | توسعة أفقية (إضافة خوادم جديدة)                 |
| **الاتساق (Consistency)**    | اتساق قوي (ACID)                               | غالباً اتساق مرن (BASE / Eventually Consistent) |
| **الأداء**                   | ممتاز للعمليات المعقدة والاستعلامات المرتبطة   | ممتاز للبيانات الكبيرة والقراءة/الكتابة السريعة |
| **أمثلة**                    | MySQL، PostgreSQL، SQL Server                  | MongoDB، Redis، Cassandra                       |

---

# Cluster

"A cluster is a collection of nodes that enables automatic data distribution across multiple servers to ensure high availability and scalability whenever needed."

---

# Mongoose  
  - MongoDB is an excellent choice for Next.js projects that need flexibility, scalability, and work with document-oriented data. However, if your project has complex relationships or requires strong transactional guarantees, consider PostgreSQL or MySQL with modern ORMs like Prisma or Drizzle. The "best" choice ultimately depends on your specific project requirements.

  - **Mongoose throws an error if you define the same model twice in the same runtime — always check before creating.**
    ```ts
    export default models.Developer || model("Developer", DeveloperSchema)
    ```

  - MongoDB ObjectIds are not strings by default — always serialize before returning, and convert back when querying.
    ```tsx
      // returning data ✅
    return Response.json(JSON.parse(JSON.stringify(data)))

    // querying by id ✅
    await User.findById(new ObjectId(id))
    ```

    - **Always `await` when storing the connection in `cached` — otherwise it stores a Promise, not the actual connection.**

    ```ts
    cached = await mongoose.connect(uri) // ✅ stores real connection
    cached = mongoose.connect(uri)       // ❌ stores Promise
    ```

--- 

# AuthJS with mongodb

1. المستخدم ضغط "Sign in with GitHub"
2. GitHub تحقق منه ✅
3. GitHub رجّعه لتطبيقك مع معلوماته
4. AuthJS هون بيعمل كل شي لحاله:
  → بيحفظ الـ user بـ MongoDB (بدون password)
  → بيعمل session
  → بيحفظ الـ session بـ cookie
5. المستخدم هلأ داخل ✅

---

# Login and register

1. المستخدم دخل email + password بصفحة الـ register
2. التطبيق تحقق إذا الـ email موجود بـ MongoDB
3. إذا ما في → حفظ الـ user بـ MongoDB (password مشفر بـ bcrypt)
4. المستخدم هلأ مسجل ✅

1. المستخدم دخل email + password بصفحة الـ login
2. التطبيق تحقق من الـ email بـ MongoDB
3. التطبيق تحقق من الـ password بـ bcrypt
4. إذا صح → iron-session عملت session وحفظتها بـ cookie
5. المستخدم هلأ داخل ✅

---

