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
  ProfileImgOnImg,
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

const RestaurantStories = () => {
  const [useStoriesSlide, setUseStoriesSlide] = useState(0);

  const clickSlideRight = () => {
    setUseStoriesSlide(useStoriesSlide + 1);
  };

  const clickSlideLeft = () => {
    setUseStoriesSlide(useStoriesSlide - 1);
  };

  return (
    <>
      <section>
        <Module_title_wrap>
          <Module_title_name>맛집 스토리</Module_title_name>
          <Module_more>스토리 더보기</Module_more>
        </Module_title_wrap>
        <SliderContainer>
          <SlideButton onClick={clickSlideLeft} style={{ marginRight: 10 }}>
            &lt;
          </SlideButton>
          <ImageWrapper columns={3} rows={1} height={382}>
            <>
              {data
                .slice((useStoriesSlide % 4) * 3, (useStoriesSlide % 4) * 3 + 3)
                .map((image, index) => (
                  <ImageContainer
                    key={index}
                    onDragStart={(e) => e.preventDefault()}
                    height={382}
                  >
                    <Image_list src={image.src} alt={image.alt} height={382} />
                    <ImageTitleText top={20}>{image.titleText}</ImageTitleText>
                    <ImageContent top={40}>{image.content}</ImageContent>
                    <ProfileImgOnImg src="https://image.fmkorea.com/files/attach/new2/20211001/4329633/1087283728/3956629328/d0d150f0347fd0ae1a0b8ea9ae95f712.jpg"></ProfileImgOnImg>
                    <ImageContent top={75}>미스각청</ImageContent>
                  </ImageContainer>
                ))}
            </>
          </ImageWrapper>

          <SlideButton onClick={clickSlideRight} style={{ marginLeft: 10 }}>
            &gt;
          </SlideButton>
        </SliderContainer>
      </section>
    </>
  );
};

export default RestaurantStories;