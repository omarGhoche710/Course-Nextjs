### 1. Schema Definition

```js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  price:     { type: Number, required: true, min: 0 },
  category:  { type: String, default: 'general' },
  inStock:   { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);
```

---

### 2. Data Validation

```js
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
  },
  age: {
    type: Number,
    min: [18, 'Must be at least 18'],
    max: [100, 'Age seems invalid']
  },
  role: {
    type: String,
    enum: {
      values: ['user', 'admin', 'moderator'],
      message: '{VALUE} is not a valid role'
    }
  }
});
```

---

### 3. Middleware (Hooks)

```js
const bcrypt = require('bcrypt');

userSchema.pre('save', async function (next) {
  // Runs before every save — hash password if it was changed
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.post('save', function (doc) {
  // Runs after save — useful for logging
  console.log(`User ${doc.email} was saved.`);
});
```

---

### 4. Query Building

```js
const users = await User
  .find({ role: 'admin' })       // filter
  .where('age').gte(18)          // chain conditions
  .select('name email')          // only return these fields
  .sort({ createdAt: -1 })       // newest first
  .limit(10)                     // max 10 results
  .skip(20)                      // pagination offset
  .lean();                       // return plain JS objects (faster)
```

---

### 5. Population

```js
// Two schemas that reference each other
const postSchema = new mongoose.Schema({
  title:  String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Post = mongoose.model('Post', postSchema);

// Fetch post and auto-fill author details from the User collection
const post = await Post
  .findById(postId)
  .populate('author', 'name email'); // only pull name & email from User

console.log(post.author.name); // "John Doe" instead of just an ID
```

---

### 6. Plugins

```js
// A reusable plugin that adds `createdAt` and `updatedAt` to any schema
function timestampPlugin(schema) {
  schema.add({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  schema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
  });
}

// Apply to any schema
userSchema.plugin(timestampPlugin);
productSchema.plugin(timestampPlugin);

// Or use Mongoose's built-in timestamps option (does the same thing)
const orderSchema = new mongoose.Schema({ ... }, { timestamps: true });
```

---

Each feature builds on the previous — schemas define structure, validation guards data, hooks automate logic, query building fetches efficiently, population links collections, and plugins keep things DRY across your models.