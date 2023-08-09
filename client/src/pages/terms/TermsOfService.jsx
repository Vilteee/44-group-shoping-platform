import { useNavigate } from 'react-router-dom';
import style from './TermsOfService.module.css';
import style1 from '../../components/button/Button.module.css'

export function TermsOfService() {
    const navigate = useNavigate();

    return (
        <div className={style.termsOfService}>
            <h2>Terms of Service</h2>
            <h3 className={style.termsOfServiceh3}>First topic</h3>
            <p>Prices of goods available in the Store are given in Polish zlotys, euros, US dollars, British pounds and include VAT.</p>
            <h3 className={style.termsOfServiceh3}>Second topic</h3>
            <p className={style.termsOfServiceText2}>The account password entered by the Customer into the registration form is not disclosed to the Seller.</p>
            <button onClick={() => navigate(-1)} className={style1.button} >Back</button>
        </div>
    )
}