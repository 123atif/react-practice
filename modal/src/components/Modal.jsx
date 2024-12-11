import React from "react";
import { TbXboxXFilled } from "react-icons/tb";

const Modal = ({ setOpen }) => {
  return (
    <>
      <div className="z-40 h-full w-full backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center">
        <div className="w-1/2 h-1/2 p-4 shadow-2xl rounded-md bg-white z-50">
          <div className="cursor-pointer">
            <TbXboxXFilled
              onClick={() => setOpen(false)}
              size={20}
              className="float-right"
            />
          </div>
          <h1>Atif</h1>
          <p>
            You can also use variant modifiers to target media queries like
            responsive breakpoints, dark mode, prefers-reduced-motion, and more.
            For example, use md:transition-all to apply the transition-all
            utility at only medium screen sizes and above.
          </p>
        </div>
      </div>
    </>
  );
};

export default Modal;
