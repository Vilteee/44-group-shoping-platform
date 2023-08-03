import style from './BurgerButtonClosing.module.css';


export function BurgerButtonClosing({update}) {
    
    return (
        <div onClick={update} className={style.burgerButtonClosing}>
            <div className={style.line} id={style.line1}></div>
            <div className={style.line} id={style.line2}></div>
        </div>
    )
}

