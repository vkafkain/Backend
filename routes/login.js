const router = require('express').Router();

//Controllers
const {login } = require('../controllers/login');
const { noMethod } = require('../controllers/errorHandler');

//Endpoints
router.post('/', login);
router.use(noMethod);

module.exports = router;