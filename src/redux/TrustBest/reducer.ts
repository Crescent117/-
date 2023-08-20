import { TrustBestActionTypes } from "./actions";
import * as types from "./types";


export interface TrustBest {
  src: string;
  titleText: string;
  content: string;
}

interface TrustBestState {
  useTrustBest: TrustBest[];
}

const initialState: TrustBestState = {
  useTrustBest: [],
};

const searchListReducer = (state = initialState, action: TrustBestActionTypes): TrustBestState => {
  switch (action.type) {
    case types.SET_TRUSTBEST:
      return {
        ...state,
        useTrustBest: action.payload,
      };
    default:
      return state;
  }
};

export default searchListReducer;