import { Link, useLocation, useNavigate } from 'react-router-dom';
import style from './RegistrationAndLogin.module.css';
import style1 from '../../components/button/Button.module.css'
import { InputEmail } from '../../components/registrationAndLogin/InputEmail';
import { InputPassword } from '../../components/registrationAndLogin/InputPassword';
import { registrationAndLoginData } from '../../data/registrationAndLoginData';
import { useState } from 'react';



export function Login() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const loginData = registrationAndLoginData.filter(auth => auth.id === pathname)[0];
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    
    const handleClick = (e) => {
        e.preventDefault();
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(password.length > 5 && email.match(validRegex)){
            const users = JSON.parse(localStorage.getItem('users'));
            const filteredUsers = users.filter(user => user.email === email && user.password === password)
            if(filteredUsers.length !== 0){
                localStorage.setItem('token', JSON.stringify("validToken"));
                navigate('/account')
            } else {
                setError("Incorrect email or password");
            }
        } else {
            setError("Incorrect email or password");
        }
    }

    return (
        <div className={style.registrationAndLogin}>
            <h2>{loginData.titleOfPage}</h2>
            <div className={`${style.error} ${error !== '' ? style.show : ''}`}>
                {<p>{error}</p>}
            </div>
            <form className={style.form}>
                <InputEmail email={email} setEmail={setEmail} />
                <InputPassword password={password} setPassword={setPassword} /> 
                <button className={style1.button} onClick={handleClick}>{loginData.button1}</button>
                <p>or</p>
                <Link to='/registration' className={style1.button} >{loginData.button2}</Link>
            </form>
        </div>
    )
}

