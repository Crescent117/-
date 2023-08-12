import React, { useEffect, useState } from "react";
import { WindowSizeChangeProps } from "../shared_interface";
import * as S from "../shared_componentCSS";

interface TrustBestDB {
  url: string;
  src: string;
  alt: string;
  titleText: string;
  content: string;
}

const PopularRestaurants = ({
  itemsPerPage,
  columns,
}: WindowSizeChangeProps) => {
  const [usePopularSlide, setUsePopularSlide] = useState(0);
  const [useTrustBestData, setUseTrustBestData] = useState<TrustBestDB[]>([]);
  const numberOfGroups = useTrustBestData
    ? Math.ceil(useTrustBestData.length / itemsPerPage)
    : 0;

  useEffect(() => {
    getTrustBest();
  }, []);

  //MogoDB 통신
  const getTrustBest = async () => {
    try {
      const response = await fetch("http://localhost:4500/trustBest");

      if (!response.ok) {
        const errorData = await response.json();
        const statusCode = response.status;
        const statusText = response.statusText;
        const message = errorData.message[0];
        console.log(`${statusCode} - ${statusText} - ${message}`);
        return;
      }
      const data = await response.json();
      setUseTrustBestData(data);
    } catch (err) {
      console.log("error log: ", err);
    }
  };

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
      {useTrustBestData && (
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
                {useTrustBestData
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



export default PopularRestaurants;
