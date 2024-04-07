import './LoginPage.scss'
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import AxiosInstance from "../../api/axios";


const LoginBox = () =>{
    const [login, setLogin] = useState(true);
    const [user, setUser] = useState({ username: '', email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


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
        const trimmedEmail = user.email.trim();
        const trimmedPassword = user.password.trim();
        try {
            console.log( user.username,  user.password );
            const tokenResponse = await AxiosInstance.post('/Login', { username: trimmedUsername, email: trimmedEmail, password: trimmedPassword });
            localStorage.setItem('token', tokenResponse.data.token);
            console.log('Login successful', tokenResponse.data);
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    const handleSubmitRegister = async (event) =>{
        event.preventDefault();
        const trimmedUsername = user.username.trim();
        const trimmedEmail = user.email.trim();
        const trimmedPassword = user.password.trim();

        if (!trimmedUsername || !trimmedEmail || !trimmedPassword) {
            setErrorMessage('Please fill in all required fields');
            return;
        }

        try {
            const response = await AxiosInstance.post('/Users', { username: trimmedUsername, email: trimmedEmail, password: trimmedPassword });
            console.log('Login successful', response.data);
        } catch (error) {
            console.log(error.response.data.message);
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
