## Rating field: (we should use [rating === undefined] because the rating can be 0)

```js
const { username, name, role, bio, rating } = body;

if (!username || !name || !role || !bio || rating === undefined) {
  return NextResponse.json({ message: "All fields required" }, { status: 400 });
}
```

## No update has been seen:

```js
if (Object.keys(body).length === 0) {
  return NextResponse.json(
    { message: "No update has been seen" },
    { status: 400 },
  );
}
```

---

## NextResponse Default:

```js
export async function GET() {
  return NextResponse.json(developers);
}
```

- This code by default is like:

```js
export async function GET() {
  return new Response(JSON.stringify(developers), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
```

## Convert request To JS:

```js
const body = await request.json();
```

## Catch Internal Server Error (500):

```js
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
```

## Handle Rating and isNew Fields:

```js
  const newDeveloper: Developer = {
    id: nexId,
    username: username,
    name: name,
    role: role,
    bio: bio,
    rating: typeof rating === "number" ? rating : 0,
    isNew: typeof body.isNew === "boolean" ? body.isNew : true,
  };
```

## Message and Error:

  - For each error we put error: {}
  - For each success we put message: {}


## Function parseInt

```js
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
```