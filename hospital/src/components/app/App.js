import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from '../../pages/LoginPage/LoginPage';
import ListPage from "../../pages/ListPage/ListPage";
import Doctor from "../../pages/doctor/doctor";
import MainPage from '../../pages/MainPage/MainPage';
import DoctorsList from "../../components/lists/doctorsList/DoctorsList";
import DoctorDetails from "../../components/doctor/DoctorDetails"; // Переконайтеся, що шлях до цього компоненту вірний

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path="/list-page" element={<ListPage />}></Route>
          <Route path="/doctors" element={<DoctorsList />}></Route> {/* Список лікарів */}
          <Route path="/doctor/:id" element={<DoctorDetails />}></Route> {/* Деталі конкретного лікаря */}
          <Route path="/new-doctor-page" element={
            <Doctor 
              key = {content.id}
              image = {content.image}
              name = {content.name}
              location = {content.location}
              specialty = {content.specialty}
              ratings={content.ratings}
              time ={content.time}
            />
          }></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
