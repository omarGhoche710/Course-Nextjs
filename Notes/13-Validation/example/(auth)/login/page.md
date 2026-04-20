```tsx
"use client";

import React, { useState } from "react";
import { redirect } from "next/navigation";
import { loginSchema } from "@/lib/loginSchema";
import { ZodError } from "zod";

const inputStyle = {
  border: "1px solid #dddee0",
  padding: "10px",
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<ZodError | null>(null);

  if (success) {
    redirect("/");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = loginSchema.safeParse({
      email,
      password,
    });

    if (result.success) {
      setSuccess(true);
      return;
    }

    setError(result.error);
  }

  return (
    <div className="flex justify-center flex-col items-center min-h-[60vh] space-y-4">
      <h2 className="text-2xl font-semibold ">Login Shcema Test</h2>
      <form
        className="space-y-4 flex flex-col w-100"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
            setError(null);
          }}
          style={inputStyle}
          placeholder="name@example.com"
        />
        <input
          value={password}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setError(null);
          }}
          style={inputStyle}
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="bg-(--main-color) text-white"
          style={inputStyle}
        >
          Submit
        </button>

        {/* {error && <p>{error.issues[0].message}</p>} */}
        {error && (
          <ul className="space-y-2 bg-[#F3D8DA] p-2 rounded-sm list-disc list-inside">
            {error.issues.map((issue, index) => (
              <li key={index} className="italic text-[#A36F72]">
                {issue.message}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default LoginPage;

```