const GroundOperation = require('../models/GroundOperation');

const orderDesc = async (req, res) => {

    try{

        const user = await GroundOperation.findAll({
            order: [
                ['total_cost', 'DESC']
            ] 
        })

        return res.status(200).json({
            status: 'ok',
            data: user
        });

    }catch(err) {

        return res.status(400).json({
            status: 'error',
            message: err.message,
        })

    }

}

const orderAsc = async (req, res) => {

    try{

        const user = await GroundOperation.findAll({
            order: [
                ['total_cost', 'ASC']
            ] 
        })

        return res.status(200).json({
            status: 'ok',
            data: user
        });

    }catch(err) {

        return res.status(400).json({
            status: 'error',
            message: err.message,
        })

    }

}

module.exports = {orderDesc, orderAsc}