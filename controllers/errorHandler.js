const Response = require("../models/Response")

////////mirar paràmetres/////

const pageNotFound = (req, res) => {
    res.status(404).json(new Response(404, { message: "Page not found" }, "There was an error", null))
}

const invalidInput = (req, res, message) => {
    res.status(400).json(new Response(400, { message: "Bad Request" }, "There was an error", null ))
}

const noMethod = (req, res) => {
    res.status(405).json(new Response(405, { message: "Method not allowed" }, "There was an error", null))
}

const serverError = (req, res, error) => {
    res.status(500).json(new Response(500, {message: error.message}, "An error occurred", null));
}


module.exports = { pageNotFound, invalidInput, noMethod, serverError }