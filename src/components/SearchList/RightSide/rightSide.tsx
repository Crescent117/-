import React, { useEffect, useState } from "react"
import * as S from '../searchListCss'


interface TrustBest {
  src: string;
  titleText: string;
  content: string;
}

// searchList의 오른쪽 부분
const RightSide = () => { 
  const [useTrustBest, setUseTrustBest] = useState<TrustBest[]>([]);

    
    useEffect(() => {
      getTrustBest();
    }, []);

    const getTrustBest = async () => {
      try {
        const response = await fetch(`http://localhost:4500/trustBest`);

        // 에러처리
        if (!response.ok) {
          const errorData = await response.json();
          const statusCode = response.status;
          const statusText = response.statusText;
          const message = errorData.message[0];
          console.log(`${statusCode} - ${statusText} - ${message}`);
          return;
        }

        const data = await response.json();
        setUseTrustBest(data);
      } catch (err) {
        console.log("error log: ", err);
      }
    };

    
    return (
      <S.RightSide_div>
        <S.Map_div>
          지도 공간
        </S.Map_div>
        <S.SearchListTitle_title> 관련 콘텐츠 </S.SearchListTitle_title>
        {useTrustBest &&
          useTrustBest.map((trust, index) => (
            <>
              <S.ImageContainer height={165} key={ index }>
                <S.RightSideImage_img
                  key={index}
                  src={trust.src}
                ></S.RightSideImage_img>
                <S.ImageTitleText top={30}>{trust.titleText}</S.ImageTitleText>
                <S.ImageContent top={50}>"{trust.content}"</S.ImageContent>
              </S.ImageContainer>
            </>
          ))}
      </S.RightSide_div>
    )

}

export default RightSide;