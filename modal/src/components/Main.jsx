import React, { useState } from "react";
import Modal from "./Modal";

const Main = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="text-white text-3xl mt-12 w-full text-center font-bold">
        MODAL IN REACT
      </h1>

      <div className="flex justify-center mt-10 bg-orange-400 w-[100px] mx-auto border-zinc-100 rounded-lg hover:bg-orange-600">
        <button
          className="p-2 text-white font-bold"
          onClick={() => setOpen(true)}
        >
          Click Me
        </button>
      </div>
      {open && <Modal setOpen={setOpen} />}
    </div>
  );
};

export default Main;
