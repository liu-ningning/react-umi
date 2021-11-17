'user strict';

const Home = require('../controllers/home');

module.exports = function (Router) {
    let router = new Router();

    router.get('/home', Home.home);

    return router;
};