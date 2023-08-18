import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ExistSearchStoreList from "../../components/SearchList/ExistSearchStoreList/existSearchStoreList";
import RightSide from "../../components/SearchList/RightSide/rightSide";
import * as S from "../../components/SearchList/searchListCss";

const SearchList = () => {
  return (
    <>
      <S.OuterWrap_section>
        {/* 맛집 검색 결과 */}
        <ExistSearchStoreList />
        {/* 오른쪽 UI */}
        <RightSide />
      </S.OuterWrap_section>
    </>
  );
};

export default SearchList;
