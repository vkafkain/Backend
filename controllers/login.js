const User = require('../models/User.js');
const { invalidInput, serverError } = require('../controllers/errorHandler')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {

    const userName = req.body.userName;
    const password = req.body.password;
    
    //console.log('user input is :' + userName, password);

    if(!userName || !password) {
        return invalidInput(req, res);
    }

    try{
   
    const userFound = await User.findOne({ userName });

    if(!userFound) {
        return res.status(401).json({
            status: 'error',
            error: '401 - Unauthorized Access: Invalid username/password'
        })
    }

    const validPassword = await bcrypt.compare(password, userFound.password);

    if(validPassword) {
            
        const payload = {
            userName: userFound.name,
            role: userFound.role
        }
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY);
        
        return res.status(200).json({
            status: 'ok',
            userName: userFound.name,
            role: userFound.role,
            accessToken: accessToken
        });
    
    } else {

        return res.status(401).json({
            status: 'error',
            error: '401 - Unauthorized Access: Invalid username/password'
        })
    }
 
} catch(err) {
    return serverError(req, res);
}
}

module.exports = { login };