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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
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
function Home() {
    const [useSlide, SetUseSlide] = (0, react_1.useState)(0);
    const [itemsPerPage, setItemsPerPage] = (0, react_1.useState)(6);
    const [columns, setColumns] = (0, react_1.useState)(3);
    const numberOfGroups = Math.ceil(data.length / itemsPerPage);
    const handleResize = () => {
        if (window.innerWidth < 1300) {
            setItemsPerPage(4);
            setColumns(2);
        }
        if (window.innerWidth > 1300) {
            setItemsPerPage(6);
            setColumns(3);
        }
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            // cleanup
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const clickSlideRight = () => {
        SetUseSlide(useSlide + 1);
    };
    const clickSlideLeft = () => {
        SetUseSlide(useSlide - 1);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(HomeBanner, null,
            react_1.default.createElement(HomeBannerText, null,
                "\uC194\uC9C1\uD55C \uB9AC\uBDF0, \uBBFF\uC744 \uC218 \uC788\uB294 \uD3C9\uC810!",
                react_1.default.createElement("br", null),
                "\uB354 \uC870\uC740 \uB9DB\uC9D1 \uB9AC\uC2A4\uD2B8!"),
            react_1.default.createElement(HomeBannerSearchWrap, null,
                react_1.default.createElement(HomeBannerLabel, null,
                    react_1.default.createElement("span", null,
                        react_1.default.createElement(HomeBannerSearchIcon, { src: "https://w7.pngwing.com/pngs/410/185/png-transparent-magnifying-glass-computer-icons-magnifying-glass-glass-art-symbol-thumbnail.png" })),
                    react_1.default.createElement(HomeBannerInput, { type: "text", placeholder: "Type something" }),
                    react_1.default.createElement(HomeBannerButton, { type: "submit", value: "Submit" })))),
        react_1.default.createElement("section", null,
            react_1.default.createElement(Module_title_wrap, null,
                react_1.default.createElement(Module_title_name, null, "\uBBFF\uACE0 \uBCF4\uB294 \uB9DB\uC9D1 \uB9AC\uC2A4\uD2B8"),
                react_1.default.createElement(Module_more, null, "\uB9AC\uC2A4\uD2B8 \uB354\uBCF4\uAE30")),
            react_1.default.createElement(SliderContainer, null,
                react_1.default.createElement(SlideButton, { onClick: clickSlideLeft, style: { marginRight: 10 } }, "<"),
                react_1.default.createElement(ImageWrapper, { columns: columns },
                    react_1.default.createElement(react_1.default.Fragment, null, data
                        .slice((useSlide % numberOfGroups) * itemsPerPage, (useSlide % numberOfGroups) * itemsPerPage + itemsPerPage)
                        .map((image, index) => (react_1.default.createElement(ImageContainer, { key: index, onDragStart: (e) => e.preventDefault() },
                        react_1.default.createElement(Image_list, { src: image.src, alt: image.alt }),
                        react_1.default.createElement(ImageTitleText, null, image.titleText),
                        react_1.default.createElement(ImageContent, null, image.content)))))),
                react_1.default.createElement(SlideButton, { onClick: clickSlideRight, style: { marginLeft: 10 } }, ">"))),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8"),
        react_1.default.createElement("div", null, "\uD14C\uC2A4\uD2B8")));
}
exports.default = Home;
//메인 홈페이지 배너
const HomeBanner = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://mp-seoul-image-production-s3.mangoplate.com/a4283e5725fb56755b9bbeb8f285d0dc.jpg");
  background-size: cover;
  background-position: center;
  position: relative; 
`;
const HomeBannerSearchWrap = styled_components_1.default.div `
  width: 100%;
  max-width: 762px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const HomeBannerLabel = styled_components_1.default.label `
  position: relative;
  width: 100%;
  border-radius: 50px;
  border-top: 3px solid skyblue;
  border-left: 3px solid skyblue;
  border-bottom: 2px solid skyblue;
  font-size: 18px;
  padding: 10px 100px 10px 50px;
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;
const HomeBannerInput = styled_components_1.default.input `
  width: 100%;
  font-size: 18px;
  border: none;
  outline: none;
`;
const HomeBannerButton = styled_components_1.default.input `
  position: absolute;
  top: 40%;
  margin-top: -25px;
  right: -50px;
  max-width: 200px;
  background-color: skyblue;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  padding: 20px 30px;
  cursor: pointer;
`;
const HomeBannerSearchIcon = styled_components_1.default.img `
  width: 30px;
  height: 30px;
`;
const HomeBannerText = styled_components_1.default.h1 `
  text-align: center;
  color: #ffffff;
`;
//인기 맛집 리스트
const Module_title_wrap = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  align-items: center
  width: 100%;
`;
//타이틀 이름
const Module_title_name = styled_components_1.default.h2 `
  font-size: 20px;
  color: orange;
  margin-left: 100px;
`;
//리스트 더보기
const Module_more = styled_components_1.default.h3 `
  color: grey;
  cursor: pointer;
  margin-right: 100px;
`;
const ImageWrapper = styled_components_1.default.div `
  width: 100%;
  height: 492px;
  overflow: hidden;
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  transition: transform 300ms ease-in-out; // 이 부분을 추가하십시오.
  transition-timing-function: linear;
`;
const ImageContainer = styled_components_1.default.div `
  position: relative;
  width: 100%;
  max-width: 550px;
  height: 236px;
  overflow: hidden;
  cursor: pointer;
`;
const Image_list = styled_components_1.default.img `
  width: 100%;
  max-width: 550px;
  height: 236px;
  object-fit: cover;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  filter: brightness(0.7);
  
  &:not(:last-child) {
    margin-bottom: 20px; // 이미지 간 margin 추가
  }
`;
const SliderContainer = styled_components_1.default.div `
  display: flex;
  align-items: center;
`;
const SlideButton = styled_components_1.default.button `
  font-size: 50px;
  padding: 10px 15px;
  margin: 0 15px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: black;
  font-weight: bold;
  outline: none;

  &:hover {
    color: blue;
  }
`;
const ImageTitleText = styled_components_1.default.h1 `
  position: absolute;
  top: 30%;
  left: 50%;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-align: center;
  transform: translate(-50%, -50%);
`;
const ImageContent = styled_components_1.default.p `
   position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-align: center;
  transform: translate(-50%, -50%);
`;
//# sourceMappingURL=Home.js.map