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
const actions_1 = require("../../../redux/TrustBest/actions");
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const S = __importStar(require("../searchListCss"));
// searchList의 오른쪽 부분
const rightSide = ({ getTrustBest, useTrustBest, }) => {
    (0, react_1.useEffect)(() => {
        getTrustBest();
    }, []);
    return (react_1.default.createElement(S.RightSide_div, null,
        react_1.default.createElement(S.Map_div, null, "\uC9C0\uB3C4 \uACF5\uAC04"),
        react_1.default.createElement(S.SearchListTitle_title, null, " \uAD00\uB828 \uCF58\uD150\uCE20 "),
        useTrustBest &&
            useTrustBest.map((trust, index) => (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(S.ImageContainer, { height: 165, key: index },
                    react_1.default.createElement(S.RightSideImage_img, { key: index, src: trust.src }),
                    react_1.default.createElement(S.ImageTitleText, { top: 30 }, trust.titleText),
                    react_1.default.createElement(S.ImageContent, { top: 50 },
                        "\"",
                        trust.content,
                        "\"")))))));
};
const mapStateToProps = (state) => ({
    useTrustBest: state.trustBest.useTrustBest,
});
// mapDispatchToProps 함수 정의
const mapDispatchToProps = (dispatch) => (0, redux_1.bindActionCreators)({
    getTrustBest: actions_1.getTrustBest,
}, dispatch);
// connect를 사용하여 컴포넌트와 Redux 연결
const RightSide = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(rightSide);
exports.default = RightSide;
//# sourceMappingURL=rightSide.js.map