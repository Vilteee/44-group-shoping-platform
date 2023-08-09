import express from 'express';

const newShop = express.Router();

newShop.get('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: newShop (get)' });
});

newShop.post('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: newShop (post)' });
});

newShop.put('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: newShop (put)' });
});

newShop.delete('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: newShop (delete)' });
});

export { newShop };