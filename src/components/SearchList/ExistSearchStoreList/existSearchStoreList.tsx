import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { StyleSheetManager } from "styled-components";
import * as S from "../searchListCss";
import SearchListPagenation from "../Pagenation/pagenation";

interface SearchListDB {
  imgurl: string;
  storename: string;
  pointAVG: number;
  storeLocation: string;
  storeRecommendFood: string;
  visit: number;
}

interface SearchStoreListProps {
  setUseSearchNotFoundMessage: React.Dispatch<React.SetStateAction<string>>;
  setUseSearchNotFound: React.Dispatch<React.SetStateAction<boolean>>;
}

const existSearchStoreList = ({
  setUseSearchNotFoundMessage,
  setUseSearchNotFound,
}: SearchStoreListProps) => {

  // 상태 관리
  const [useSearchList, setUseSearchList] = useState<SearchListDB[]>([]);
  const { searchValue } = useParams();
  const [useTotalPage, setUsrTotalPage] = useState<number>(0);
  const [usePageNum, setUsePageNum] = useState<number>(0);
  // 현재 페이지 정보
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    getSearchList();
  }, []);


  // pageNumCheck
  const pagenumCheck = (pageNum:number) => {
    // 주소값에서 가져옴 페이지 처음들어왔을땐 null
    const pageNumParams = searchParams.get("pagenum");

    if (pageNumParams == null) {
      pageNum = 1;
    } else {
      pageNum = parseInt(pageNumParams);
    }
    setUsePageNum(pageNum);

    return pageNum
  }

  //검색리스트 가져오기
  const getSearchList = async () => {
    // 현재 페이지 정보
    let pageNum: number;
    pageNum = -1;
    pageNum = pagenumCheck(pageNum);

    //통신
    try {
      const response = await fetch(
        `http://localhost:4500/getSearchList/${searchValue}?pageNum=${pageNum}`
      );

      // 에러처리
      if (!response.ok) {
        const errorData = await response.json();
        const statusCode = response.status;
        const statusText = response.statusText;
        const message = errorData.message[0];
        console.log(`${statusCode} - ${statusText} - ${message}`);
        return;
      }
      const data = await response.json();
      if (data.message) {
        console.log(data);
        console.log(response);
        setUseSearchNotFound(true);
        setUseSearchNotFoundMessage(data.message);
      }
      // 가게 정보들
      setUseSearchList(data[1]);

      // 페이징 함수
      setUsrTotalPage(data[0].totalPage);
    } catch (err) {
      console.log("error log: ", err);
    }
  };



  return (
    <>
      <S.SearchListWrap_div>
        <S.SearchListInner_div>
          <S.SearchListTitle_title>
            {searchValue} 맛집 인기 검색순위
          </S.SearchListTitle_title>
          {/*데이터의 2분의 1만큼 for문 */}
          {/*ul 하나당 li 2개*/}
          {Array.from({ length: useSearchList.length / 2 }).map(
            (_, ulIndex) => (
              <S.SertchList_ul key={ulIndex}>
                {/* 안쪽 배열 */ }
                {useSearchList.map((store, index) => {
                  if (index >= ulIndex * 2 && index < (ulIndex + 1) * 2) {
                    return (
                      <S.SearchList_li key={index}>
                        <S.FoodImg_img height={239} src={store.imgurl} />
                        <br />
                        {/*가게타이틀 평점 */}
                        <S.StoreTitleScoreWrap>
                          <StyleSheetManager
                            shouldForwardProp={(prop) => prop !== "maxChar"}
                          >
                            {/* 가게 이름 */}
                            <S.StoreTitle maxchar={20}>
                              {store.storename}
                            </S.StoreTitle>
                            {/* 가게 평점 */}
                            <S.StoreScore>{store.pointAVG}</S.StoreScore>
                          </StyleSheetManager>
                        </S.StoreTitleScoreWrap>
                        <div>
                          {store.storeLocation} - {store.storeRecommendFood}
                        </div>
                        <S.ViewCount> {store.visit}</S.ViewCount>
                      </S.SearchList_li>
                    );
                  }
                  return null;
                })}
              </S.SertchList_ul>
            )
          )}
        </S.SearchListInner_div>
        <SearchListPagenation
          useTotalPage={useTotalPage}
          usePageNum={usePageNum}
          searchValue={searchValue}
        />
      </S.SearchListWrap_div>
    </>
  );
};

export default existSearchStoreList;
