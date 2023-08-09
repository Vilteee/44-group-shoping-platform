import style from './ShopsCatalog.module.css'
import { shops } from '../../data/shopsData';


export function ShopsCatalog() {
    return (
        <div>
           
           {
            shops.map(shop => {
                return (
                    <div className={style.shopsContainer} key={shop.id}>
                        <div className={style.shopContainer}>
                            <div className={style.shopsTitle}>
                                {shop.title}
                            </div>
                            <div className={style.shopsAdress}>
                                {shop.address}
                            </div>
                            <div>
                                <iframe className={style.shopMap} src={shop.map} title='shopMapPhoto' width="307" height="148" />
                            </div>
                        </div>

                    </div>
                    
                )
            })
           }
        </div>
    )
}