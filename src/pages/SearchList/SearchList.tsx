import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { StyleSheetManager } from "styled-components";

interface SearchListDB {
  imgurl: string;
  storename: string;
  pointAVG: number;
  storeLocation: string;
  storeRecommendFood: string;
  visit: number;
}

interface TrustBest { 
  src:string
}

const SearchList = () => {
  const [useSearchList, setUseSearchList] = useState<SearchListDB[]>([]);
  const { searchValue } = useParams();
  const [useTrustBest, setUseTrustBest] = useState<TrustBest[]>([]);
  const [useTotalPage, setUsrTotalPage] = useState<number>(0);
  const [usePageNum, setUsePageNum] = useState<number>(0);
  const [useSearchNotFound, setUseSearchNotFound] = useState<boolean>(false);
  const [useSearchNotFoundMessage, setUseSearchNotFoundMessage] = useState<string>("");
  // 현재 페이지 정보
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  
  

  useEffect(() => {
    getSearchList();
    getTrustBest();
  }, []);

  // 검색된 가게 정보 불러오기
  const getSearchList = async () => {
    // 현재 페이지 정보
    const pageNumParams = searchParams.get("pagenum");
    let pageNum: number;
    console.log(pageNumParams);
    console.log(searchValue)
    if (pageNumParams == null) {
      pageNum = 1;
    } else { 
      pageNum = parseInt(pageNumParams);
    }
    setUsePageNum(pageNum);
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


  const getTrustBest = async () => {
    try {
      const response = await fetch(`http://localhost:4500/trustBest`);

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
      setUseTrustBest(data);
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
              <PagingButtonText_p color={"FF7F00"}>
                {page}
              </PagingButtonText_p>
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
      {!useSearchNotFound
        ? useSearchList && (
            <OuterWrap_section>
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
                          if (
                            index >= ulIndex * 2 &&
                            index < (ulIndex + 1) * 2
                          ) {
                            return (
                              <SearchList_li key={index}>
                                <FoodImg_img height={239} src={store.imgurl} />
                                <br />
                                {/*가게타이틀 평점 */}
                                <StoreTitleScoreWrap>
                                  <StyleSheetManager
                                    shouldForwardProp={(prop) =>
                                      prop !== "maxChar"
                                    }
                                  >
                                    <StoreTitle maxchar={20}>
                                      {store.storename}
                                    </StoreTitle>
                                    <StoreScore>{store.pointAVG}</StoreScore>
                                  </StyleSheetManager>
                                </StoreTitleScoreWrap>
                                <div>
                                  {store.storeLocation} -{" "}
                                  {store.storeRecommendFood}
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
              <RightSide_div>
                <Map_div>지도 공간</Map_div>
                <SearchListTitle_title> 관련 콘텐츠 </SearchListTitle_title>
                {useTrustBest &&
                  useTrustBest.map((trust, index) => (
                    <RightSideImage_img
                      key={index}
                      src={trust.src}
                    ></RightSideImage_img>
                  ))}
              </RightSide_div>
            </OuterWrap_section>
          )
        : useSearchNotFoundMessage}
    </>
  );
};


export default SearchList;

type FoodImg_size = {
  height:number
}

type StoreTitleProps = {
  maxchar: number;
}

type CurrentButton = {
  color:string
}

const OuterWrap_section = styled.section`
  display: flex;
`;

const SearchListTitle_title = styled.p`
  color: #FF7F00;
  padding-left: 10px;
  font-size: 2em;
  margin:30px 0;
`;

const SearchListWrap_div = styled.div`
  width:100%;
  min-width:780px;
  float:left;
`;
const SearchListInner_div = styled.div`
  width:100%;
  max-width:800px;
  margin: 0 auto;
`;

const SertchList_ul = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

const SearchList_li = styled.li`
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
`;

const FoodImg_img = styled.img<FoodImg_size>`
  width: 359px;
  height: ${({ height }) => `${height}px`};
  cursor:pointer;
`;

const StoreTitleScoreWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

const StoreTitle = styled.span <StoreTitleProps>`
  font-size: 24px;
  color: grey;
  cursor:pointer;
  ${({ maxchar }) =>
    maxchar && css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: ${maxchar}ch;
    `}
`;

const StoreScore = styled.span`
  color: #FF7F00;
  margin-left: 10px;
  font-size: 24px;
`;

const ViewCount = styled.span`
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

const RightSide_div = styled.div`
  min-width: 400px;
  max-width: 400px;
  background-color: #e0e0e0;
`;

const Map_div = styled.div`
  height:485px;
`;

const RightSideImage_img = styled.img`
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

const Pagenation_div = styled.div`
  text-align:center;
  margin: 50px 0;
`;

const PagingButton_button = styled.button<CurrentButton>`
  margin: 0 15px;
  padding: 12px 20px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid ${({ color }) => `#${color}`};;
`;

const PagingButtonText_p = styled.a<CurrentButton>`
  text-decoration: none;
  color: ${({ color }) => `#${ color }`};
  fontsize: 2em;
`;