import style from './RegistrationAndLogin.module.css';
import { useState } from 'react';


export function InputName() {

    const [name, setName] = useState('');
    function updateName(event) {
        setName(event.target.value);
      }
      
    return(
        <div className={style.row}>
            <label htmlFor='name'>Name</label>
            <input onChange={updateName} value={name} id='name' type='text' placeholder='Name...' required />
         </div>
    )
}