import { Link } from "react-router-dom";
import { Logo } from "../../components/logo/Logo";
import style from './Page404.module.css';


export function NoPage() {
    return (
        <div className={style.noPage}>
            <Logo />
            <h1 className={style.noPageTitle}>404</h1>
            <p className={style.noPageText}>Page not found.</p>
            <Link to='/' className={style.noPagelink}>Go home</Link>
        </div>
    )
}
