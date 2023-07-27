import style from '../../pages/registrationAndLogin/RegistrationAndLogin.module.css';
import { useState } from 'react';


export function InputPassword({password, setPassword}) {

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
