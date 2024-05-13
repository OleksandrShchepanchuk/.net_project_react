import React, {useContext} from 'react';
import './LoginPage.scss'
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import AxiosInstance from "../../api/axios";
import {useNavigate} from "react-router-dom";
import AuthenticationContext from '../../context/AuthenticationContext';

const LoginBox = (props) =>{
    const [login, setLogin] = useState(true);
    const [user, setUser] = useState({ username: '', email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { isAuthenticated,  setIsAuthenticated} = useContext(AuthenticationContext);
    const {isAdmin, setIsAdmin}= useContext(AuthenticationContext);
    const navigate = useNavigate();

    
    const toggleLogin = (login) => {
        setLogin(login);
    };
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const handleSubmitLogin = async (event) =>{
        event.preventDefault();
        const trimmedUsername = user.username.trim();
        const trimmedPassword = user.password.trim();
        try {
            const tokenResponse = await AxiosInstance.post('/Login', { username: trimmedUsername,  password: trimmedPassword });
            setIsAuthenticated(true);
            setIsAdmin(true);
            localStorage.setItem('token', tokenResponse.data);
            AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data}`;
            navigate(-1);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmitRegister = async (event) =>{
        event.preventDefault();
        const trimmedUsername = user.username.trim();
        const trimmedEmail = user.email.trim();
        const trimmedPassword = user.password.trim();

        if (!trimmedUsername || !trimmedEmail || !trimmedPassword) {
            alert("Будь ласка, заповніть усі обов'язкові поля");
            return;
        }

        if(/\s/.test(trimmedUsername)){
            alert("Будь ласка, введіть ім'я без пробілів");
            return;
        }
        if(/\s/.test(trimmedPassword)){
            alert("Будь ласка, введіть пароль без пробілів");
            return;
        }
        try {
            const response = await AxiosInstance.post('/Users', { username: trimmedUsername, email: trimmedEmail, password: trimmedPassword });
        } catch (error) {
            if (error.response.status === 409) {
                const errorMessageFromBackend = error.response.data;
                console.log(errorMessageFromBackend);
                if (errorMessageFromBackend === 'Username already exists.') {
                    alert("Таке ім'я користувача вже використане іншим користувачем. Будь ласка, спробуйте ще раз");
                } else if (errorMessageFromBackend === 'Email already exists.') {
                    alert("Така електронна адреса вже використана іншим користувачем. Будь ласка, спробуйте ще раз");
                }
                else if (errorMessageFromBackend === 'Incorrect email') {
                    alert('Ви некоректно ввели електронну пошту. Будь ласка, спробуйте ще раз');
                } else{
                    alert(errorMessageFromBackend);
                }

            }
        }
    };



    return (
                <div className={'box_container'}>
                    <div className={'login__switch-buttons'}>
                        <button className={'login__login_button'} onClick={() => toggleLogin(true)} style={{ backgroundColor: login ? 'white' : '#0D6240', color: login ? 'black' : 'white' }}>
                            Увійти
                        </button>
                        <button className={'login__register_button'}  onClick={() => toggleLogin(false)} style={{ backgroundColor: login ? '#0D6240' : 'white', color: login ? 'white' : 'black' }}>
                            Зареєструватися
                        </button>
                    </div>
                    <div className={'login__box-main'}>
                        <form className={'login__box-main-form'} >
                            <div>
                                <input type='text' name='username' value={user.username} onChange={handleChange} placeholder={'Ім\'я користувача'} required />
                            </div>
                            <div style={{ display: login ? 'none' : 'flex' }}>
                                <label></label>
                                <input type='text' name='email' value={user.email} onChange={handleChange} placeholder={" Електронна адреса"} required />
                            </div>
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0' }}>
                                    <input type={showPassword ? 'text' : 'password'} style={{ width: '275px' }} name='password' value={user.password} onChange={handleChange} placeholder={'Пароль'} required />
                                    <span style={{ marginLeft: '3px' }} onClick={toggleShowPassword}> {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</span>
                                </div>
                            </div>
                            <button style={{ display: login ? 'inline-block' : 'none' }} type='submit' onClick={handleSubmitLogin}>
                                Увійти
                            </button>
                            <button style={{ display: login ? 'none' : 'inline-block' }} type='submit' onClick={handleSubmitRegister}>
                                Зареєструватися
                            </button>
                        </form>
                    </div>
                </div>
    );
}

export default  LoginBox;
