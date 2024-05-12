import React from "react";
import {Col, Image} from 'react-bootstrap';
import contactIcon from '../../images/contacts.png';
import newsIcon from '../../images/news.png';
import departmentsIcon from '../../images/departments.png';
import healthSchoolIcon from '../../images/health_school.png';
import ApplicationPaths from "../app/paths";
import {VerticalDivider} from "../SpacingElements/SpacingElements";
import {Link} from "react-router-dom";

const BigActionButtons = [
    {text: 'Новини', image_src: newsIcon, nav_target: ApplicationPaths.NewsPage},
    {text: 'Контакти', image_src: contactIcon, nav_target: ApplicationPaths.RootPath},
    {text: 'Відділення та лікарі', image_src: departmentsIcon, nav_target: ApplicationPaths.DepartmentsPage},
    {text: 'Школа здоров\'я', image_src: healthSchoolIcon, nav_target: ApplicationPaths.VideoPage},]


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

export default BigTileMainMenu;