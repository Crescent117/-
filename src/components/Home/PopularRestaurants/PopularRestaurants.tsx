import React, { useEffect, useState } from "react";

import {
  Module_title_wrap,
  Module_title_name,
  Module_more,
  SliderContainer,
  SlideButton,
  ImageWrapper,
  ImageContainer,
  Image_list,
  ImageTitleText,
  ImageContent,
} from "../shared_componentCSS";

interface PopularRestaurantsProps {
  itemsPerPage: number;
  columns: number;
}

interface TrustBestItem {
  src: string;
  alt: string;
  titleText: string;
  content: string;
  url: string;
}

const PopularRestaurants: React.FC<PopularRestaurantsProps> = ({
  itemsPerPage,
  columns,
}) => {
  const [usePopularSlide, setUsePopularSlide] = useState(0);
  const [useTrustBestData, setUseTrustBestData] = useState<TrustBestItem[]>([]);
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

  const moveTopList = (url:string) => {
    window.location.href = url;
  };
  return (
    <>
      {useTrustBestData && (
        <section>
          <Module_title_wrap>
            <Module_title_name>믿고 보는 맛집 리스트</Module_title_name>
            <Module_more>리스트 더보기</Module_more>
          </Module_title_wrap>
          <SliderContainer>
            <SlideButton onClick={clickSlideLeft} style={{ marginRight: 10 }}>
              &lt;
            </SlideButton>

            <ImageWrapper columns={columns} rows={2} height={492}>
              <>
                {useTrustBestData
                  .slice(
                    (usePopularSlide % numberOfGroups) * itemsPerPage,
                    (usePopularSlide % numberOfGroups) * itemsPerPage +
                      itemsPerPage
                  )
                  .map((image, index) => (
                    <ImageContainer
                      key={index}
                      onDragStart={(e) => e.preventDefault()}
                      height={236}
                      onClick={() => moveTopList(image.url)}
                    >
                      <Image_list
                        src={image.src}
                        alt={image.alt}
                        height={236}
                      />
                      <ImageTitleText top={30}>
                        {image.titleText}
                      </ImageTitleText>
                      <ImageContent top={50}>"{image.content}"</ImageContent>
                    </ImageContainer>
                  ))}
              </>
            </ImageWrapper>

            <SlideButton onClick={clickSlideRight} style={{ marginLeft: 10 }}>
              &gt;
            </SlideButton>
          </SliderContainer>
        </section>
      )}
    </>
  );
};

export default PopularRestaurants;
