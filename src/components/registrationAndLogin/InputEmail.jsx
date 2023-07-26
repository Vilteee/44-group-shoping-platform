import style from '../../pages/registrationAndLogin/RegistrationAndLogin.module.css';
import { useState } from 'react';


export function InputEmail() {

    const [email, setEmail] = useState('');
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