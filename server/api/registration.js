import express from 'express';
import { connection } from '../lib/db.js';

const registration = express.Router();

registration.get('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: registration (get)' });
});

registration.post('/', async (req, res) => {

    const { name, email, password } = req.body;
    const minUsernameSize = 2;
    const minEmailSize = 6;
    const minPasswordSize = 6;

    const errors = [];
    if (typeof name !== 'string' || name.length < minUsernameSize) {
        errors.push({
            input: 'name',
            msg: 'Bad username. Too short.',
        });
    }
    if (typeof email !== 'string' || email.length < minEmailSize) {
        errors.push({
            input: 'email',
            msg: 'Bad email. Too short.',
        });
    }
    if (typeof password !== 'string' || password.length < minPasswordSize) {
        errors.push({
            input: 'password',
            msg: 'Bad password. Too short.',
        });
    }

    if (errors.length > 0) {
        return res.status(409).json({status: 'err-list', errors});
    }


    try{
        const { name, email, password } = req.body;

        const selectQuery = `SELECT * FROM users WHERE email = ?;`;
        const [selectRes] = await connection.execute(selectQuery, [email]);

        if (selectRes.length > 0) {
            return res.status(200).json({ status: 'err-list', errors:[ {input: 'email', msg: 'User with such email already exists.'}] });
        }

        const query = `INSERT INTO users 
                            (name, email, password)
                        VALUES 
                            (?, ?, ?);`;

        const [dbRes] = await connection.execute(query, [name, email, password]);
        console.log(dbRes);

        if (dbRes.insertId > 0) {
            return res.status(200).json({status: 'ok',  msg: 'POST: REGISTER API - ok, user created' });
        } else {
            return res.status(400).json({status: 'err',  msg: 'POST: REGISTER API - error....' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'POST: REGISTER API - server error.' });
    }
});

export { registration };