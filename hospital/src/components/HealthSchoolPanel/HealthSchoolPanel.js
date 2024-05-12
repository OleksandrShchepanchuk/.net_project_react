import React, {useEffect, useState} from "react";
import {Button, Col, Container, Image, Row} from 'react-bootstrap';
import doctorsPhoto from '../../images/doctors.png';
import goToAllNewsIcon from '../../images/go_to_all_news.png';
import goToNewsIcon from '../../images/go_to_news_item.png';
import axiosInstance from '../../api/axios'
import VideoNewsBox from "../VideoNews/VideoNewsBox/VideoNewsBox";


function HealthSchoolPanel() {
    const [healthSchoolNews, setHealthSchoolNews] = useState([]);

    useEffect(() => {
        axiosInstance.get('/Articles')
            .then(response => {
                const lastThreeNews = response.data.$values.slice(-2);
                setHealthSchoolNews(lastThreeNews);
            })
            .catch(error => {
                console.error('Error fetching health school news:', error);
            });
    }, []);
    return <>
        <Col className='col-10'>
            <h5 className='fw-bolder primary-green ps-4'>Школа здоров'я</h5>

            <Row className='pt-4 column-gap-lg-5'>
                {healthSchoolNews !== null &&  healthSchoolNews.map((item, index) => (
                    <VideoNewsBox key={index} title={item.title} image={item.image} page={'news'} />
                ))}
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


// function HealthSchoolNewsItem(props) {
//     return <>
//         <Container className="p-4 border-0 border shadow rounded-5">
//             <Image src={props.image} fluid className="w-100"/>
//             <Container className="pb-3 position-relative ps-0">
//                 <p className="mt-2 fs-5 fw-bolder primary-green w-75 pb-0 mb-0">{props.title}</p>
//
//                 <Button className={'round-button position-absolute end-0 bottom-0 p-0'}>
//                     <Image className='' src={goToNewsIcon} alt="Go to news" fluid/>
//                 </Button>
//             </Container>
//         </Container>
//     </>
// }

export default HealthSchoolPanel;
