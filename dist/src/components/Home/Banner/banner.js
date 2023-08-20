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
const react_1 = __importStar(require("react"));
const S = __importStar(require("./homeBannerCSS"));
const Banner = () => {
    const [searchValue, setSearchValue] = (0, react_1.useState)("");
    const searchListGo = () => {
        if (searchValue.length !== 0) {
            console.log(searchValue);
            window.location.href = `/search/${searchValue}`;
        }
        if (searchValue.length === 0) {
            window.alert("검색어를 입력해주세요!");
        }
    };
    const enterKeyDown = (e) => {
        if (e.key === "Enter") {
            const enterKey = e.target;
            if (enterKey.value.length !== 0) {
                searchListGo();
            }
            else {
                window.alert("검색어를 입력해주세요!");
            }
        }
    };
    const popupSearch = () => {
    };
    return (react_1.default.createElement(S.HomeBanner, null,
        react_1.default.createElement(S.HomeBannerText, null,
            "\uC194\uC9C1\uD55C \uB9AC\uBDF0, \uBBFF\uC744 \uC218 \uC788\uB294 \uD3C9\uC810!",
            react_1.default.createElement("br", null),
            "\uB354 \uC870\uC740 \uB9DB\uC9D1 \uB9AC\uC2A4\uD2B8!"),
        react_1.default.createElement(S.HomeBannerSearchWrap, null,
            react_1.default.createElement(S.HomeBannerLabel, null,
                react_1.default.createElement("span", null,
                    react_1.default.createElement(S.HomeBannerSearchIcon, { src: "https://w7.pngwing.com/pngs/410/185/png-transparent-magnifying-glass-computer-icons-magnifying-glass-glass-art-symbol-thumbnail.png" })),
                react_1.default.createElement(S.HomeBannerInput, { id: "searchValue", type: "text", placeholder: "\uC9C0\uC5ED, \uC2DD\uB2F9 \uB610\uB294 \uC74C\uC2DD", value: searchValue, onChange: (e) => setSearchValue(e.target.value), onKeyDown: enterKeyDown, onClick: popupSearch }),
                react_1.default.createElement(S.HomeBannerButton, { type: "button", value: "\uAC80\uC0C9", onClick: searchListGo })))));
};
exports.default = Banner;
//# sourceMappingURL=banner.js.map