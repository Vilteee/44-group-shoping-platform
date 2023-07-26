import { Link, useLocation } from 'react-router-dom';
import style from './RegistrationAndLogin.module.css';
import style1 from '../../components/button/Button.module.css'
import { InputEmail } from '../../components/registrationAndLogin/InputEmail';
import { InputPassword } from '../../components/registrationAndLogin/InputPassword';
import { registrationAndLoginData } from '../../data/registrationAndLoginData';



export function Login() {
    const { pathname } = useLocation();
    const loginData = registrationAndLoginData.filter(auth => auth.id === pathname)[0];

    return (
        <div className={style.registrationAndLogin}>
            <h2>{loginData.titleOfPage}</h2>
            <form className={style.form}>
                <InputEmail />
                <InputPassword />    
                <Link to='/account' className={style1.button} >{loginData.button1}</Link>
                <p>or</p>
                <Link to='/registration' className={style1.button} >{loginData.button2}</Link>
            </form>
        </div>
    )
}

