import express from 'express';
import { feature } from './feature.js';
import { login } from './login.js';
import { registration } from './registration.js';
import { terms } from './terms.js';
import { account } from './account.js';
import { products } from './products.js';
import { shops } from './shops.js';
import { shoppigCarts } from './shoppingCarts.js';
import { newProduct } from './newProduct.js';
import { newShop } from './newShop.js';
import { newShoppingCart } from './newShoppingCart.js';
import { settings } from './settings.js';

const api = express.Router(); //vidine apso dalis


api.all('/', (req, res) => {
return res.status(400).json({msg:'SERVER API: error, nedabaigtas URL'});
});

api.use('/feature', feature);
api.use('/login', login);
api.use('/registration', registration);
api.use('/terms', terms);
api.use('/account', account);
api.use('/products', products);
api.use('/shops', shops);
api.use('/shopping-carts', shoppigCarts);
api.use('/new-product', newProduct);
api.use('/new-shop', newShop);
api.use('/new-shopping-cart', newShoppingCart);
api.use('/settings', settings);


export { api };
