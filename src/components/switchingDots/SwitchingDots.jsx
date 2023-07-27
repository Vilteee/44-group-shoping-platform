import style from './SwitchingDots.module.css';
import { GoDot } from 'react-icons/go';


export function SwitchingDots({index}) {

    const getStyle = (number) => {
        const colorClass = index === number ? style.dotWithColor : '';
        
        return `${style.switchingDots} ${colorClass}`;
    }

    return (
        <div className={style.switchingDotsPlace}>
            <GoDot className={getStyle(1)}/>
            <GoDot className={getStyle(2)}/>
            <GoDot className={getStyle(3)}/>
        </div>
    )
}
