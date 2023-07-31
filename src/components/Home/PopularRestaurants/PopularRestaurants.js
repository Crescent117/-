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
const data = [
    {
        src: "https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/ijrnzveoerf5csud.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80",
        alt: "Description 1",
        titleText: "맛집",
        content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
    },
    {
        src: "https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/ijrnzveoerf5csud.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80",
        alt: "Description 1",
        titleText: "맛집",
        content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
    },
    {
        src: "https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/ijrnzveoerf5csud.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80",
        alt: "Description 1",
        titleText: "맛집",
        content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
    },
    {
        src: "https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/ijrnzveoerf5csud.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80",
        alt: "Description 1",
        titleText: "맛집",
        content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
    },
    {
        src: "https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/ijrnzveoerf5csud.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80",
        alt: "Description 1",
        titleText: "맛집",
        content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
    },
    {
        src: "https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/ijrnzveoerf5csud.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80",
        alt: "Description 1",
        titleText: "맛집",
        content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7eCGWWlU0vwN-iGFUXK-VEXK7C5LXckEDQ&usqp=CAU",
        alt: "Description 1",
        titleText: "맛집",
        content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7eCGWWlU0vwN-iGFUXK-VEXK7C5LXckEDQ&usqp=CAU",
        alt: "Description 1",
        titleText: "맛집",
        content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7eCGWWlU0vwN-iGFUXK-VEXK7C5LXckEDQ&usqp=CAU",
        alt: "Description 1",
        titleText: "맛집",
        content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7eCGWWlU0vwN-iGFUXK-VEXK7C5LXckEDQ&usqp=CAU",
        alt: "Description 1",
        titleText: "맛집",
        content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7eCGWWlU0vwN-iGFUXK-VEXK7C5LXckEDQ&usqp=CAU",
        alt: "Description 1",
        titleText: "맛집",
        content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7eCGWWlU0vwN-iGFUXK-VEXK7C5LXckEDQ&usqp=CAU",
        alt: "Description 1",
        titleText: "맛집",
        content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
    },
];
const PopularRestaurants = ({ itemsPerPage, columns }) => {
    const [usePopularSlide, setUsePopularSlide] = (0, react_1.useState)(0);
    const numberOfGroups = Math.ceil(data.length / itemsPerPage);
    const clickSlideRight = () => {
        setUsePopularSlide(usePopularSlide + 1);
    };
    const clickSlideLeft = () => {
        setUsePopularSlide(usePopularSlide - 1);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("section", null,
            react_1.default.createElement(shared_componentCSS_1.Module_title_wrap, null,
                react_1.default.createElement(shared_componentCSS_1.Module_title_name, null, "\uBBFF\uACE0 \uBCF4\uB294 \uB9DB\uC9D1 \uB9AC\uC2A4\uD2B8"),
                react_1.default.createElement(shared_componentCSS_1.Module_more, null, "\uB9AC\uC2A4\uD2B8 \uB354\uBCF4\uAE30")),
            react_1.default.createElement(shared_componentCSS_1.SliderContainer, null,
                react_1.default.createElement(shared_componentCSS_1.SlideButton, { onClick: clickSlideLeft, style: { marginRight: 10 } }, "<"),
                react_1.default.createElement(shared_componentCSS_1.ImageWrapper, { columns: columns, rows: 2, height: 492 },
                    react_1.default.createElement(react_1.default.Fragment, null, data
                        .slice((usePopularSlide % numberOfGroups) * itemsPerPage, (usePopularSlide % numberOfGroups) * itemsPerPage +
                        itemsPerPage)
                        .map((image, index) => (react_1.default.createElement(shared_componentCSS_1.ImageContainer, { key: index, onDragStart: (e) => e.preventDefault(), height: 236 },
                        react_1.default.createElement(shared_componentCSS_1.Image_list, { src: image.src, alt: image.alt, height: 236 }),
                        react_1.default.createElement(shared_componentCSS_1.ImageTitleText, { top: 30 }, image.titleText),
                        react_1.default.createElement(shared_componentCSS_1.ImageContent, { top: 50 }, image.content)))))),
                react_1.default.createElement(shared_componentCSS_1.SlideButton, { onClick: clickSlideRight, style: { marginLeft: 10 } }, ">"))),
        ";"));
};
exports.default = PopularRestaurants;
//# sourceMappingURL=PopularRestaurants.js.map