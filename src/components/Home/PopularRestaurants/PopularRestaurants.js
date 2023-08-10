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
const shared_componentCSS_1 = require("../shared_componentCSS");
const PopularRestaurants = ({ itemsPerPage, columns, }) => {
    const [usePopularSlide, setUsePopularSlide] = (0, react_1.useState)(0);
    const [useTrustBestData, setUseTrustBestData] = (0, react_1.useState)([]);
    const numberOfGroups = useTrustBestData
        ? Math.ceil(useTrustBestData.length / itemsPerPage)
        : 0;
    (0, react_1.useEffect)(() => {
        getTrustBest();
    }, []);
    //MogoDB 통신
    const getTrustBest = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch("http://localhost:4500/trustBest");
            if (!response.ok) {
                const errorData = yield response.json();
                const statusCode = response.status;
                const statusText = response.statusText;
                const message = errorData.message[0];
                console.log(`${statusCode} - ${statusText} - ${message}`);
                return;
            }
            const data = yield response.json();
            setUseTrustBestData(data);
        }
        catch (err) {
            console.log("error log: ", err);
        }
    });
    const clickSlideRight = () => {
        setUsePopularSlide(usePopularSlide + 1);
    };
    const clickSlideLeft = () => {
        setUsePopularSlide(usePopularSlide - 1);
    };
    const moveTopList = (url) => {
        window.location.href = url;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, useTrustBestData && (react_1.default.createElement("section", null,
        react_1.default.createElement(shared_componentCSS_1.Module_title_wrap, null,
            react_1.default.createElement(shared_componentCSS_1.Module_title_name, null, "\uBBFF\uACE0 \uBCF4\uB294 \uB9DB\uC9D1 \uB9AC\uC2A4\uD2B8"),
            react_1.default.createElement(shared_componentCSS_1.Module_more, null, "\uB9AC\uC2A4\uD2B8 \uB354\uBCF4\uAE30")),
        react_1.default.createElement(shared_componentCSS_1.SliderContainer, null,
            react_1.default.createElement(shared_componentCSS_1.SlideButton, { onClick: clickSlideLeft, style: { marginRight: 10 } }, "<"),
            react_1.default.createElement(shared_componentCSS_1.ImageWrapper, { columns: columns, rows: 2, height: 492 },
                react_1.default.createElement(react_1.default.Fragment, null, useTrustBestData
                    .slice((usePopularSlide % numberOfGroups) * itemsPerPage, (usePopularSlide % numberOfGroups) * itemsPerPage +
                    itemsPerPage)
                    .map((image, index) => (react_1.default.createElement(shared_componentCSS_1.ImageContainer, { key: index, onDragStart: (e) => e.preventDefault(), height: 236, onClick: () => moveTopList(image.url) },
                    react_1.default.createElement(shared_componentCSS_1.Image_list, { src: image.src, alt: image.alt, height: 236 }),
                    react_1.default.createElement(shared_componentCSS_1.ImageTitleText, { top: 30 }, image.titleText),
                    react_1.default.createElement(shared_componentCSS_1.ImageContent, { top: 50 },
                        "\"",
                        image.content,
                        "\"")))))),
            react_1.default.createElement(shared_componentCSS_1.SlideButton, { onClick: clickSlideRight, style: { marginLeft: 10 } }, ">"))))));
};
exports.default = PopularRestaurants;
//# sourceMappingURL=popularRestaurants.js.map