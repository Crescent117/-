"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./list.css");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min.js");
require("bootstrap-icons/font/bootstrap-icons.css");
function List() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("header", { className: "basic-info-list" },
                react_1.default.createElement("p", { className: "status" }, "1111\uD074\uB9AD | 2023-08-2 "),
                react_1.default.createElement("h1", { className: "title" }, "\uC0D0\uB7EC\uB4DC \uB9DB\uC9D1 \uBCA0\uC2A4\uD2B8 40\uACF3"),
                react_1.default.createElement("h4", { className: "subtitle" }, "\u201C\uC785\uB9DB \uC5C6\uC744 \uB54C \uC0D0\uB7EC\uB4DC\uB85C \uAC00\uBCCD\uAC8C!\u201D")),
            react_1.default.createElement("main", { className: "container-place" },
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("div", { className: "place-list" },
                            react_1.default.createElement("div", { className: "place-item" },
                                react_1.default.createElement("img", { src: "https://mp-seoul-image-production-s3.mangoplate.com/1035497_1669815478237252.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80", alt: "\uAC00\uAC8C1" }),
                                react_1.default.createElement("div", { className: "place-info" },
                                    react_1.default.createElement("div", { className: "place-info-header" },
                                        react_1.default.createElement("span", { className: "title" },
                                            react_1.default.createElement("h1", { className: "restaurant_name" }, "\uB3CC\uC0B0\uC2DD\uB2F9"),
                                            react_1.default.createElement("strong", { className: "rate-point expected" },
                                                react_1.default.createElement("span", null, "4.5")))),
                                    react_1.default.createElement("p", null, "\uAC00\uAC8C1 \uC8FC\uC18C")),
                                react_1.default.createElement("div", { className: "buttons" },
                                    react_1.default.createElement("button", { className: "wishlist-btn" },
                                        react_1.default.createElement("i", { className: "bi bi-star" }),
                                        react_1.default.createElement("span", { className: "wishlist-btn-txt" }, "\uAC00\uACE0\uC2F6\uB2E4")),
                                    react_1.default.createElement("button", { className: "viewdetail" },
                                        react_1.default.createElement("p", { className: "viewdetail-p" },
                                            react_1.default.createElement(react_router_dom_1.Link, { to: `/listdetail` }, "\uAC00\uAC8C \uC790\uC138\uD788 \uBCF4\uAE30"))))))))))));
}
exports.default = List;
//# sourceMappingURL=list.js.map