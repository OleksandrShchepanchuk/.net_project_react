import React from "react";
import {Button, Col, Container, Image, Row} from 'react-bootstrap';
import doctorsPhoto from '../../images/doctors.png';
import goToAllNewsIcon from '../../images/go_to_all_news.png';
import goToNewsIcon from '../../images/go_to_news_item.png';


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

export default (HealthSchoolNewsItem, HealthSchoolPanel);
