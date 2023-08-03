import { GrCatalog } from 'react-icons/gr';
import { AiFillShop } from 'react-icons/ai';
import { RiShoppingCartLine } from 'react-icons/ri';
import { BsCartPlus } from 'react-icons/bs';
import { LiaProductHunt } from 'react-icons/lia';
import { AiOutlineShop } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { GoSignOut } from 'react-icons/go';
import style from '../pages/accountContentPage/ContentPage.module.css';



export const menuList = [

    {
        type: 'link',
        id: 'ml11',
        title: 'Product catalog',
        url: '/product-catalog',
        icon: <GrCatalog className={style.linkIcon} size='1.3rem' />,
    },
    {
        type: 'link',
        id: 'ml12',
        title: 'Shops',
        url: '/shops',
        icon: <AiFillShop className={style.linkIcon} size='1.3rem' />,
    },
    {
        type: 'link',
        id: 'ml13',
        title: 'Shopping carts',
        url: '/shopping-carts',
        icon: <RiShoppingCartLine className={style.linkIcon} size='1.3rem' />,
    },
    {
        type: 'line',
    },
    {
        type: 'link',
        id: 'ml21',
        title: 'New shopping cart',
        url: '/new-shopping-cart',
        icon: <BsCartPlus className={style.linkIcon} size='1.3rem' />,
    },
    {
        type: 'link',
        id: 'ml22',
        title: 'New product',
        url: '/new-product',
        icon: <LiaProductHunt className={style.linkIcon} size='1.3rem' />,
    },
    {
        type: 'link',
        id: 'ml23',
        title: 'New shop',
        url: '/new-shop',
        icon: <AiOutlineShop className={style.linkIcon} size='1.3rem' />,
    },
    {
        type: 'line',
    },
    {
        type: 'link',
        id: 'ml31',
        title: 'Account',
        url: '/account',
        icon: <MdOutlineAccountCircle className={style.linkIcon} size='1.3rem' />,
    },
    {
        type: 'link',
        id: 'ml32',
        title: 'Settings',
        url: '/settings',
        icon: <CiSettings className={style.linkIcon} size='1.3rem' />,
    },
    {
        type: 'link',
        id: 'ml33',
        title: 'Sign out',
        url: '/login',
        icon: <GoSignOut className={style.linkIcon} size='1.3rem' />,
    }

]