```tsx
import { auth } from "@/auth";
import { signIn, signOut } from "@/auth";
import Image from "next/image";

const page = async () => {
  const session = await auth();
  return session ? (
    <div>
      <h2>Welcome {session?.user?.name}</h2>
      <img src={session?.user?.image} alt="No Image" width={50}></img>
      <p>{session?.user?.email}</p>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          type="submit"
          className="text-blue-500 rounded-lg py-2 px-4 border"
        >
          Sign Out
        </button>
      </form>
    </div>
  ) : (
    <div>
      <p>Your are not signed in</p>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button
          type="submit"
          className="text-blue-500 rounded-lg py-2 px-4 border"
        >
          Sign In with Github
        </button>
      </form>
    </div>
  );
};

export default page;

```