"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageContent = exports.ImageTitleText = exports.SlideButton = exports.SliderContainer = exports.Image_list = exports.ProfileImgOnImg = exports.ImageContainer = exports.ImageWrapper = exports.Module_more = exports.Module_title_name = exports.Module_title_wrap = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
//인기 맛집 리스트
exports.Module_title_wrap = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  align-items: center
  width: 100%;
`;
//타이틀 이름
exports.Module_title_name = styled_components_1.default.h2 `
  font-size: 20px;
  color: orange;
  margin-left: 100px;
`;
//리스트 더보기
exports.Module_more = styled_components_1.default.h3 `
  color: grey;
  cursor: pointer;
  margin-right: 100px;
`;
exports.ImageWrapper = styled_components_1.default.div `
   width: 100%;
  height: ${({ height }) => `${height}px`};
  overflow: hidden;
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  grid-gap: ${({ columns }) => 10 * (columns - 1)}px 20px;
  transition: transform 300ms ease-in-out;
  transition-timing-function: linear;
`;
exports.ImageContainer = styled_components_1.default.div `
  position: relative;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center; 
  text-align: center;

  hr {
    position: absolute; 
    top: 33%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    width: 75px;
    border:2px solid white;
  }
  
`;
exports.ProfileImgOnImg = styled_components_1.default.img `
  position: absolute;
  top: 65%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  width:56px;
  height:56px;
`;
exports.Image_list = styled_components_1.default.img `
  width: 100%;
  height: ${({ height }) => `${height}px`};
  object-fit: cover;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  filter: brightness(0.7);

  &:not(:last-child) {
    margin-bottom: 20px; // 이미지 간 margin 추가
  }
`;
exports.SliderContainer = styled_components_1.default.div `
  display: flex;
  align-items: center;
`;
exports.SlideButton = styled_components_1.default.button `
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
exports.ImageTitleText = styled_components_1.default.h1 `
  position: absolute;
  top: ${({ top }) => `${top}%`};
  left: 0;
  right: 0;
  white-space: normal; 
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-align: center;
`;
exports.ImageContent = styled_components_1.default.p `
  position: absolute;
  top: ${({ top }) => `${top}%`};
  left: 0;
  right: 0;
  white-space: normal;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-align: center;
`;
//# sourceMappingURL=shared_componentCSS.js.map