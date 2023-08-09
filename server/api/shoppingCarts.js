import express from 'express';

const shoppigCarts = express.Router();

shoppigCarts.get('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: shoppigCarts (get)' });
});

shoppigCarts.post('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: shoppigCarts (post)' });
});

shoppigCarts.put('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: shoppigCarts (put)' });
});

shoppigCarts.delete('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: shoppigCarts (delete)' });
});

export { shoppigCarts };