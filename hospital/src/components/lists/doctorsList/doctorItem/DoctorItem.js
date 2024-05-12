import React from "react";
import './DoctorItem.scss'
import {Link} from 'react-router-dom'

const DoctorItem = (props) => {
  return (
    <Link to={`/api/Doctors/${props.id}`}>
      <img src={props.img} className="doctor-img" />
      <h3 className="doctor-name">{props.name}</h3>
    </Link>
  );
};

export default DoctorItem;
