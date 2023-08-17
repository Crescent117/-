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
const react_1 = __importDefault(require("react"));
const S = __importStar(require("../searchListCss"));
const SearchListPagenation = ({ searchValue, useTotalPage, usePageNum }) => {
    // 페이징 로직
    const pagenation = (totalPage, pageNum) => {
        const keyword = { searchValue }.searchValue || ""; //검색값
        const pageBlockSize = 10; // 한 번에 표시할 페이지 수
        const currentPageBlock = Math.ceil(pageNum / pageBlockSize); // 현재 페이지가 속한 블록 계산
        const minPage = (currentPageBlock - 1) * pageBlockSize + 1; // 블록의 첫 페이지 계산
        const maxPage = Math.min(currentPageBlock * pageBlockSize, totalPage); // 블록의 마지막 페이지 계산
        const pageArray = [];
        for (let i = minPage; i <= maxPage; i += 1) {
            pageArray.push(i);
        }
        return (react_1.default.createElement(react_1.default.Fragment, null, pageArray.map((page, index) => page === pageNum ? (react_1.default.createElement(S.PagingButton_button, { key: index, color: "FF7F00", onClick: () => pagingMove(keyword, page) },
            react_1.default.createElement(S.PagingButtonText_p, { color: "FF7F00" }, page))) : (react_1.default.createElement(S.PagingButton_button, { key: index, color: "C0C0C0", onClick: () => pagingMove(keyword, page) },
            react_1.default.createElement(S.PagingButtonText_p, { color: "C0C0C0" }, page))))));
    }; // 페이징 로직 끝
    const pagingMove = (keyword, page) => {
        window.location.href = `/search/${keyword}?pagenum=${page}`;
    };
    return (react_1.default.createElement(S.Pagenation_div, null, useTotalPage && pagenation(useTotalPage, usePageNum)));
};
exports.default = SearchListPagenation;
//# sourceMappingURL=pagenation.js.map