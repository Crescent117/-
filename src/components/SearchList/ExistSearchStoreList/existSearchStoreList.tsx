import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Dispatch, bindActionCreators } from "redux";
import { StyleSheetManager } from "styled-components";
import {
  getSearchList,
  setPageNum,
  setTotalPage,
} from "../../../redux/SearchList/actions";
import { RootState } from "../../../redux/store";
import SearchListPagenation from "../Pagenation/pagenation";
import * as S from "../searchListCss";

//DB에서 가져온 정보 type
interface SearchListDB {
  imgurl: string;
  storename: string;
  pointAVG: number;
  storeLocation: string;
  storeRecommendFood: string;
  visit: number;
}


const existSearchStoreList = ({
  useSearchNotFound,
  useSearchNotFoundMessage,
  useSearchList,
  getSearchList,
  useTotalPage,
  usePageNum,
}:ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>) => {

  // 검색키워드
  const { searchValue } = useParams<{ searchValue: string }>();
  // 현재 PageNum 추출
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    const pageNum = pagenumCheck();
    if (searchValue !== undefined) {
      getSearchList(searchValue, pageNum);
    }
  }, []);


  // pageNumCheck
  const pagenumCheck = () => {
    // 주소값에서 가져옴 페이지 처음들어왔을땐 null
    const pageNumParams = searchParams.get("pagenum");
    return pageNumParams == null ? 1 : parseInt(pageNumParams);
  };

  // DB에서 검색해온 맛집데이터 반복문
  const renderStoreInfo = (storeInfo: SearchListDB, index: number) => {
    return (
      <S.SearchList_li key={index}>
        <S.FoodImg_img height={239} src={storeInfo.imgurl} />
        <br />
        <S.StoreTitleScoreWrap>
          <StyleSheetManager shouldForwardProp={(prop) => prop !== "maxChar"}>
            <S.StoreTitle maxchar={20}>{storeInfo.storename}</S.StoreTitle>
            <S.StoreScore>{storeInfo.pointAVG}</S.StoreScore>
          </StyleSheetManager>
        </S.StoreTitleScoreWrap>
        <div>
          {storeInfo.storeLocation} - {storeInfo.storeRecommendFood}
        </div>
        <S.ViewCount> {storeInfo.visit}</S.ViewCount>
      </S.SearchList_li>
    );
  };

  // 최종적으로 리턴할 값
  const renderSearchResults = () => {
    return useSearchList.map(renderStoreInfo);
  };

  return (
    <S.SearchListWrap_div>
      {!useSearchNotFound && useSearchList ? (
        <>
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
        </>
      ) : (
        <S.ErrorMessage>{useSearchNotFoundMessage}</S.ErrorMessage>
      )}
    </S.SearchListWrap_div>
  );
};

// mapStateToProps 함수 정의
const mapStateToProps = (state: RootState) => ({
  useSearchList: state.searchList.useSearchList,
  useTotalPage: state.searchList.useTotalPage,
  usePageNum: state.searchList.usePageNum,
  useSearchNotFound: state.searchList.useSearchNotFound,
  useSearchNotFoundMessage: state.searchList.useSearchNotFoundMessage,

});

// mapDispatchToProps 함수 정의
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getSearchList,
      setTotalPage,
      setPageNum,
    },
    dispatch
  );

// connect를 사용하여 컴포넌트와 Redux 연결
const ExistSearchStoreList = connect(
  mapStateToProps,
  mapDispatchToProps
)(existSearchStoreList);

export default ExistSearchStoreList;
