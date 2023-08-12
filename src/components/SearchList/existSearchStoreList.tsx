import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { StyleSheetManager } from "styled-components";
import {
  FoodImg_img,
  Pagenation_div,
  PagingButtonText_p,
  PagingButton_button,
  SearchListInner_div,
  SearchListTitle_title,
  SearchListWrap_div,
  SearchList_li,
  SertchList_ul,
  StoreScore,
  StoreTitle,
  StoreTitleScoreWrap,
  ViewCount,
} from "./searchListCss";

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

  // 페이징 로직
  const pagenation = (totalPage: number, pageNum: number) => {
    const keyword: string = { searchValue }.searchValue || ""; //검색값
    const pageBlockSize = 10; // 한 번에 표시할 페이지 수
    const currentPageBlock = Math.ceil(pageNum / pageBlockSize); // 현재 페이지가 속한 블록 계산
    const minPage = (currentPageBlock - 1) * pageBlockSize + 1; // 블록의 첫 페이지 계산
    const maxPage = Math.min(currentPageBlock * pageBlockSize, totalPage); // 블록의 마지막 페이지 계산
    const pageArray: number[] = [];

    for (let i = minPage; i <= maxPage; i += 1) {
      pageArray.push(i);
    }

    return (
      <>
        {pageArray.map((page, index) =>
          page === pageNum ? (
            <PagingButton_button
              key={index}
              color={"FF7F00"}
              onClick={() => pagingMove(keyword, page)}
            >
              <PagingButtonText_p color={"FF7F00"}>{page}</PagingButtonText_p>
            </PagingButton_button>
          ) : (
            <PagingButton_button
              key={index}
              color={"C0C0C0"}
              onClick={() => pagingMove(keyword, page)}
            >
              <PagingButtonText_p color={"C0C0C0"}>{page}</PagingButtonText_p>
            </PagingButton_button>
          )
        )}
      </>
    );
  };

  const pagingMove = (keyword: string, page: number) => {
    window.location.href = `/search/${keyword}?pagenum=${page}`;
  };

  return (
    <>
      <SearchListWrap_div>
        <SearchListInner_div>
          <SearchListTitle_title>
            {searchValue} 맛집 인기 검색순위
          </SearchListTitle_title>
          {/*데이터의 2분의 1만큼 for문 */}
          {/*ul 하나당 li 2개*/}
          {Array.from({ length: useSearchList.length / 2 }).map(
            (_, ulIndex) => (
              <SertchList_ul key={ulIndex}>
                {useSearchList.map((store, index) => {
                  if (index >= ulIndex * 2 && index < (ulIndex + 1) * 2) {
                    return (
                      <SearchList_li key={index}>
                        <FoodImg_img height={239} src={store.imgurl} />
                        <br />
                        {/*가게타이틀 평점 */}
                        <StoreTitleScoreWrap>
                          <StyleSheetManager
                            shouldForwardProp={(prop) => prop !== "maxChar"}
                          >
                            <StoreTitle maxchar={20}>
                              {store.storename}
                            </StoreTitle>
                            <StoreScore>{store.pointAVG}</StoreScore>
                          </StyleSheetManager>
                        </StoreTitleScoreWrap>
                        <div>
                          {store.storeLocation} - {store.storeRecommendFood}
                        </div>
                        <ViewCount> {store.visit}</ViewCount>
                      </SearchList_li>
                    );
                  }
                  return null;
                })}
              </SertchList_ul>
            )
          )}
        </SearchListInner_div>
        <Pagenation_div>
          {useTotalPage && pagenation(useTotalPage, usePageNum)}
        </Pagenation_div>
      </SearchListWrap_div>
    </>
  );
};

export default existSearchStoreList;
