const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const  User  = require('../models/User');
const { invalidInput } = require('./errorHandler');
//const Response = require('../models/Response');


const registerUser = async (req, res) => {

    const userName = req.body.userName;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    //check for empty fields
    if (!userName || !password || !confirmPassword) {
        return invalidInput(req, res);       
    };
    // check password and confirm password match
    if(password !== confirmPassword) {
        return invalidInput(req, res);
    }

    try {
        
        //check if username is already in use 
        const userFound = await User.findOne({ userName });
        // username already in use
        if(userFound) {
            return invalidInput(req, res); 
        }
        // hash user password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // save user to db with hashed password
        const newUser = await User.create({ 
            userName: userName, 
            password: hashedPassword 
        })

        console.log(newUser);

        const payload = {
            userId: newUser._id,
            userName: newUser.userName
        }
        // creates JWT
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY);
        
        //console.log('JWT created ' + accessToken);

        return res.status(201).json({
            status: "ok", 
            payload: payload,
            accessToken: accessToken
            //message: `user ${userName} registered`
        });

     } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}

module.exports = registerUser;