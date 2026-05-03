```tsx
import mongoose, { model, models } from "mongoose";

const DeveloperSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: true },
  skills: { type: [String], required: true },
  yearsOfExperience: { type: Number, default: 0 },
}, { timestamps: true });

export default models.Developer || model("Developer", DeveloperSchema);

```

Here’s a clean note in English 👇

---

**Mongoose Model Re-Declaration Note**

Recreating a model multiple times using `model()` does **not delete or affect the stored data**, because the data lives in the database (MongoDB), not in the model itself.

However, in Mongoose, defining the same model more than once within the same runtime will throw an error:

> `OverwriteModelError: Cannot overwrite 'ModelName' model`

This commonly happens in environments like Next.js (especially in development with hot reloading), where code can run multiple times.

**Best practice:**

```ts
export default models.Developer || model("Developer", DeveloperSchema);
```

This ensures:

* The existing model is reused if already defined
* A new model is created only if it doesn’t exist
* Runtime errors are avoided without impacting data
