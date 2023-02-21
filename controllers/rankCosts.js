const GroundOperation = require('../models/GroundOperation');
const Response = require('../models/Response')
const { serverError } = require('../controllers/errorHandler')

const orderDesc = async (req, res) => {
    try {
        const user = await GroundOperation.findAll({
            order: [
                ['total_cost', 'DESC']
            ]
        })
        return res.status(200).json(new Response(200, null, null, user));
    } catch (err) { return serverError(req, res, err); }
}

const orderAsc = async (req, res) => {
    try {
        const user = await GroundOperation.findAll({
            order: [
                ['total_cost', 'ASC']
            ]
        })
        return res.status(200).json(new Response(200, null, null, user));
    } catch (err) { return serverError(req, res, err); }

}

module.exports = { orderDesc, orderAsc }