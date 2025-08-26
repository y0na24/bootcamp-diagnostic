```js
import { useState } from "react";

export function Counter({ min = 0, max = 10 }) {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  const updateCount = (newCount: number) => {
    let clamped = newCount;
    if (newCount < min) clamped = min;
    if (newCount > max) clamped = max;

    setCount(clamped);
    setHistory(prev => [...prev, clamped]);
  };

  const increment = () => updateCount(count + 1);
  const decrement = () => updateCount(count - 1);

  const handleHistoryClick = (value: number) => {
    updateCount(value);
  };

  return (
    <div>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <span> Count: {count} </span>
      </div>

      <div>
        <h3>История:</h3>
        <ul>
          {history.map((value, index) => (
            <li key={index} onClick={() => handleHistoryClick(value)}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```
