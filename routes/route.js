import express from 'express';
const router = express.Router();
import { login, register, home } from '../app/handler/auth.js';
import { findAll, create, update, deleteProduct, search } from '../app/handler/product.js';
import { loginValidation } from '../app/request/loginRequest.js';
import { registerValidation, updateValidate } from '../app/request/reqisterReqiuest.js';
import { produtCreateRequest, producUpdateRequest } from '../app/request/productRequest.js';
import validate from '../app/middleware/validate.js';
import { authMiddlewre } from '../app/middleware/auth.js';


router.get('/', home);
router.post('/login', loginValidation, validate, login);
router.post('/register', authMiddlewre, registerValidation, validate, register);
router.put('/update', authMiddlewre, updateValidate, validate, update);

router.get('/product', authMiddlewre, findAll);
router.get('/product/search/:keyword?', authMiddlewre, search);
router.post('/product/create', authMiddlewre, produtCreateRequest, validate, create);
router.put('/product/update', authMiddlewre, producUpdateRequest, validate, update);
router.delete('/product/delete/:id', authMiddlewre, deleteProduct);


//export
export default router;