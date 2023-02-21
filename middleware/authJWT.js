const Response = require('../models/Response')
const jwt = require('jsonwebtoken');

//verifies basic user
const authJWTMW = (req, res, next) => {
    try {
        if (!req.headers.authorization) { return res.status(401).json(new Response(401, { message: "You are not logged in" }, "There was an error", null)) }
        const token = req.headers.authorization.split(" ").pop()
        const dataToken = jwt.verify(token, process.env.ACCESS_TOKEN_KEY)
        if ((!dataToken.role && dataToken.role !== 0) || !dataToken.userName) {
            return res.status(401).json(new Response(401, { message: "Wrong credentials" }, "There was an error", null))
        }
        return next();
    } catch (error) { return res.status(500).json(new Response(500, { message: error.message }, "There was an error", null)) }
}
//verifies admin 
const authJWTMWAdmin = (req, res, next) => {
    try {
        if (!req.headers.authorization) { return res.status(401).json(new Response(401, { message: "You are not logged in" }, "There was an error", null)) }
        const token = req.headers.authorization.split(" ").pop()
        const dataToken = jwt.verify(token, process.env.ACCESS_TOKEN_KEY)
        if ((!dataToken.role && dataToken.role !== 0) || !dataToken.userName) {
            return res.status(401).json(new Response(401, { message: "Wrong credentials" }, "There was an error", null))
        }
        if (dataToken.role > 0) {
            return res.status(401).json(new Response(401, { message: "Only Admin" }, "There was an error", null))
        }
        return next();
    } catch (error) { return res.status(500).json(new Response(500, { message: error.message }, "There was an error", null)) }
}

module.exports = { authJWTMW, authJWTMWAdmin }