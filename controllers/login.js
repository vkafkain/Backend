const User = require('../models/User.js');
const Response = require('../models/Response')
const { invalidInput, serverError } = require('../controllers/errorHandler')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {

    const userName = req.body.userName;
    const password = req.body.password;

    if (!userName || !password) {
        return invalidInput(req, res);
    }
    try {
        const userFound = await User.findOne({ name: userName });

        if (!userFound) {
            return res.status(401).json(new Response(401, { message: "Invalid username/password" }, "An error ocurred,", null))
        }

        const validPassword = await bcrypt.compare(password, userFound.password);

        if (validPassword) {
            const payload = {
                userName: userFound.name,
                role: userFound.role
            }
            const token = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY);

            return res.status(200).json(new Response(200, null, "ok", {
                userName: userFound.name,
                role: userFound.role,
                token
            }));

        } else {
            return res.status(401).json(new Response(401, { message: "Invalid username/password" }, "An error ocurred,", null))
        }
    } catch (err) { return serverError(req, res, err); }
}

module.exports = { login };