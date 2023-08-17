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
const S = __importStar(require("../../components/SearchList/searchListCss"));
const existSearchStoreList_1 = __importDefault(require("../../components/SearchList/ExistSearchStoreList/existSearchStoreList"));
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const rightSide_1 = __importDefault(require("../../components/SearchList/RightSide/rightSide"));
const SearchList = () => {
    const [useSearchList, setUseSearchList] = (0, react_1.useState)([]);
    const { searchValue } = (0, react_router_dom_1.useParams)();
    const [useSearchNotFound, setUseSearchNotFound] = (0, react_1.useState)(false);
    const [useSearchNotFoundMessage, setUseSearchNotFoundMessage] = (0, react_1.useState)("");
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(S.OuterWrap_section, null,
            !useSearchNotFound ? (useSearchList && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(existSearchStoreList_1.default, { setUseSearchNotFoundMessage: setUseSearchNotFoundMessage, setUseSearchNotFound: setUseSearchNotFound, searchValue: searchValue })))) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(S.SearchListWrap_div, null,
                    react_1.default.createElement(S.ErrorMessage, null, useSearchNotFoundMessage)))),
            react_1.default.createElement(rightSide_1.default, null))));
};
exports.default = SearchList;
//# sourceMappingURL=searchList.js.map