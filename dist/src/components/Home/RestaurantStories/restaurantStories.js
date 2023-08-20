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
const S = __importStar(require("../shared_componentCSS"));
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
const RestaurantStories = () => {
    const [useStoriesSlide, setUseStoriesSlide] = (0, react_1.useState)(0);
    const clickSlideRight = () => {
        setUseStoriesSlide(useStoriesSlide + 1);
    };
    const clickSlideLeft = () => {
        setUseStoriesSlide(useStoriesSlide - 1);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("section", null,
            react_1.default.createElement(S.Module_title_wrap, null,
                react_1.default.createElement(S.Module_title_name, null, "\uB9DB\uC9D1 \uC2A4\uD1A0\uB9AC"),
                react_1.default.createElement(S.Module_more, null, "\uC2A4\uD1A0\uB9AC \uB354\uBCF4\uAE30")),
            react_1.default.createElement(S.SliderContainer, null,
                react_1.default.createElement(S.SlideButton, { onClick: clickSlideLeft, style: { marginRight: 10 } }, "<"),
                react_1.default.createElement(S.ImageWrapper, { columns: 3, rows: 1, height: 382 },
                    react_1.default.createElement(react_1.default.Fragment, null, data
                        .slice((useStoriesSlide % 4) * 3, (useStoriesSlide % 4) * 3 + 3)
                        .map((image, index) => (react_1.default.createElement(S.ImageContainer, { key: index, onDragStart: (e) => e.preventDefault(), height: 382 },
                        react_1.default.createElement(S.Image_list, { src: image.src, alt: image.alt, height: 382 }),
                        react_1.default.createElement(S.ImageTitleText, { top: 20 }, image.titleText),
                        react_1.default.createElement(S.ImageContent, { top: 40 }, image.content),
                        react_1.default.createElement(S.ProfileImgOnImg, { src: "https://image.fmkorea.com/files/attach/new2/20211001/4329633/1087283728/3956629328/d0d150f0347fd0ae1a0b8ea9ae95f712.jpg" }),
                        react_1.default.createElement(S.ImageContent, { top: 75 }, "\uBBF8\uC2A4\uAC01\uCCAD")))))),
                react_1.default.createElement(S.SlideButton, { onClick: clickSlideRight, style: { marginLeft: 10 } }, ">")))));
};
exports.default = RestaurantStories;
//# sourceMappingURL=restaurantStories.js.map