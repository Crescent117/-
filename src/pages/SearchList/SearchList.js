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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importStar(require("styled-components"));
const data = [
    { page: 1 },
    { page: 2 },
    { page: 3 },
    { page: 4 },
    { page: 5 },
    { page: 6 },
    { page: 7 },
    { page: 8 },
    { page: 9 }
];
const SearchList = () => {
    const [useSearchList, setUseSearchList] = (0, react_1.useState)([]);
    const { searchValue } = (0, react_router_dom_1.useParams)();
    const [useTrustBest, setUseTrustBest] = (0, react_1.useState)([]);
    // 페이지
    const location = (0, react_router_dom_1.useLocation)();
    const searchParams = new URLSearchParams(location.search);
    (0, react_1.useEffect)(() => {
        getSearchList();
        getTrustBest();
    }, []);
    // 검색된 가게 정보 불러오기
    const getSearchList = () => __awaiter(void 0, void 0, void 0, function* () {
        // 현재 페이지 정보
        let pageNumParams = searchParams.get("pagenum");
        let pageNum;
        if (pageNumParams == null) {
            pageNum = 0;
        }
        else {
            pageNum = parseInt(pageNumParams) - 1;
        }
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
            setUseSearchList(data);
        }
        catch (err) {
            console.log("error log: ", err);
        }
    });
    const getTrustBest = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://localhost:4500/trustBest`);
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
            console.log(data);
            setUseTrustBest(data);
        }
        catch (err) {
            console.log("error log: ", err);
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null, useSearchList && (react_1.default.createElement(OuterWrap_section, null,
        react_1.default.createElement(SearchListWrap_div, null,
            react_1.default.createElement(SearchListInner_div, null,
                react_1.default.createElement(SearchListTitle_h1, null,
                    searchValue,
                    " \uB9DB\uC9D1 \uC778\uAE30 \uAC80\uC0C9\uC21C\uC704"),
                Array.from({ length: useSearchList.length / 2 }).map((_, ulIndex) => (react_1.default.createElement(SertchList_ul, { key: ulIndex }, useSearchList.map((store, index) => {
                    if (index >= ulIndex * 2 && index < (ulIndex + 1) * 2) {
                        return (react_1.default.createElement(SearchList_li, { key: index },
                            react_1.default.createElement(FoodImg_img, { height: 239, src: store.imgurl }),
                            react_1.default.createElement("br", null),
                            react_1.default.createElement(StoreTitleScoreWrap, null,
                                react_1.default.createElement(StoreTitle, { text: store.storename, maxChar: 18 }, store.storename),
                                react_1.default.createElement(StoreScore, null, store.pointAVG)),
                            react_1.default.createElement("div", null,
                                store.storeLocation,
                                " - ",
                                store.storeRecommendFood),
                            react_1.default.createElement(ViewCount, null,
                                " ",
                                store.visit)));
                    }
                    return null;
                }))))),
            react_1.default.createElement(Pagenation_div, null, data && data.map((item, index) => (react_1.default.createElement(PagingButton_button, { key: index },
                react_1.default.createElement("a", null, item.page)))))),
        react_1.default.createElement(RightSide_div, null,
            react_1.default.createElement(Map_div, null, "\uC9C0\uB3C4 \uACF5\uAC04"),
            react_1.default.createElement(SearchListTitle_h1, null, " \uAD00\uB828 \uCF58\uD150\uCE20 "),
            useTrustBest &&
                useTrustBest.map((trust, index) => (react_1.default.createElement(RightSideImage_img, { key: index, src: trust.src }))))))));
};
exports.default = SearchList;
const OuterWrap_section = styled_components_1.default.section `
  display: flex;
`;
const SearchListTitle_h1 = styled_components_1.default.h1 `
  color:orange;
  padding-left:10px;
`;
const SearchListWrap_div = styled_components_1.default.div `
  width:100%;
  min-width:780px;
  float:left;
`;
const SearchListInner_div = styled_components_1.default.div `
  width:100%;
  max-width:800px;
  margin: 0 auto;
`;
const SertchList_ul = styled_components_1.default.ul `
  list-style: none;
  padding-left: 0px;
`;
const SearchList_li = styled_components_1.default.li `
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
`;
const FoodImg_img = styled_components_1.default.img `
  width: 359px;
  height: ${({ height }) => `${height}px`};
`;
const StoreTitleScoreWrap = styled_components_1.default.div `
  display: flex;
  align-items: center;
  padding: 10px 0;
`;
const StoreTitle = styled_components_1.default.span `
  font-size: 24px;
  color: grey;
  ${({ maxChar }) => maxChar && (0, styled_components_1.css) `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: ${maxChar}ch;
  `}
`;
const StoreScore = styled_components_1.default.span `
  color: orange;
  margin-left: 10px;
  font-size: 24px;
`;
const ViewCount = styled_components_1.default.span `
  position: relative;
  padding-left:20px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url("https://cdn-icons-png.flaticon.com/512/65/65003.png");
    background-size: cover;
  }
`;
const RightSide_div = styled_components_1.default.div `
  min-width: 400px;
  max-width: 400px;
  background-color: #e0e0e0;
`;
const Map_div = styled_components_1.default.div `
  height:485px;
`;
const RightSideImage_img = styled_components_1.default.img `
  width: 352px;
  height: 165px;
  object-fit: cover;
  position: relative;
  filter: brightness(0.7);
  margin-left: 25px;
  &:not(:last-child) {
    margin-bottom: 20px; // 이미지 간 margin 추가
  }
`;
const Pagenation_div = styled_components_1.default.div `
  text-align:center;
`;
const PagingButton_button = styled_components_1.default.button `
`;
//# sourceMappingURL=SearchList.js.map