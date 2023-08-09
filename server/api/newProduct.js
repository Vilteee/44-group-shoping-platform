import express from 'express';

const newProduct = express.Router();

newProduct.get('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: newProduct (get)' });
});

newProduct.post('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: newProduct (post)' });
});

newProduct.put('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: newProduct (put)' });
});

newProduct.delete('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: newProduct (delete)' });
});

export { newProduct };