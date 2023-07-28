import { Link } from 'react-router-dom';
import { GoDot } from 'react-icons/go';
import style from './MenuListButton.module.css';


export function MenuListButton({link, buttonName, index}) {
    return (
        <div className={style.shopListItems}>
            <Link to={`${link}`}></Link>
            <GoDot className={style.dotIcon} /> 
            <p>{buttonName}</p>
            <div className={style.listDots} id={style.listDotsLast}></div>
        </div>
    )
}

