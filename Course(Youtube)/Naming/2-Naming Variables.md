# Nav Links

```plainText
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
```
---

# Error Simulator

```plainText
const ErrorSimulator = ({
  message = "An error occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button
      title="Simulate an error"
      className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-sm hover:bg-red-900 transition"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
};
```