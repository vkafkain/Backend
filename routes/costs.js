const express = require('express');
const router = express.Router();
const { noMethod } = require('../controllers/errorHandler');
const { orderAsc, orderDesc } = require("../controllers/rankCosts");
const { authJWTMW } = require('../middleware/authJWT');

router.get('/asc', authJWTMW, orderAsc);
router.get('/desc', authJWTMW, orderDesc);

router.use(noMethod);

module.exports = router;