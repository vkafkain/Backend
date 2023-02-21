const express = require('express');
const router = express.Router();
const { orderAsc, orderDesc } = require("../controllers/rankCosts");
const { authJWTMW } = require('../middleware/authJWT');

router.get('/asc', authJWTMW, orderAsc);
router.get('/desc', orderDesc);

module.exports = router;