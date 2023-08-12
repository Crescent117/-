import { ErrorMessage, ImageContainer, ImageContent, ImageTitleText, Map_div, OuterWrap_section, PagingButtonText_p, PagingButton_button, RightSideImage_img, RightSide_div, SearchListTitle_title, SearchListWrap_div } from "../../components/SearchList/searchListCss";
import ExistSearchStoreList from "../../components/SearchList/existSearchStoreList";
import React, { useEffect, useState, ImgHTMLAttributes } from "react";
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
  src: string;
  titleText: string;
  content: string
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
    getTrustBest();
  }, []);

  // 검색된 가게 정보 불러오기
  
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

  return (
    <>
      {!useSearchNotFound ? (
        useSearchList && (
          <OuterWrap_section>
            <ExistSearchStoreList
              setUseSearchNotFoundMessage={setUseSearchNotFoundMessage}
              setUseSearchNotFound={setUseSearchNotFound}
            />
            <RightSide_div>
              <Map_div>지도 공간</Map_div>
              <SearchListTitle_title> 관련 콘텐츠 </SearchListTitle_title>
              {useTrustBest &&
                useTrustBest.map((trust, index) => (
                  <>
                    <ImageContainer height={165}>
                      <RightSideImage_img
                        key={index}
                        src={trust.src}
                      ></RightSideImage_img>
                      <ImageTitleText top={30}>
                        {trust.titleText}
                      </ImageTitleText>
                      <ImageContent top={50}>"{trust.content}"</ImageContent>
                    </ImageContainer>
                  </>
                ))}
            </RightSide_div>
          </OuterWrap_section>
        )
      ) : (
        <>
          <OuterWrap_section>
            <SearchListWrap_div>
              <ErrorMessage>{useSearchNotFoundMessage}</ErrorMessage>
            </SearchListWrap_div>
            <RightSide_div>
              <Map_div>지도 공간</Map_div>
              <SearchListTitle_title> 관련 콘텐츠 </SearchListTitle_title>
              {useTrustBest &&
                useTrustBest.map((trust, index) => (
                  <>
                    <ImageContainer height={165}>
                      <RightSideImage_img
                        key={index}
                        src={trust.src}
                      ></RightSideImage_img>
                      <ImageTitleText top={30}>
                        {trust.titleText}
                      </ImageTitleText>
                      <ImageContent top={50}>"{trust.content}"</ImageContent>
                    </ImageContainer>
                  </>
                ))}
            </RightSide_div>
          </OuterWrap_section>
        </>
      )}
    </>
  );
};

export default SearchList;