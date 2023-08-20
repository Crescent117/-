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
Object.defineProperty(exports, "__esModule", { value: true });
const types = __importStar(require("./types"));
const initialState = {
    useSearchList: [],
    useTotalPage: 0,
    usePageNum: 0,
    useSearchNotFound: false,
    useSearchNotFoundMessage: "",
};
const searchListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_SEARCH_LIST:
            return Object.assign(Object.assign({}, state), { useSearchList: action.payload });
        case types.SET_TOTAL_PAGE:
            return Object.assign(Object.assign({}, state), { useTotalPage: action.payload });
        case types.SET_PAGE_NUM:
            return Object.assign(Object.assign({}, state), { usePageNum: action.payload });
        case types.SET_SEARCH_NOT_FOUND:
            return Object.assign(Object.assign({}, state), { useSearchNotFound: action.payload });
        case types.SET_SEARCH_NOT_FOUND_MESSAGE:
            return Object.assign(Object.assign({}, state), { useSearchNotFoundMessage: action.payload });
        default:
            return state;
    }
};
exports.default = searchListReducer;
//# sourceMappingURL=reducer.js.map