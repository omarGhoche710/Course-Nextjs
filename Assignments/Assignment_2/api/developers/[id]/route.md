```js
import { NextResponse } from "next/server";
import { developers } from "@/lib/data/developers";

type RouteParams = {
  params: Promise<{ id: string }>;
};

async function parseId(params: RouteParams["params"]) {
  const { id } = await params;
  const numericId = Number(id);

  if (isNaN(numericId) || numericId < 1) {
    return null;
  }

  return numericId;
}

export async function GET(_request: Request, { params }: RouteParams) {
  const id = await parseId(params);

  if (id === null) {
    return NextResponse.json(
      { error: "Developer id must be a positive integer" },
      { status: 400 }
    );
  }

  const developer = developers.find((dev) => dev.id === id);

  if (!developer) {
    return NextResponse.json(
      { message: "Developer not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(developer);
}

// export async function GET(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   const { id } = await params;
//   const developerId = Number(id);

//   const developer = developers.find((dev) => dev.id === developerId);

//   if (!developer) {
//     return NextResponse.json(
//       { message: "Developer not found" },
//       { status: 404 }
//     );
//   }

//   return NextResponse.json(developer);
// }

export async function PUT(request: Request, { params }: RouteParams) {
  const id = await parseId(params);

  if (id === null) {
    return NextResponse.json(
      { error: "Developer id must be a positive integer" },
      { status: 400 }
    );
  }

  const developerIndex = developers.findIndex((dev) => dev.id === id);

  if (developerIndex === -1) {
    return NextResponse.json({ error: "Developer not found" }, { status: 404 });
  }

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

  const { username, name, role, bio } = body;

  if (!username || !name || !role || !bio) {
    return NextResponse.json(
      { error: "username, name, title, and bio are required" },
      { status: 400 }
    );
  }

  const updatedDeveloper = {
    ...developers[developerIndex],
    username: username,
    name: name,
    role: role,
    bio: bio,
    rating:
      typeof body.rating === "number"
        ? body.rating
        : developers[developerIndex].rating,
    isNew:
      typeof body.isNew === "boolean"
        ? body.isNew
        : developers[developerIndex].isNew,
  };

  developers[developerIndex] = updatedDeveloper;

  return NextResponse.json({
    message: "Developer updated successfully",
    developer: updatedDeveloper,
  });
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const id = await parseId(params);

  if (id === null) {
    return NextResponse.json(
      { error: "Developer id must be a positive integer." },
      { status: 400 }
    );
  }

  const developerIndex = developers.findIndex((dev) => dev.id === id);

  if (developerIndex === -1) {
    return NextResponse.json(
      { error: "Developer not found." },
      { status: 404 }
    );
  }

  const [deletedDeveloper] = developers.splice(developerIndex, 1);

  return NextResponse.json({
    message: "Developer deleted successfully.",
    developer: deletedDeveloper,
  });
}

```