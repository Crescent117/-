import { getTrustBest } from "../../../redux/TrustBest/actions";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { RootState } from "../../../redux/store";
import * as S from '../searchListCss';

// searchList의 오른쪽 부분
const rightSide = ({
  getTrustBest,
  useTrustBest,
}: ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>) => {
  useEffect(() => {
    getTrustBest();
  }, []);

  return (
    <S.RightSide_div>
      <S.Map_div>지도 공간</S.Map_div>
      <S.SearchListTitle_title> 관련 콘텐츠 </S.SearchListTitle_title>
      {useTrustBest &&
        useTrustBest.map((trust, index) => (
          <>
            <S.ImageContainer height={165} key={index}>
              <S.RightSideImage_img
                key={index}
                src={trust.src}
              ></S.RightSideImage_img>
              <S.ImageTitleText top={30}>{trust.titleText}</S.ImageTitleText>
              <S.ImageContent top={50}>"{trust.content}"</S.ImageContent>
            </S.ImageContainer>
          </>
        ))}
    </S.RightSide_div>
  );
};

const mapStateToProps = (state: RootState) => ({
  useTrustBest: state.trustBest.useTrustBest,
});

// mapDispatchToProps 함수 정의
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getTrustBest,
    },
    dispatch
  );

// connect를 사용하여 컴포넌트와 Redux 연결
const RightSide = connect(mapStateToProps, mapDispatchToProps)(rightSide);

export default RightSide;