import style from './BurgerButton.module.css';


export function BurgerButton() {
    return (
        <button className={style.burgerButton}>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
        </button>

    )
}
