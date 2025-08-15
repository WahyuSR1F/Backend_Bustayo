import { body } from 'express-validator';

export const registerValidation = [
    body('email')
        .isEmail().withMessage('Email tidak valid')
        .normalizeEmail(),
    body('name')
        .notEmpty().withMessage('Nama wajib diisi')
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/).withMessage('Nama hanya boleh huruf'),
    body('password')
        .isLength({ min: 6 }).withMessage('Password minimal 6 karakter')
        .matches(/[A-Z]/).withMessage('Password harus mengandung setidaknya 1 huruf besar')
        .matches(/[0-9]/).withMessage('Password harus mengandung setidaknya 1 angka')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password harus mengandung setidaknya 1 simbol'),
    body('confirmPassword')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Konfirmasi password tidak cocok');
            }
            return true; // validasi lolos
        }),
    body('number')
        .notEmpty().withMessage('Nomor telepon wajib diisi')
        .matches(/^\+62[0-9]+$/).withMessage('Nomor telepon harus diawali +62 dan hanya angka')
];