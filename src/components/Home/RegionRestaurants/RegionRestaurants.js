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
const shared_componentCSS_1 = require("../shared_componentCSS");
const regionFoodBest = [
    {
        src: "https://a.cdn-hotels.com/gdcs/production188/d1750/2255e427-d720-43e2-ae85-6a6719fafc03.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        alt: "regionFoodBest",
        titleText: "지역 인기 맛집 TOP 100",
        content: "대충 맛집하면 여기임",
    },
    {
        src: "https://a.cdn-hotels.com/gdcs/production188/d1750/2255e427-d720-43e2-ae85-6a6719fafc03.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        alt: "regionFoodBest",
        titleText: "지역 인기 맛집 TOP 100",
        content: "대충 맛집하면 여기임",
    },
    {
        src: "https://a.cdn-hotels.com/gdcs/production188/d1750/2255e427-d720-43e2-ae85-6a6719fafc03.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        alt: "regionFoodBest",
        titleText: "지역 인기 맛집 TOP 100",
        content: "대충 맛집하면 여기임",
    },
    {
        src: "https://a.cdn-hotels.com/gdcs/production188/d1750/2255e427-d720-43e2-ae85-6a6719fafc03.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        alt: "regionFoodBest",
        titleText: "지역 인기 맛집 TOP 100",
        content: "대충 맛집하면 여기임",
    },
    {
        src: "https://a.cdn-hotels.com/gdcs/production188/d1750/2255e427-d720-43e2-ae85-6a6719fafc03.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        alt: "regionFoodBest",
        titleText: "지역 인기 맛집 TOP 100",
        content: "대충 맛집하면 여기임",
    },
    {
        src: "https://a.cdn-hotels.com/gdcs/production188/d1750/2255e427-d720-43e2-ae85-6a6719fafc03.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        alt: "regionFoodBest",
        titleText: "지역 인기 맛집 TOP 100",
        content: "대충 맛집하면 여기임",
    },
];
const RegionRestaurants = ({ columns, itemsPerPage, }) => {
    //이미지 슬라이스 페이지
    const [useRegionSlide, setUseRegionSlide] = (0, react_1.useState)(0);
    const numberOfGroupsRegion = Math.ceil(regionFoodBest.length / itemsPerPage);
    const clickRegionSlideRight = () => {
        setUseRegionSlide(useRegionSlide + 1);
    };
    const clickRegionSlideLeft = () => {
        setUseRegionSlide(useRegionSlide - 1);
    };
    return (react_1.default.createElement("section", null,
        react_1.default.createElement(shared_componentCSS_1.Module_title_wrap, null,
            react_1.default.createElement(shared_componentCSS_1.Module_title_name, null, "\uC9C0\uC5ED\uBCC4 \uC778\uAE30 \uB9DB\uC9D1"),
            react_1.default.createElement(shared_componentCSS_1.Module_more, null, "\uC2A4\uD1A0\uB9AC \uB354\uBCF4\uAE30")),
        react_1.default.createElement(shared_componentCSS_1.SliderContainer, { style: {
                marginLeft: columns !== 2 ? 80 : 0,
                marginRight: columns !== 2 ? 80 : 0,
            } },
            columns === 2 && (react_1.default.createElement(shared_componentCSS_1.SlideButton, { onClick: clickRegionSlideLeft, style: { marginRight: 10 } }, "<")),
            react_1.default.createElement(shared_componentCSS_1.ImageWrapper, { columns: columns, rows: 2, height: 492 },
                react_1.default.createElement(react_1.default.Fragment, null, regionFoodBest
                    .slice((useRegionSlide % numberOfGroupsRegion) * (itemsPerPage - 2), (useRegionSlide % numberOfGroupsRegion) * (itemsPerPage - 2) +
                    itemsPerPage)
                    .map((image, index) => (react_1.default.createElement(shared_componentCSS_1.ImageContainer, { key: index, onDragStart: (e) => e.preventDefault(), height: 236 },
                    react_1.default.createElement(shared_componentCSS_1.Image_list, { src: image.src, alt: image.alt, height: 236 }),
                    react_1.default.createElement(shared_componentCSS_1.ImageTitleText, { top: 30 }, image.titleText),
                    react_1.default.createElement(shared_componentCSS_1.ImageContent, { top: 60 }, image.content)))))),
            columns === 2 && (react_1.default.createElement(shared_componentCSS_1.SlideButton, { onClick: clickRegionSlideRight, style: { marginLeft: 10 } }, ">")))));
};
exports.default = RegionRestaurants;
//# sourceMappingURL=regionRestaurants.js.map