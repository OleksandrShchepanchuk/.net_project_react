// import React, { useState } from 'react';
// import './doctor-module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '@fortawesome/fontawesome-free/css/all.css'; 
// import { faLocationDot, faStethoscope, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
// import Rating from '../../components/Rating/Rating';
// import HospitalHeader from '../../components/Header/Header';

// export function Doctor({ id, name, specialty, location, ratings, image, time }) {
//     const [comments, setComments] = useState([]);
//     const [commentText, setCommentText] = useState('');
//     const [commenterName, setCommenterName] = useState('');
//     const [commentRating, setCommentRating] = useState(0);

//     const handleAppointmentClick = () => {
//         alert("Функція запису на прийом");
//     };

//     // const nameParts = name.split(' ');
//     // const lastName = nameParts[0];
//     // const firstNameAndPatronymic = nameParts.slice(1).join(' ');

   
//     const lastName ="Дідух"
//     const firstNameAndPatronymic = "Софія Батьківна";


//     const handleRate = (rateValue) => {
//         setCommentRating(rateValue);
//     };

//     const handleCommentSubmit = () => {
//         if (!commentText.trim()) return;
      
//         const newComment = {
//             text: commentText,
//             name: commenterName.trim() ? commenterName : "Анонім",
//             rating: commentRating,
//         };
//         setComments([...comments, newComment]);
//         setCommentText('');
//         setCommenterName('');
//         setCommentRating(0);
//     };

//     return (
//         <div className='doctor'>
//             <HospitalHeader />
//             <div key={id} className='doctor__card'>
//                 <img src={image} alt='doctor' className='doctor__img' />
//                 <div className="doctor__text-container">
//                     <div className='doctor__text-container__name'>
//                         <span className='doctor__text-container__name__last'>{lastName}</span>{}
//                         <span className='doctor__text-container__name__first'>{firstNameAndPatronymic}</span>{}
//                     </div>
//                     <div className='doctor__text-container__information'>
//                         <div className='doctor__text-container__information__specialty'>
//                         <FontAwesomeIcon icon={faStethoscope} style={{ color: "#ff8408", marginRight: "8px" }}/>
//                             {specialty}
//                         </div>
//                         <div className='doctor__text-container__information__location'>
//                         <FontAwesomeIcon icon={faLocationDot} style={{ color: "#ff8408", marginRight: "12px" }} />
//                             {location}
//                         </div>
//                         <div className='doctor__text-container__information__ratings'>
//                         <FontAwesomeIcon icon={faStar} style={{ color: "#ff8408", marginRight: "8px" }} />
//                             {ratings}
//                         </div>
//                         <div className='doctor__text-container__information__work-hours'>
//                         <FontAwesomeIcon icon={faClock} style={{color: "#ff8408", marginRight: "8px"}} />
//                             {time}
//                         </div>
//                     </div>
//                     <div className='doctor__text-container__signup'>
//                         <button onClick={handleAppointmentClick} className="doctor__text-container__signup__appointment-button">Записатися</button>
//                         <button onClick={handleAppointmentClick} className="doctor__text-container__signup__review-button">Залишити відгук</button>
//                     </div>
//                 </div>
//             </div>
//             <div className='doctor__comment-section'>
//                 <Rating onRate={handleRate} />
//                 <textarea 
//                     value={commentText}
//                     onChange={(e) => setCommentText(e.target.value)}
//                     placeholder="Залиште ваш коментар" 
//                     className="doctor__comment-section__comment-input"
//                 ></textarea>
//                 <button onClick={handleCommentSubmit} className="doctor__comment-section__submit-comment-button">Готово</button>
//             </div>
//             <div className="doctor__comments-display">
//                 {comments.map((comment, index) => (
//                     <div key={index} className="doctor__comments-display__comment-item">
//                         <p><b>{comment.name}</b><FontAwesomeIcon icon={faStar} /> <span> {comment.rating} / 5</span></p>
//                         <p>{comment.text}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Doctor

