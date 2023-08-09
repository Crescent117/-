import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled, { css } from "styled-components";

const data = [
  { page: 1 },
  { page: 2 },
  { page: 3 },
  { page: 4 },
  { page: 5 },
  { page: 6 },
  { page: 7 },
  { page: 8 },
  { page: 9 }
];



interface SearchListDB {
  imgurl: string;
  storename: string;
  pointAVG: number;
  storeLocation: string;
  storeRecommendFood: string;
  visit: number;
}

interface TrustBest {
  src: string;
}



const SearchList = () => {
  const [useSearchList, setUseSearchList] = useState<SearchListDB[]>([]);
  const { searchValue } = useParams();
  const [useTrustBest, setUseTrustBest] = useState<TrustBest[]>([]);

  // 페이지
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  

  useEffect(() => {
    getSearchList();
    getTrustBest();
  }, []);

  // 검색된 가게 정보 불러오기
  const getSearchList = async () => {
    // 현재 페이지 정보
    let pageNumParams = searchParams.get("pagenum");
    let pageNum: number;
    
    if (pageNumParams == null) {
      pageNum = 0;
    } else { 
       pageNum = parseInt(pageNumParams) -1;
    }

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
        setUseSearchList(data);
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
      console.log(data);
      setUseTrustBest(data);
    } catch (err) {
      console.log("error log: ", err);
    }
  };

  return (
    <>
      {useSearchList && (
        <OuterWrap_section>
          <SearchListWrap_div>
            <SearchListInner_div>
              <SearchListTitle_h1>
                {searchValue} 맛집 인기 검색순위
              </SearchListTitle_h1>
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
                              <StoreTitle text={store.storename} maxChar={18}>
                                {store.storename}
                              </StoreTitle>
                              <StoreScore>{store.pointAVG}</StoreScore>
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
              {data && data.map((item, index:number) => ( 
                <PagingButton_button key={index}>
                  <a>{ item.page }</a>
                </PagingButton_button>
              ))}
            </Pagenation_div>
          </SearchListWrap_div>
          <RightSide_div>
            <Map_div>지도 공간</Map_div>
            <SearchListTitle_h1> 관련 콘텐츠 </SearchListTitle_h1>
            {useTrustBest &&
              useTrustBest.map((trust, index) => (
                <RightSideImage_img
                  key={index}
                  src={trust.src}
                ></RightSideImage_img>
              ))}
          </RightSide_div>
        </OuterWrap_section>
      )}
    </>
  );
};

export default SearchList;

type FoodImg_size = {
  height:number
}

interface StoreTitleProps {
  text: string;
  maxChar?: number;
}

const OuterWrap_section = styled.section`
  display: flex;
`;

const SearchListTitle_h1 = styled.h1`
  color:orange;
  padding-left:10px;
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
`;

const StoreTitleScoreWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

const StoreTitle = styled.span<StoreTitleProps>`
  font-size: 24px;
  color: grey;
  ${({ maxChar }) => maxChar && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: ${maxChar}ch;
  `}
`;

const StoreScore = styled.span`
  color: orange;
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
`;

const PagingButton_button = styled.button`
`;