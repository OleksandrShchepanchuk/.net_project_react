import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./RatingStyles.scss";

const Rate = ({ onRate }) => {
  const [rate, setRate] = useState(0);
  
  const handleClick = (rating) => {
    setRate(rating);
    onRate(rating);
  };

  return (
    <div className="rating">
      <span>Оцінка:</span>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label key={index} className="rating__label">
            <input
              className="rating__radio"
              type="radio"
              value={givenRating}
              checked={givenRating === rate}
              onChange={() => handleClick(givenRating)}
            />
            <div className="rating__star">
              <FaStar color={givenRating <= rate ? "#ffc107" : "rgb(192,192,192)"} />
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default Rate;
