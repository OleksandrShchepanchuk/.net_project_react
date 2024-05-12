import React, { useState } from "react";
import "./ListPage.scss";
import DoctorsList from "../../components/lists/doctorsList/DoctorsList";
import DepartmentsList from "../../components/lists/departmentsList/DepartmentsList";
import HospitalHeader from "../../components/Header/Header";

const ListPage = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <div className="container">
      <HospitalHeader />
      <div className='list-btns'>
        <button
          className={`list-btn ${selectedButton === 1 ? 'selected' : ''}`}
          onClick={() => handleButtonClick(1)}
        >
          Відділення
        </button>
        <button
          className={`list-btn ${selectedButton === 2 ? 'selected' : ''}`}
          onClick={() => handleButtonClick(2)}
        >
          Лікарі
        </button>
      </div>
      {selectedButton === 1 ? <DepartmentsList /> : <DoctorsList />}
    </div>
  );
};

export default ListPage;