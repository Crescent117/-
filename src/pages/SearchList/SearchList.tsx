import * as S from "../../components/SearchList/searchListCss";
import ExistSearchStoreList from "../../components/SearchList/ExistSearchStoreList/existSearchStoreList";
import React, { useEffect, useState, ImgHTMLAttributes } from "react";
import { useLocation, useParams } from "react-router-dom";
import RightSide from "../../components/SearchList/RightSide/rightSide";

interface SearchListDB {
  imgurl: string;
  storename: string;
  pointAVG: number;
  storeLocation: string;
  storeRecommendFood: string;
  visit: number;
}

const SearchList = () => {
  const [useSearchList, setUseSearchList] = useState<SearchListDB[]>([]);
  const { searchValue } = useParams();

  const [useSearchNotFound, setUseSearchNotFound] = useState<boolean>(false);
  const [useSearchNotFoundMessage, setUseSearchNotFoundMessage] = useState<string>("");

  return (
    <>
      <S.OuterWrap_section>
        {!useSearchNotFound ? (
          useSearchList && (
            <>
              {/* DB 값이 존재할 때 출력 */}
              <ExistSearchStoreList
                setUseSearchNotFoundMessage={setUseSearchNotFoundMessage}
                setUseSearchNotFound={setUseSearchNotFound}
                searchValue={searchValue}
              />
            </>
          )
        ) : (
          <>
            <S.SearchListWrap_div>
              <S.ErrorMessage>{useSearchNotFoundMessage}</S.ErrorMessage>
            </S.SearchListWrap_div>
          </>
        )}
        {/* 오른쪽 사이드 */}
        <RightSide />
      </S.OuterWrap_section>
    </>
  );
};

export default SearchList;