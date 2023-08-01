import style from './BurgerList.module.css';
import { menuList } from '../../data/menuListData';
import { MenuListButton } from '../../components/menuListButton/MenuListButton';


export function BurgerList() {

    return (
        <div className={style.burgerList}>
            { menuList.map(item => <MenuListButton link={item.link} buttonName={item.buttonName}/>)}
        </div>
    )
}