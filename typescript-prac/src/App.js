"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = __importDefault(require("./components/Button"));
function App() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Typescript Practice" }), (0, jsx_runtime_1.jsx)(Button_1.default, { text: "I am new" }), (0, jsx_runtime_1.jsx)(Button_1.default, { text: "Click here", onClick: function () { return alert("Clicked ME"); }, className: "btn-2" })] }));
}
exports.default = App;
