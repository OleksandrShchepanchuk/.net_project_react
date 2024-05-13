import React from 'react';
import './LoginPage.scss'
import LoginBox from './LoginBox'

const LoginPage = (props) =>{

    return(
        <div className={'page_container'}>
            <LoginBox setIsAuthenticated={props.setIsAuthenticated} setIsAdmin={props.setIsAdmin}></LoginBox>
        </div>

    );
}

export default  LoginPage;
