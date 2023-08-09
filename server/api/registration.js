import express from 'express';
import { connection } from '../lib/db.js';

const registration = express.Router();

registration.get('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: registration (get)' });
});

registration.post('/', async (req, res) => {
    try{
        const { name, email, password } = req.body;

        const selectQuery = `SELECT * FROM users WHERE email = ?;`;
        const [selectRes] = await connection.execute(selectQuery, [email]);

        if (selectRes.length > 0) {
            return res.status(200).json({ msg: 'User with such email already exists.' });
        }

        const query = `INSERT INTO users 
                            (name, email, password)
                        VALUES 
                            (?, ?, ?);`;

        const [dbRes] = await connection.execute(query, [name, email, password]);

        if (dbRes.insertId > 0) {
            return res.status(200).json({ msg: 'POST: REGISTER API - ok, user created' });
        } else {
            return res.status(400).json({ msg: 'POST: REGISTER API - error....' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'POST: REGISTER API - server error.' });
    }
});

export { registration };