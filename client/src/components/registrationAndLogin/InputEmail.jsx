import style from '../../pages/registrationAndLogin/RegistrationAndLogin.module.css';


export function InputEmail({ setEmail, isValidEmail, emailErr, emailValid}) {

    function updateEmail(event) {
        setEmail(event.target.value);
      }
      
    return(
        <div className={style.row}>
            <label htmlFor='email'>Email</label>
            <input onChange={updateEmail} onBlur={isValidEmail} id='email' type='email' placeholder='Email...' required 
             className={`form-control ${emailErr ? 'is-invalid' : ''} ${emailValid ? 'is-valid' : ''}`} />
            <div className="invalid-feedback">{emailErr}</div>
         </div>
    )
}
