## GET:

```js
export async function GET() {
  return NextResponse.json(users);
}
```

---

## POST:

```js
export async function POST(request: Request) {
  const body = await request.json();

  // check empty body
  if (Object.keys(body).length === 0) {
    return NextResponse.json({ message: "Please enter data" }, { status: 400 });
  }

  // validate field
  if (!body.name) {
    return NextResponse.json({ message: "Name is required" }, { status: 400 });
  }

  const lastId = Math.max(...users.map((user) => user.id), 1);
  const newId = lastId + 1;

  const newUser: User = { id: newId, ...body };

  users.push(newUser);

  return NextResponse.json(
    { message: "User added successfully" },
    { status: 201 }
  );
}
```

## PUT

```js
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const userId = Number(id);

  // check user exist
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const body = await request.json();

  // check empty body
  if (Object.keys(body).length === 0) {
    return NextResponse.json({ message: "Please enter data" }, { status: 400 });
  }

  // validate field
  if (!body.name) {
    return NextResponse.json({ message: "Name is required" }, { status: 400 });
  }

  // --- Error ---
  // let targetUser: User | undefined = users.find((user) => user.id === userId);
  // targetUser = { ...targetUser, ...body, id: id };

  // --- Right Code ---
  users[userIndex] = { ...users[userIndex], ...body };

  return NextResponse.json(
    { message: "User updated successfully" },
    { status: 200 }
  );
}
```
---

## DELETE

```js
// Next.js expects the first parameter to be the Request object.
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const userId = Number(id);

  // check user exist
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  users.splice(userIndex, 1);

  return NextResponse.json({ message: "User deleted successfully" });
}
```
