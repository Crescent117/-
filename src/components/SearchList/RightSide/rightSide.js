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
const S = __importStar(require("../searchListCss"));
// searchList의 오른쪽 부분
const RightSide = () => {
    const [useTrustBest, setUseTrustBest] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        getTrustBest();
    }, []);
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
            setUseTrustBest(data);
        }
        catch (err) {
            console.log("error log: ", err);
        }
    });
    return (react_1.default.createElement(S.RightSide_div, null,
        react_1.default.createElement(S.Map_div, null, "\uC9C0\uB3C4 \uACF5\uAC04"),
        react_1.default.createElement(S.SearchListTitle_title, null, " \uAD00\uB828 \uCF58\uD150\uCE20 "),
        useTrustBest &&
            useTrustBest.map((trust, index) => (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(S.ImageContainer, { height: 165 },
                    react_1.default.createElement(S.RightSideImage_img, { key: index, src: trust.src }),
                    react_1.default.createElement(S.ImageTitleText, { top: 30 }, trust.titleText),
                    react_1.default.createElement(S.ImageContent, { top: 50 },
                        "\"",
                        trust.content,
                        "\"")))))));
};
exports.default = RightSide;
//# sourceMappingURL=rightSide.js.map