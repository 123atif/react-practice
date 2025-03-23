"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Counter = (0, react_1.createContext)(0);
var CounterProvider = function (_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)(Counter.Provider, { value: 0, children: children }));
};
exports.default = CounterProvider;
