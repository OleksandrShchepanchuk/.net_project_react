import React, { useState, useEffect } from "react";
import DepartmentItem from "./departmentItem/DepartmentItem";
import profilePhoto from "../../../profile-photo.png";
import './DepartmentsList.scss'


const DepartmentsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [depts, setDepts] = useState([]);

  const fetchDepartments = () => {
    const doc = [
      {
        prodId: 1,
        name: "Доктор 1",
        experience: "5 років",  

        image: profilePhoto,
        email: "doctor1@example.com",
        rating: 4.5,
        deptId: 101,
        speciality: "Педіатр",
      },
      {
        prodId: 2,
        name: "Доктор 2",
        experience: "10 років",
        image: profilePhoto,
        email: "doctor2@example.com",
        rating: 4.8,
        deptId: 102,
        speciality: "Терапевт",
      },
      {
        prodId: 3,
        name: "Доктор 3",
        experience: "7 років",
        image: profilePhoto,
        email: "doctor3@example.com",
        rating: 4.2,
        deptId: 103,
        speciality: "Сімейний",
      },
      {
        prodId: 4,
        name: "Доктор 4",
        experience: "12 років",
        image: profilePhoto,
        email: "doctor4@example.com",
        rating: 4.9,
        deptId: 104,
        speciality: "Педіатр",
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
        speciality: "Сімейний",
      },
      {
        prodId: 6,
        name: "Доктор 6",
        experience: "15 років",
        image: profilePhoto,
        email: "doctor6@example.com",
        rating: 4.6,
        deptId: 106,
        speciality: "Терапевт",
      },
      {
        prodId: 7,
        name: "Доктор 7",
        experience: "9 років",
        image: profilePhoto,
        email: "doctor7@example.com",
        rating: 4.3,
        deptId: 107,
        speciality: "Педіатр",
      },
      {
        prodId: 8,
        name: "Доктор 8",
        experience: "11 років",
        image: profilePhoto,
        email: "doctor8@example.com",
        rating: 4.4,
        deptId: 108,
        speciality: "Сімейний",
      },
      {
        prodId: 9,
        name: "Доктор 9",
        experience: "6 років",
        image: profilePhoto,
        email: "doctor9@example.com",
        rating: 4.1,
        deptId: 109,
        speciality: "Терапевт",
      },
      {
        prodId: 10,
        name: "Доктор 10",
        experience: "13 років",
        image: profilePhoto,
        email: "doctor10@example.com",
        rating: 4.9,
        deptId: 110,
        speciality: "Педіатр",
      },
      {
        prodId: 11,
        name: "Доктор 11",
        experience: "8 років",
        image: profilePhoto,
        email: "doctor11@example.com",
        rating: 4.6,
        deptId: 111,
        speciality: "Сімейний",
      },
      {
        prodId: 12,
        name: "Доктор 12",
        experience: "14 років",
        image: profilePhoto,
        email: "doctor12@example.com",
        rating: 4.7,
        deptId: 105,
        speciality: "Терапевт",
      },
      {
        prodId: 13,
        name: "Доктор 13",
        experience: "10 років",
        image: profilePhoto,
        email: "doctor13@example.com",
        rating: 4.8,
        deptId: 106,
        speciality: "Педіатр",
      },
      {
        prodId: 14,
        name: "Доктор 14",
        experience: "9 років",
        image: profilePhoto,
        email: "doctor14@example.com",
        rating: 4.5,
        deptId: 101,
        speciality: "Сімейний",
      },
      {
        prodId: 15,
        name: "Доктор 15",
        experience: "11 років",
        image: profilePhoto,
        email: "doctor15@example.com",
        rating: 4.4,
        deptId: 110,
        speciality: "Терапевт",
      },
      {
        prodId: 16,
        name: "Доктор 16",
        experience: "7 років",
        image: profilePhoto,
        email: "doctor16@example.com",
        rating: 4.3,
        deptId: 108,
        speciality: "Педіатр",
      },
      {
        prodId: 17,
        name: "Доктор 17",
        experience: "12 років",
        image: profilePhoto,
        email: "doctor17@example.com",
        rating: 4.9,
        deptId: 102,
        speciality: "Сімейний",
      },
      {
        prodId: 18,
        name: "Доктор 18",
        experience: "6 років",
        image: profilePhoto,
        email: "doctor18@example.com",
        rating: 4.8,
        deptId: 102,
        speciality: "Терапевт",
      },
      {
        prodId: 19,
        name: "Доктор 19",
        experience: "13 років",
        image: profilePhoto,
        email: "doctor19@example.com",
        rating: 4.7,
        deptId: 119,
        speciality: "Педіатр",
      },
      {
        prodId: 20,
        name: "Доктор 20",
        experience: "8 років",
        image: profilePhoto,
        email: "doctor20@example.com",
        rating: 4.6,
        deptId: 120,
        speciality: "Сімейний",
      },
    ];
    const dep = [
      {
        deptId: 101,
        deptName: "Педіатричне відділення",
        image: profilePhoto,
        phone: "+1234567890",
        address: "вул. Педіатрична, 1",
      },
      {
        deptId: 102,
        deptName: "Терапевтичне відділення",
        image: profilePhoto,
        phone: "+1234567891",
        address: "вул. Терапевтична, 2",
      },
      {
        deptId: 103,
        deptName: "Хірургічне відділення",
        image: profilePhoto,
        phone: "+1234567892",
        address: "вул. Хірургічна, 3",
      },
      {
        deptId: 104,
        deptName: "Ортопедичне відділення",
        image: profilePhoto,
        phone: "+1234567893",
        address: "вул. Ортопедична, 4",
      },
      {
        deptId: 105,
        deptName: "Неврологічне відділення",
        image: profilePhoto,
        phone: "+1234567894",
        address: "вул. Неврологічна, 5",
      },
      {
        deptId: 106,
        deptName: "Кардіологічне відділення",
        image: profilePhoto,
        phone: "+1234567895",
        address: "вул. Кардіологічна, 6",
      },
      {
        deptId: 107,
        deptName: "Офтальмологічне відділення",
        image: profilePhoto,
        phone: "+1234567896",
        address: "вул. Офтальмологічна, 7",
      },
      {
        deptId: 108,
        deptName: "Гінекологічне відділення",
        image: profilePhoto,
        phone: "+1234567897",
        address: "вул. Гінекологічна, 8",
      },
      {
        deptId: 109,
        deptName: "Урологічне відділення",
        image: profilePhoto,
        phone: "+1234567898",
        address: "вул. Урологічна, 9",
      },
      {
        deptId: 110,
        deptName: "Дерматологічне відділення",
        image: profilePhoto,
        phone: "+1234567899",
        address: "вул. Дерматологічна, 10",
      },
    ];

    setDoctors(doc);
    setDepts(dep);
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <div className="dep-list">
      <h1 className="dep-list-title">Відділення</h1>
      {depts.map(dept => {
        const deptDoctors = doctors.filter(doctor => doctor.deptId === dept.deptId);
        return (
          <DepartmentItem
            key={dept.deptId}
            name={dept.deptName}
            address={dept.address}
            phone={dept.phone}
            img={dept.image}
            doctors={deptDoctors}
          />
        );
      })}
    </div>
  )
};

export default DepartmentsList;
