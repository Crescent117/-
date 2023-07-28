import React, { useEffect, useState } from "react";
import styled from "styled-components";


const data = [
  {
    src: "https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/ijrnzveoerf5csud.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80",
    alt: "Description 1",
    titleText: "맛집",
    content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
  },
  {
    src: "https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/ijrnzveoerf5csud.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80",
    alt: "Description 1",
    titleText: "맛집",
    content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
  },
  {
    src: "https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/ijrnzveoerf5csud.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80",
    alt: "Description 1",
    titleText: "맛집",
    content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
  },
  {
    src: "https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/ijrnzveoerf5csud.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80",
    alt: "Description 1",
    titleText: "맛집",
    content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
  },
  {
    src: "https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/ijrnzveoerf5csud.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80",
    alt: "Description 1",
    titleText: "맛집",
    content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
  },
  {
    src: "https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/ijrnzveoerf5csud.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80",
    alt: "Description 1",
    titleText: "맛집",
    content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7eCGWWlU0vwN-iGFUXK-VEXK7C5LXckEDQ&usqp=CAU",
    alt: "Description 1",
    titleText: "맛집",
    content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7eCGWWlU0vwN-iGFUXK-VEXK7C5LXckEDQ&usqp=CAU",
    alt: "Description 1",
    titleText: "맛집",
    content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7eCGWWlU0vwN-iGFUXK-VEXK7C5LXckEDQ&usqp=CAU",
    alt: "Description 1",
    titleText: "맛집",
    content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7eCGWWlU0vwN-iGFUXK-VEXK7C5LXckEDQ&usqp=CAU",
    alt: "Description 1",
    titleText: "맛집",
    content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7eCGWWlU0vwN-iGFUXK-VEXK7C5LXckEDQ&usqp=CAU",
    alt: "Description 1",
    titleText: "맛집",
    content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7eCGWWlU0vwN-iGFUXK-VEXK7C5LXckEDQ&usqp=CAU",
    alt: "Description 1",
    titleText: "맛집",
    content: '"정말로 맛있어서 옆의 사람이 죽어도 모름!!"',
  },
];

function Home() {
  const [useSlide, SetUseSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [columns, setColumns] = useState(3);
  const numberOfGroups = Math.ceil(data.length / itemsPerPage);


  const handleResize = () => {
    if (window.innerWidth < 1300) { 
      setItemsPerPage(4);
      setColumns(2);
    }

    if (window.innerWidth > 1300) { 
      setItemsPerPage(6);
      setColumns(3);
    }
  };

 useEffect(() => {
   window.addEventListener("resize", handleResize);
   return () => {
     // cleanup
     window.removeEventListener("resize", handleResize);
   };
 }, []);

  const clickSlideRight = () => {
    SetUseSlide(useSlide + 1);
  };

  const clickSlideLeft = () => {
    SetUseSlide(useSlide - 1);
  };

  return (
    <>
      <HomeBanner>
        <HomeBannerText>
          솔직한 리뷰, 믿을 수 있는 평점!
          <br></br>더 조은 맛집 리스트!
        </HomeBannerText>
        <HomeBannerSearchWrap>
          <HomeBannerLabel>
            <span>
              <HomeBannerSearchIcon src="https://w7.pngwing.com/pngs/410/185/png-transparent-magnifying-glass-computer-icons-magnifying-glass-glass-art-symbol-thumbnail.png" />
            </span>
            <HomeBannerInput type="text" placeholder="Type something" />
            <HomeBannerButton type="submit" value="Submit" />
          </HomeBannerLabel>
        </HomeBannerSearchWrap>
      </HomeBanner>
      <section>
        <Module_title_wrap>
          <Module_title_name>믿고 보는 맛집 리스트</Module_title_name>
          <Module_more>리스트 더보기</Module_more>
        </Module_title_wrap>
        <SliderContainer>
          <SlideButton onClick={clickSlideLeft} style={{ marginRight: 10 }}>
            &lt;
          </SlideButton>

          <ImageWrapper columns={columns}>
            <>
              {data
                .slice(
                  (useSlide % numberOfGroups) * itemsPerPage,
                  (useSlide % numberOfGroups) * itemsPerPage + itemsPerPage
                )
                .map((image, index) => (
                  <ImageContainer
                    key={index}
                    onDragStart={(e) => e.preventDefault()}
                  >
                    <Image_list src={image.src} alt={image.alt} />
                    <ImageTitleText>{image.titleText}</ImageTitleText>
                    <ImageContent>{image.content}</ImageContent>
                  </ImageContainer>
                ))}
            </>
          </ImageWrapper>

          <SlideButton onClick={clickSlideRight} style={{ marginLeft: 10 }}>
            &gt;
          </SlideButton>
        </SliderContainer>
      </section>

      <hr></hr>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
      <div>테스트</div>
    </>
  );
}

export default Home;

//메인 홈페이지 배너
const HomeBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://mp-seoul-image-production-s3.mangoplate.com/a4283e5725fb56755b9bbeb8f285d0dc.jpg");
  background-size: cover;
  background-position: center;
  position: relative; 
`;

const HomeBannerSearchWrap = styled.div`
  width: 100%;
  max-width: 762px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const HomeBannerLabel = styled.label`
  position: relative;
  width: 100%;
  border-radius: 50px;
  border-top: 3px solid skyblue;
  border-left: 3px solid skyblue;
  border-bottom: 2px solid skyblue;
  font-size: 18px;
  padding: 10px 100px 10px 50px;
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;

const HomeBannerInput = styled.input`
  width: 100%;
  font-size: 18px;
  border: none;
  outline: none;
`;

const HomeBannerButton = styled.input`
  position: absolute;
  top: 40%;
  margin-top: -25px;
  right: -50px;
  max-width: 200px;
  background-color: skyblue;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  padding: 20px 30px;
  cursor: pointer;
`;

const HomeBannerSearchIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const HomeBannerText = styled.h1`
  text-align: center;
  color: #ffffff;
`;

//인기 맛집 리스트
const Module_title_wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center
  width: 100%;
`;

//타이틀 이름
const Module_title_name = styled.h2`
  font-size: 20px;
  color: orange;
  margin-left: 100px;
`;

//리스트 더보기
const Module_more = styled.h3`
  color: grey;
  cursor: pointer;
  margin-right: 100px;
`;

type ImageWrapperProps = {
  columns: number;
};


const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 100%;
  height: 492px;
  overflow: hidden;
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  transition: transform 300ms ease-in-out; // 이 부분을 추가하십시오.
  transition-timing-function: linear;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 550px;
  height: 236px;
  overflow: hidden;
  cursor: pointer;
`;

const Image_list = styled.img`
  width: 100%;
  max-width: 550px;
  height: 236px;
  object-fit: cover;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  filter: brightness(0.7);
  
  &:not(:last-child) {
    margin-bottom: 20px; // 이미지 간 margin 추가
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SlideButton = styled.button`
  font-size: 50px;
  padding: 10px 15px;
  margin: 0 15px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: black;
  font-weight: bold;
  outline: none;

  &:hover {
    color: blue;
  }
`;



const ImageTitleText = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-align: center;
  transform: translate(-50%, -50%);
`;


const ImageContent = styled.p`
   position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-align: center;
  transform: translate(-50%, -50%);
`;


