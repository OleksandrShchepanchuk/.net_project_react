import React, {useContext, useEffect, useState} from 'react';
import profilePhoto from '../../../images/doctors.png'
import videobutton from '../../../images/VideoBoxButtons/VideoButton.png'
import newsbutton from '../../../images/VideoBoxButtons/NewsButton.png'

import './VideoNewsBox.scss'
import AuthenticationContext from "../../../context/AuthenticationContext";

const VideoNewsBox = (props) =>{

    const buttonImage = props.page === 'video'
        ? videobutton
        : newsbutton;
    const buttonClick = () =>{
        if (props.page==="video"){
            window.location.href="https://www.youtube.com/watch?v=0kQ8i2FpRDk";
        }else{
            console.log("Hello world!");
        }

    }
    let maxLength=60;
    const truncatedTitle = props.title.length > maxLength ? props.title.substring(0, maxLength) + '...' : props.title;



    return(
        <div className={"box__container"}>
            <div className={"box__image"}>
                <img src={profilePhoto}/>
            </div>
            <div className={'box__title_and_button'}>
                <div className={"box__title"}>
                    <h1 className={"box__title__text"}>{truncatedTitle}</h1>
                </div>
                <div className={"box__button"}>
                    <img className={"box__button__img"} src={buttonImage} onClick={buttonClick}/>
                </div>
            </div>


        </div>

    );
}

export default VideoNewsBox;