import React from "react";
import { Col, Image, Row} from 'react-bootstrap';
import doctorsPhoto from '../../images/doctors.png';

function MottoMenu() {
    return <>
        <Col className='col-4'>
            <div id='rounding-box' className='rounded-5'>
                <Image src={doctorsPhoto} alt="Doctors" className='rounded-5' fluid/>
            </div>
        </Col>
        <Col className='col-8 front-page-motto-buttons'>
            <Row className='h-100'>
                <h2 className='text-center primary-text w-75 mx-auto my-auto front-page-motto'>
                    Обирайте нас для себе та своєї родини тому що ми найкращі
                </h2>
            </Row>
            <Row>
                <div className='d-flex justify-content-center front-page-buttons'>
                    <a className='col-4 me-4' href='https://helsi.me'>
                        <button className='my-button w-100 primary'>Записатись на прийом</button>
                    </a>
                    <button className='my-button col-4' onClick={()=>{ window.location.href='https://reform.helsi.me/instructions'}}>Інструкція запису</button>
                </div>
            </Row>
        </Col>
    </>
}

export default MottoMenu;