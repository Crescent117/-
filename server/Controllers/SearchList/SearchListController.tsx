import searchList from "../../Model/SearchList/SearchList";
import { Request, Response } from "express";

interface MenuItem {
  price: string;
  menu: string;
}

interface Tag {
  storename: string;
  category_name?: string;
  new_addr_fullname?: string;
  name3?: string;
  newaddrfull?: string;
  menu_name: MenuItem[];
}

interface Comment {
  list: {
    point: number;
    contents: string;
    username: string;
    profile: string;
    date: string;
  }[];
}

interface BasicInfo {
  placenamefull: string;
  catename: string;
  mainphotourl: string;
  visit: number;
  favorite: number;
}

interface SearchListItem {
  store: {
    storeInfo: {
      basicInfo: BasicInfo;
      comment: Comment;
      tag: Tag[];
    };
  };
  storeInfo: SearchListItem;
  basicInfo: BasicInfo;
  comment: Comment;
  tag: Tag[];
}


// 댓글 평점 평균 계산
const calculatePointAverage = (comments: { point: number }[]) => {
const filteredComments = comments.filter(
  (comment) => comment.point !== null && comment.point !== undefined
);
  const pointSum: number = filteredComments.reduce(
    (sum: number, comment) => sum + comment.point,0
  );
  const average =
    filteredComments.length > 0 ? pointSum / filteredComments.length : 0;
  return average.toFixed(1);
};

// 몇몇 tag안에 값있는지 검사
const getTagValue = (tagArray: Tag[], key: keyof Tag) => {
  const tag = tagArray.find((tag) => tag[key]);
  return tag ? tag[key] : "";
};

const processStoreInfo = (param: SearchListItem) => {
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

exports.getSearchList = async (req: Request, res: Response) => {
  const keyword: String = req.params.keyword;
  const pageNum: number = Number(req.query.pageNum) || 0;;
  console.log(pageNum);
  try {
    const results: SearchListItem[] = await searchList.aggregate([
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
      {
        $sort: {
          avgCommentPoint: -1, // Sort by the average point in ascending order
        },
      },
      {
        $project: {
          "store.storeInfo": 1,
          avgCommentPoint: 1,
          _id: 0,
        },
      },
      { $skip: pageNum * 20 }, // 설정한 숫자만큼 검색 제외
      { $limit: 20 }, // 설정한 숫자만큼 limit
    ]);
    /*
      query 끝
    */

    // 값이 없을시 처리
    if (results.length === 0) {
      res
        .status(200)
        .json({ message: "검색한 값의 결과는 존재하지 않습니다." });
    }

    // 반환 배열
    const responseSearchList = await Promise.all(
      results.map((result) => processStoreInfo(result))
    );
   res.status(200).json(responseSearchList);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
