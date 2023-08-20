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
const actions_1 = require("../../../redux/TrustBest/actions");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const S = __importStar(require("../shared_componentCSS"));
const popularRestaurants = ({ itemsPerPage, columns, getTrustBest, useTrustBest, usePopularSlide, setUsePopularSlide, }) => {
    const numberOfGroups = useTrustBest
        ? Math.ceil(useTrustBest.length / itemsPerPage)
        : 0;
    (0, react_1.useEffect)(() => {
        getTrustBest();
    }, []);
    const clickSlideRight = () => {
        setUsePopularSlide(usePopularSlide + 1);
    };
    const clickSlideLeft = () => {
        setUsePopularSlide(usePopularSlide - 1);
    };
    const moveTopList = (url) => {
        window.location.href = url;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, useTrustBest && (react_1.default.createElement("section", null,
        react_1.default.createElement(S.Module_title_wrap, null,
            react_1.default.createElement(S.Module_title_name, null, "\uBBFF\uACE0 \uBCF4\uB294 \uB9DB\uC9D1 \uB9AC\uC2A4\uD2B8"),
            react_1.default.createElement(S.Module_more, null, "\uB9AC\uC2A4\uD2B8 \uB354\uBCF4\uAE30")),
        react_1.default.createElement(S.SliderContainer, null,
            react_1.default.createElement(S.SlideButton, { onClick: clickSlideLeft, style: { marginRight: 10 } }, "<"),
            react_1.default.createElement(S.ImageWrapper, { columns: columns, rows: 2, height: 492 },
                react_1.default.createElement(react_1.default.Fragment, null, useTrustBest
                    .slice((usePopularSlide % numberOfGroups) * itemsPerPage, (usePopularSlide % numberOfGroups) * itemsPerPage +
                    itemsPerPage)
                    .map((image, index) => (react_1.default.createElement(S.ImageContainer, { key: index, onDragStart: (e) => e.preventDefault(), height: 236, onClick: () => moveTopList(image.url) },
                    react_1.default.createElement(S.Image_list, { src: image.src, alt: image.alt, height: 236 }),
                    react_1.default.createElement(S.ImageTitleText, { top: 30 }, image.titleText),
                    react_1.default.createElement(S.ImageContent, { top: 50 },
                        "\"",
                        image.content,
                        "\"")))))),
            react_1.default.createElement(S.SlideButton, { onClick: clickSlideRight, style: { marginLeft: 10 } }, ">"))))));
};
const mapStateToProps = (state) => ({
    useTrustBest: state.trustBest.useTrustBest,
    usePopularSlide: state.trustBest.usePopularSlide,
});
// mapDispatchToProps 함수 정의
const mapDispatchToProps = (dispatch) => (0, redux_1.bindActionCreators)({
    getTrustBest: actions_1.getTrustBest,
    setUsePopularSlide: actions_1.setUsePopularSlide,
}, dispatch);
// connect를 사용하여 컴포넌트와 Redux 연결
const PopularRestaurants = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(popularRestaurants);
exports.default = PopularRestaurants;
//# sourceMappingURL=popularRestaurants.js.map