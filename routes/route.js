import express from 'express';
const router = express.Router();
import { login, register, home } from '../app/handler/auth.js';
import { loginValidation } from '../app/request/loginRequest.js';
import { registerValidation } from '../app/request/reqisterReqiuest.js';
import validate from '../app/middleware/validate.js';



router.get('/', home);
router.post('/login', loginValidation, validate, login);
router.post('/register', registerValidation, validate, register);


//export
export default router;