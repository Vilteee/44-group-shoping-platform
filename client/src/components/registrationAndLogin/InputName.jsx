import style from '../../pages/registrationAndLogin/RegistrationAndLogin.module.css';


export function InputName({ setName, isValidName, nameErr, nameValid}) {

    function updateName(event) {
        setName(event.target.value);
    }
    
    return(
        <div className={style.row}>
            <label htmlFor='name'>Name</label>
            <input onChange={updateName} onBlur={isValidName} id='name' type='text' placeholder='Name...' required
             className={`form-control ${nameErr ? 'is-invalid' : ''} ${nameValid ? 'is-valid' : ''}`} />
            <div className="invalid-feedback">{nameErr}</div>
         </div>
    )
}
