import style from './ShoppingCarts.module.css';


export function ShoppingCarts({shoppingCart}) {

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