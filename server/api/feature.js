import express from 'express';

const feature = express.Router();

feature.get('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: feature (get)' });
});

feature.post('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: feature (post)' });
});

feature.put('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: feature (put)' });
});

feature.delete('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: feature (delete)' });
});

export { feature };