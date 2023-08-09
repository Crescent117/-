"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./menubar.css");
const Menubar = () => {
    return (react_1.default.createElement("header", { className: "menubar" },
        react_1.default.createElement("a", { href: "/", className: "home-link" },
            react_1.default.createElement("img", { src: "https://play-lh.googleusercontent.com/W9AN3AyNH7rgBaGO7Jv2MEMk2piGUEerZTZN7hG-xNJFq6QW1Dzs4HLukka0-oKIsw", alt: "" })),
        react_1.default.createElement("div", { className: "search-box" },
            react_1.default.createElement("i", { className: "bi bi-search" }),
            react_1.default.createElement("label", { htmlFor: "" },
                react_1.default.createElement("input", { type: "text" }))),
        react_1.default.createElement("div", { className: "links" },
            react_1.default.createElement("a", { href: "/restaurant1" }, "\uB9DB\uC9D1\uB9AC\uC2A4\uD2B8"),
            react_1.default.createElement("a", { href: "/restaurant2" }, "\uB9DB\uC9D1\uC2A4\uD1A0\uB9AC"),
            react_1.default.createElement("button", { className: "mypage-button" },
                react_1.default.createElement("i", { className: "bi bi-person-circle" })))));
};
exports.default = Menubar;
//# sourceMappingURL=menubar.js.map