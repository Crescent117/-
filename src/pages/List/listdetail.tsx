import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./listdetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

interface TrustBestItem {
  src: string;
  alt: string;
  titleText: string;
  content: string;
  url: string;
}

interface ListDetailProps {
  TrustBestItem: TrustBestItem[]; // 이미지 데이터를 배열로 전달
}

const ListDetail: React.FC<ListDetailProps> = ({ TrustBestItem }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? TrustBestItem.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === TrustBestItem.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <aside className="restaurant-photo">
        <div>
          <div>
            <figure className="list-photo">
              <figure
                className="restaurant-photo-items"
                onClick={handleOpenModal}
              >
                <ul>
                  <p className="place-photo">
                    <img
                      src="https://mp-seoul-image-production-s3.mangoplate.com/492453/1042666_1688268955600_1000016246"
                      alt=""
                      width="500px;"
                      height="340px"
                    />{" "}
                    <img
                      src="https://mp-seoul-image-production-s3.mangoplate.com/492453/1042666_1688268955600_1000016246"
                      alt=""
                      width="500px;"
                      height="340px"
                    />{" "}
                    <img
                      src="https://mp-seoul-image-production-s3.mangoplate.com/492453/1042666_1688268955600_1000016246"
                      alt=""
                      width="500px;"
                      height="340px"
                    />
                  </p>
                  {TrustBestItem.map((imageData, index) => (
                    <p key={index}>
                      <img src={imageData.src} alt={`Image ${index}`} />
                    </p>
                  ))}
                </ul>
                {/* <img src={images[currentImageIndex]} alt="" /> */}
              </figure>
            </figure>
          </div>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
          <div className="modal">
            <div className="modal-content">
              <button className="left-button" onClick={handlePrevImage}>
                <i className="bi bi-chevron-left"></i>
              </button>
              <div className="modal-image">
                {/* <img src={images[currentImageIndex]} alt="" /> */}
              </div>
              <button className="right-button" onClick={handleNextImage}>
                <i className="bi bi-chevron-right"></i>
              </button>
              <img
                src={TrustBestItem[currentImageIndex]?.src}
                alt={`Image ${currentImageIndex}`}
              />

              <button className="modal-close" onClick={handleCloseModal}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
        </Modal>
      </aside>
      <div className="column-contents">
        <div className="inner">
          {/* 레스토랑 상세 정보 */}
          <section className="restaurant-detail">
            <header>
              <div className="restaurant_title_wrap">
                <span className="title">
                  <h1 className="restaurant_name">돌산식당</h1>
                  <strong className="rate-point expected">
                    <span>4.5</span>
                  </strong>
                </span>
                {/* 리뷰쓰기 버튼과 위시리스트 버튼 */}
                <button className="review-btn">
                  <i className="bi bi-pencil"></i>
                  <span className="review-btn-txt">리뷰쓰기</span>
                </button>
                <button className="wishlist-btn">
                  <i className="bi bi-star"></i>
                  <span className="wishlist-btn-txt">가고싶다</span>
                </button>
              </div>
              {/* 방문횟수, 리뷰횟수, 위시리스트 횟수 */}
              <p className="visit-count">방문횟수: 100</p>
              <p className="review-count">리뷰횟수: 50</p>
              <p className="wishlist-count">위시리스트: 20</p>
            </header>

            {/* 주소, 전화번호, 음식정보, 가격대, 영업시간, 휴일 */}
            <div className="restaurant-info">
              <div>
                <p>주소: 서울시 강남구</p>
                <p>전화번호: 02-123-4567</p>
                <p>음식정보: 한식</p>
                <p>가격대: ₩₩</p>
                <p>영업시간: 10:00 AM - 10:00 PM</p>
                <p>휴일: 매주 일요일</p>
              </div>
              {/* 더 많은 정보들 */}
              {/* 추가적인 정보들을 이곳에 넣어주세요 */}
            </div>
          </section>
          <hr />
          {/* 리뷰들을 보여줄 부분 */}
          <section className="reviews">
            <header className="RestaurantReviewList__Header">
              <h2 className="RestaurantReviewList__Title">
                <span className="RestaurantReviewList__RestaurantName">
                  돌산식당
                </span>
                <span className="RestaurantReviewList__AllCount"> (8)</span>
              </h2>
              <ul className="RestaurantReviewList__FilterList">
                <li className="RestaurantReviewList__FilterItem">
                  <button className="RestaurantReviewList__FilterButton RestaurantReviewList__FilterButton--Selected RestaurantReviewList__AllFilterButton">
                    전체(
                    <span className="RestaurantReviewList__ReviewCount">8</span>
                    )
                  </button>
                </li>
                <li className="RestaurantReviewList__FilterItem">
                  <button className="RestaurantReviewList__FilterButton">
                    맛있다(
                    <span className="RestaurantReviewList__ReviewCount">4</span>
                    )
                  </button>
                </li>
                <li className="RestaurantReviewList__FilterItem">
                  <button className="RestaurantReviewList__FilterButton">
                    괜찮다(
                    <span className="RestaurantReviewList__ReviewCount">2</span>
                    )
                  </button>
                </li>
                <li className="RestaurantReviewList__FilterItem">
                  <button className="RestaurantReviewList__FilterButton">
                    별로다(
                    <span className="RestaurantReviewList__ReviewCount">2</span>
                    )
                  </button>
                </li>
              </ul>
            </header>
          </section>
        </div>
        <div className="column-side">
          {/* 가게 위치 지도 */}
          <div className="map">가게 위치 지도가 나타날 부분입니다.</div>

          {/* 가게 추천 공간 */}
          <div className="recommended-stores">
            <h2>이 근처 가게 추천</h2>
            {/* 여기에 가게 추천 정보를 추가할 수 있습니다 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListDetail;
