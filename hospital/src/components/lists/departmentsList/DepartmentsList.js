import React, { useState, useEffect } from "react";
import DepartmentItem from "./departmentItem/DepartmentItem";
import profilePhoto from "../../../profile-photo.png";
import './DepartmentsList.scss';
import axios from 'axios'

const baseURL = "http://localhost:5075/api/Departments"
const DepartmentsList = () => {
  const [depts, setDepts] = useState([]);
  const [doctors, setDoctors] = useState([])
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setDepts(response.data.$values);
        console.log(response)
      })
      .catch((error) => {
        setError(error); // Handle any errors
        console.error('Error fetching data: ', error);
      });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5075/api/Doctors")
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
  console.log("depts")
  console.log(depts)
  return (
    <div className="dep-list">
      <h1 className="dep-list-title">Амбулаторії</h1>
      {depts.map(dept => {
        return (
          <DepartmentItem
            key={dept.departmentId}
            id={dept.departmentId}
            name={dept.departmentName}
            address={dept.address}
            phone={dept.phone}
            img={dept.image}
          />
        );
      })}
    </div>
  )
};

export default DepartmentsList;
