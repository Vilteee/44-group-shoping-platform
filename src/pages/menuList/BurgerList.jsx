import style from './BurgerList.module.css';
import { menuList } from '../../data/menuListData';
import { MenuListButton } from '../../components/menuListButton/MenuListButton';


// export function BurgerList() {
//     return (
//         <div className={style.burgerList}>
//             <div className={style.burgerButtonClosing}>
//                 <div className={style.line} id={style.line1}></div>
//                 <div className={style.line} id={style.line2}></div>
//             </div>
//             <div>
//                 <div className={style.listDots}>
//                     <div className={style.shopListItems}>
//                         <GoDot className={style.dotIcon} /> 
//                         <p>Shopping carts</p>
//                     </div>
//                     <div className={style.shopListItems}>
//                         <GoDot className={style.dotIcon} /> 
//                         <p>Product catalog</p>
//                     </div>
//                     <div className={style.shopListItems}>
//                         <GoDot className={style.dotIcon} /> 
//                         <p>Shops</p>
//                     </div>
//                 </div>
//                 <div className={style.listDots}>
//                     <div className={style.shopListItems}>
//                         <GoDot className={style.dotIcon} /> 
//                         <p>New shopping cart</p>
//                     </div>
//                     <div className={style.shopListItems}>
//                         <GoDot className={style.dotIcon} /> 
//                         <p>New product</p>
//                     </div>
//                     <div className={style.shopListItems}>
//                         <GoDot className={style.dotIcon} /> 
//                         <p>New shop</p>
//                     </div>
//                 </div>
//                 <div className={style.listDots} id={style.listDotsLast}>
//                     <div className={style.shopListItems}>
//                         <GoDot className={style.dotIcon} /> 
//                         <p>Account</p>
//                     </div>
//                     <div className={style.shopListItems}>
//                         <GoDot className={style.dotIcon} /> 
//                         <p>Settings</p>
//                     </div>
//                     <div className={style.shopListItems}>
//                         <GoDot className={style.dotIcon} /> 
//                         <p>Sign out</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export function BurgerList() {

    return (
        <div className={style.burgerList}>
            { menuList.map(item => <MenuListButton link={item.link} buttonName={item.link}/>)}
        </div>
    )
}