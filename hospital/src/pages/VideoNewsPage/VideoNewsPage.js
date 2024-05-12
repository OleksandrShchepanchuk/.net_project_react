import React, {useContext, useEffect, useState} from 'react';
import "./VideoNewsPage.scss"
import AxiosInstance from "../../api/axios";
import Header from "../../components/Header/Header";
import VideoNewsBox from "../../components/VideoNews/VideoNewsBox/VideoNewsBox";
import AuthenticationContext from '../../context/AuthenticationContext';

const VideoNewsPage = (props) => {
    const [data, setData] = useState(null);
    const IsItVideoOrNews = props.isItVideoOrNewsProp;
    const { isAuthenticated,  setIsAuthenticated} = useContext(AuthenticationContext);
    const {isAdmin, setIsAdmin}= useContext(AuthenticationContext);
    const getData = async () =>{
        let url = '';
        if (IsItVideoOrNews === 'video') {
            url = '/Videos';
        } else if (IsItVideoOrNews === 'news') {
            url = '/Articles';
        }
        await AxiosInstance.get(url)
            .then(response => {
                setData(response.data);
            })

    }

    useEffect(() => {
        getData();
    }, []);

    return (
                <div className={"page"}>
                    <div className={"page__header"}>
                        {IsItVideoOrNews === 'video' ? (
                            <p className={"page__header__text"}>Школа здоров'я</p>
                        ) : (
                            <p className={"page__header__text"}>Новини</p>
                        )}
                        {isAuthenticated && isAdmin && (
                                <button className={"page__header__addbutton"} >
                                    +
                                </button>
                        )}
                    </div>
                    <div className={"page__list"}>
                        {data !== null && data.$values.map((item, index) => (
                            <VideoNewsBox key={index} title={item.title} image={item.image} page={IsItVideoOrNews}/>
                        ))}
                    </div>
                </div>
    );
};

export default VideoNewsPage;