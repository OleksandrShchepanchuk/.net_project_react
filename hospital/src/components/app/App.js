import React from 'react';
import './App.css';
import HospitalHeader from './Header';
import doctorsPhoto from './images/doctors.png';
import contactIcon from './images/contacts.png';
import newsIcon from './images/news.png';
import departmentsIcon from './images/departments.png';
import healthSchoolIcon from './images/health_school.png';

import {Col, Image, Navbar, NavbarText, Row} from 'react-bootstrap';
import {VerticalDivider, VerticalSpacer} from "./SpacingElements";

const BigActionButtons = [{text: 'Новини', image_src: newsIcon}, {
    text: 'Контакти',
    image_src: contactIcon
}, {text: 'Відділення та лікарі', image_src: departmentsIcon}, {text: 'Школа здоров\'я', image_src: healthSchoolIcon},]

function App() {
    return (<div className="App">
        <header className='pt-4'>
            <HospitalHeader/>
        </header>

        <Row className='p-4 me-0 ms-0'>
            <VerticalSpacer height='2rem'/>
            <MottoMenu/>
            <VerticalSpacer height='4rem'/>
        </Row>

        <Row className='column-gap-0 m-0 p-0 bg-white'>
            <BigTileMainMenu/>
        </Row>

        {/*<div className="GridContainer">*/}
        {/*    <div className="Photo"><img src={doctorsPhoto} alt="Doctors"/></div>*/}
        {/*    <div className="Buttons">*/}
        {/*        <button>Записатись на прийом</button>*/}
        {/*        <button>Інструкція запису</button>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>);
}

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
                    <button className='my-button primary col-4'>Записатись на прийом</button>
                    <button className='my-button col-4'>Інструкція запису</button>
                </div>
            </Row>
        </Col>
    </>
}

function BigTileMainMenu() {
    return <>
        {BigActionButtons.map((button, index, arr) => (
            <Col className='col-3 p-0 m-0'>
                <BigActionButton text={button.text} image_src={button.image_src}
                                 isLast={index === arr.length - 1}/>
            </Col>))}
    </>
}


function BigActionButton(props) {
    return <>
        <div className='d-flex m-0 w-100 h-100'>
            <div className='justify-content-center m-0 w-100 h-100'>
                <button className={'py-4 w-100 border-0 h-100 bg-transparent'}>
                    <Image className='action-tile-image ' src={props.image_src} alt={props.text} fluid/>

                    <div style={{height: '0.4rem'}}></div>

                    <span className='fw-bolder primary-green'>{props.text}</span>
                </button>
            </div>
            {props.isLast ? '' : <VerticalDivider/>}
        </div>
    </>
}


export default App;
