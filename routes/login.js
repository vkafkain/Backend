const router = require('express').Router();

//Controller
const {login} = require('../controllers/login');
const { noMethod } = require('../controllers/errorHandler');

router.post('/', login);

//router.use(noMethod);

module.exports = router;