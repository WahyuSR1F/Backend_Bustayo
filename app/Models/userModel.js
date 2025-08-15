import db from '../../database/connection.js';

export const User = {
    create: async (name, email, password) => {
        const [result] = await db.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password]
        );
        return result;
    },

    findAll: async () => {
        const [rows] = await db.query('SELECT * FROM users');
        return rows;
    },

    findByEmail: async (email) => {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0]; // ambil satu user
    }
};