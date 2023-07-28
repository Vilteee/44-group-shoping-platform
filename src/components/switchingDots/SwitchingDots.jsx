import style from './SwitchingDots.module.css';
import { GoDot, GoDotFill } from 'react-icons/go';


export function SwitchingDots({index}) {

    const getBubble = (number) => {
        return index !== '' + number ? <GoDot className={style.switchingDots}/> : <GoDotFill className={style.dotWithColor}/>;
    }

    return (
        <div className={style.switchingDotsPlace}>
            {getBubble(1)}
            {getBubble(2)}
            {getBubble(3)}
        </div>
    )
}
