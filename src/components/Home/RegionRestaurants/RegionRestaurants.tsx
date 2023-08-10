import React, { useState } from "react";
import { WindowSizeChangeProps } from "../shared_interface";
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

const regionFoodBest = [
  {
    src: "https://a.cdn-hotels.com/gdcs/production188/d1750/2255e427-d720-43e2-ae85-6a6719fafc03.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    alt: "regionFoodBest",
    titleText: "지역 인기 맛집 TOP 100",
    content: "대충 맛집하면 여기임",
  },
  {
    src: "https://a.cdn-hotels.com/gdcs/production188/d1750/2255e427-d720-43e2-ae85-6a6719fafc03.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    alt: "regionFoodBest",
    titleText: "지역 인기 맛집 TOP 100",
    content: "대충 맛집하면 여기임",
  },
  {
    src: "https://a.cdn-hotels.com/gdcs/production188/d1750/2255e427-d720-43e2-ae85-6a6719fafc03.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    alt: "regionFoodBest",
    titleText: "지역 인기 맛집 TOP 100",
    content: "대충 맛집하면 여기임",
  },
  {
    src: "https://a.cdn-hotels.com/gdcs/production188/d1750/2255e427-d720-43e2-ae85-6a6719fafc03.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    alt: "regionFoodBest",
    titleText: "지역 인기 맛집 TOP 100",
    content: "대충 맛집하면 여기임",
  },
  {
    src: "https://a.cdn-hotels.com/gdcs/production188/d1750/2255e427-d720-43e2-ae85-6a6719fafc03.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    alt: "regionFoodBest",
    titleText: "지역 인기 맛집 TOP 100",
    content: "대충 맛집하면 여기임",
  },
  {
    src: "https://a.cdn-hotels.com/gdcs/production188/d1750/2255e427-d720-43e2-ae85-6a6719fafc03.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    alt: "regionFoodBest",
    titleText: "지역 인기 맛집 TOP 100",
    content: "대충 맛집하면 여기임",
  },
];

const RegionRestaurants = ({
  columns,
  itemsPerPage,
}: WindowSizeChangeProps) => {
  //이미지 슬라이스 페이지
  const [useRegionSlide, setUseRegionSlide] = useState(0);
  const numberOfGroupsRegion = Math.ceil(regionFoodBest.length / itemsPerPage);

  const clickRegionSlideRight = () => {
    setUseRegionSlide(useRegionSlide + 1);
  };

  const clickRegionSlideLeft = () => {
    setUseRegionSlide(useRegionSlide - 1);
  };

  return (
    <section>
      <Module_title_wrap>
        <Module_title_name>지역별 인기 맛집</Module_title_name>
        <Module_more>스토리 더보기</Module_more>
      </Module_title_wrap>

      <SliderContainer
        style={{
          marginLeft: columns !== 2 ? 80 : 0,
          marginRight: columns !== 2 ? 80 : 0,
        }}
      >
        {columns === 2 && (
          <SlideButton
            onClick={clickRegionSlideLeft}
            style={{ marginRight: 10 }}
          >
            &lt;
          </SlideButton>
        )}
        <ImageWrapper columns={columns} rows={2} height={492}>
          <>
            {regionFoodBest
              .slice(
                (useRegionSlide % numberOfGroupsRegion) * (itemsPerPage - 2),
                (useRegionSlide % numberOfGroupsRegion) * (itemsPerPage - 2) +
                  itemsPerPage
              )
              .map((image, index) => (
                <ImageContainer
                  key={index}
                  onDragStart={(e) => e.preventDefault()}
                  height={236}
                >
                  <Image_list src={image.src} alt={image.alt} height={236} />
                  <ImageTitleText top={30}>{image.titleText}</ImageTitleText>
                  <ImageContent top={60}>{image.content}</ImageContent>
                </ImageContainer>
              ))}
          </>
        </ImageWrapper>
        {columns === 2 && (
          <SlideButton
            onClick={clickRegionSlideRight}
            style={{ marginLeft: 10 }}
          >
            &gt;
          </SlideButton>
        )}
      </SliderContainer>
    </section>
  );
};

export default RegionRestaurants;
