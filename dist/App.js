"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const list_1 = __importDefault(require("./pages/List/list"));
const listdetail_1 = __importDefault(require("./pages/List/listdetail"));
const menubar_1 = __importDefault(require("./pages/List/menubar"));
function App() {
    const [trustBest, settrustBest] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get("http://localhost:8080/api/data/trustBest") // 수정된 주소로 변경
            .then((response) => settrustBest(response.data))
            .catch((error) => console.error(error));
    }, []);
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(menubar_1.default, null),
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/list", element: react_1.default.createElement(list_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/listdetail", element: react_1.default.createElement(listdetail_1.default, { TrustBestItem: trustBest }) }))));
}
exports.default = App;
//# sourceMappingURL=App.js.map