"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const list_1 = __importDefault(require("./pages/List/list"));
const searchList_1 = __importDefault(require("./pages/SearchList/searchList"));
const home_1 = __importDefault(require("./pages/HOME/home"));
function App() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(home_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/search/:searchValue", element: react_1.default.createElement(searchList_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/list", element: react_1.default.createElement(list_1.default, null) })))));
}
exports.default = App;
//# sourceMappingURL=App.js.map