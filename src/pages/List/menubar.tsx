import React from "react";
import "./menubar.css";

const Menubar = () => {
  return (
    <header className="menubar">
      <a href="/" className="home-link">
        <img
          src="https://play-lh.googleusercontent.com/W9AN3AyNH7rgBaGO7Jv2MEMk2piGUEerZTZN7hG-xNJFq6QW1Dzs4HLukka0-oKIsw"
          alt=""
        />
      </a>
      <div className="search-box">
        <i className="bi bi-search"></i>
        <label htmlFor="">
          <input type="text" />
        </label>
      </div>
      <div className="links">
        <a href="/restaurant1">맛집리스트</a>
        <a href="/restaurant2">맛집스토리</a>
        <button className="mypage-button">
          <i className="bi bi-person-circle"></i>
        </button>
      </div>
    </header>
  );
};

export default Menubar;
