import style from './ProductCatalog.module.css';
import { products } from '../../data/productsData';


export function ProductCatalog({setToCart}) {

    return (
        <div>
            {
                products.map(product => { 
                    return (
                    <div className={style.productsWrap} key={product.id}>
                        <div className={style.productContainer} key={product.id}>
                            <img className={style.productImg} src={product.photo} alt="featurePhoto" />
                            <div className={style.borderProductContainer}></div>
                            <div className={style.productTitle}>
                                {product.title} 
                            </div>
                            <div className={style.currencyAndPrice}>
                                {product.currency} {product.price}
                            </div>
                            <button className={style.addToCart} onClick={() => {
                                setToCart(( prev ) => [ ...prev, product])
                            }}>Add</button>

                        </div>
                    </div>
                    )
                }
            )
            }
        </div>
    ) 
}

