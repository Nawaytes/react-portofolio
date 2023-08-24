import { useState } from "react";
import "./Content.css";
export default function Content() {
  const [counter, setCounter] = useState(0);
  return (
    <main>
      <div className='content-title'>Service</div>
      <div className='service-container'>
        <div className='service'>
          <span>Counter</span>
          <span>{counter}</span>
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </main>
  );
}
