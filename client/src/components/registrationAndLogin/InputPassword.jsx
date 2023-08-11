import style from '../../pages/registrationAndLogin/RegistrationAndLogin.module.css';


export function 
InputPassword({ setPassword, isValidPassword, passwordErr, passwordValid}) {

    function updatePassword(event) {
        setPassword(event.target.value);
      }
      
    return(
        <div className={style.row}>
            <label htmlFor='password'>Password</label>
            <input onChange={updatePassword} onBlur={isValidPassword} type='password'  id='password'  placeholder='Password...' required
            className={`form-control ${passwordErr ? 'is-invalid' : ''} ${passwordValid ? 'is-valid' : ''}`} />
            <div className="invalid-feedback">{passwordErr}</div>
         </div>
    )
}
