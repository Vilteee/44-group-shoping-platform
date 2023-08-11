import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import style from './ShoppingCarts.module.css';


export function ShoppingCarts({shoppingCart}) {

    const ctx = useContext(UserContext);
    console.log(ctx);

    return (<div>
        {shoppingCart.map(cart => {
                return (
                    <div key={cart.id} className={style.shoppingCarts}>
                        <div className={style.shoppingCartContainer}>
                            <img src={cart.photo} alt="shoppingCartPhoto" className={style.cartImg} />
                            {cart.title}
                            <div className={style.cartCurrencyAndPrice}> 
                                {cart.currency}
                                {cart.price}
                            </div>
                        </div>
                    </div>
                )
            })}
    </div>)
}