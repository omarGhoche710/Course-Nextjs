# MongoDB Notes

## What Should We Use for MongoDB?

1. **Mongoose** – Best if you want to add structure to MongoDB with schemas, validation, and an Object Data Model (ODM). Very popular and suited for complex apps that need strong data consistency.

2. **MongoDB Native Driver** – Ideal for high flexibility and direct control over MongoDB without added layers. Simple and has the best performance; perfect for lightweight or high-performance apps that don't need strict data rules.

3. **Prisma ORM** – Primarily designed for SQL databases but supports MongoDB (in preview). Offers powerful type safety and an intuitive schema interface, but isn't as mature for MongoDB as it is for SQL.

4. **Drizzle ORM** – Does not support MongoDB yet.

---

## Mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your application data, making it easier to work with MongoDB by adding structure and validation.

### Key Features

- **Schema Definition:** Define the structure of your documents with schemas, including data types, default values, and required fields.
- **Data Validation:** Built-in validators and custom validation logic to ensure data integrity before saving to the database.
- **Middleware (Hooks):** Pre and post hooks for operations like save, validate, remove, and more, allowing you to run custom logic at specific points.
- **Query Building:** Chainable query API that makes it easier to build and execute MongoDB queries.
- **Population:** Reference documents in other collections and populate them automatically, similar to SQL joins.
- **Plugins:** Extend functionality with plugins for common features like timestamps, pagination, and more.

### Installation

```bash
npm install mongoose
```

### Basic Example

```js
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp');

// Define a schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0 },
  createdAt: { type: Date, default: Date.now }
});

// Create a model
const User = mongoose.model('User', userSchema);

// Create and save a document
const newUser = new User({
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
});

newUser.save()
  .then(user => console.log('User saved:', user))
  .catch(err => console.error('Error:', err));
```

---

## Is MongoDB the Best Choice for Next.js Projects?

Whether MongoDB is the best choice depends on your specific requirements, data structure, and use case.

### When MongoDB is a Great Choice

- **Flexible, unstructured data:** If your data doesn't fit neatly into tables with fixed schemas, MongoDB's document-based approach is ideal.
- **Rapid prototyping:** MongoDB allows you to iterate quickly without worrying about strict schema definitions upfront.
- **Scalability needs:** MongoDB scales horizontally well, making it suitable for applications expecting high growth.
- **JSON-like data:** Since Next.js works with JavaScript/TypeScript and JSON naturally, MongoDB's BSON format integrates seamlessly.
- **Real-time applications:** MongoDB works well with applications that need real-time data updates, like dashboards or chat apps.

### When You Might Consider Alternatives

- **Complex relationships:** If your data has many relationships (e.g., e-commerce with users, orders, products, reviews), a relational database like PostgreSQL might be better.
- **Strong data consistency:** For financial applications or systems requiring ACID transactions across multiple documents, SQL databases are often more reliable.
- **Team familiarity:** If your team is more experienced with SQL, using PostgreSQL with Prisma or Drizzle might be more productive.
- **Type safety:** While Mongoose provides some type safety with TypeScript, SQL databases with Prisma offer stronger, auto-generated type safety.

### Popular Alternatives for Next.js

- **PostgreSQL with Prisma:** Excellent type safety, great developer experience, and strong for relational data.
- **PostgreSQL with Drizzle:** Lightweight, type-safe ORM with excellent performance.
- **Supabase:** PostgreSQL-based platform with built-in auth, real-time subscriptions, and storage.
- **PlanetScale:** MySQL-compatible serverless database with excellent scaling capabilities.

### Conclusion

MongoDB is an excellent choice for Next.js projects that need flexibility, scalability, and work with document-oriented data. However, if your project has complex relationships or requires strong transactional guarantees, consider PostgreSQL or MySQL with modern ORMs like Prisma or Drizzle. The "best" choice ultimately depends on your specific project requirements.

---

## MongoDB + Next.js Interview Questions

### Basic Level

**1. What is MongoDB and why would you use it with Next.js?**
> MongoDB is a NoSQL document-based database that stores data in JSON-like documents (BSON format). It's a great fit for Next.js because both work naturally with JavaScript/JSON, making data flow seamless between the database and the application. MongoDB's flexible schema allows for rapid development and iteration, which aligns well with Next.js's fast development experience.

**2. How do you connect MongoDB to a Next.js application?**
> You can connect MongoDB to Next.js using either the MongoDB Native Driver or Mongoose. Typically, you create a database connection utility file that establishes and caches the connection to avoid creating multiple connections. The connection is usually made in API routes or using Next.js server-side functions like `getServerSideProps` or in Server Components (Next.js 13+).

**3. What is the difference between Mongoose and MongoDB Native Driver?**
> The MongoDB Native Driver provides direct, low-level access to MongoDB with maximum flexibility and performance. Mongoose is an ODM library that adds a schema layer on top of MongoDB, providing structure, validation, middleware, and additional features. Mongoose is better for applications needing strict data validation and structure, while the Native Driver is better for performance-critical or flexible applications.

**4. Where should you place database connection logic in a Next.js application?**
> Database connection logic should be placed in a utility file (commonly `lib/mongodb.js` or `utils/db.js`) that can be imported wherever needed. This connection should be cached to prevent creating multiple connections during development hot-reloading or when handling multiple API requests. The connection is typically used in API routes (`/pages/api` or `/app/api`) or server-side rendering functions.

