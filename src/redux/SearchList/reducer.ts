import { SearchListActionTypes } from "./actions";
import * as types from "./types";

interface SearchListDB {
  imgurl: string;
  storename: string;
  pointAVG: number;
  storeLocation: string;
  storeRecommendFood: string;
  visit: number;
}

interface SearchListState {
  useSearchList: SearchListDB[];
  useTotalPage: number;
  usePageNum: number;
  useSearchNotFound: boolean;
  useSearchNotFoundMessage: string;
}

const initialState: SearchListState = {
  useSearchList: [],
  useTotalPage: 0,
  usePageNum: 0,
  useSearchNotFound: false,
  useSearchNotFoundMessage: "",
};

const searchListReducer = (state = initialState, action: SearchListActionTypes): SearchListState => {
  switch (action.type) {
    case types.SET_SEARCH_LIST:
      return {
        ...state,
        useSearchList: action.payload,
      };
    case types.SET_TOTAL_PAGE:
      return {
        ...state,
        useTotalPage: action.payload,
      };
    case types.SET_PAGE_NUM:
      return {
        ...state,
        usePageNum: action.payload,
      };
    case types.SET_SEARCH_NOT_FOUND:
      return {
        ...state,
        useSearchNotFound: action.payload,
      };
    case types.SET_SEARCH_NOT_FOUND_MESSAGE:
      return {
        ...state,
        useSearchNotFoundMessage: action.payload,
      };
    default:
      return state;
  }
};

export default searchListReducer;