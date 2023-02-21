const express = require('express');
const router = express.Router();

//Imports
const { noMethod } = require('../controllers/errorHandler');
const { orderAsc, orderDesc } = require("../controllers/rankCosts");
const { authJWTMW } = require('../middleware/authJWT');
//Endpoints
router.get('/asc', authJWTMW, orderAsc);
router.get('/desc', authJWTMW, orderDesc);

router.use(noMethod);

module.exports = router;