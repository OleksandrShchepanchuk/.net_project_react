import { useState, useEffect, React } from "react";
import "./DepartmentItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const baseURL = "http://localhost:5075/api/Doctors"

const DepartmentItem = (props) => {
  const [showDoctors, setShowDoctors] = useState(false);
  const [doctors, setDoctors] = useState([])
  const [error, setError] = useState(null); // State to handle errors


  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setDoctors(response.data.$values);
        console.log(response)
      })
      .catch((error) => {
        setError(error); // Handle any errors
        console.error('Error fetching data: ', error);
      });
  }, []);
  if (error) {
    return <div>Error loading data!</div>; // Display error message if any error occurred
  }
  console.log("Doctors")
  console.log(doctors)

  return (
    <div className="container">
      <div className="dep-item">
        <div className="dep-item-text-container">
          <h2 className="dep-item-text-title">{props.name}</h2>
          <p className="dep-item-text">
            {" "}
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#ff8408" }}
            />
            {props.address}
          </p>
          <p className="dep-item-text">
            {" "}
            <FontAwesomeIcon
              icon={faPhoneVolume}
              style={{ color: "#ff8408" }}
            />
            {props.phone}
          </p>
          <button className="dep-item-text-btn" onClick={() => setShowDoctors(!showDoctors)}>{showDoctors ? 'Закрити список лікарів' : 'Список лікарів'}</button>
        </div>
        <img className="dep-item-img" src={props.img} />
      </div>
      {showDoctors && (
        <div className="dep-item-doctors">
          {doctors.filter((doc) => doc.departmentId === props.id).map((doctor) => (
            <div className="dep-item-doc" key={doctor.prodId}>
              <div>
                <h3 className="dep-item-doc-name">{doctor.name}</h3>
                <p className="dep-item-doc-rating">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ff8408" }} />
                  Рейтинг: {doctor.rating}/5
                </p>
              </div>
              <img src={doctor.image} className="dep-item-doc-img" alt="Doctor" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DepartmentItem;
