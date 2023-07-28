import { Link, useLocation } from 'react-router-dom';
import style from './RegistrationAndLogin.module.css';
import style1 from '../../components/button/Button.module.css'
import { InputName } from '../../components/registrationAndLogin/InputName';
import { InputEmail } from '../../components/registrationAndLogin/InputEmail';
import { InputPassword } from '../../components/registrationAndLogin/InputPassword';
import { CheckBox } from '../../components/checkBox/CheckBox';
import { registrationAndLoginData } from '../../data/registrationAndLoginData';
import { useState, useEffect } from 'react';



export function Registration() {

    const { pathname } = useLocation();
    const registrationData = registrationAndLoginData.filter(auth => auth.id === pathname)[0]

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);
    const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify( users ));
    }, [users]);


    function registerUser(e) {
        const minUserNameLength = 2;
        const maxUserNameLength = 30;
        const minPasswordLength = 6;
        const maxPasswordLength = 100;
        const minEmailLength = 6;
        const maxEmailLength = 100;

        e.preventDefault();


       const newErrors = [];

        if(name.length < minUserNameLength || name.length > maxUserNameLength) {
            newErrors.push('klaida: userName...');
           
        }

        if(password.length < minPasswordLength || password.length > maxPasswordLength ) {
            newErrors.push('klaida: password...');
            
        }

        if(email.length < minEmailLength || email.length > maxEmailLength ) {
            newErrors.push('klaida: email...');
           
        }

        setErrors(newErrors);

        if ( !errors.length ) {
            setUsers(( prev ) => [ ...prev, { name, password, email }]);
        }
    }

    return (
        <div className={style.registrationAndLogin}>
            <div className={style.title}>
                <h2 >{registrationData.titleOfPage}</h2>
            </div>
            <div className={`${style.error} ${errors.length ? style.show : ''}`}>
                {errors.map(err => <p>{err}</p>)}
            </div>
            <form className={style.form}>
                <InputName name={name} setName={setName}/>
                <InputEmail email={email} setEmail={setEmail}/>
                <InputPassword password={password} setPassword={setPassword} />
                <CheckBox />
                <Link to='/login' className={style1.button} onClick={registerUser} >{registrationData.button1}</Link>
                <p>or</p>
                <Link to='/login' className={style1.button} >{registrationData.button2}</Link>
            </form>
        </div>
    )
}