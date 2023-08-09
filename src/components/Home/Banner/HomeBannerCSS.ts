import styled from "styled-components";


//메인 홈페이지 배너
export const HomeBanner = styled.div`
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

export const HomeBannerSearchWrap = styled.div`
  width: 100%;
  max-width: 762px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const HomeBannerLabel = styled.label`
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

export const HomeBannerInput = styled.input`
  width: 100%;
  font-size: 18px;
  border: none;
  outline: none;
`;

export const HomeBannerButton = styled.input`
  position: absolute;
  top: 35%;
  margin-top: -25px;
  right: -50px;
  max-width: 200px;
  background-color: skyblue;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  padding: 18px 50px;
  cursor: pointer;
`;

export const HomeBannerSearchIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const HomeBannerText = styled.h1`
  text-align: center;
  color: #ffffff;
`;