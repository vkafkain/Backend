const express = require('express');
const { orderByWork } = require('../controllers/workerTypeRank');
const { authJWTMW } = require('../middleware/authJWT');
const { noMethod } = require('../controllers/errorHandler');
const router = express.Router();

//Endpoints
router.get("/:hf", authJWTMW,  orderByWork);
router.use(noMethod);

module.exports = router;