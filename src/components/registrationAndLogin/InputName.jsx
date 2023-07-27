import style from '../../pages/registrationAndLogin/RegistrationAndLogin.module.css';


export function InputName({name, setName}) {

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
