import { Link, useNavigate } from 'react-router-dom';
import style from './RegistrationAndLogin.module.css';
import style1 from '../../components/button/Button.module.css'
import { InputEmail } from '../../components/registrationAndLogin/InputEmail';
import { InputPassword } from '../../components/registrationAndLogin/InputPassword';
import { useState } from 'react';



// export function Login() {
//     const navigate = useNavigate();
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const [error, setError] = useState('');

//     const handleClick = (e) => {
//         e.preventDefault();
//         var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//         if(password.length > 5 && email.match(validRegex)){
//             const users = JSON.parse(localStorage.getItem('users'));
//             const filteredUsers = users.filter(user => user.email === email && user.password === password)
//             if(filteredUsers.length !== 0){
//                 localStorage.setItem('token', JSON.stringify("validToken"));
//                 navigate('/account')
//             } else {
//                 setError("Incorrect email or password");
//             }
//         } else {
//             setError("Incorrect email or password");
//         }
//     }

//     return (
//         <div className={style.registrationAndLogin}>
//             <h2>Log in to your account</h2>
//             <div className={`${style.error} ${error !== '' ? style.show : ''}`}>
//                 {<p>{error}</p>}
//             </div>
//             <form className={style.form}>
//                 <InputEmail email={email} setEmail={setEmail} />
//                 <InputPassword password={password} setPassword={setPassword} /> 
//                 <button className={style1.button} type='submit' onClick={handleClick}>Log in</button>
//                 <p>or</p>
//                 <Link to='/registration' className={style1.button}>Register</Link>
//             </form>
//         </div>
//     )
// }


export function Login() {
    

    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [formErr, setFormErr] = useState('');

    const navigate = useNavigate();


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
        if ( emailValid && passwordValid) {
            fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password,
                }),
            }).then(res => res.json())
                .then(data => {
                    if (data.status === 'err') {
                        setFormErr(data.msg);
                    }
                    if (data.status === 'ok') {
                        navigate('/account');
                    }
                })
                    .catch(err => console.error(err));
        }
        
    }


    return (
        <div className={style.registrationAndLogin}>
            <div className={style.title}>
                <h2>Please sign in </h2>
                {
                    formErr && (
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            {formErr}
                            <button onClick={() => setFormErr('')} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    )
                }

            </div>
            <form onSubmit={handleSubmit} className={style.form}>
                <InputEmail emailValid={emailValid} emailErr={emailErr} isValidEmail={isValidEmail} setEmail={setEmail}/>
                <InputPassword passwordValid={passwordValid} passwordErr={passwordErr} isValidPassword={isValidPassword}  setPassword={setPassword} />
                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button className={style1.button} type='submit' disabled={ !emailValid || !passwordValid} >Login</button>
                <p>or</p>
                <Link to='/registration' className={style1.button} >Register</Link>
            </form>
        </div>
    )
}


