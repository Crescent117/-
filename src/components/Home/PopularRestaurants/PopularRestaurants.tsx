import React,{useState} from "react";
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


const PopularRestaurants = ({ itemsPerPage, columns }) => {
    const [usePopularSlide, setUsePopularSlide] = useState(0);
    const numberOfGroups = Math.ceil(data.length / itemsPerPage);
    
    const clickSlideRight = () => {
      setUsePopularSlide(usePopularSlide + 1);
    };

    const clickSlideLeft = () => {
      setUsePopularSlide(usePopularSlide - 1);
    };
  return (
    <>
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
              {data
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
                  >
                    <Image_list src={image.src} alt={image.alt} height={236} />
                    <ImageTitleText top={30}>{image.titleText}</ImageTitleText>
                    <ImageContent top={50}>{image.content}</ImageContent>
                  </ImageContainer>
                ))}
            </>
          </ImageWrapper>

          <SlideButton onClick={clickSlideRight} style={{ marginLeft: 10 }}>
            &gt;
          </SlideButton>
        </SliderContainer>
      </section>
      ;
    </>
  );
};



export default PopularRestaurants;
