"use client";

import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <span>{count + " "}</span>
//       <button style={{ fontSize: "24px"}} onClick={() => setCount(pre => pre + 1)}>+</button>
//     </div>
//   )
// }

const Counter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen && <div>This is a div hidden</div>}
      <button style={{ fontSize: "24px"}} onClick={() => setIsOpen(pre => !pre)}>{isOpen ? "Hide" : "Show"}</button>
    </div>
  )
}

export default Counter
