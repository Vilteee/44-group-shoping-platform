import style from './CheckBox.module.css';


export function CheckBox() {
    return (
        <div className={style.checkBox}>
             <div> 
                <input type="checkbox" id="terms" />
            </div>
            <div className={style.termsTitle}>
                <label for="terms">Agree to our TOS</label>
            </div>
            <div>
                <a href="/" className={style.termsLabel}>(read)</a>
            </div>
        </div>
    )
}