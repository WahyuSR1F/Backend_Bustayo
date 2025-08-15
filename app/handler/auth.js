import response from '../../reponse/json-format.js';
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
            return response(400, [], 'email atau password salah', res);
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return response(400, [], 'email atau password salah', res);
        }
        response(200, user, "Hello Selamat Datang di Bustayo", res);
    } catch (err) {
        response(500, [], err.message, res);
    }

}
const register = (req, res) => {
    response(200, [], "data sudah teregristrasi", res);
}



export { login, register, home }