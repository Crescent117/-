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
exports.ErrorMessage = exports.ImageContainer = exports.ImageContent = exports.ImageTitleText = exports.PagingButtonText_p = exports.PagingButton_button = exports.Pagenation_div = exports.RightSideImage_img = exports.Map_div = exports.RightSide_div = exports.ViewCount = exports.StoreScore = exports.StoreTitle = exports.StoreTitleScoreWrap = exports.FoodImg_img = exports.SearchList_li = exports.SertchList_ul = exports.SearchListInner_div = exports.SearchListWrap_div = exports.SearchListTitle_title = exports.OuterWrap_section = void 0;
const styled_components_1 = __importStar(require("styled-components"));
exports.OuterWrap_section = styled_components_1.default.section `
  display: flex;
`;
exports.SearchListTitle_title = styled_components_1.default.p `
  color: #FF7F00;
  padding-left: 10px;
  font-size: 2em;
  margin:30px 0;
`;
exports.SearchListWrap_div = styled_components_1.default.div `
  width:100%;
  min-width:780px;
  float:left;
`;
exports.SearchListInner_div = styled_components_1.default.div `
  width:100%;
  max-width:800px;
  margin: 0 auto;
`;
exports.SertchList_ul = styled_components_1.default.ul `
  list-style: none;
  padding-left: 0px;
`;
exports.SearchList_li = styled_components_1.default.li `
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
`;
exports.FoodImg_img = styled_components_1.default.img `
  width: 359px;
  height: ${({ height }) => `${height}px`};
  cursor:pointer;
`;
exports.StoreTitleScoreWrap = styled_components_1.default.div `
  display: flex;
  align-items: center;
  padding: 10px 0;
`;
exports.StoreTitle = styled_components_1.default.span `
  font-size: 24px;
  color: grey;
  cursor:pointer;
  ${({ maxchar }) => maxchar && (0, styled_components_1.css) `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: ${maxchar}ch;
    `}
`;
exports.StoreScore = styled_components_1.default.span `
  color: #FF7F00;
  margin-left: 10px;
  font-size: 24px;
`;
exports.ViewCount = styled_components_1.default.span `
  position: relative;
  padding-left:20px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url("https://cdn-icons-png.flaticon.com/512/65/65003.png");
    background-size: cover;
  }
`;
exports.RightSide_div = styled_components_1.default.div `
  min-width: 400px;
  max-width: 400px;
  background-color: #e0e0e0;
`;
exports.Map_div = styled_components_1.default.div `
  height:485px;
`;
exports.RightSideImage_img = styled_components_1.default.img `
  width: 352px;
  height: 165px;
  object-fit: cover;
  position: relative;
  filter: brightness(0.7);
  margin-left: 25px;
  &:not(:last-child) {
    margin-bottom: 20px; // 이미지 간 margin 추가
  }
`;
exports.Pagenation_div = styled_components_1.default.div `
  text-align:center;
  margin: 50px 0;
`;
exports.PagingButton_button = styled_components_1.default.button `
  margin: 0 15px;
  padding: 12px 20px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid ${({ color }) => `#${color}`};;
`;
exports.PagingButtonText_p = styled_components_1.default.a `
  text-decoration: none;
  color: ${({ color }) => `#${color}`};
  fontsize: 2em;
`;
exports.ImageTitleText = styled_components_1.default.p `
  position: absolute;
  font-size: 20px;
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
exports.ImageContainer = styled_components_1.default.div `
  position: relative;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
`;
exports.ErrorMessage = styled_components_1.default.div `
  font-size:2em;
  margin-top:30%;
  text-align:center;
`;
//# sourceMappingURL=searchListCss.js.map