"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBannerText = exports.HomeBannerSearchIcon = exports.HomeBannerButton = exports.HomeBannerInput = exports.HomeBannerLabel = exports.HomeBannerSearchWrap = exports.HomeBanner = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
//메인 홈페이지 배너
exports.HomeBanner = styled_components_1.default.div `
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
exports.HomeBannerSearchWrap = styled_components_1.default.div `
  width: 100%;
  max-width: 762px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
exports.HomeBannerLabel = styled_components_1.default.label `
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
exports.HomeBannerInput = styled_components_1.default.input `
  width: 100%;
  font-size: 18px;
  border: none;
  outline: none;
`;
exports.HomeBannerButton = styled_components_1.default.input `
  position: absolute;
  top: 35%;
  margin-top: -25px;
  right: -50px;
  max-width: 200px;
  background-color: skyblue;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  padding: 18px 50px;
  cursor: pointer;
`;
exports.HomeBannerSearchIcon = styled_components_1.default.img `
  width: 30px;
  height: 30px;
`;
exports.HomeBannerText = styled_components_1.default.h1 `
  text-align: center;
  color: #ffffff;
`;
//# sourceMappingURL=HomeBannerCSS.js.map