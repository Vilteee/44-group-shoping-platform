import style from './ContentPage.module.css';
import { Logo } from '../logo/Logo';


export function ContentPage() {
    return (
        <div className={style.pageContent}>
            <header className={style.pageContentHeader}>
                <Logo />
                <div className={style.burgerButton}>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </div>
            </header>
            <div className={style.contentPageMain}>PAGE CONTENT</div>
        </div>
    )
}