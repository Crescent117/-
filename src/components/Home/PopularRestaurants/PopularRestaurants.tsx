import React, { useEffect, useState } from "react";
import { WindowSizeChangeProps } from "../shared_interface";
import {
  getTrustBest,
  setUsePopularSlide,
} from "../../../redux/TrustBest/actions";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { RootState } from "../../../redux/store";
import * as S from "../shared_componentCSS";

const popularRestaurants = ({
  itemsPerPage,
  columns,
  getTrustBest,
  useTrustBest,
  usePopularSlide,
  setUsePopularSlide,
}: WindowSizeChangeProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>) => {
  const numberOfGroups = useTrustBest
    ? Math.ceil(useTrustBest.length / itemsPerPage)
    : 0;

  useEffect(() => {
    getTrustBest();
  }, []);

  const clickSlideRight = () => {
    setUsePopularSlide(usePopularSlide + 1);
  };

  const clickSlideLeft = () => {
    setUsePopularSlide(usePopularSlide - 1);
  };

  const moveTopList = (url: string) => {
    window.location.href = url;
  };
  return (
    <>
      {useTrustBest && (
        <section>
          <S.Module_title_wrap>
            <S.Module_title_name>믿고 보는 맛집 리스트</S.Module_title_name>
            <S.Module_more>리스트 더보기</S.Module_more>
          </S.Module_title_wrap>
          <S.SliderContainer>
            <S.SlideButton onClick={clickSlideLeft} style={{ marginRight: 10 }}>
              &lt;
            </S.SlideButton>

            <S.ImageWrapper columns={columns} rows={2} height={492}>
              <>
                {useTrustBest
                  .slice(
                    (usePopularSlide % numberOfGroups) * itemsPerPage,
                    (usePopularSlide % numberOfGroups) * itemsPerPage +
                      itemsPerPage
                  )
                  .map((image, index) => (
                    <S.ImageContainer
                      key={index}
                      onDragStart={(e) => e.preventDefault()}
                      height={236}
                      onClick={() => moveTopList(image.url)}
                    >
                      <S.Image_list
                        src={image.src}
                        alt={image.alt}
                        height={236}
                      />
                      <S.ImageTitleText top={30}>
                        {image.titleText}
                      </S.ImageTitleText>
                      <S.ImageContent top={50}>
                        "{image.content}"
                      </S.ImageContent>
                    </S.ImageContainer>
                  ))}
              </>
            </S.ImageWrapper>

            <S.SlideButton onClick={clickSlideRight} style={{ marginLeft: 10 }}>
              &gt;
            </S.SlideButton>
          </S.SliderContainer>
        </section>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  useTrustBest: state.trustBest.useTrustBest,
  usePopularSlide: state.trustBest.usePopularSlide,
});

// mapDispatchToProps 함수 정의
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getTrustBest,
      setUsePopularSlide,
    },
    dispatch
  );

// connect를 사용하여 컴포넌트와 Redux 연결
const PopularRestaurants = connect(
  mapStateToProps,
  mapDispatchToProps
)(popularRestaurants);

export default PopularRestaurants;
