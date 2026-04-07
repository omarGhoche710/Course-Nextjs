```js
import { User } from "@/types/user";

declare global {
  var globalUsersStore: User[] | undefined;
}

const initialUsers: User[] = [
  {
    id: 1,
    name: "Omar Ghoch",
  },
  {
    id: 2,
    name: "Hamza Ghoch",
  },
];

export const users = globalThis.globalUsersStore ?? initialUsers;

if (!globalThis.globalUsersStore) {
  globalThis.globalUsersStore = users;
}
```