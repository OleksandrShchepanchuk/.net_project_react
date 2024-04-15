import React from "react";
import { Col, Image} from 'react-bootstrap';
import doctorsPhoto from '../../images/doctors.png';

function AboutUsPanel() {
    return <>
        <Col className='col-6'>
            <h5 className='fw-bolder primary-green ps-4'>Про нас</h5>

            <p className='primary-green p-5'>КНП "Мостиська міська лікарня" - це заклад, який забезпечує надання
                медичної допомоги населенню
                міста Мостиська та прилеглих сіл. Наша місія - надавати якісну медичну допомогу населенню міста
                Мостиська та прилеглих сіл.</p>
        </Col>
        <Col className='col-6'>
            <Image src={doctorsPhoto} alt="Doctors" fluid/>
        </Col>
    </>
}

export default AboutUsPanel;