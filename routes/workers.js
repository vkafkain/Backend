const express = require('express');
const { orderByWork } = require('../controllers/workerTypeRank');
const { authJWTMW } = require('../middleware/authJWT');
const router = express.Router();

router.get("/:hf",authJWTMW,  orderByWork);

module.exports = router;