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
const Banner_1 = __importDefault(require("../../components/Home/Banner/Banner"));
const PopularRestaurants_1 = __importDefault(require("../../components/Home/PopularRestaurants/PopularRestaurants"));
const RestaurantStories_1 = __importDefault(require("../../components/Home/RestaurantStories/RestaurantStories"));
const RegionRestaurants_1 = __importDefault(require("../../components/Home/RegionRestaurants/RegionRestaurants"));
const useWindowResize_1 = __importDefault(require("../../components/shared/useWindowResize"));
function Home() {
    //화면크기에 따라 바뀌는 값들
    const [itemsPerPage, setItemsPerPage] = (0, react_1.useState)(6);
    const [columns, setColumns] = (0, react_1.useState)(3);
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
    (0, useWindowResize_1.default)(handleResize);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Banner_1.default, null),
        react_1.default.createElement(PopularRestaurants_1.default, { itemsPerPage: itemsPerPage, columns: columns }),
        react_1.default.createElement("hr", null),
        react_1.default.createElement(RestaurantStories_1.default, null),
        react_1.default.createElement("hr", null),
        react_1.default.createElement(RegionRestaurants_1.default, { itemsPerPage: itemsPerPage, columns: columns }),
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
//# sourceMappingURL=Home.js.map