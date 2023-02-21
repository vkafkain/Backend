const sequelize = require('../database/db.connection');
const router = require('express').Router();
const fs = require('fs');

//const { authJWTMW } = require('../middlewares/authJWT')
const PATH_ROUTES = __dirname;

fs.readdirSync(PATH_ROUTES).filter(ruta => {
    const nomRuta = ruta.split(".").shift();
    if(nomRuta !== 'index'){
        router.use(`/${nomRuta}`, require(`./${ruta}`))
    }
})

module.exports = router;