"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const searchList_1 = __importDefault(require("../../Model/SearchList/searchList"));
//쿼리문 불러오기
// 댓글 평점 평균 계산
const calculatePointAverage = (comments) => {
    const filteredComments = comments.filter((comment) => comment.point !== null && comment.point !== undefined);
    const pointSum = filteredComments.reduce((sum, comment) => sum + comment.point, 0);
    const average = filteredComments.length > 0 ? pointSum / filteredComments.length : 0;
    return average.toFixed(1);
};
// 몇몇 tag안에 값있는지 검사
const getTagValue = (tagArray, key) => {
    const tag = tagArray.find((tag) => tag[key]);
    return tag ? tag[key] : "";
};
const processStoreInfo = (param) => {
    const storeInfo = param.store.storeInfo;
    const tagArray = storeInfo.tag || [];
    const comments = storeInfo.comment.list;
    const pointAVG = calculatePointAverage(comments);
    return {
        storename: storeInfo.basicInfo.placenamefull,
        imgurl: storeInfo.basicInfo.mainphotourl,
        pointAVG,
        storeLocation: getTagValue(tagArray, "name3"),
        storeRecommendFood: getTagValue(tagArray, "category_name"),
        visit: storeInfo.basicInfo.visit,
        favorite: storeInfo.basicInfo.favorite,
    };
};
exports.getSearchList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const keyword = req.params.keyword;
    const pageNum = Number(req.query.pageNum) || 0;
    const pageSize = 20; // 페이지당 아이템 수
    const skipAmount = pageNum * pageSize; // 건너뛸 아이템 수
    console.log(pageNum);
    try {
        const commonPipeline = [
            {
                $unwind: "$store",
            },
            {
                $match: {
                    "store.storeInfo": {
                        $exists: true,
                    },
                },
            },
            {
                $addFields: {
                    matchingTags: {
                        $filter: {
                            input: "$store.storeInfo.tag",
                            as: "tag",
                            cond: {
                                $or: [
                                    {
                                        $regexMatch: {
                                            input: "$$tag.storename",
                                            regex: keyword,
                                            options: "i",
                                        },
                                    },
                                    {
                                        $regexMatch: {
                                            input: "$$tag.category_name",
                                            regex: keyword,
                                            options: "i",
                                        },
                                    },
                                    {
                                        $regexMatch: {
                                            input: "$$tag.new_addr_fullname",
                                            regex: keyword,
                                            options: "i",
                                        },
                                    },
                                    {
                                        $regexMatch: {
                                            input: "$$tag.name3",
                                            regex: keyword,
                                            options: "i",
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    "store.storeInfo.menuInfo.menuList": {
                        $filter: {
                            input: "$store.storeInfo.menuInfo.menuList",
                            as: "menu",
                            cond: {
                                $regexMatch: {
                                    input: "$$menu.menu",
                                    regex: keyword,
                                    options: "i",
                                },
                            },
                        },
                    },
                },
            },
            {
                $match: {
                    $or: [
                        { matchingTags: { $ne: [] } },
                        { "store.storeInfo.menuInfo.menuList": { $ne: [] } },
                    ],
                },
            },
            {
                $addFields: {
                    avgCommentPoint: {
                        $avg: "$store.storeInfo.comment.list.point", // Calculate the average point
                    },
                },
            },
        ];
        const totalCountPipeline = [
            ...commonPipeline,
            {
                $count: "totalCount",
            },
        ];
        const keywordSearchPipeline = [
            ...commonPipeline,
            {
                $sort: {
                    avgCommentPoint: -1,
                },
            },
            {
                $project: {
                    "store.storeInfo": 1,
                    avgCommentPoint: 1,
                    _id: 0,
                },
            },
            { $skip: skipAmount },
            { $limit: pageSize },
        ];
        const totalCountResults = yield searchList_1.default.aggregate(totalCountPipeline);
        const totalCount = ((_a = totalCountResults[0]) === null || _a === void 0 ? void 0 : _a.totalCount) || 0;
        const keywordSearchResults = yield searchList_1.default.aggregate(keywordSearchPipeline);
        /*
          query 끝
        */
        if (keywordSearchResults.length === 0) {
            res
                .status(200)
                .json({ message: "검색한 값의 결과는 존재하지 않습니다." });
        }
        // 값이 없을시 처리
        // 반환 배열
        const responseSearchList = yield Promise.all(keywordSearchResults.map((result) => processStoreInfo(result)));
        res.status(200).json(responseSearchList);
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
//# sourceMappingURL=searchListController.js.map