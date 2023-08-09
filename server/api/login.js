import express from 'express';

const login = express.Router();

login.get('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: login (get)' });
});

login.post('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: login (post)' });
});

login.put('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: login (put)' });
});

login.delete('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: login (delete)' });
});

export { login };