import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./list.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menubar from "./menubar";
function List() {
  return (
    <>
      {/* <Route path="/menubar" element={<Menubar />} /> */}
      <div className="container">
        <header className="basic-info-list">
          {/* 클릭횟수 날짜 넣을부분 */}
          <p className="status">1111클릭 | 2023-08-2 </p>
          {/*  */}
          <h1 className="title">샐러드 맛집 베스트 40곳</h1>
          <h4 className="subtitle">“입맛 없을 때 샐러드로 가볍게!”</h4>
        </header>
        <main className="container-place">
          <tr>
            <td>
              <div className="place-list">
                <div className="place-item">
                  <img
                    src="https://mp-seoul-image-production-s3.mangoplate.com/1035497_1669815478237252.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"
                    alt="가게1"
                  />
                  <div className="place-info">
                    <div className="place-info-header">
                      <span className="title">
                        <h1 className="restaurant_name">돌산식당</h1>
                        <strong className="rate-point expected">
                          <span>4.5</span>
                        </strong>
                      </span>
                    </div>
                    <p>가게1 주소</p>
                  </div>

                  <div className="buttons">
                    <button className="wishlist-btn">
                      <i className="bi bi-star"></i>
                      <span className="wishlist-btn-txt">가고싶다</span>
                    </button>
                    <button className="viewdetail">
                      <p className="viewdetail-p">
                        <Link to={`/listdetail`}>가게 자세히 보기</Link>
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </main>
      </div>
    </>
  );
}

export default List;
