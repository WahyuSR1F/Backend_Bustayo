import { body } from 'express-validator';

export const produtCreateRequest = [
    body('nama').notEmpty().withMessage('nama product wajib diisi'),
    body('harga').notEmpty().withMessage('harga product wajib diisi').isNumeric().withMessage('harga harus berupa angka'),
    body('lesensi').notEmpty().withMessage('lensensi produk kosong').isLength({ max: 50 }).withMessage('max 50 karakter'),
    body('count').notEmpty().withMessage('stok product wajib diisi').isNumeric().withMessage('jumlah harus berupa angka'),
    body('deskripsi').isLength({ max: 150 }).withMessage('deskripsi terlalu panjang')
];

export const producUpdateRequest = [
    body('id').notEmpty().withMessage('id harus ada'),
    body('nama').notEmpty().withMessage('nama product wajib diisi'),
    body('harga').notEmpty().withMessage('harga product wajib diisi').isNumeric().withMessage('harga harus berupa angka'),
    body('lesensi').notEmpty().withMessage('lensensi produk kosong').isLength({ max: 50 }).withMessage('max 50 karakter'),
    body('count').notEmpty().withMessage('stok product wajib diisi').isNumeric().withMessage('jumlah harus berupa angka'),
    body('deskripsi').isLength({ max: 150 }).withMessage('deskripsi terlalu panjang')
];
