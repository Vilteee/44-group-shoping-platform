import style from './RegistrationAndLogin.module.css';
import style1 from '../button/Button.module.css';
import { InputName } from './InputName';
import { InputEmail } from './InputEmail';
import { InputPassword } from './InputPassword';
import { CheckBox } from '../checkBox/CheckBox';



export function Registration({RegistrationAndLoginTemplateData:{titleOfPage, button1, button2}}) {

    return (
        <div className={style.registrationAndLogin}>
            <div className={style.title}>
            <h2 >{titleOfPage}</h2>

            </div>
            <form className={style.form}>
                <InputName />
                <InputEmail />
                <InputPassword />
                <CheckBox />
                <button type='submit' className={style1.button} >{button1}</button>
                <p>or</p>
                <button type='submit' className={style1.button} >{button2}</button>
            </form>
        </div>
    )
}