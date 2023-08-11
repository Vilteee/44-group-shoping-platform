import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

let connection = null;
const env = dotenv.config();

try {
    connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'vilte',
        password: env.parsed.DB_PASS,
        database: 'shop'
    });
    
} catch (error) {
    console.log('error: neprisijunge prie DB...')
    
}

export { connection };

