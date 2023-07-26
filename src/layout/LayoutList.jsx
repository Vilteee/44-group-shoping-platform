import { Link, Outlet } from 'react-router-dom';
import { BurgerButtonClosing } from '../components/burgerButtonClosing/BurgerButtonClosing';
import style from '../pages/menuList/BurgerList.module.css';



export function LayoutList() {
    return (
        <div className={style.burgerList}>
            <Link to='/account'><BurgerButtonClosing /></Link>
            <Outlet />
        </div>
    )
}