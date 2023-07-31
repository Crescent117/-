import React from "react";
import {
  HomeBanner,
  HomeBannerSearchWrap,
  HomeBannerLabel,
  HomeBannerInput,
  HomeBannerButton,
  HomeBannerSearchIcon,
  HomeBannerText,
} from "./HomeBannerCSS";

const Banner = () => {
  return (
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
  );
};

export default Banner;
