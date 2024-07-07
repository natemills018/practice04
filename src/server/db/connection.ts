import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    user: 'bookstore_user1',
    password: 'password123',
    host: 'localhost',
    database: 'bookstore_db'
})

export default pool;