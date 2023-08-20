import { TrustBestActionTypes } from "./actions";
import * as types from "./types";


interface TrustBest {
  url: string;
  src: string;
  alt: string;
  titleText: string;
  content: string;
}

interface TrustBestState {
  useTrustBest: TrustBest[];
  usePopularSlide: number;
}

const initialState: TrustBestState = {
  useTrustBest: [],
  usePopularSlide: 0,
};

const searchListReducer = (state = initialState, action: TrustBestActionTypes): TrustBestState => {
  switch (action.type) {
    case types.SET_TRUSTBEST:
      return {
        ...state,
        useTrustBest: action.payload,
      };
    case types.SET_SLIDE:
      return {
        ...state,
        usePopularSlide: action.payload
      }
    default:
      return state;
  }
};

export default searchListReducer;