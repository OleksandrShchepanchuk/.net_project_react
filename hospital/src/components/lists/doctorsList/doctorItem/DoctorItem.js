import React from "react";
import './DoctorItem.scss'

const DoctorItem = (props) => {
  const { img, name } = props;
  return (
    <div>
      <img src={img} className="doctor-img" />
      <h3 className="doctor-name">{name}</h3>
    </div>
  );
};

export default DoctorItem;
