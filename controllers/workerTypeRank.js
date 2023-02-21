const GroundOperation = require("../models/GroundOperation");
const { serverError } = require('./errorHandler');
const Response = require('../models/Response');

/**
 * // receives a string value and returns list of workers by job function
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const orderByWork = async (req, res) => {

    const handling_function = req.params.hf;
    try {
        const ordered = GroundOperation.findAll({
            where: {handling_function}
        })
        return res.status(200).json(new Response(200, null, null, ordered))
    } catch (err) { return serverError(req, res, err); }
}



module.exports = { orderByWork }