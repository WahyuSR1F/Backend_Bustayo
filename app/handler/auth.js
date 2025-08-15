import response from '../../reponse/json-format.js';

const home = (req, res) => {
    response(200,[],"Hello Selamat Datang di Bustayo",res);
}

const login = (req, res) => {
    const{username, password} = req.body;
    response(200,username,"Hello Selamat Datang di Bustayo",res);
}
const register = (req, res) => {
    response(200,[],"data sudah teregristrasi",res);
}



export {login, register, home}