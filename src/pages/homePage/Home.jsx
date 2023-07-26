import { Link } from 'react-router-dom';
import style from './HomePage.module.css';
import style1 from '../../components/button/Button.module.css'
import { GiWaveSurfer } from 'react-icons/gi';

export function Home() {
    return (
        <div className={style.homePage}>
            <div className={style.homePageLogoPlace}>
                <GiWaveSurfer className={style.homePageLogo} />
            </div>
            <h1 className={style.homePageTitle}>Surfer needs</h1>
            <Link to='feature/1' className={style1.button}>Get started</Link>
        </div>
    )
}