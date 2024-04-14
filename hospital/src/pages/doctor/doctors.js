import React, { useState } from 'react';
import './doctor-module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css'; 
import { faLocationDot, faStethoscope, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import Rating from '../../components/Rating/Rating';

export function Doctor({ id, name, specialty, location, ratings, image, time }) {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [commenterName, setCommenterName] = useState('');
    const [commentRating, setCommentRating] = useState(0);

    const handleAppointmentClick = () => {
        alert("Функція запису на прийом");
    };

    const nameParts = name.split(' ');
    const lastName = nameParts[0];
    const firstNameAndPatronymic = nameParts.slice(1).join(' ');

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
            <div key={id} className='doctor__card'>
                <img src={image} alt='doctor' className='doctor__img' />
                <div className="doctor__text-container">
                    <div className='doctor__text-container__name'>
                        <span className='doctor__text-container__name__last'>{lastName}</span>{}
                        <span className='doctor__text-container__name__first'>{firstNameAndPatronymic}</span>{}
                    </div>
                    <div className='doctor__text-container__information'>
                        <div className='doctor__text-container__information__specialty'>
                        <FontAwesomeIcon icon={faStethoscope} style={{ color: "#ff8408", marginRight: "8px" }}/>
                            {specialty}
                        </div>
                        <div className='doctor__text-container__information__location'>
                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "#ff8408", marginRight: "12px" }} />
                            {location}
                        </div>
                        <div className='doctor__text-container__information__ratings'>
                        <FontAwesomeIcon icon={faStar} style={{ color: "#ff8408", marginRight: "8px" }} />
                            {ratings}
                        </div>
                        <div className='doctor__text-container__information__work-hours'>
                        <FontAwesomeIcon icon={faClock} style={{color: "#ff8408", marginRight: "8px"}} />
                            {time}
                        </div>
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
