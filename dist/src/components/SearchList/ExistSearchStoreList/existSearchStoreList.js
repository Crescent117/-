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
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const redux_1 = require("redux");
const styled_components_1 = require("styled-components");
const actions_1 = require("../../../redux/SearchList/actions");
const pagenation_1 = __importDefault(require("../Pagenation/pagenation"));
const S = __importStar(require("../searchListCss"));
const existSearchStoreList = ({ useSearchNotFound, useSearchNotFoundMessage, useSearchList, getSearchList, useTotalPage, usePageNum, }) => {
    // 검색키워드
    const { searchValue } = (0, react_router_dom_1.useParams)();
    // 현재 PageNum 추출
    const location = (0, react_router_dom_1.useLocation)();
    const searchParams = new URLSearchParams(location.search);
    (0, react_1.useEffect)(() => {
        const pageNum = pagenumCheck();
        if (searchValue !== undefined) {
            getSearchList(searchValue, pageNum);
        }
    }, []);
    // pageNumCheck
    const pagenumCheck = () => {
        // 주소값에서 가져옴 페이지 처음들어왔을땐 null
        const pageNumParams = searchParams.get("pagenum");
        return pageNumParams == null ? 1 : parseInt(pageNumParams);
    };
    // DB에서 검색해온 맛집데이터 반복문
    const renderStoreInfo = (storeInfo, index) => {
        return (react_1.default.createElement(S.SearchList_li, { key: index },
            react_1.default.createElement(S.FoodImg_img, { height: 239, src: storeInfo.imgurl }),
            react_1.default.createElement("br", null),
            react_1.default.createElement(S.StoreTitleScoreWrap, null,
                react_1.default.createElement(styled_components_1.StyleSheetManager, { shouldForwardProp: (prop) => prop !== "maxChar" },
                    react_1.default.createElement(S.StoreTitle, { maxchar: 20 }, storeInfo.storename),
                    react_1.default.createElement(S.StoreScore, null, storeInfo.pointAVG))),
            react_1.default.createElement("div", null,
                storeInfo.storeLocation,
                " - ",
                storeInfo.storeRecommendFood),
            react_1.default.createElement(S.ViewCount, null,
                " ",
                storeInfo.visit)));
    };
    // 최종적으로 리턴할 값
    const renderSearchResults = () => {
        return useSearchList.map(renderStoreInfo);
    };
    return (react_1.default.createElement(S.SearchListWrap_div, null, !useSearchNotFound && useSearchList ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(S.SearchListInner_div, null,
            react_1.default.createElement(S.SearchListTitle_title, null,
                searchValue,
                " \uB9DB\uC9D1 \uC778\uAE30 \uAC80\uC0C9\uC21C\uC704"),
            renderSearchResults()),
        react_1.default.createElement(pagenation_1.default, { useTotalPage: useTotalPage, usePageNum: usePageNum, searchValue: searchValue }))) : (react_1.default.createElement(S.ErrorMessage, null, useSearchNotFoundMessage))));
};
// mapStateToProps 함수 정의
const mapStateToProps = (state) => ({
    useSearchList: state.searchList.useSearchList,
    useTotalPage: state.searchList.useTotalPage,
    usePageNum: state.searchList.usePageNum,
    useSearchNotFound: state.searchList.useSearchNotFound,
    useSearchNotFoundMessage: state.searchList.useSearchNotFoundMessage,
});
// mapDispatchToProps 함수 정의
const mapDispatchToProps = (dispatch) => (0, redux_1.bindActionCreators)({
    getSearchList: actions_1.getSearchList,
    setTotalPage: actions_1.setTotalPage,
    setPageNum: actions_1.setPageNum,
}, dispatch);
// connect를 사용하여 컴포넌트와 Redux 연결
const ExistSearchStoreList = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(existSearchStoreList);
exports.default = ExistSearchStoreList;
//# sourceMappingURL=existSearchStoreList.js.map