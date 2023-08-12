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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = require("styled-components");
const searchListCss_1 = require("../searchListCss");
const pagenation_1 = __importDefault(require("../Pagenation/pagenation"));
const existSearchStoreList = ({ setUseSearchNotFoundMessage, setUseSearchNotFound, }) => {
    // 상태 관리
    const [useSearchList, setUseSearchList] = (0, react_1.useState)([]);
    const { searchValue } = (0, react_router_dom_1.useParams)();
    const [useTotalPage, setUsrTotalPage] = (0, react_1.useState)(0);
    const [usePageNum, setUsePageNum] = (0, react_1.useState)(0);
    // 현재 페이지 정보
    const location = (0, react_router_dom_1.useLocation)();
    const searchParams = new URLSearchParams(location.search);
    (0, react_1.useEffect)(() => {
        getSearchList();
    }, []);
    // pageNumCheck
    const pagenumCheck = (pageNum) => {
        // 주소값에서 가져옴 페이지 처음들어왔을땐 null
        const pageNumParams = searchParams.get("pagenum");
        if (pageNumParams == null) {
            pageNum = 1;
        }
        else {
            pageNum = parseInt(pageNumParams);
        }
        setUsePageNum(pageNum);
        return pageNum;
    };
    //검색리스트 가져오기
    const getSearchList = () => __awaiter(void 0, void 0, void 0, function* () {
        // 현재 페이지 정보
        let pageNum;
        pageNum = -1;
        pageNum = pagenumCheck(pageNum);
        //통신
        try {
            const response = yield fetch(`http://localhost:4500/getSearchList/${searchValue}?pageNum=${pageNum}`);
            // 에러처리
            if (!response.ok) {
                const errorData = yield response.json();
                const statusCode = response.status;
                const statusText = response.statusText;
                const message = errorData.message[0];
                console.log(`${statusCode} - ${statusText} - ${message}`);
                return;
            }
            const data = yield response.json();
            if (data.message) {
                console.log(data);
                console.log(response);
                setUseSearchNotFound(true);
                setUseSearchNotFoundMessage(data.message);
            }
            // 가게 정보들
            setUseSearchList(data[1]);
            // 페이징 함수
            setUsrTotalPage(data[0].totalPage);
        }
        catch (err) {
            console.log("error log: ", err);
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(searchListCss_1.SearchListWrap_div, null,
            react_1.default.createElement(searchListCss_1.SearchListInner_div, null,
                react_1.default.createElement(searchListCss_1.SearchListTitle_title, null,
                    searchValue,
                    " \uB9DB\uC9D1 \uC778\uAE30 \uAC80\uC0C9\uC21C\uC704"),
                Array.from({ length: useSearchList.length / 2 }).map((_, ulIndex) => (react_1.default.createElement(searchListCss_1.SertchList_ul, { key: ulIndex }, useSearchList.map((store, index) => {
                    if (index >= ulIndex * 2 && index < (ulIndex + 1) * 2) {
                        return (react_1.default.createElement(searchListCss_1.SearchList_li, { key: index },
                            react_1.default.createElement(searchListCss_1.FoodImg_img, { height: 239, src: store.imgurl }),
                            react_1.default.createElement("br", null),
                            react_1.default.createElement(searchListCss_1.StoreTitleScoreWrap, null,
                                react_1.default.createElement(styled_components_1.StyleSheetManager, { shouldForwardProp: (prop) => prop !== "maxChar" },
                                    react_1.default.createElement(searchListCss_1.StoreTitle, { maxchar: 20 }, store.storename),
                                    react_1.default.createElement(searchListCss_1.StoreScore, null, store.pointAVG))),
                            react_1.default.createElement("div", null,
                                store.storeLocation,
                                " - ",
                                store.storeRecommendFood),
                            react_1.default.createElement(searchListCss_1.ViewCount, null,
                                " ",
                                store.visit)));
                    }
                    return null;
                }))))),
            react_1.default.createElement(pagenation_1.default, { useTotalPage: useTotalPage, usePageNum: usePageNum, searchValue: searchValue }))));
};
exports.default = existSearchStoreList;
//# sourceMappingURL=existSearchStoreList.js.map