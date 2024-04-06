import React from 'react';
import './App.css';
import HospitalHeader from './Header';
import doctorsPhoto from './images/doctors.png';
import contactIcon from './images/contacts.png';
import newsIcon from './images/news.png';
import departmentsIcon from './images/departments.png';
import healthSchoolIcon from './images/health_school.png';
import goToNewsIcon from './images/go_to_news_item.png';
import goToAllNewsIcon from './images/go_to_all_news.png';

import {Button, Col, Container, Image, Navbar, NavbarText, Row} from 'react-bootstrap';
import {VerticalDivider, VerticalSpacer} from "./SpacingElements";
import ApplicationPaths from "./paths";
import {Link} from "react-router-dom";

const BigActionButtons = [
    {text: 'Новини', image_src: newsIcon, nav_target: ApplicationPaths.RootPath},
    {text: 'Контакти', image_src: contactIcon, nav_target: ApplicationPaths.RootPath},
    {text: 'Відділення та лікарі', image_src: departmentsIcon, nav_target: ApplicationPaths.DepartmentsPage},
    {text: 'Школа здоров\'я', image_src: healthSchoolIcon, nav_target: ApplicationPaths.RootPath},]

function App() {
    return (<div className="App">
        <header className='pt-4 green-background'>
            <HospitalHeader/>
        </header>

        <Row className='p-4 me-0 ms-0 green-background'>
            <VerticalSpacer height='2rem'/>
            <MottoMenu/>
            <VerticalSpacer height='4rem'/>
        </Row>

        <Row className='column-gap-0 m-0 p-0 bg-white'>
            <BigTileMainMenu/>
        </Row>

        <Row className='p-4 me-0 ms-0'>
            <AboutUsPanel/>
        </Row>

        <Row className='p-4 me-0 ms-0'>
            <HealthSchoolPanel/>
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
                    <a className='col-4 me-4' href='https://helsi.me'>
                        <button className='my-button w-100 primary'>Записатись на прийом</button>
                    </a>
                    <button className='my-button col-4'>Інструкція запису</button>
                </div>
            </Row>
        </Col>
    </>
}

function BigTileMainMenu() {
    return <>
        {BigActionButtons.map((button, index, arr) => (
            <Col className='col-3 p-0 m-0' key={index}>
                <BigActionButton text={button.text}
                                 image_src={button.image_src}
                                 nav_target={button.nav_target}
                                 isLast={index === arr.length - 1}/>
            </Col>))}
    </>
}

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

function HealthSchoolPanel() {
    const healthSchoolNews = [null, null, null] // I'm going to be not very sane here
    return <>
        <Col className='col-10'>
            <h5 className='fw-bolder primary-green ps-4'>Школа здоров'я</h5>

            <Row className='pt-4 column-gap-lg-5'>
                {healthSchoolNews.map((item, index, arr) => {
                    return <Col className='col-4 col-lg-3' key={index}>
                        <HealthSchoolNewsItem image={doctorsPhoto}
                                              title='Тут буде якась дуже цікава новина про
                                                  щось дуже цікаве'/>
                    </Col>
                })}
            </Row>
        </Col>
        <Col className='col-2 my-auto'>
            <div className='d-flex justify-content-center'>
                <Button className={'round-button p-0 mx-auto justify-content-center'}>
                    <Image className='' src={goToAllNewsIcon} alt="Go to news" fluid/>
                </Button>
            </div>
        </Col>
    </>
}


function BigActionButton(props) {
    return <>
        <div className='d-flex m-0 w-100 h-100'>
            <div className='justify-content-center m-0 w-100 h-100'>
                <Link to={props.nav_target} className='p-0'>
                    <button className={'py-4 w-100 border-0 h-100 bg-transparent'}>
                        <Image className='action-tile-image ' src={props.image_src} alt={props.text} fluid/>

                        <div style={{height: '0.4rem'}}></div>

                        <span className='fw-bolder primary-green'>{props.text}</span>
                    </button>
                </Link>
            </div>
            {props.isLast ? '' : <VerticalDivider/>}
        </div>
    </>
}

function HealthSchoolNewsItem(props) {
    return <>
        <Container className="p-4 border-0 border shadow rounded-5">
            <Image src={props.image} fluid className="w-100"/>
            <Container className="pb-3 position-relative ps-0">
                <p className="mt-2 fs-5 fw-bolder primary-green w-75 pb-0 mb-0">{props.title}</p>

                <Button className={'round-button position-absolute end-0 bottom-0 p-0'}>
                    <Image className='' src={goToNewsIcon} alt="Go to news" fluid/>
                </Button>
            </Container>
        </Container>
    </>
}


export default App;
