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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrustBest = exports.setUsePopularSlide = exports.setTrustBest = void 0;
const types = __importStar(require("./types"));
const setTrustBest = (list) => ({
    type: types.SET_TRUSTBEST,
    payload: list,
});
exports.setTrustBest = setTrustBest;
const setUsePopularSlide = (slide) => ({
    type: types.SET_SLIDE,
    payload: slide,
});
exports.setUsePopularSlide = setUsePopularSlide;
const getTrustBest = () => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`http://localhost:4500/trustBest`);
        // 에러처리
        if (!response.ok) {
            const errorData = yield response.json();
            const statusCode = response.status;
            const statusText = response.statusText;
            const message = errorData.message[0];
            console.log(`${statusCode} - ${statusText} - ${message}`);
            return;
        }
        const data = yield response.json();
        dispatch((0, exports.setTrustBest)(data));
    }
    catch (err) {
        console.log("error log: ", err);
    }
});
exports.getTrustBest = getTrustBest;
//# sourceMappingURL=actions.js.map