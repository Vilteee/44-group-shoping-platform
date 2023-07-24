import style from './HomePage.module.css';
import { GiWaveSurfer } from 'react-icons/gi';



export function HomePage() {
    return (
        <div className={style.homePage}>
            <div className={style.homePageLogoPlace}>
            <GiWaveSurfer className={style.homePageLogo} />
            </div>
            <h1 className={style.homePageTitle}>Surfer needs</h1>
            <button className={style.homePageButton}>Get started</button>
        </div>
    )
}