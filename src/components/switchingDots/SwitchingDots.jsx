import style from './SwitchingDots.module.css';
import { GoDot } from 'react-icons/go';


export function SwitchingDots() {
    return (
        <div className={style.switchingDotsPlace}>
                <GoDot className={style.switchingDots}/>
                <GoDot className={style.switchingDots}/>
                <GoDot className={style.switchingDots}/>
            </div>

    )
}