# Types

- Client Side Validation (like: check password length...)
- Server Side Validation (like: check existing email...)

- Package Zod:
  - command: npm i zod
  - usecase: zod is a package that you can use to
            validate the entries... 
  - example of using:
    ```tsx
    import { z } from "zod";

    export const loginSchema = z.object({
      email: z.string().email("Invalid email address."),
      password: z.string().min(6, "Password must be at least 6 characters long."),
    });
    ```
  