import style from './BurgerButtonClosing.module.css';


export function BurgerButtonClosing() {
    return (
        <div className={style.burgerButtonClosing}>
            <div className={style.line} id={style.line1}></div>
            <div className={style.line} id={style.line2}></div>
        </div>
    )
}