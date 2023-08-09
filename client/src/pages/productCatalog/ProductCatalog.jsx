import style from './ProductCatalog.module.css';
import { products } from '../../data/productsData';
// import { useEffect, useState } from 'react';


export function ProductCatalog({setToCart}) {
    
    // const [products, setProducts] = useState([]);

    // function getProducts() {
    //     fetch('http://localhost:3001/api/products', {
    //       method: 'GET',
          
    //     })
    //       .then(res => res.json())
    //       .then(data => setProducts(data["msg"]))
    //       .catch((err) => {
    //         console.log(err);
    //       })
    
    // }

    // useEffect(() => {
    //     getProducts();
    //     console.log("ASdasd");
    // }, [])

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

