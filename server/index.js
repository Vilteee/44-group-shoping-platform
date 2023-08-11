import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { api } from './api/api.js';

const env = dotenv.config();
console.log(env);

const PORT = env.parsed.SERVER_PORT;

const app = express();

const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
};

app.use(cors(corsOptions)); //nustatymai su kuo mes bendraujame, kas musu draugai
app.use(helmet()); //nustatymai, kad tinklalapyje kiti nedarytu nesamoniu
app.use(bodyParser.json()); // for parsing application json
app.use(bodyParser.urlencoded({ extended: true })); //for parsing application

app.get('/', (req, res) => {
    return res.send('SERVER: home page');
});

app.use('/api', api);

app.get('*', (req, res) => {
    return res.send('SERVER: 404 page');
});

app.use((req, res, next) => {
    return res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
});