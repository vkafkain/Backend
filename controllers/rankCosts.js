const User = require('../models/User');

const orderDesc = async (req, res) => {

    try{

        const user = await User.findAll({
            order: [
                ['total_cost', 'DESC']
            ] 
        })

        return res(200).json({
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

        const user = await User.findAll({
            order: [
                ['total_cost', 'ASC']
            ] 
        })

        return res(200).json({
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