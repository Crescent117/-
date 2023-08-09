import React, { useState } from "react";
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
  const [searchValue, setSearchValue] = useState("");

  const searchListGo = () => {
    if (searchValue.length !== 0) {
      console.log(searchValue);
      window.location.href = `/search/${searchValue}`;
    }

    if (searchValue.length === 0) {
      window.alert("검색어를 입력해주세요!");
    }
  };

  const enterKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      const enterKey = e.target as HTMLInputElement;
      if (enterKey.value.length !== 0) {
        searchListGo();
      } else {
        window.alert("검색어를 입력해주세요!");
      }
    }
  };

  const popupSearch = () => {};
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
          <HomeBannerInput
            id="searchValue"
            type="text"
            placeholder="지역, 식당 또는 음식"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={enterKeyDown}
            onClick={popupSearch}
          />
          <HomeBannerButton type="button" value="검색" onClick={searchListGo} />
        </HomeBannerLabel>
      </HomeBannerSearchWrap>
    </HomeBanner>
  );
};

export default Banner;
