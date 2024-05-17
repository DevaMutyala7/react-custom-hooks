import React, { useCallback, useState } from "react";
import Counter from "./views/Counter";
import DataView from "./views/DataView";
import Input from "./views/Input";
import useDebounce from "./hooks/useDebounce";
import useThrottle from "./hooks/useThrottle";
import useResponsive from "./hooks/useResponsive";
import CounterClone from "./views/CounterClone";

function App() {
  const [counter, setCounter] = useState(0);
  const device = useResponsive();

  console.log("de", device);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <header className="App-header">
        <h1>Welcome to React Custom Hooks</h1>
      </header>
      <Counter />
      <DataView />
      <Input title="Debounce" optmizer={useDebounce} />
      <Input title="Throttle" optmizer={useThrottle} />
      <CounterClone
        count={counter}
        func={useCallback(() => console.log("hi"), [])}
      />
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
