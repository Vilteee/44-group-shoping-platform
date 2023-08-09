import express from 'express';

const account = express.Router();

account.get('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: account (get)' });
});

account.post('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: account (post)' });
});

account.put('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: account (put)' });
});

account.delete('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: account (delete)' });
});

export { account };