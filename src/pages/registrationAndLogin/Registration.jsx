import { Link, useLocation, useNavigate } from 'react-router-dom';
import style from './RegistrationAndLogin.module.css';
import style1 from '../../components/button/Button.module.css'
import { InputName } from '../../components/registrationAndLogin/InputName';
import { InputEmail } from '../../components/registrationAndLogin/InputEmail';
import { InputPassword } from '../../components/registrationAndLogin/InputPassword';
import { CheckBox } from '../../components/checkBox/CheckBox';
import { registrationAndLoginData } from '../../data/registrationAndLoginData';
import { useState, useEffect } from 'react';



export function Registration() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const registrationData = registrationAndLoginData.filter(auth => auth.id === pathname)[0]

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [tosAgree, setTosAGree] = useState(false);
    const [errors, setErrors] = useState([]);
    const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify( users ));

    }, [users, navigate]);


    function registerUser(e) {
        const minUserNameLength = 2;
        const maxUserNameLength = 30;
        const minPasswordLength = 6;
        const maxPasswordLength = 100;

        e.preventDefault();

       const newErrors = [];

        if(name.length < minUserNameLength || name.length > maxUserNameLength) {
            newErrors.push('mistake: userName...');
           
        }

        if(password.length < minPasswordLength || password.length > maxPasswordLength ) {
            newErrors.push('mistake: password...');
            
        }

        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        if(!email.match(validRegex)) {
            newErrors.push('mistake: email...');
           
        }
        if(!tosAgree) {
            newErrors.push('mistake: do not agreed with TOS');
        
        }

        setErrors(newErrors);
        
        if ( !newErrors.length ) {
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
                <CheckBox check={tosAgree} setCheck={setTosAGree}/>
                <button className={style1.button} onClick={registerUser} >{registrationData.button1}</button>
                <p>or</p>
                <Link to='/login' className={style1.button} >{registrationData.button2}</Link>
            </form>
        </div>
    )
}