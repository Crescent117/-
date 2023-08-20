import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import * as types from "./types";

interface TrustBest {
  url: string;
  src: string;
  alt: string;
  titleText: string;
  content: string;
}



interface SetTrustBestAction extends Action<typeof types.SET_TRUSTBEST> {
  payload: TrustBest[];
}

interface SetSlideAction extends Action<typeof types.SET_SLIDE> { 
  payload: number;
}

export type TrustBestActionTypes =
  | SetTrustBestAction
  | SetSlideAction;

export const setTrustBest = (list: TrustBest[]): TrustBestActionTypes => ({
  type: types.SET_TRUSTBEST,
  payload: list,
});

export const setUsePopularSlide = (slide:number): TrustBestActionTypes => ({
  type: types.SET_SLIDE,
  payload: slide,
});


export const getTrustBest = (): ThunkAction<void, RootState, null, TrustBestActionTypes> => async (dispatch) => {
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
        dispatch(setTrustBest(data));
      } catch (err) {
        console.log("error log: ", err);
      }
    };