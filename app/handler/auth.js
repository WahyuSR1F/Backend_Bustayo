import response from '../../reponse/json-format.js';
import { generateToken } from '../helpers/generateToken.js';
import { User } from '../Models/userModel.js';
import bcrypt from 'bcrypt';


const home = (req, res) => {
    response(200, [], "Hello Selamat Datang di Bustayo", res);
}

const login = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await User.findByEmail(email);
        if (!user) {
            return response(400, [], 'email atau password salah sad', res);
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return response(400, [], 'email atau password salah', res);
        }
        const token = generateToken(user);
        const data = {
            login: user,
            token: token
        }

        response(200, data, "Hello Selamat Datang di Bustayo", res);
    } catch (err) {
        response(500, [], err.message, res);
    }

}

const register = async (req, res) => {
    try {
        const { name, email, password, number } = req.body;
        const hashed = await bcrypt.hash(password, 10);
        const result = await User.create(name, email, hashed, number);
        response(200, email, "data sudah teregristrasi silahkan login", res);
    } catch (err) {
        response(500, [], err.message, res);
    }
}



export { login, register, home }