const router = require('express').Router();

//Imports
const { postGO, getDay } = require('../controllers/ground_operation.js');
const { noMethod } = require('../controllers/errorHandler');
const { authJWTMWAdmin, authJWTMW } = require('../middleware/authJWT.js');

//Endpoints
router.get('/', authJWTMW, getDay)
router.get('/:day', getDay)
router.post('/', authJWTMWAdmin, postGO);


router.use(noMethod);

module.exports = router;