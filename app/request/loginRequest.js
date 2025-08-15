import { body } from 'express-validator';

export const loginValidation = [
    body('email')
        .isEmail().withMessage('Email tidak valid')
        .normalizeEmail(),
    body('password')
        .isLength({ min: 6 }).withMessage('Password minimal 6 karakter')
];