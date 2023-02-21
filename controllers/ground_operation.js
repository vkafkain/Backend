const Response = require('../models/Response')
const GroundOperation = require('../models/GroundOperation')
const { serverError } = require('./errorHandler');

const apiDataScience = `http://localhost:${process.env.DATASCIENCE_PORT}/put`

const postGO = async (req, res) => {
    try {
        const data = await fetch(`${apiDataScience}/results`, {
            method: 'GET',
        })
        dataJSON = await JSON.parse(data)
        await GroundOperation.bulkCreate(data)
        return res.status(201).json(new Response(201, null, null, null))
    } catch (err) { return serverError(req, res, err); }
}

const putGOInput = async (req, res) => {
    //const salary = req.body.salary
    try {
        const DSResponse = await fetch(`${apiDataScience}/optimized`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                'JARDINERA': {part_time_cost: 7.5, full_time_cost: 6},
                'EQUIPAJES': {part_time_cost: 7, full_time_cost: 7.25},
                'COORDINACION': {part_time_cost: 8.5, full_time_cost: 10}
            })
        })
        return res.status(200).json(new Response(200, null, "ok", null))
    } catch (err) { return serverError(req, res, err); }
}

const getDay = async (req, res) => {
    let myDay = req.params.day;
    if (!myDay) {
        myDay = new Date().toLocaleString('sv-SE', { timeZone: 'UTC' }).split(' ')[0];
    }

    let whereCondition = {day: myDay};

    let orderCost = null;
    if(req.body.total_cost){
        if(req.body.total_cost === 'ASC' || req.body.total_cost === 'DESC'){
            orderCost = [['total_cost', req.body.total_cost]]
        }
    }
    if(req.body.handling_function){
        whereCondition.handling_function = req.body.handling_function
    }
    try {
        const goDay = await GroundOperation.findAll({ where: whereCondition, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, raw: true, order: orderCost })
        let total = 0;
        goDay.reduce((prev,acc) => {prev+acc}, 0)
        return res.status(200).json(new Response(200, null, null, goDay))
    } catch (err) { return serverError(req, res, err); }
}


module.exports = { postGO, putGOInput, getDay }