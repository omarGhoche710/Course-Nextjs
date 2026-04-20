```js
import { NextResponse } from "next/server";
import { Developer } from "@/types/developer";
import { developers } from "@/lib/data/developers";

export async function GET({ request: NextRequest}) {
  return NextResponse.json(developers);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    username?: string;
    name?: string;
    role?: string;
    bio?: string;
    rating?: number;
    isNew?: boolean;
  } | null;

  if (!body) {
    return NextResponse.json({ error: "Invalid Json body" }, { status: 400 });
  }

  // if (Object.keys(body).length === 0) {
  //   return NextResponse.json(
  //     { message: "No data has been seen" },
  //     { status: 400 }
  //   );
  // }

  const { username, name, role, bio, rating } = body;

  // we should use [rating === undefined] because the rating can be 0
  if (!username || !name || !role || !bio) {
    return NextResponse.json(
      { error: "username, name, title, and bio are required" },
      { status: 400 }
    );
  }

  // if (isNaN(rating)) {
  //   return NextResponse.json(
  //     { message: "Rating should be a number" },
  //     { status: 400 }
  //   );
  // }

  const lastId = Math.max(...developers.map((dev) => dev.id), 0);
  const nexId = lastId + 1;

  // const newDeveloper: Developer = { id: nexId, ...body, isNew: true };
  const newDeveloper: Developer = {
    id: nexId,
    username: username,
    name: name,
    role: role,
    bio: bio,
    rating: typeof rating === "number" ? rating : 0,
    isNew: typeof body.isNew === "boolean" ? body.isNew : true,
  };

  developers.push(newDeveloper);

  return NextResponse.json(
    { message: "Developer added successfully", developer: newDeveloper },
    { status: 201 }
  );
}

```