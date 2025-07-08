import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            className="outline-none px-4 py-2 text-white bg-red-600 rounded-full"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-2 text-white bg-green-600 rounded-full"
            onClick={() => {
              setColor("green");
            }}
          >
            {" "}
            green
          </button>{" "}
          <button
            className="outline-none px-4 py-2 text-white bg-blue-600 rounded-full"
            onClick={() => {
              setColor("blue");
            }}
          >
            {" "}
            blue
          </button>{" "}
          <button
            className="outline-none px-4 py-2 text-white bg-pink-600 rounded-full"
            onClick={() => {
              setColor("pink");
            }}
          >
            {" "}
            pink
          </button>{" "}
          <button
            className="outline-none px-4 py-2 text-white bg-gray-600 rounded-full"
            onClick={() => {
              setColor("gray");
            }}
          >
            {" "}
            gray
          </button>{" "}
        </div>
      </div>
    </>
  );
}

export default App;
