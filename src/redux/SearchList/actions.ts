import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import * as types from "./types";

interface SearchListDB {
  imgurl: string;
  storename: string;
  pointAVG: number;
  storeLocation: string;
  storeRecommendFood: string;
  visit: number;
}

interface SetSearchListAction extends Action<typeof types.SET_SEARCH_LIST> {
  payload: SearchListDB[];
}

interface SetTotalPageAction extends Action<typeof types.SET_TOTAL_PAGE> {
  payload: number;
}

interface SetPageNumAction extends Action<typeof types.SET_PAGE_NUM> {
  payload: number;
}

interface SetSearchNotFoundAction extends Action<typeof types.SET_SEARCH_NOT_FOUND> {
  payload: boolean;
}

interface SetSearchNotFoundMessageAction extends Action<typeof types.SET_SEARCH_NOT_FOUND_MESSAGE> {
  payload: string;
}

export type SearchListActionTypes =
  | SetSearchListAction
  | SetTotalPageAction
  | SetPageNumAction
  | SetSearchNotFoundAction
  | SetSearchNotFoundMessageAction;

export const setSearchList = (list: SearchListDB[]): SearchListActionTypes => ({
  type: types.SET_SEARCH_LIST,
  payload: list,
});

export const setTotalPage = (totalPage: number): SearchListActionTypes => ({
  type: types.SET_TOTAL_PAGE,
  payload: totalPage,
});

export const setPageNum = (pageNum: number): SearchListActionTypes => ({
  type: types.SET_PAGE_NUM,
  payload: pageNum,
});

export const setSearchNotFound = (value: boolean): SearchListActionTypes => ({
  type: types.SET_SEARCH_NOT_FOUND,
  payload: value,
});

export const setSearchNotFoundMessage = (message: string): SearchListActionTypes => ({
  type: types.SET_SEARCH_NOT_FOUND_MESSAGE,
  payload: message,
});


//검색리스트 가져오기
  export const getSearchList = (
  searchValue: string,
  pageNum: number
): ThunkAction<void, RootState, null, SearchListActionTypes> => async (dispatch) => {
  try {
    // 데이터를 받아올 API 엔드포인트 설정
    const apiUrl = `http://localhost:4500/getSearchList/${searchValue}?pageNum=${pageNum}`;
    
    // API 호출 및 데이터 받아오기
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // 검색 결과가 없는 경우 처리
    if (data.message) {
      dispatch(setSearchNotFound(true)); // 검색 결과 없음 상태 설정
      dispatch(setSearchNotFoundMessage(data.message)); // 검색 결과 없음 메시지 설정
    } else {
      dispatch(setSearchNotFound(false)); // 검색 결과가 있는 경우 상태 초기화
      dispatch(setSearchNotFoundMessage('')); // 검색 결과 없음 메시지 초기화

      dispatch(setSearchList(data[1])); // 검색 결과 리스트 설정
      dispatch(setTotalPage(data[0].totalPage)); // 총 페이지 수 설정
      dispatch(setPageNum(pageNum)); // 현재 페이지 번호 설정
    }

    
  } catch (error) {
    // 에러 처리 로직
    console.error('An error occurred while fetching search list:', error);
    // 에러 상태를 Redux 스토어에 업데이트하는 액션을 디스패치
  }
};
