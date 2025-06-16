import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const decCOunt = () => {
    if (count <= 0) {
      alert("you are getting in -ve which is not allowed");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1> You count me {count}</h1>
      <button onClick={decCOunt}>-</button>
      <button onClick={addCount}>+</button>
    </>
  );
}

export default App;
