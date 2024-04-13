import {useState, React} from "react";
import "./DepartmentItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const DepartmentItem = (props) => {
  const { name, address, phone, img, doctors } = props;
  const [showDoctors, setShowDoctors] = useState(false); 

  return (
    <div className="container">
      <div className="dep-item">
        <div className="dep-item-text-container">
          <h2 className="dep-item-text-title">{name}</h2>
          <p className="dep-item-text">
            {" "}
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#ff8408" }}
            />
            {address}
          </p>
          <p className="dep-item-text">
            {" "}
            <FontAwesomeIcon
              icon={faPhoneVolume}
              style={{ color: "#ff8408" }}
            />
            {phone}
          </p>
          <button className="dep-item-text-btn" onClick={() => setShowDoctors(!showDoctors)}>{showDoctors ? 'Закрити список лікарів' : 'Список лікарів'}</button>
        </div>
        <img className="dep-item-img" src={img} />
      </div>
      {showDoctors && (
        <div className="dep-item-doctors">
          {doctors.map((doctor) => (
            <div className="dep-item-doc" key={doctor.prodId}>
              <div>
                <h3 className="dep-item-doc-name">{doctor.name}</h3>
                <p className="dep-item-doc-rating">
                  {" "}
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ff8408" }} />
                  Рейтинг: {doctor.rating}/5
                </p>
              </div>
              <img src={doctor.image} className="dep-item-doc-img" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DepartmentItem;
