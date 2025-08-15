import { body } from 'express-validator';

export const loginValidation = [
    body('username').notEmpty().withMessage('Username wajib diisi'),
    body('password').isLength({ min: 6 }).withMessage('Password minimal 6 karakter')
];