import { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>To do APP</h1>
      <input
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p> hello {name} </p>
    </div>
  );
}

export default App;
