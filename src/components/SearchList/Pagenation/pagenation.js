"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const searchListCss_1 = require("../searchListCss");
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
        return (react_1.default.createElement(react_1.default.Fragment, null, pageArray.map((page, index) => page === pageNum ? (react_1.default.createElement(searchListCss_1.PagingButton_button, { key: index, color: "FF7F00", onClick: () => pagingMove(keyword, page) },
            react_1.default.createElement(searchListCss_1.PagingButtonText_p, { color: "FF7F00" }, page))) : (react_1.default.createElement(searchListCss_1.PagingButton_button, { key: index, color: "C0C0C0", onClick: () => pagingMove(keyword, page) },
            react_1.default.createElement(searchListCss_1.PagingButtonText_p, { color: "C0C0C0" }, page))))));
    }; // 페이징 로직 끝
    const pagingMove = (keyword, page) => {
        window.location.href = `/search/${keyword}?pagenum=${page}`;
    };
    return (react_1.default.createElement(searchListCss_1.Pagenation_div, null, useTotalPage && pagenation(useTotalPage, usePageNum)));
};
exports.default = SearchListPagenation;
//# sourceMappingURL=pagenation.js.map