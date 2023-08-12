import React from "react";
import * as S from "../searchListCss";

interface SearchListPagenationProps {
  searchValue: string | undefined;
  useTotalPage: number;
  usePageNum: number;
}

const SearchListPagenation = ({searchValue, useTotalPage, usePageNum }:SearchListPagenationProps) => {
  
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
            <S.PagingButton_button
              key={index}
              color={"FF7F00"}
              onClick={() => pagingMove(keyword, page)}
            >
              <S.PagingButtonText_p color={"FF7F00"}>
                {page}
              </S.PagingButtonText_p>
            </S.PagingButton_button>
          ) : (
            <S.PagingButton_button
              key={index}
              color={"C0C0C0"}
              onClick={() => pagingMove(keyword, page)}
            >
              <S.PagingButtonText_p color={"C0C0C0"}>
                {page}
              </S.PagingButtonText_p>
            </S.PagingButton_button>
          )
        )}
      </>
    );
  }; // 페이징 로직 끝


  const pagingMove = (keyword: string, page: number) => {
    window.location.href = `/search/${keyword}?pagenum=${page}`;
  };

  return (
    <S.Pagenation_div>
      {useTotalPage && pagenation(useTotalPage, usePageNum)}
    </S.Pagenation_div>
  );
}

export default SearchListPagenation;


