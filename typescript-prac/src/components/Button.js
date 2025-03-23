"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// import React from 'react'
// const Button: React.FC = ({ text }: { text: string }) => {
//   return (
//     <>
//     <button>{text}</button>
//     </>
//   )
// }
// export default Button; 
var react_1 = require("react");
require("../index.css");
var Button = function (_a) {
    var text = _a.text, className = _a.className;
    var _b = (0, react_1.useState)(0), count = _b[0], setCount = _b[1];
    var _c = (0, react_1.useState)(""), value = _c[0], setValue = _c[1];
    var handlenameChange = function (e) {
        setValue(e.target.value);
        console.log(value);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: count }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return setCount(count + 1); }, className: "btn ".concat(className), children: text }), (0, jsx_runtime_1.jsx)("input", { type: "search", onChange: handlenameChange }), (0, jsx_runtime_1.jsx)("h1", { children: value })] }));
};
exports.default = Button;
