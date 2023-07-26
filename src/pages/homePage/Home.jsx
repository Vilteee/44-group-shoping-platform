import style from './HomePage.module.css';
import style1 from '../button/Button.module.css';
import { GiWaveSurfer } from 'react-icons/gi';




export function Home() {
    console.log(style1.button);
    return (
        <div className={style.homePage}>
            <div className={style.homePageLogoPlace}>
                <GiWaveSurfer className={style.homePageLogo} />
            </div>
            <h1 className={style.homePageTitle}>Surfer needs</h1>
            <button className={style1.button}>Get started</button>
        </div>
    )
}