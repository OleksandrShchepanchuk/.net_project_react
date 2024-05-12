import React, { useState, useEffect } from 'react';
import DoctorItem from './doctorItem/DoctorItem';
import './DoctorList.scss';
import axios from 'axios';

const baseURL = "http://localhost:5075/api/Doctors";

const DoctorsList = () => {
  const [doctorsdate, setData] = useState([]);
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setData(response.data.$values);
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

  // Now we know data is always an array, no need to check if (!data)
  return (

    <div className='doctor-list container'>
    {/* { console.log(doctorsdate)} */}
      {doctorsdate.map((elem, index) => {
        return (
          <DoctorItem id={elem.doctorId} name={elem.name} img={elem.image}/>

         
        )
        // Display a new specialty group header
        //if (index === 0 || elem.speciality !== doctorsdate[index - 1].speciality) {
         // return (
            //<React.Fragment key={elem.speciality}>
             // <h2>{elem.speciality}</h2>
             // {/* Uncomment below when ready to display individual doctor items within groups
             // <div>
              //  <DoctorItem img={elem.image} name={elem.name} />
            //  </div>
            //  */}
            //</React.Fragment>
         // );
       // } else {
          // Display individual doctor item
         // return (
          //  <DoctorItem key={elem.DoctorId} id={elem.DoctorId} img={elem.Image} name={elem.Name} />
        //  );
       // }
      })}
    </div>
  );
};

export default DoctorsList;
