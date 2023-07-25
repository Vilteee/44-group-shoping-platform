import style from './RegistrationAndLogin.module.css';
import style1 from '../button/Button.module.css';
import { InputEmail } from './InputEmail';
import { InputPassword } from './InputPassword';




export function Login({RegistrationAndLoginTemplateData:{titleOfPage, button1, button2}}) {

    return (
        <div className={style.registrationAndLogin}>
            <h2>{titleOfPage}</h2>
            <form className={style.form}>
                <InputEmail />
                <InputPassword />
                
                <button type='submit' className={style1.button} id='button1'>{button1}</button>
                <p>or</p>
                <button type='submit' className={style1.button}>{button2}</button>
            </form>
        </div>
    )
}