import { ImgHTMLAttributes } from 'react';
import styled, { css } from 'styled-components'

type FoodImg_size = {
  height:number
}

type StoreTitleProps = {
  maxchar: number;
}

type CurrentButton = {
  color:string
}

type TextHeight = {
  top: number;
};

interface ImageListProps extends ImgHTMLAttributes<HTMLImageElement> {
  height: number;
}

export const OuterWrap_section = styled.section`
  display: flex;
`;

export const SearchListTitle_title = styled.p`
  color: #FF7F00;
  padding-left: 10px;
  font-size: 2em;
  margin:30px 0;
`;

export const SearchListWrap_div = styled.div`
  width:100%;
  min-width:780px;
  float:left;
`;
export const SearchListInner_div = styled.div`
  width:100%;
  max-width:800px;
  margin: 0 auto;
`;

export const SertchList_ul = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

export const SearchList_li = styled.li`
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
`;

export const FoodImg_img = styled.img<FoodImg_size>`
  width: 359px;
  height: ${({ height }) => `${height}px`};
  cursor:pointer;
`;

export const StoreTitleScoreWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const StoreTitle = styled.span <StoreTitleProps>`
  font-size: 24px;
  color: grey;
  cursor:pointer;
  ${({ maxchar }) =>
    maxchar && css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: ${maxchar}ch;
    `}
`;

export const StoreScore = styled.span`
  color: #FF7F00;
  margin-left: 10px;
  font-size: 24px;
`;

export const ViewCount = styled.span`
  position: relative;
  padding-left:20px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url("https://cdn-icons-png.flaticon.com/512/65/65003.png");
    background-size: cover;
  }
`;

export const RightSide_div = styled.div`
  min-width: 400px;
  max-width: 400px;
  background-color: #e0e0e0;
`;

export const Map_div = styled.div`
  height:485px;
`;

export const RightSideImage_img = styled.img`
  width: 352px;
  height: 165px;
  object-fit: cover;
  position: relative;
  filter: brightness(0.7);
  margin-left: 25px;
  &:not(:last-child) {
    margin-bottom: 20px; // 이미지 간 margin 추가
  }
`;

export const Pagenation_div = styled.div`
  text-align:center;
  margin: 50px 0;
`;

export const PagingButton_button = styled.button<CurrentButton>`
  margin: 0 15px;
  padding: 12px 20px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid ${({ color }) => `#${color}`};;
`;

export const PagingButtonText_p = styled.a<CurrentButton>`
  text-decoration: none;
  color: ${({ color }) => `#${ color }`};
  fontsize: 2em;
`;

export const ImageTitleText = styled.p<TextHeight>`
  position: absolute;
  font-size: 20px;
  top: ${({ top }) => `${top}%`};
  left: 0;
  right: 0;
  white-space: normal;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-align: center;
`;

export const ImageContent = styled.p<TextHeight>`
  position: absolute;
  top: ${({ top }) => `${top}%`};
  left: 0;
  right: 0;
  white-space: normal;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-align: center;
`;

export const ImageContainer = styled.div<ImageListProps>`
  position: relative;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  font-size:2em;
  margin-top:30%;
  text-align:center;
`;