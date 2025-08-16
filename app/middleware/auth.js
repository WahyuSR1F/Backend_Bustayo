import jwt from 'jsonwebtoken';

export const authMiddlewre = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // format: Bearer <token>
    if (!token) {
        return res.status(401).json({ message: 'Token tidak ditemukan' });
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode; // simpan data user ke req
        next();
    } catch (err) {
        return res.status(500).json({ message: 'Token tidak valid' });
    }
}