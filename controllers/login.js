const User = require('../models/User.js');
const { invalidInput } = require('../controllers/errorHandler')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {

    const userName = req.body.userName;
    const password = req.body.password;
    
    //console.log('user input is :' + userName, password);

    if(!userName || !password) {
        return invalidInput(req, res);
    }
   
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
            userId: userFound._id,
            userName: userFound.userName
        }
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY);
        
        return res.status(200).json({
            status: 'ok',
            accessToken: accessToken
        });
    
    } else {
        return res.status(401).json({
            status: 'error',
            error: '401 - Unauthorized Access: Invalid username/password'
        })
    }
 
}

module.exports = login;