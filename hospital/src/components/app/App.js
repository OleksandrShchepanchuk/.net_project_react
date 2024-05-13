import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import LoginPage  from '../../pages/LoginPage/LoginPage'
import ListPage from "../../pages/ListPage/ListPage";
import Doctor from "../../pages/doctor/doctor";
import content from '../../content';
import MainPage from '../../pages/MainPage/MainPage';
import HospitalHeader from '../Header/Header';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path="/list-page" element={<ListPage></ListPage>}></Route>
          <Route path="/new-doctor-page/:id" element={<Doctor/>}></Route>
          {/* <Route path="/new-doctor-page/:id" element={<Doctor  key = {content.id}
                    image = {content.image}
                    name = {content.name}
                    location = {content.location}
                    specialty = {content.specialty}
                    ratings={content.ratings}
                    time ={content.time}></Doctor>}> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;