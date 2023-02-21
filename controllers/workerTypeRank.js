const GroundOperation = require("../models/GroundOperation");

const orderByWork = async (req, res) => {

    const handling_function = req.params.hf;

    try {
        const ordered = GroundOperation.findAll({
            where: {handling_function}
        })
        return res.status(200).json({ordered})
    }catch(err){
        return res.status(400).json({
            status: 'error',
            message: err.message,
        })
    }
}

module.exports = { orderByWork }