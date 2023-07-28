import style from '../../pages/registrationAndLogin/RegistrationAndLogin.module.css';


export function InputEmail({email, setEmail}) {

    function updateEmail(event) {
        setEmail(event.target.value);
      }
      
    return(
        <div className={style.row}>
            <label htmlFor='email'>Email</label>
            <input onChange={updateEmail} value={email} id='email' type='text' placeholder='Email...' required />
         </div>
    )
}
