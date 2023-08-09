import express from 'express';

const newShoppingCart = express.Router();

newShoppingCart.get('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: newShoppingCart (get)' });
});

newShoppingCart.post('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: newShoppingCart (post)' });
});

newShoppingCart.put('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: newShoppingCart (put)' });
});

newShoppingCart.delete('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: newShoppingCart (delete)' });
});

export { newShoppingCart };