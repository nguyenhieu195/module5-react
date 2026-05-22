import React, { useState } from "react";

// Custom Hook
function useIncrement(addAmount) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + addAmount);
  }

  return [count, increase];
}

// Counter 1
function Counter1() {
  const [count, increase] = useIncrement(1);

  return (
    <div>
      <h2>Counter 1: {count}</h2>
      <button onClick={increase}>Increase +1</button>
    </div>
  );
}

// Counter 2
function Counter2() {
  const [count, increase] = useIncrement(2);

  return (
    <div>
      <h2>Counter 2: {count}</h2>
      <button onClick={increase}>Increase +2</button>
    </div>
  );
}

// Component chính
export default function Counter() {
  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  );
}