---

### Intermediate Level

**5. How do you handle MongoDB connections in Next.js API routes to avoid connection pooling issues?**
> To avoid connection pooling issues, you should create a cached connection that reuses the same MongoDB client instance across multiple API route invocations. This is typically done by storing the connection promise in a global variable that persists between requests. This prevents creating a new connection on every API request.

**6. How would you implement server-side data fetching from MongoDB in Next.js?**
> In Next.js, you can fetch data from MongoDB server-side using:
> - **Pages Router** — Use `getServerSideProps` for SSR or `getStaticProps` for SSG
> - **App Router (Next.js 13+)** — Use Server Components and directly query MongoDB in the component
>
> Note: You must serialize MongoDB ObjectIds and dates properly when passing data as props.

**7. What are the best practices for handling MongoDB ObjectIds in Next.js?**
> MongoDB ObjectIds are not serializable by default in Next.js props. Best practices include:
> - Convert ObjectIds to strings using `_id.toString()`
> - Use `JSON.parse(JSON.stringify(data))` to serialize entire objects
> - Create a helper function to sanitize MongoDB documents before returning them
> - When querying by ID, convert string IDs back using `new ObjectId(id)`

**8. How do you implement authentication with MongoDB in a Next.js application?**
> Common approaches include:
> - **NextAuth.js with MongoDB Adapter** — handles auth and stores session data in MongoDB
> - **Custom JWT-based auth** — store credentials in MongoDB with hashed passwords (bcrypt)
> - **Credential-based with sessions** — sessions stored in MongoDB using libraries like iron-session
>
> Create `/api/auth/login`, `/api/auth/register`, `/api/auth/logout` routes, store hashed passwords in a users collection, and use middleware to protect routes that require authentication.

---

### Advanced Level

**9. How would you optimize MongoDB queries in a Next.js application for better performance?**
> Optimization strategies include:
> - **Indexing** — Create indexes on frequently queried fields
> - **Projection** — Only fetch required fields using `.select()`
> - **Pagination** — Use `.limit()` and `.skip()` — never return unbounded results
> - **Aggregation pipeline** — Use for complex queries instead of processing in code
> - **Caching** — Use Redis, SWR, or React Query for frequently accessed data
> - **Connection pooling** — Configure appropriate pool sizes in connection settings
> - **Lean queries** — Use `.lean()` to return plain JS objects instead of full Mongoose documents

**10. How do you handle database migrations and schema changes in MongoDB with Next.js?**
> Unlike SQL, MongoDB is schemaless, but you still need strategies for schema evolution:
> - Update Mongoose schema definitions and use versioning or discriminators
> - Create migration scripts in a `/migrations` folder, run via npm scripts
> - Use Mongoose middleware to set default values for new fields on read
> - Support both old and new schema formats during transition periods
> - Add a `schemaVersion` field to documents to track which version they conform to

**11. How would you implement real-time features with MongoDB and Next.js?**
> Several approaches for real-time functionality:
> - **MongoDB Change Streams** — Watch for collection changes and push updates via WebSockets or SSE
> - **Socket.io integration** — Combine MongoDB with Socket.io for bi-directional communication
> - **SWR or React Query** — Use polling with optimized intervals for near-real-time updates
> - **Next.js API routes with SSE** — Create API routes that establish Server-Sent Events connections

**12. What security considerations should you keep in mind when using MongoDB with Next.js?**
> Key security practices:
> - Store connection strings in `.env.local`, never commit to version control
> - Validate and sanitize all user inputs to prevent NoSQL injection (use `mongo-sanitize`)
> - Always authenticate MongoDB connections with username/password
> - Use MongoDB Atlas with IP whitelisting or VPC peering
> - Create database users with minimal required permissions
> - Enable encryption at rest and in transit (SSL/TLS)
> - Implement rate limiting on API routes to prevent abuse
> - Never expose MongoDB credentials or queries to client-side code

---

### Scenario-Based

**13. You need to build a blog with Next.js and MongoDB. How would you structure your collections and implement ISR?**
> **Collection Structure:**
> - `posts` — `_id`, `title`, `slug`, `content`, `author`, `createdAt`, `updatedAt`, `tags`, `published`
> - `authors` — `_id`, `name`, `bio`, `avatar`
> - `comments` — `_id`, `postId`, `author`, `content`, `createdAt`
>
> **ISR Implementation:**
> - Use `getStaticProps` with a `revalidate` property (e.g., `60` seconds) to regenerate pages periodically
> - Use `getStaticPaths` with `fallback: 'blocking'` to generate static pages for existing posts while allowing new posts to be generated on-demand and then cached

**14. How would you implement full-text search functionality in a Next.js + MongoDB application?**
> Options for implementing search:
> - **MongoDB Text Indexes** — Create a text index on relevant fields and use the `$text` search operator
> - **MongoDB Atlas Search** — More advanced: autocomplete, fuzzy matching, and relevance scoring
> - **External service (Algolia, Meilisearch)** — Index documents externally when created/updated, query from Next.js API routes for best performance
> - **Regex with aggregation pipeline** — For simple pattern matching
>
> Recommendation: MongoDB text indexes for basic search, Atlas Search for advanced needs, Algolia for production-grade search.