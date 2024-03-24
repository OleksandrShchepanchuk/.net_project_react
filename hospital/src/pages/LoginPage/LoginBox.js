import './LoginPage.scss'
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const LoginBox = () =>{
    const [login, setLogin] = useState(false);
    const [email,setEmail]= useState('');
    const [password, setPassword]=useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const toggleLogin = () => {
        setLogin(!login);
        console.log(login)
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }
    const handleNameChange = (event) =>{
        setName(event.target.value);
    }
    const handleSurnameChange = (event) =>{
        setSurname(event.target.value);
    }

    return(
        <div className={'box_container'}>
            <div className={'login__switch-buttons'}>
                <button className={'login__login_button'} onClick={toggleLogin} style={{ backgroundColor: login ? '#0D6240' : 'white' , color : login ? 'white' : 'black'}}>
                    Увійти
                </button>
                <button className={'login__register_button'} onClick={toggleLogin} style={{ backgroundColor: login ?   'white' :'#0D6240' , color : login ?  'black' : 'white' }}>
                    Зареєструватися
                </button>
            </div>
            <div className={'login__box-main'}>
                <form>
                    <div style={{display: login ? 'none':'flex'}}>
                        {/*<label>Ім'я: </label>*/}
                        <input type={'text'} value={name} onChange={handleNameChange} placeholder={'Ім\'я'} required/>
                    </div>
                    <div style={{display: login ? 'none':'flex'}}>
                        {/*<label>Прізвище: </label>*/}
                        <input type={'text'} value={surname} onChange={handleSurnameChange} placeholder={'Прізвище'} required/>
                    </div>
                    <div>
                        <label> </label>
                        <input type={'text'} value={email} onChange={handleEmailChange} placeholder={" Електронна адреса"}   required/>
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin:'0' }}>
                            <input type={showPassword ? 'text' : 'password'}  style={{width:'275px'}} value={password} onChange={handlePasswordChange}  placeholder={'Пароль'} required></input>
                            <span style={{marginLeft:'3px'}} onClick={toggleShowPassword}> {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</span>
                        </div>

                    </div>
                    <button  style={{display: login ? 'inline-block':'none'}} type='submit'>
                        Увійти
                    </button>
                    <button  style={{display: login ? 'none':'inline-block'}} type='submit'>
                        Зареєструватися
                    </button>

                </form>

            </div>
        </div>

    );
}

export default  LoginBox;
