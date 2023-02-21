const router = require('express').Router();

//Controller
const { postGO } = require('../controllers/ground_operation.js');
const { noMethod } = require('../controllers/errorHandler');
const { authJWTMWAdmin } = require('../middleware/authJWT.js');

router.post('/', authJWTMWAdmin, postGO);

router.use(noMethod);

module.exports = router;