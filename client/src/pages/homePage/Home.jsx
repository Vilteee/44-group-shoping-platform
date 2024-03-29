import { useNavigate } from 'react-router-dom';
import style from './HomePage.module.css';
import style1 from '../../components/button/Button.module.css'
import { GiWaveSurfer } from 'react-icons/gi';

export function Home() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        const token = JSON.parse(localStorage.getItem('token'));
        if(token){
            navigate('/account');
        } else {
            navigate('/feature/1')
        }
    }

    return (
        <div className={style.homePage}>
            <div className={style.homePageLogoPlace}>
                <GiWaveSurfer className={style.homePageLogo} />
            </div>
            <h1 className={style.homePageTitle}>Surfer needs</h1>
            <button className={style1.button} onClick={handleGetStarted} >Get started</button>
        </div>
    )
}