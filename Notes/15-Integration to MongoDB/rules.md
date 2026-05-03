# MongoDB — Important Rules

## 1. Choosing the Right Library

| Situation | Use |
|---|---|
| Need structure, validation, data consistency | **Mongoose** |
| Need max performance & full control | **MongoDB Native Driver** |
| Already using SQL / need strong type safety | **Prisma** (preview support) |
| Using Drizzle | ❌ Not supported — pick another |

> **Rule:** Default to **Mongoose** for most apps. Use **Native Driver** only when raw performance is critical and you don't need schema enforcement.

---

## 2. Schema Design Rules (Mongoose)

- **Always define required fields** — use `required: true` to prevent saving incomplete documents.
- **Always set types explicitly** — `String`, `Number`, `Date`, `Boolean`, etc. Never leave fields untyped.
- **Use `unique: true`** on fields like email to enforce uniqueness at the DB level.
- **Set sensible defaults** — e.g., `default: Date.now` for timestamps so you never have null dates.
- **Add min/max constraints** on numbers where applicable (e.g., `min: 0` for age).

---

## 3. Data Validation Rules

- **Validate before saving** — always use Mongoose's built-in validators or custom validators; never trust raw user input.
- **Never skip validation** — call `.save()` or `Model.create()` (which triggers validation), not raw `insertOne()` with the native driver, unless you're certain about data integrity.
- **Use middleware (hooks)** for cross-cutting concerns (e.g., hashing passwords in a `pre('save')` hook, not in route logic).

---

## 4. Connection Management Rules

- **Never open a new connection per request** — always reuse an existing connection. Opening a new connection on every API call will exhaust the connection pool.
- **Cache the connection** — store the Mongoose connection in a module-level variable (or `global` in Next.js dev mode) so it survives hot reloads.
- **Place DB connection logic in a shared utility file** (e.g., `lib/dbConnect.js`), not inside individual API routes.
- **Always handle connection errors** — wrap `mongoose.connect()` in try/catch and log failures clearly.

---

## 5. Query Rules

- **Project only needed fields** — use `.select('name email')` to avoid fetching unnecessary data.
- **Always paginate large result sets** — never return an unbounded `.find()` without `.limit()`.
- **Use indexes** on fields you query frequently (e.g., `email`, `userId`) to avoid full collection scans.
- **Prefer lean queries** (`.lean()`) when you only need plain JS objects, not full Mongoose documents — significantly faster.
- **Avoid deeply nested population chains** — each `.populate()` is an extra DB round-trip; denormalize data when reads are frequent.

---

## 6. ObjectId Rules

- **Always convert string IDs to ObjectId** before querying: `new mongoose.Types.ObjectId(id)`.
- **Validate the ID format first** — an invalid ObjectId string will throw; check with `mongoose.Types.ObjectId.isValid(id)` before using it.
- **Never expose raw `_id` directly in API responses** without intentional serialization — convert to string with `.toString()`.

---

## 7. When to Use MongoDB vs SQL

| Use MongoDB | Use PostgreSQL/MySQL |
|---|---|
| Flexible / unstructured data | Complex relational data (joins) |
| Rapid prototyping | ACID transactions across documents |
| Horizontal scaling needed | Financial / high-consistency systems |
| JSON-heavy data (Next.js native) | Team is SQL-experienced |
| Real-time dashboards / chat apps | Strong auto-generated type safety needed |

> **Rule:** Don't use MongoDB just because it's popular. Match the database to the data model.

---

## 8. Security Rules

- **Never store plain-text passwords** — always hash with bcrypt (inside a `pre('save')` hook).
- **Sanitize all user inputs** — MongoDB is vulnerable to NoSQL injection if queries are built from raw user data (e.g., `{ $where: ... }`).
- **Store the connection string in environment variables only** — never hardcode `MONGODB_URI` in source code.
- **Restrict DB user permissions** — the app's DB user should only have the minimum required permissions (read/write, not admin).
- **Always validate ObjectIds** before using them in queries to prevent unexpected query behavior.

---

## 9. Next.js-Specific Rules

- **Never call MongoDB directly from client components** — all DB access must happen in Server Components, API Routes, or Server Actions.
- **Use ISR / SSR** for data that changes periodically; don't fetch from MongoDB on every client render.
- **Handle connection pooling carefully in serverless** — Next.js API routes are stateless; always check if a connection exists before creating a new one.
- **Don't expose Mongoose models or DB logic in client bundles** — keep all model files under `lib/` or `models/` and import only from server-side code.