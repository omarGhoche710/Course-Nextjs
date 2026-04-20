# Cookies in route handlers

Cookies are small pieces of data that a server sends to a user's web browser

The browser can store the cookies and send them back to the same server with
future requests

Cookies serve three main purposes:

- managing sessions (like user logins and shopping carts)
- handling personalization (such as user preferences and themes)
- tracking (like recording and analyzing user behavior)

## EX:
  - First Method:
    - Set Cookie
    ```tsx
    return new Response("<h1>Profile API data</h1>", {
      headers: {
        "Set-Cookie": "theme=dark",
      },
    });
    ```
    - Read Cookie:
    ```tsx
    const theme = request.cookies.get("theme");
    console.log(theme?.value);
    ```
  - Second Method:
    - Set Cookie
    ```tsx
    import { cookies } from "next/headers";

    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage", "20");
    ```
    - Read Cookie:
    ```tsx
    console.log(cookieStore.get("resultsPerPage"));
    ```
