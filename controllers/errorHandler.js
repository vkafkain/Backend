const Response = require("../models/Response")

const pageNotFound = (req, res) => {
    res.status(404).json(new Response(404, { message: "Page not found" }, "There was an error", null))
}

const noMethod = (req, res) => {
    res.status(405).json(new Response(405, { message: "Method not allowed" }, "There was an error", null))
}

module.exports = { pageNotFound, noMethod }