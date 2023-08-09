import express from 'express';

const settings = express.Router();

settings.get('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: settings (get)' });
});

settings.post('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: settings (post)' });
});

settings.put('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: settings (put)' });
});

settings.delete('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: settings (delete)' });
});

export { settings };