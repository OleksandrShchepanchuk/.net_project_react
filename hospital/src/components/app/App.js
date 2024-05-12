import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import LoginPage  from '../../pages/LoginPage/LoginPage'
import ListPage from "../../pages/ListPage/ListPage";
import Doctor from "../../pages/doctor/doctor";
import content from '../../content';
import MainPage from '../../pages/MainPage/MainPage';
import VideoNewsPage from "../../pages/VideoNewsPage/VideoNewsPage";
import Header from "../Header/Header";

function App() {
  // console.log(content);
    return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<MainPage/>}></Route>
                  <Route path='/login' element={<LoginPage />}></Route>
                  <Route path="/list-page" element={<ListPage></ListPage>}></Route>
                  <Route path="/new-doctor-page" element={<Doctor  key = {content.id}
                                                                   image = {content.image}
                                                                   name = {content.name}
                                                                   location = {content.location}
                                                                   specialty = {content.specialty}
                                                                   ratings={content.ratings}
                                                                   time ={content.time}
                                                                   ></Doctor>}>
                  </Route>
                  <Route path="/news" element={<VideoNewsPage isItVideoOrNewsProp={'news'}/>}></Route>
                  <Route path="/videos" element={<VideoNewsPage isItVideoOrNewsProp={"video"}/>}></Route>

              </Routes>
          </BrowserRouter>
      </>

  );
}

export default App;