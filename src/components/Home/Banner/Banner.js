"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HomeBannerCSS_1 = require("./HomeBannerCSS");
const Banner = () => {
    return (react_1.default.createElement(HomeBannerCSS_1.HomeBanner, null,
        react_1.default.createElement(HomeBannerCSS_1.HomeBannerText, null,
            "\uC194\uC9C1\uD55C \uB9AC\uBDF0, \uBBFF\uC744 \uC218 \uC788\uB294 \uD3C9\uC810!",
            react_1.default.createElement("br", null),
            "\uB354 \uC870\uC740 \uB9DB\uC9D1 \uB9AC\uC2A4\uD2B8!"),
        react_1.default.createElement(HomeBannerCSS_1.HomeBannerSearchWrap, null,
            react_1.default.createElement(HomeBannerCSS_1.HomeBannerLabel, null,
                react_1.default.createElement("span", null,
                    react_1.default.createElement(HomeBannerCSS_1.HomeBannerSearchIcon, { src: "https://w7.pngwing.com/pngs/410/185/png-transparent-magnifying-glass-computer-icons-magnifying-glass-glass-art-symbol-thumbnail.png" })),
                react_1.default.createElement(HomeBannerCSS_1.HomeBannerInput, { type: "text", placeholder: "Type something" }),
                react_1.default.createElement(HomeBannerCSS_1.HomeBannerButton, { type: "submit", value: "Submit" })))));
};
exports.default = Banner;
//# sourceMappingURL=Banner.js.map