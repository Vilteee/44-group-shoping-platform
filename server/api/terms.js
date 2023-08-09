import express from 'express';

const terms = express.Router();

terms.get('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: terms (get)' });
});

terms.post('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: terms (post)' });
});

terms.put('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: terms (put)' });
});

terms.delete('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: terms (delete)' });
});

export { terms };