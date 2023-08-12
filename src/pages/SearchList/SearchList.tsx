import * as S from "../../components/SearchList/searchListCss";
import ExistSearchStoreList from "../../components/SearchList/ExistSearchStoreList/existSearchStoreList";
import React, { useEffect, useState, ImgHTMLAttributes } from "react";
import { useLocation, useParams } from "react-router-dom";

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
          <S.OuterWrap_section>
            {/* DB 값이 존재할 때 출력 */}
            <ExistSearchStoreList
              setUseSearchNotFoundMessage={setUseSearchNotFoundMessage}
              setUseSearchNotFound={setUseSearchNotFound}
            />
            <S.RightSide_div>
              <S.Map_div>지도 공간</S.Map_div>
              <S.SearchListTitle_title> 관련 콘텐츠 </S.SearchListTitle_title>
              {useTrustBest &&
                useTrustBest.map((trust, index) => (
                  <>
                    <S.ImageContainer height={165}>
                      <S.RightSideImage_img
                        key={index}
                        src={trust.src}
                      ></S.RightSideImage_img>
                      <S.ImageTitleText top={30}>
                        {trust.titleText}
                      </S.ImageTitleText>
                      <S.ImageContent top={50}>
                        "{trust.content}"
                      </S.ImageContent>
                    </S.ImageContainer>
                  </>
                ))}
            </S.RightSide_div>
          </S.OuterWrap_section>
        )
      ) : (
        <>
          <S.OuterWrap_section>
            <S.SearchListWrap_div>
              <S.ErrorMessage>{useSearchNotFoundMessage}</S.ErrorMessage>
            </S.SearchListWrap_div>
            <S.RightSide_div>
              <S.Map_div>지도 공간</S.Map_div>
              <S.SearchListTitle_title> 관련 콘텐츠 </S.SearchListTitle_title>
              {useTrustBest &&
                useTrustBest.map((trust, index) => (
                  <>
                    <S.ImageContainer height={165}>
                      <S.RightSideImage_img
                        key={index}
                        src={trust.src}
                      ></S.RightSideImage_img>
                      <S.ImageTitleText top={30}>
                        {trust.titleText}
                      </S.ImageTitleText>
                      <S.ImageContent top={50}>
                        "{trust.content}"
                      </S.ImageContent>
                    </S.ImageContainer>
                  </>
                ))}
            </S.RightSide_div>
          </S.OuterWrap_section>
        </>
      )}
    </>
  );
};

export default SearchList;