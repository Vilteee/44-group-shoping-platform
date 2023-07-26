import { Link, useParams } from 'react-router-dom';
import style from './RegistrationAndLogin.module.css';
import style1 from '../button/Button.module.css';
import { InputName } from '../../components/registrationAndLogin/InputName';
import { InputEmail } from '../../components/registrationAndLogin/InputEmail';
import { InputPassword } from '../../components/registrationAndLogin/InputPassword';
import { CheckBox } from '../../components/checkBox/CheckBox';
import { registrationAndLoginData } from '../../data/registrationAndLoginData';



export function Registration() {
    const { registration } = useParams();
    const registrationData = registrationAndLoginData.filter(auth => auth.id === registration )[0]

    return (
        <div className={style.registrationAndLogin}>
            <div className={style.title}>
            <h2 >{registrationData.titleOfPage}</h2>
            </div>
            <form className={style.form}>
                <InputName />
                <InputEmail />
                <InputPassword />
                <CheckBox />
                <Link to='/login' className={style1.button} >{registrationData.button1}</Link>
                <p>or</p>
                <Link to='/login' className={style1.button} >{registrationData.button2}</Link>
            </form>
        </div>
    )
    
}