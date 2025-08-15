import mysql from 'mysql2/promise'; // pakai promise agar bisa await

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bustayodb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default db;
