```tsx
import connectMongo from "@/lib/mongoose";
import Developer from "@/models/Developer";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongo();
    const developers = await Developer.find().sort({ createdAt: -1 });
    return NextResponse.json(developers);
  } catch (error) {
    return NextResponse.json({ error: error?.message ?? "Failed to fetch developers" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, role, skills, yearsOfExperience } = await request.json();
    await connectMongo();
    const newDeveloper = new Developer({ name, role, skills, yearsOfExperience });
    await newDeveloper.save();

    return NextResponse.json(newDeveloper, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error?.message ?? "Failed to create developer" }, { status: 404 });
  }
}
```
---

**Using `Developer.find()` in Mongoose**

`Developer.find()` is used to retrieve **all documents** from the `Developer` collection in the database (MongoDB) using the Mongoose model.

```ts
const developers = await Developer.find().sort({ createdAt: -1 });
```

* `find()` → fetches all records from the `Developer` collection
* `sort({ createdAt: -1 })` → orders results by newest first (descending)

**Purpose:**
Used when you want to return a full list of developers, such as in an API endpoint or dashboard view.

**Summary:**

* `Developer` = Mongoose model
* `find()` = get all documents
* `sort()` = control result order