import React, { useState, useEffect } from 'react';
import './doctor-module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';
import { faLocationDot, faStethoscope, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import Rating from '../../components/Rating/Rating';
import HospitalHeader from '../../components/Header/Header';
import axios from '../../api/axios.js';
import { useParams } from "react-router-dom";

function Doctor(props) {
    const [doctor, setDoctor] = useState({});
    const [department, setDepartment] = useState({});
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [commenterName, setCommenterName] = useState('');
    const [commentRating, setCommentRating] = useState(0);
    const [error, setError] = useState(null); // State to handle errors
    const { id } = useParams();



    useEffect(() => {
        axios.get(`http://localhost:5075/api/Doctors/${id}`)
          .then((response) => {
            setDoctor(response.data);
            console.log(doctor)
            console.log(id)
          })
          .catch((error) => {
            setError(error); // Handle any errors
            console.error('Error fetching data: ', error);
          });
      }, []);
      useEffect(() => {
        if (doctor) {
          axios.get(`http://localhost:5075/api/Departments/${doctor.departmentId}`)
            .then((response) => {
              // Обробляємо відповідь другого запиту
              setDepartment(response.data)
              console.log('Відповідь другого запиту: ', response.data);

            })
            .catch((error) => {
              // Обробляємо будь-які помилки
              setError(error); // Handle any errors
              console.error('Помилка другого запиту: ', error);
            });
        }
      }, [doctor]);
      

    const handleAppointmentClick = () => {
        alert("Функція запису на прийом");
    };

    const handleRate = (rateValue) => {
        setCommentRating(rateValue);
    };

    const handleCommentSubmit = () => {
        if (!commentText.trim()) return;
      
        const newComment = {
            text: commentText,
            name: commenterName.trim() ? commenterName : "Анонім",
            rating: commentRating,
        };
        setComments([...comments, newComment]);
        setCommentText('');
        setCommenterName('');
        setCommentRating(0);
    };

    return (
        <div className='doctor'>
            <HospitalHeader />
            <div key={doctor.id} className='doctor__card'>
                <img src={doctor.image} alt='doctor' className='doctor__img' />
                <div className="doctor__text-container">
                    <div className='doctor__text-container__name'>
                        <span className='doctor__text-container__name__last'>{doctor.name}</span>
                        {/* <span className='doctor__text-container__name__first'>{doctor.name.split(' ')[1]}</span> */}
                    </div>
                    <div className='doctor__text-container__information'>
                        <div><FontAwesomeIcon icon={faStethoscope} style={{ color: "#ff8408", marginRight: "8px" }}/>
                        {doctor.experience}</div>
                        <div><FontAwesomeIcon icon={faLocationDot} style={{ color: "#ff8408", marginRight: "12px" }} />
                        {department.departmentName}</div>
                        <div><FontAwesomeIcon icon={faStar} style={{ color: "#ff8408", marginRight: "8px" }} />
                        {doctor.rating}</div>
                        <div><FontAwesomeIcon icon={faClock} style={{color: "#ff8408", marginRight: "8px"}} />
                        9:00 - 15:00</div>
                    </div>
                    <div className='doctor__text-container__signup'>
                        <button onClick={handleAppointmentClick} className="doctor__text-container__signup__appointment-button">Записатися</button>
                        <button onClick={handleAppointmentClick} className="doctor__text-container__signup__review-button">Залишити відгук</button>
                    </div>
                </div>
            </div>
            <div className='doctor__comment-section'>
                <Rating onRate={handleRate} />
                <textarea 
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Залиште ваш коментар" 
                    className="doctor__comment-section__comment-input"
                ></textarea>
                <button onClick={handleCommentSubmit} className="doctor__comment-section__submit-comment-button">Готово</button>
            </div>
            <div className="doctor__comments-display">
                {comments.map((comment, index) => (
                    <div key={index} className="doctor__comments-display__comment-item">
                        <p><b>{comment.name}</b><FontAwesomeIcon icon={faStar} /> <span> {comment.rating} / 5</span></p>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Doctor;
