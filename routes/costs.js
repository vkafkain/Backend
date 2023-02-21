const express = require('express');
const router = express.Router();
const { orderAsc, orderDesc } = require("../controllers/rankCosts")

router.post('/asc', orderAsc);
router.post('/desc', orderDesc);

module.exports = router;