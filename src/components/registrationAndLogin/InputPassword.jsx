import style from '../../pages/registrationAndLogin/RegistrationAndLogin.module.css';
import { useState } from 'react';


export function InputPassword() {

    const [password, setPassword] = useState('');

    function updatePassword(event) {
        setPassword(event.target.value);
      }
      
    return(
        <div className={style.row}>
            <label htmlFor='password'>Password</label>
            <input onChange={updatePassword} value={password} id='password' type='text' placeholder='Password...' required />
         </div>
    )
}