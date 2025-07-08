import { useState } from "react";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [character, setCharacter] = useState(false);
  return (
    <>
      <h1 className="mt-4 bg-blue-200">atif</h1>
    </>
  );
}

export default App;
