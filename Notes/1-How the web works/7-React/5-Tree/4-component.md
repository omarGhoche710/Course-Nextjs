export default function Component() {
  // 1️⃣ Hooks / State
  const [state, setState] = useState();

  // 2️⃣ Derived values (optional)
  const isDisabled = state === "submitting";

  // 3️⃣ Event Handlers
  function handleChange() {}
  async function handleSubmit() {}

  // 4️⃣ Effects (optional)
  useEffect(() => {
    // side effects
  }, []);

  // 5️⃣ Return (UI)
  return (
    <div>
      UI here
    </div>
  );
}

// 6️⃣ Helper / Utility functions (Promise, API, utils)
function submitForm() {}
function validateInput() {}


---

Component
│
├── Hooks / State
│
├── Derived Values
│
├── Event Handlers
│
├── Effects (useEffect)
│
├── Return (JSX / UI)
│
└── Helper Functions (Promise / API / utils)