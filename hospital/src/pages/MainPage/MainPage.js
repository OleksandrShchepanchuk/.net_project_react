import React from 'react';
import './MainPage.css';
import HospitalHeader from '../../components/Header/Header';
import MottoMenu from '../../components/MottoMenu/MottoMenu';
import BigTileMainMenu from '../../components/BigTileMainMenu/BigTaleMainMenu';
import HealthSchoolPanel from '../../components/HealthSchoolPanel/HealthSchoolPanel';
import AboutUsPanel from '../../components/AboutUsPanel/AboutUsPanel';

import {Row} from 'react-bootstrap';
import {VerticalSpacer} from "../../components/SpacingElements/SpacingElements";

function MainPage() {
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

    </div>);
}

export default MainPage;