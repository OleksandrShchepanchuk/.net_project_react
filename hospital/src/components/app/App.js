import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import LoginPage  from '../../pages/LoginPage/LoginPage'
import ListPage from "../../pages/ListPage/ListPage";
import Doctor from "../../pages/doctor/doctor";
import content from '../../content';
import MainPage from '../../pages/MainPage/MainPage';
import { AddArticle } from '../../pages/AddArticlePage/AddArticle';


function App() {
  // console.log(content);
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path="/list-page" element={<ListPage></ListPage>}></Route>
          <Route path="/new-doctor-page" element={<Doctor  key = {content.id}
                    image = {content.image}
                    name = {content.name}
                    location = {content.location}
                    specialty = {content.specialty}
                    ratings={content.ratings}
                    time ={content.time}></Doctor>}>
          </Route>
          <Route path="add-article" element={<AddArticle></AddArticle>}></Route>
          <Route path="edit-article/:id" element={<AddArticle></AddArticle>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
