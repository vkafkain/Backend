const router = require('express').Router();
const fs = require('fs');

const PATH_ROUTES = __dirname;

fs.readdirSync(PATH_ROUTES).filter(route => {
    const routeName = route.split(".").shift();
    if(routeName !== 'index'){
        router.use(`/${routeName}`, require(`./${route}`))
    }
});

module.exports = router;