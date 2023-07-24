import style from './Feature.module.css';
import { Feature1 } from './feature1/Feature1';
import { Feature2 } from './feature2/Feature2';
import { Feature3 } from './feature3/Feature3';



export function Feature() {
    return (
        <div className={style.feature}>
            < Feature1 />
            < Feature2 />
            < Feature3 />
        </div>
    )
}