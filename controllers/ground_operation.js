const Response = require('../models/Response')
const GroundOperation = require('../models/GroundOperation')

const apiDataScience = `localhost:${process.env.DATASCIENCE_PORT}/put`

const postGO = async (req, res) => {

    const data = req.body.data
    try {
        data.forEach(operation => {
            const day = operation.day
            const hour = operation.hour
            const handling_function = operation.handling_function
            const full_time = operation.full_time
            const part_time = operation.part_time
            const full_time_cost = operation.full_time_cost
            const part_time_cost = operation.part_time_cost
            const total_cost = full_time_cost + part_time_cost
            GroundOperation.create({ day, hour, handling_function, full_time, part_time, full_time_cost, part_time_cost, total_cost })
        });
        // O
        // GroundOperation.bulkCreate(data)
        return res.status(201).json(new Response(201, null, null, null))
    } catch (error) { return res.status(500).json(new Response(500, { message: error.message }, "There was an error", null)) }
}

const putGOInput = async (req, res) => {
    const salary = req.body.salary
    try {
        const DSResponse = await fetch(`${apiDataScience}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                salary
            })
        })
        res.status(200).json(new Response(200, null, "ok", null))
    } catch (error) { return res.status(500).json(new Response(500, { message: error.message }, "There was an error", null)) }
}




module.exports = { postGO, putGOInput }