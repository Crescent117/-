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
const mongoose_1 = __importStar(require("mongoose"));
const SearchListItemSchema = new mongoose_1.Schema({
    basicInfo: {
        catename: String,
        mainphotourl: String,
        visit: Number,
        favorite: Number,
    },
    comment: {
        list: [
            {
                point: Number,
                contents: String,
                username: String,
                profile: String,
                date: String,
            },
        ],
    },
    tag: [
        {
            storename: String,
            category_name: String,
            new_addr_fullname: String,
            name3: String,
            newaddrfull: String,
            menu_name: [{}],
        },
    ],
}, { _id: false });
const SearchListSchema = new mongoose_1.Schema({
    store: [SearchListItemSchema],
}, {
    timestamps: true,
    collection: "DealiciousFood",
});
const SearchList = mongoose_1.default.model("SearchList", SearchListSchema);
exports.default = SearchList;
//# sourceMappingURL=searchList.js.map