import React, { useState } from "react";
import "./list-module.scss";
import DoctorsList from "./doctorsList/DoctorsList";
import DepartmentsList from "./departmentsList/DepartmentsList";

const List = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <div className="container">
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

export default List;
