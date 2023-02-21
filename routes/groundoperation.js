const router = require('express').Router();

//Controller
const { postGO, getDay } = require('../controllers/ground_operation.js');
const { noMethod } = require('../controllers/errorHandler');
const { authJWTMWAdmin } = require('../middleware/authJWT.js');

router.get('/', getDay)
router.get('/:day', getDay)
router.post('/', authJWTMWAdmin, postGO);


router.use(noMethod);

module.exports = router;