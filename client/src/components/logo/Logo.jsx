import style from './Logo.module.css';
import { GiWaveSurfer } from 'react-icons/gi';


export function Logo() {
    return (
        <div className={style.homePageLogoPlace}>
            <GiWaveSurfer className={style.homePageLogo} />
        </div>
    )
}