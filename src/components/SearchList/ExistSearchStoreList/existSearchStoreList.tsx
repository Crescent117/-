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
  searchValue: string | undefined;
}

const existSearchStoreList = ({
  setUseSearchNotFoundMessage,
  setUseSearchNotFound,
  searchValue,
}: SearchStoreListProps) => {
  // 상태 관리
  const [useSearchList, setUseSearchList] = useState<SearchListDB[]>([]);
  const [useTotalPage, setUsrTotalPage] = useState<number>(0);
  const [usePageNum, setUsePageNum] = useState<number>(0);
  // 현재 페이지 정보
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    getSearchList();
  }, []);

  // pageNumCheck
  const pagenumCheck = () => {
    // 주소값에서 가져옴 페이지 처음들어왔을땐 null
    const pageNumParams = searchParams.get("pagenum");
    return pageNumParams == null ? 1 : parseInt(pageNumParams);
  };

  //검색리스트 가져오기
  const getSearchList = async () => {
    // 현재 페이지 정보
    let pageNum = -1;
    pageNum = pagenumCheck();
    setUsePageNum(pageNum);

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

      // 받아온 데이터
      const data = await response.json();

      // 검색한 데이터의 값이 없을 시 체크
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

  const renderStoreInfo = (store: SearchListDB, index: number) => {
    return (
      <S.SearchList_li key={index}>
        <S.FoodImg_img height={239} src={store.imgurl} />
        <br />
        <S.StoreTitleScoreWrap>
          <StyleSheetManager shouldForwardProp={(prop) => prop !== "maxChar"}>
            <S.StoreTitle maxchar={20}>{store.storename}</S.StoreTitle>
            <S.StoreScore>{store.pointAVG}</S.StoreScore>
          </StyleSheetManager>
        </S.StoreTitleScoreWrap>
        <div>
          {store.storeLocation} - {store.storeRecommendFood}
        </div>
        <S.ViewCount> {store.visit}</S.ViewCount>
      </S.SearchList_li>
    );
  };

  const renderSearchResults = () => {
    return useSearchList.map(renderStoreInfo);
  };

  return (
    <S.SearchListWrap_div>
      <S.SearchListInner_div>
        <S.SearchListTitle_title>
          {searchValue} 맛집 인기 검색순위
        </S.SearchListTitle_title>
        {renderSearchResults()}
      </S.SearchListInner_div>
      <SearchListPagenation
        useTotalPage={useTotalPage}
        usePageNum={usePageNum}
        searchValue={searchValue}
      />
    </S.SearchListWrap_div>
  );
};

export default existSearchStoreList;
