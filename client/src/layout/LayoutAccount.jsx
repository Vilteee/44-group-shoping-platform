import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import style from '../pages/accountContentPage/ContentPage.module.css';
import { Logo } from '../components/logo/Logo';
import { BurgerButtonClosing } from '../components/burgerButtonClosing/BurgerButtonClosing';
import { menuList } from '../data/menuListData';
import { RxHamburgerMenu } from 'react-icons/rx';


export function LayoutAccount() {

    const [menuVisibility, setMenuVisibility] = useState(false);

    function updateMenuVisibility() {
        setMenuVisibility(!menuVisibility);
    }


    return (
        <>
            <header className={style.pageContentHeader}>
                <Logo/>
                {menuVisibility && (
                    <>
                        <div className={style.menuBackgroundContainer} onClick={updateMenuVisibility}/>
                        <div className={style.menuContainer}>
                            <BurgerButtonClosing update={updateMenuVisibility} />
                            <nav className={style.menuNav}>
                                {
                                    menuList.map(link => {
                                        if (link.type === 'line') {
                                            return <hr />;
                                        }
                                        if (link.type === 'link') {
                                            return (
                                                <Link onClick={updateMenuVisibility} className={style.menuMember} key={link.id} to={link.url}>
                                                    {link.icon}{link.title}
                                                </Link>
                                            );
                                        }
                                        return <>Content error</>
                                    })
                                }
                            </nav>
                        </div>
                    </>
                )}
                <RxHamburgerMenu onClick={updateMenuVisibility} size='2.7rem' />
            </header>
            <Outlet />
        </>
    )

}







