import { useCallback, useState, useRef, useEffect } from "react";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "0123456789";
    if (character) str += "#$%&'()*+,-./:;<=>";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
      console.log("char", char);
      console.log("pass", pass);
    }
    setPassword(pass);
  }, [length, numbersAllowed, character, setPassword]);

  const copyToClipPassword = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, character, passwordGenerator]);
  return (
    <>
      <div className="w-full h-fit  max-w-md mx-auto shadow-md rounded-lg my-8 text-black bg-gray-500">
        <div className="m-5 p-5 flex flex-col justify-between">
          <div className="flex relative ">
            <input
              text="text"
              className="bg-white w-2/3 rounded-sm h-8 m-auto px-3 py-5"
              value={password}
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              className="outline-none bg-blue-500 text-white px-3 py-2 absolute right-2 h-10 rounded-br-xl cursor-pointer hover:bg-blue-600"
              onClick={copyToClipPassword}
            >
              copy
            </button>
          </div>
          <div className="flex mt-4 gap-4 justify-end">
            <div className="flex items-center">
              <input
                type="range"
                min={8}
                max={20}
                onChange={(e) => setLength(e.target.value)}
              />
              <label
                htmlFor="length"
                className="text-orange-400 mb-1 whitespace-nowrap  ml-4"
              >
                Length: {length}
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className=" "
                defaultChecked={numbersAllowed}
                id="numberInput"
                onChange={() => {
                  setNumbersAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="length" className="text-orange-400 mb-1">
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className=" "
                defaultChecked={character}
                id="numberInput"
                onChange={() => {
                  setCharacter((prev) => !prev);
                }}
              />
              <label htmlFor="length" className="text-orange-400 mb-1">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
