import { ImgHTMLAttributes } from "react";
import styled from "styled-components";

//인기 맛집 리스트
export const Module_title_wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center
  width: 100%;
  margin: 15px 0 0 0;
`;

//타이틀 이름
export const Module_title_name = styled.h2`
  font-size: 25px;
  color: orange;
  margin-left: 100px;
`;

//리스트 더보기
export const Module_more = styled.p`
  color: grey;
  cursor: pointer;
  margin-right: 100px;
  font-size:20px;
  line-height:30px
`;

type ImageWrapperProps = {
  columns: number;
  rows: number;
  height: number;
};


export const ImageWrapper = styled.div<ImageWrapperProps>`
   width: 100%;
  height: ${({ height }) => `${height}px`};
  overflow: hidden;
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  grid-gap: ${({ columns }) => 10 * (columns - 1)}px 20px;
  transition: transform 300ms ease-in-out;
  transition-timing-function: linear;
`;

interface ImageListProps extends ImgHTMLAttributes<HTMLImageElement> {
  height: number;
}


export const ImageContainer = styled.div<ImageListProps>`
  position: relative;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center; 
  text-align: center;

  hr {
    position: absolute; 
    top: 33%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    width: 75px;
    border:2px solid white;
  }
  
`;

export const ProfileImgOnImg = styled.img`
  position: absolute;
  top: 65%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  width:56px;
  height:56px;
`;

type homeListTextHeight = {
  top: number;
};

export const Image_list = styled.img<ImageListProps>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  object-fit: cover;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  filter: brightness(0.7);

  &:not(:last-child) {
    margin-bottom: 20px; // 이미지 간 margin 추가
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SlideButton = styled.button`
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

export const ImageTitleText = styled.p<homeListTextHeight>`
  position: absolute;
  font-size:25px;
  top: ${({top}) => `${top}%`};
  left: 0;
  right: 0;
  white-space: normal; 
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-align: center;
`;


export const ImageContent = styled.p<homeListTextHeight>`
  position: absolute;
  top: ${({ top }) => `${top}%`};
  left: 0;
  right: 0;
  white-space: normal;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-align: center;
`;