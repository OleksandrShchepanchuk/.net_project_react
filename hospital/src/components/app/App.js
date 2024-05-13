import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import VideoNewsPage from "../../pages/VideoNewsPage/VideoNewsPage";
import Header from "../Header/Header";
import LoginPage  from '../../pages/LoginPage/LoginPage'
import ListPage from "../../pages/ListPage/ListPage";
import Doctor from "../../pages/doctor/doctor";
import content from '../../content';
import MainPage from '../../pages/MainPage/MainPage';
import { AddArticle } from '../../pages/AddArticlePage/AddArticle';
import { FullArticle } from '../../pages/FullArticlePage/FullArticle';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path="/list-page" element={<ListPage></ListPage>}></Route>
          <Route path="/new-doctor-page/:id" element={<Doctor/>}></Route>
          <Route path="add-article" element={<AddArticle></AddArticle>}></Route>
          <Route path="edit-article/:id" element={<AddArticle></AddArticle>}></Route>
          <Route path="articles/:id" element={<FullArticle></FullArticle>}></Route>
          <Route path="/news" element={<VideoNewsPage isItVideoOrNewsProp={'news'}/>}></Route>
          <Route path="/videos" element={<VideoNewsPage isItVideoOrNewsProp={"video"}/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;