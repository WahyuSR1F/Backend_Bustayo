import response from '../../reponse/json-format.js';
import { Product } from '../Models/productModel.js';

const findAll = async (req, res) => {
    try {
        const result = await Product.findAll();
        response(200, result, 'data berhasil didapat', res);
    } catch (err) {
        response(500, [], err.message, res);
    }
}

const create = async (req, res) => {
    try {
        const { nama, lesensi, harga, count, deskripsi } = req.body;
        const result = await Product.create(nama, lesensi, harga, count, deskripsi);
        response(201, result, 'data berhasil dibuat', res);
    } catch (err) {
        response(500, [], err.message, res);
    }
}

const update = async (req, res) => {
    try {
        const { id, nama, lesensi, harga, count, deskripsi } = req.body;
        const result = await Product.update(id, nama, lesensi, harga, count, deskripsi);
        if (!result || result.length === 0) {
            response(404, [], 'data tidak ditemukan', res);
        } else {
            response(200, result, 'data berhasil update', res);
        }
    } catch (err) {
        response(500, [], err.message, res);
    }
}

const search = async (req, res) => {
    try {
        const { keyword } = req.params;
        let page = 1;
        let limit = 20;
        const offset = (page - 1) * limit;
        const result = await Product.search(keyword || '', limit, offset);
        if (!result || result.length === 0) {
            response(404, [], 'data tidak ditemukan', res);
        } else {
            response(200, {
                page,
                limit,
                totalData: result.length,
                data: result
            }, 'data berhasil ditemukan', res);
        }
    } catch (err) {
        response(500, [], err.message, res);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Product.delete(id);
        if (!result || result.length === 0) {
            response(404, [], 'data tidak ditemukan', res);
        } else {
            response(200, result, 'data berhasil dihapus', res);
        }
    } catch (err) {
        response(500, [], err.message, res);
    }
}

export { findAll, create, update, deleteProduct, search }
