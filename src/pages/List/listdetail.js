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
const react_modal_1 = __importDefault(require("react-modal"));
require("./listdetail.css");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min.js");
require("bootstrap-icons/font/bootstrap-icons.css");
const ListDetail = ({ TrustBestItem }) => {
    var _a;
    const [modalIsOpen, setModalIsOpen] = (0, react_1.useState)(false);
    const [currentImageIndex, setCurrentImageIndex] = (0, react_1.useState)(0);
    const handleOpenModal = () => {
        setModalIsOpen(true);
    };
    const handleCloseModal = () => {
        setModalIsOpen(false);
    };
    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? TrustBestItem.length - 1 : prevIndex - 1);
    };
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === TrustBestItem.length - 1 ? 0 : prevIndex + 1);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("aside", { className: "restaurant-photo" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement("figure", { className: "list-photo" },
                        react_1.default.createElement("figure", { className: "restaurant-photo-items", onClick: handleOpenModal },
                            react_1.default.createElement("ul", null,
                                react_1.default.createElement("p", { className: "place-photo" },
                                    react_1.default.createElement("img", { src: "https://mp-seoul-image-production-s3.mangoplate.com/492453/1042666_1688268955600_1000016246", alt: "", width: "500px;", height: "340px" }),
                                    " ",
                                    react_1.default.createElement("img", { src: "https://mp-seoul-image-production-s3.mangoplate.com/492453/1042666_1688268955600_1000016246", alt: "", width: "500px;", height: "340px" }),
                                    " ",
                                    react_1.default.createElement("img", { src: "https://mp-seoul-image-production-s3.mangoplate.com/492453/1042666_1688268955600_1000016246", alt: "", width: "500px;", height: "340px" })),
                                TrustBestItem.map((imageData, index) => (react_1.default.createElement("p", { key: index },
                                    react_1.default.createElement("img", { src: imageData.src, alt: `Image ${index}` }))))))))),
            react_1.default.createElement(react_modal_1.default, { isOpen: modalIsOpen, onRequestClose: handleCloseModal },
                react_1.default.createElement("div", { className: "modal" },
                    react_1.default.createElement("div", { className: "modal-content" },
                        react_1.default.createElement("button", { className: "left-button", onClick: handlePrevImage },
                            react_1.default.createElement("i", { className: "bi bi-chevron-left" })),
                        react_1.default.createElement("div", { className: "modal-image" }),
                        react_1.default.createElement("button", { className: "right-button", onClick: handleNextImage },
                            react_1.default.createElement("i", { className: "bi bi-chevron-right" })),
                        react_1.default.createElement("img", { src: (_a = TrustBestItem[currentImageIndex]) === null || _a === void 0 ? void 0 : _a.src, alt: `Image ${currentImageIndex}` }),
                        react_1.default.createElement("button", { className: "modal-close", onClick: handleCloseModal },
                            react_1.default.createElement("i", { className: "bi bi-x-lg" })))))),
        react_1.default.createElement("div", { className: "column-contents" },
            react_1.default.createElement("div", { className: "inner" },
                react_1.default.createElement("section", { className: "restaurant-detail" },
                    react_1.default.createElement("header", null,
                        react_1.default.createElement("div", { className: "restaurant_title_wrap" },
                            react_1.default.createElement("span", { className: "title" },
                                react_1.default.createElement("h1", { className: "restaurant_name" }, "\uB3CC\uC0B0\uC2DD\uB2F9"),
                                react_1.default.createElement("strong", { className: "rate-point expected" },
                                    react_1.default.createElement("span", null, "4.5"))),
                            react_1.default.createElement("button", { className: "review-btn" },
                                react_1.default.createElement("i", { className: "bi bi-pencil" }),
                                react_1.default.createElement("span", { className: "review-btn-txt" }, "\uB9AC\uBDF0\uC4F0\uAE30")),
                            react_1.default.createElement("button", { className: "wishlist-btn" },
                                react_1.default.createElement("i", { className: "bi bi-star" }),
                                react_1.default.createElement("span", { className: "wishlist-btn-txt" }, "\uAC00\uACE0\uC2F6\uB2E4"))),
                        react_1.default.createElement("p", { className: "visit-count" }, "\uBC29\uBB38\uD69F\uC218: 100"),
                        react_1.default.createElement("p", { className: "review-count" }, "\uB9AC\uBDF0\uD69F\uC218: 50"),
                        react_1.default.createElement("p", { className: "wishlist-count" }, "\uC704\uC2DC\uB9AC\uC2A4\uD2B8: 20")),
                    react_1.default.createElement("div", { className: "restaurant-info" },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("p", null, "\uC8FC\uC18C: \uC11C\uC6B8\uC2DC \uAC15\uB0A8\uAD6C"),
                            react_1.default.createElement("p", null, "\uC804\uD654\uBC88\uD638: 02-123-4567"),
                            react_1.default.createElement("p", null, "\uC74C\uC2DD\uC815\uBCF4: \uD55C\uC2DD"),
                            react_1.default.createElement("p", null, "\uAC00\uACA9\uB300: \u20A9\u20A9"),
                            react_1.default.createElement("p", null, "\uC601\uC5C5\uC2DC\uAC04: 10:00 AM - 10:00 PM"),
                            react_1.default.createElement("p", null, "\uD734\uC77C: \uB9E4\uC8FC \uC77C\uC694\uC77C")))),
                react_1.default.createElement("hr", null),
                react_1.default.createElement("section", { className: "reviews" },
                    react_1.default.createElement("header", { className: "RestaurantReviewList__Header" },
                        react_1.default.createElement("h2", { className: "RestaurantReviewList__Title" },
                            react_1.default.createElement("span", { className: "RestaurantReviewList__RestaurantName" }, "\uB3CC\uC0B0\uC2DD\uB2F9"),
                            react_1.default.createElement("span", { className: "RestaurantReviewList__AllCount" }, " (8)")),
                        react_1.default.createElement("ul", { className: "RestaurantReviewList__FilterList" },
                            react_1.default.createElement("li", { className: "RestaurantReviewList__FilterItem" },
                                react_1.default.createElement("button", { className: "RestaurantReviewList__FilterButton RestaurantReviewList__FilterButton--Selected RestaurantReviewList__AllFilterButton" },
                                    "\uC804\uCCB4(",
                                    react_1.default.createElement("span", { className: "RestaurantReviewList__ReviewCount" }, "8"),
                                    ")")),
                            react_1.default.createElement("li", { className: "RestaurantReviewList__FilterItem" },
                                react_1.default.createElement("button", { className: "RestaurantReviewList__FilterButton" },
                                    "\uB9DB\uC788\uB2E4(",
                                    react_1.default.createElement("span", { className: "RestaurantReviewList__ReviewCount" }, "4"),
                                    ")")),
                            react_1.default.createElement("li", { className: "RestaurantReviewList__FilterItem" },
                                react_1.default.createElement("button", { className: "RestaurantReviewList__FilterButton" },
                                    "\uAD1C\uCC2E\uB2E4(",
                                    react_1.default.createElement("span", { className: "RestaurantReviewList__ReviewCount" }, "2"),
                                    ")")),
                            react_1.default.createElement("li", { className: "RestaurantReviewList__FilterItem" },
                                react_1.default.createElement("button", { className: "RestaurantReviewList__FilterButton" },
                                    "\uBCC4\uB85C\uB2E4(",
                                    react_1.default.createElement("span", { className: "RestaurantReviewList__ReviewCount" }, "2"),
                                    ")")))))),
            react_1.default.createElement("div", { className: "column-side" },
                react_1.default.createElement("div", { className: "map" }, "\uAC00\uAC8C \uC704\uCE58 \uC9C0\uB3C4\uAC00 \uB098\uD0C0\uB0A0 \uBD80\uBD84\uC785\uB2C8\uB2E4."),
                react_1.default.createElement("div", { className: "recommended-stores" },
                    react_1.default.createElement("h2", null, "\uC774 \uADFC\uCC98 \uAC00\uAC8C \uCD94\uCC9C"))))));
};
exports.default = ListDetail;
//# sourceMappingURL=listdetail.js.map