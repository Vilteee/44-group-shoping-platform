import style from '../../pages/registrationAndLogin/RegistrationAndLogin.module.css';


export function InputPassword({ setPassword, isValidPassword, passErr, passValid}) {

    function updatePassword(event) {
        setPassword(event.target.value);
      }
      
    return(
        <div className={style.row}>
            <label htmlFor='password'>Password</label>
            <input onChange={updatePassword} onBlur={isValidPassword}  id='password' type='password' placeholder='Password...' required
            className={`form-control ${passErr ? 'is-invalid' : ''} ${passValid ? 'is-valid' : ''}`} />
            <div className="invalid-feedback">{passErr}</div>
         </div>
    )
}
