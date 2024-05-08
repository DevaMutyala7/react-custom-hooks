import React, { useEffect } from "react";
import { useState } from "react";
import usePrevious from "../hooks/usePrevious";
import useIdle from "../hooks/useIdle";

export default function Counter() {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);
  const isIdle = useIdle(30000);

  useEffect(() => {
    if (isIdle) {
      console.log("isIdle", isIdle);
      alert("idle logout");
    }
  }, [isIdle]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        Now: {count} Prev:{prev}
      </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
