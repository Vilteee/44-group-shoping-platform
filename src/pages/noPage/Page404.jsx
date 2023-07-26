import { Link } from "react-router-dom";
import { Logo } from "../../components/logo/Logo";
import style from './Page404.module.css';


export function NoPage() {
    return (
        <div className={style.noPage}>
            <Logo />
            <h1>404</h1>
            <p>Page not found.</p>
            <Link to='/' className={style.link}>Go home</Link>
        </div>
    )
}