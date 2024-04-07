import React, { useState, useEffect } from 'react';
import DoctorItem from './doctorItem/DoctorItem';
import profilePhoto from '../../../profile-photo.png'
import './doctorslist-module.scss'

const YourComponent = () => {
    const [data, setData] = useState([]);
  
    const fetchDepartments = () => {
        const doctors = [
            {
              prodId: 1,
              name: "Доктор 1",
              experience: "5 років",
              image: profilePhoto,
              email: "doctor1@example.com",
              rating: 4.5,
              deptId: 101,
              speciality: "Педіатр"
            },
            {
              prodId: 2,
              name: "Доктор 2",
              experience: "10 років",
              image: profilePhoto,
              email: "doctor2@example.com",
              rating: 4.8,
              deptId: 102,
              speciality: "Терапевт"
            },
            {
              prodId: 3,
              name: "Доктор 3",
              experience: "7 років",
              image: profilePhoto,
              email: "doctor3@example.com",
              rating: 4.2,
              deptId: 103,
              speciality: "Сімейний"
            },
            {
              prodId: 4,
              name: "Доктор 4",
              experience: "12 років",
              image: profilePhoto,
              email: "doctor4@example.com",
              rating: 4.9,
              deptId: 104,
              speciality: "Педіатр"
            },
            // Додайте ще лікарів з обмеженням на спеціальність
            {
              prodId: 5,
              name: "Доктор 5",
              experience: "8 років",
              image: profilePhoto,
              email: "doctor5@example.com",
              rating: 4.7,
              deptId: 105,
              speciality: "Сімейний"
            },
            {
              prodId: 6,
              name: "Доктор 6",
              experience: "15 років",
              image: profilePhoto,
              email: "doctor6@example.com",
              rating: 4.6,
              deptId: 106,
              speciality: "Терапевт"
            },
            {
              prodId: 7,
              name: "Доктор 7",
              experience: "9 років",
              image: profilePhoto,
              email: "doctor7@example.com",
              rating: 4.3,
              deptId: 107,
              speciality: "Педіатр"
            },
            {
              prodId: 8,
              name: "Доктор 8",
              experience: "11 років",
              image: profilePhoto,
              email: "doctor8@example.com",
              rating: 4.4,
              deptId: 108,
              speciality: "Сімейний"
            },
            {
              prodId: 9,
              name: "Доктор 9",
              experience: "6 років",
              image: profilePhoto,
              email: "doctor9@example.com",
              rating: 4.1,
              deptId: 109,
              speciality: "Терапевт"
            },
            {
              prodId: 10,
              name: "Доктор 10",
              experience: "13 років",
              image: profilePhoto,
              email: "doctor10@example.com",
              rating: 4.9,
              deptId: 110,
              speciality: "Педіатр"
            },
            {
              prodId: 11,
              name: "Доктор 11",
              experience: "8 років",
              image: profilePhoto,
              email: "doctor11@example.com",
              rating: 4.6,
              deptId: 111,
              speciality: "Сімейний"
            },
            {
              prodId: 12,
              name: "Доктор 12",
              experience: "14 років",
              image: profilePhoto,
              email: "doctor12@example.com",
              rating: 4.7,
              deptId: 112,
              speciality: "Терапевт"
            },
            {
              prodId: 13,
              name: "Доктор 13",
              experience: "10 років",
              image: profilePhoto,
              email: "doctor13@example.com",
              rating: 4.8,
              deptId: 113,
              speciality: "Педіатр"
            },
            {
              prodId: 14,
              name: "Доктор 14",
              experience: "9 років",
              image: profilePhoto,
              email: "doctor14@example.com",
              rating: 4.5,
              deptId: 114,
              speciality: "Сімейний"
            },
            {
              prodId: 15,
              name: "Доктор 15",
              experience: "11 років",
              image: profilePhoto,
              email: "doctor15@example.com",
              rating: 4.4,
              deptId: 115,
              speciality: "Терапевт"
            },
            {
              prodId: 16,
              name: "Доктор 16",
              experience: "7 років",
              image: profilePhoto,
              email: "doctor16@example.com",
              rating: 4.3,
              deptId: 116,
              speciality: "Педіатр"
            },
            {
              prodId: 17,
              name: "Доктор 17",
              experience: "12 років",
              image: profilePhoto,
              email: "doctor17@example.com",
              rating: 4.9,
              deptId: 117,
              speciality: "Сімейний"
            },
            {
              prodId: 18,
              name: "Доктор 18",
              experience: "6 років",
              image: profilePhoto,
              email: "doctor18@example.com",
              rating: 4.8,
              deptId: 118,
              speciality: "Терапевт"
            },
            {
              prodId: 19,
              name: "Доктор 19",
              experience: "13 років",
              image: profilePhoto,
              email: "doctor19@example.com",
              rating: 4.7,
              deptId: 119,
              speciality: "Педіатр"
            },
            {
              prodId: 20,
              name: "Доктор 20",
              experience: "8 років",
              image: profilePhoto,
              email: "doctor20@example.com",
              rating: 4.6,
              deptId: 120,
              speciality: "Сімейний"
            }  
    ];
    doctors.sort((a, b) => a.speciality.localeCompare(b.speciality));
    setData(doctors)
  };

  useEffect(() => {
    fetchDepartments();
  }, []);
  return (
    <div className='doctor-list container'>
        {data.map((elem, index) => {
                // Виводимо заголовок для нової групи спеціальностей
                if (index === 0 || elem.speciality !== data[index - 1].speciality) {
                    return (
                        <React.Fragment key={elem.speciality}>
                            <h2>{elem.speciality}</h2>
                            <div>
                                <DoctorItem img={elem.image} name={elem.name} />
                            </div>
                        </React.Fragment>
                    );
                } else {
                    return (
                        <div key={elem.prodId}>
                            <DoctorItem img={elem.image} name={elem.name} />
                        </div>
                    );
                }
            })}
    </div>
  )
}

export default YourComponent;
