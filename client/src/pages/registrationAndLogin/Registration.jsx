// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import style from './RegistrationAndLogin.module.css';
// import style1 from '../../components/button/Button.module.css'
// import { InputName } from '../../components/registrationAndLogin/InputName';
// import { InputEmail } from '../../components/registrationAndLogin/InputEmail';
// import { InputPassword } from '../../components/registrationAndLogin/InputPassword';
// import { CheckBox } from '../../components/checkBox/CheckBox';
// import { registrationAndLoginData } from '../../data/registrationAndLoginData';
// import { useState, useEffect } from 'react';



// export function Registration() {
//     const navigate = useNavigate();
//     const { pathname } = useLocation();
//     const registrationData = registrationAndLoginData.filter(auth => auth.id === pathname)[0]

//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const [tosAgree, setTosAGree] = useState(false);
//     const [errors, setErrors] = useState([]);
//     const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);

//     useEffect(() => {
//         localStorage.setItem('users', JSON.stringify( users ));

//     }, [users, navigate]);


//     function registerUser(e) {
//         const minUserNameLength = 2;
//         const maxUserNameLength = 30;
//         const minPasswordLength = 6;
//         const maxPasswordLength = 100;

//         e.preventDefault();

//        const newErrors = [];

//         if(name.length < minUserNameLength || name.length > maxUserNameLength) {
//             newErrors.push('mistake: userName...');
           
//         }

//         if(password.length < minPasswordLength || password.length > maxPasswordLength ) {
//             newErrors.push('mistake: password...');
            
//         }

//         let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
//         if(!email.match(validRegex)) {
//             newErrors.push('mistake: email...');
           
//         }
//         if(!tosAgree) {
//             newErrors.push('mistake: do not agreed with TOS');
        
//         }

//         setErrors(newErrors);
        
//         if ( !newErrors.length ) {
//             setUsers(( prev ) => [ ...prev, { name, password, email }]);
//         }
//     }

//     return (
//         <div className={style.registrationAndLogin}>
//             <div className={style.title}>
//                 <h2 >{registrationData.titleOfPage}</h2>
//             </div>
//             <div className={`${style.error} ${errors.length ? style.show : ''}`}>
//                 {errors.map(err => <p>{err}</p>)}
//             </div>
//             <form className={style.form}>
//                 <InputName name={name} setName={setName}/>
//                 <InputEmail email={email} setEmail={setEmail}/>
//                 <InputPassword password={password} setPassword={setPassword} />
//                 <CheckBox check={tosAgree} setCheck={setTosAGree}/>
//                 <button className={style1.button} onClick={registerUser} type='submit' >{registrationData.button1}</button>
//                 <p>or</p>
//                 <Link to='/login' className={style1.button} >{registrationData.button2}</Link>
//             </form>
//         </div>
//     )
// }


import { Link, useNavigate } from 'react-router-dom';
import style from './RegistrationAndLogin.module.css';
import style1 from '../../components/button/Button.module.css'
import { InputName } from '../../components/registrationAndLogin/InputName';
import { InputEmail } from '../../components/registrationAndLogin/InputEmail';
import { InputPassword } from '../../components/registrationAndLogin/InputPassword';
import { CheckBox } from '../../components/checkBox/CheckBox';
import { useState } from 'react';



export function Registration() {
    
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [nameValid, setNameValid] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [tosAgree, setTosAGree] = useState(false);
    const navigate = useNavigate();


    function isValidName() {
        const minUsernameSize = 2;

        if (name.length < minUsernameSize) {
            setNameErr (`Username too short. Minimum ${minUsernameSize} symbols required.`);
            setNameValid(false);
        } else {
            setNameErr(false);
            setNameValid(true);
        }
    }

    function isValidEmail() {
        const minEmailSize = 6;

        if (email.length < minEmailSize) {
            setEmailErr(`Email too short. Minimum ${minEmailSize} symbols required.`);
            setEmailValid(false);
        } else {
            setEmailErr(false);
            setEmailValid(true);
        }
    }

    function isValidPassword() {
        const minPassSize = 6;

        if (password.length < minPassSize) {
            setPasswordErr(`Password too short. Minimum ${minPassSize} symbols required.`);
            setPasswordValid(false);
        } else {
            setPasswordErr(false);
            setPasswordValid(true);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (nameValid && emailValid && passwordValid) {
            fetch('http://localhost:3001/api/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            }).then(res => res.json())
                .then(navigate("/account"));
        }
        
    }


    return (
        <div className={style.registrationAndLogin}>
            <div className={style.title}>
                <h2>Create Your account</h2>
            </div>
            <form onSubmit={handleSubmit} className={style.form}>
                <InputName nameValid={nameValid} nameErr={nameErr} isValidName={isValidName} setName={setName}/>
                <InputEmail emailValid={emailValid} emailErr={emailErr} isValidEmail={isValidEmail} setEmail={setEmail}/>
                <InputPassword passwordValid={passwordValid} passwordErr={passwordErr} isValidPassword={isValidPassword}  setPassword={setPassword} />
                <CheckBox check={tosAgree} setCheck={setTosAGree}/>
                <button className={style1.button} type='submit' disabled={!nameValid || !emailValid || !passwordValid} >Register</button>
                <p>or</p>
                <Link to='/login' className={style1.button} >Log in</Link>
            </form>
        </div>
    )
}