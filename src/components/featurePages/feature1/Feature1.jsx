import style from './Feature1.module.css';
import board from '../../../img/board.png';
import style1 from '../../button/Button.module.css';
import { SwitchingDots } from '../../switchingDots/SwitchingDots';




export function Feature1() {
    return (
        <div className={style.feature1}>
            <p className={style.skip}>Skip</p>
            <img className={style.boardImg} src={board} alt="board" />
            <h2 className={style.Feature1Title}>Choose best for You</h2>
            <p className={style.Feature1Text}>We offer different kinds of surfboards and their accessories depending of Your skills, body composition, surfing location properties, weather conditons</p>
            < SwitchingDots />
            <button className={style1.button}>Continue</button>
        </div>
    )
}