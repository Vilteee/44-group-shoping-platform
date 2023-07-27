import { Link, Outlet } from 'react-router-dom';
import style from '../pages/accountContentPage/ContentPage.module.css';
import { Logo } from '../components/logo/Logo';
import { BurgerButton } from '../components/burgerButton/BurgerButton';

export function LayoutAccount() {
    return (
        <div className={style.pageContent}>
            <header className={style.pageContentHeader}>
                <Logo/>
                <Link to='/menulist'><BurgerButton /></Link>
            </header>
            <Outlet />
        </div>
    )

}