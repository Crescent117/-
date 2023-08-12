import React,{useState} from "react";
import * as S from "../shared_componentCSS";
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
        <S.Module_title_wrap>
          <S.Module_title_name>맛집 스토리</S.Module_title_name>
          <S.Module_more>스토리 더보기</S.Module_more>
        </S.Module_title_wrap>
        <S.SliderContainer>
          <S.SlideButton onClick={clickSlideLeft} style={{ marginRight: 10 }}>
            &lt;
          </S.SlideButton>
          <S.ImageWrapper columns={3} rows={1} height={382}>
            <>
              {data
                .slice((useStoriesSlide % 4) * 3, (useStoriesSlide % 4) * 3 + 3)
                .map((image, index) => (
                  <S.ImageContainer
                    key={index}
                    onDragStart={(e) => e.preventDefault()}
                    height={382}
                  >
                    <S.Image_list
                      src={image.src}
                      alt={image.alt}
                      height={382}
                    />
                    <S.ImageTitleText top={20}>
                      {image.titleText}
                    </S.ImageTitleText>
                    <S.ImageContent top={40}>{image.content}</S.ImageContent>
                    <S.ProfileImgOnImg src="https://image.fmkorea.com/files/attach/new2/20211001/4329633/1087283728/3956629328/d0d150f0347fd0ae1a0b8ea9ae95f712.jpg"></S.ProfileImgOnImg>
                    <S.ImageContent top={75}>미스각청</S.ImageContent>
                  </S.ImageContainer>
                ))}
            </>
          </S.ImageWrapper>

          <S.SlideButton onClick={clickSlideRight} style={{ marginLeft: 10 }}>
            &gt;
          </S.SlideButton>
        </S.SliderContainer>
      </section>
    </>
  );
};

export default RestaurantStories;