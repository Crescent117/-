import React, { ImgHTMLAttributes, useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../../components/Home/Banner/banner";
import PopularRestaurants from "../../components/Home/PopularRestaurants/popularRestaurants";
import RestaurantStories from "../../components/Home/RestaurantStories/restaurantStories";
import RegionRestaurants from "../../components/Home/RegionRestaurants/regionRestaurants";
import useWindowResize from "../../components/shared/useWindowResize";

function Home() {
  
  //화면크기에 따라 바뀌는 값들
 const [itemsPerPage, setItemsPerPage] = useState(6);
 const [columns, setColumns] = useState(3);

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

 useWindowResize(handleResize);
  

  
  return (
    <>
      {/* 검색배너 */}
      <Banner></Banner>
      {/* 믿고보는 맛집 */}
      <PopularRestaurants
        itemsPerPage={itemsPerPage}
        columns={columns}
      />

      <hr></hr>

      {/* 맛집 스토리 */}
      <RestaurantStories/>
      <hr></hr>

      {/* 지역별 인기식당 */}
      <RegionRestaurants
        itemsPerPage={itemsPerPage}
        columns={columns}
      />
    </>
  );
}

export default Home;