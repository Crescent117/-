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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchList = exports.setSearchNotFoundMessage = exports.setSearchNotFound = exports.setPageNum = exports.setTotalPage = exports.setSearchList = void 0;
const types = __importStar(require("./types"));
const setSearchList = (list) => ({
    type: types.SET_SEARCH_LIST,
    payload: list,
});
exports.setSearchList = setSearchList;
const setTotalPage = (totalPage) => ({
    type: types.SET_TOTAL_PAGE,
    payload: totalPage,
});
exports.setTotalPage = setTotalPage;
const setPageNum = (pageNum) => ({
    type: types.SET_PAGE_NUM,
    payload: pageNum,
});
exports.setPageNum = setPageNum;
const setSearchNotFound = (value) => ({
    type: types.SET_SEARCH_NOT_FOUND,
    payload: value,
});
exports.setSearchNotFound = setSearchNotFound;
const setSearchNotFoundMessage = (message) => ({
    type: types.SET_SEARCH_NOT_FOUND_MESSAGE,
    payload: message,
});
exports.setSearchNotFoundMessage = setSearchNotFoundMessage;
//검색리스트 가져오기
const getSearchList = (searchValue, pageNum) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 데이터를 받아올 API 엔드포인트 설정
        const apiUrl = `http://localhost:4500/getSearchList/${searchValue}?pageNum=${pageNum}`;
        // API 호출 및 데이터 받아오기
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = yield response.json();
        // 검색 결과가 없는 경우 처리
        if (data.message) {
            dispatch((0, exports.setSearchNotFound)(true)); // 검색 결과 없음 상태 설정
            dispatch((0, exports.setSearchNotFoundMessage)(data.message)); // 검색 결과 없음 메시지 설정
        }
        else {
            dispatch((0, exports.setSearchNotFound)(false)); // 검색 결과가 있는 경우 상태 초기화
            dispatch((0, exports.setSearchNotFoundMessage)('')); // 검색 결과 없음 메시지 초기화
            dispatch((0, exports.setSearchList)(data[1])); // 검색 결과 리스트 설정
            dispatch((0, exports.setTotalPage)(data[0].totalPage)); // 총 페이지 수 설정
            dispatch((0, exports.setPageNum)(pageNum)); // 현재 페이지 번호 설정
        }
    }
    catch (error) {
        // 에러 처리 로직
        console.error('An error occurred while fetching search list:', error);
        // 에러 상태를 Redux 스토어에 업데이트하는 액션을 디스패치
    }
});
exports.getSearchList = getSearchList;
//# sourceMappingURL=actions.js.map