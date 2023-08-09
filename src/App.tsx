import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import List from "./pages/List/list";
import ListDetail from "./pages/List/listdetail";
import { response } from "express";
import Menubar from "./pages/List/menubar";
import Home from "./pages/HOME/Home";
import SearchList from "./pages/SearchList/SearchList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/search/:searchValue" element={<SearchList />}></Route>
          <Route path="/list" element={<List />} />
          {/*<Route path="/listdetail" element={<ListDetail />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
