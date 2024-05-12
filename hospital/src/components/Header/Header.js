import React from "react";
import {Navbar, NavbarText} from "react-bootstrap";

function HospitalHeader() {
    return <>
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Navbar expand="md" sticky="top" className="primary primary-floating rounded-pill px-3 mx-4 me-4">
                <Navbar.Brand>
                    <NavbarText className='text-white ms-2'>
                        КНП "Мостиська міська лікарня"
                    </NavbarText>
                </Navbar.Brand>
                <Navbar.Collapse className='justify-content-end '>
                    <div className="RightContent me-3">м.Мостиська, вул. Я.Мудрого, 111</div>
                    <div className="OrangePart rounded-pill px-3">+38 091 234 56 78</div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </>
}

export default HospitalHeader;