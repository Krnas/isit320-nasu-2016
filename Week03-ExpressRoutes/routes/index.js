var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'ExpressRoutes-Nasu'
    });
});

router.get('/read', function(request, response) {
    response.send([{
        name: 'SarahLee'
    }, {
        name: 'Bob'
    }]);
});

router.get('/add', function(request, response) {
    console.log('add method called');
    console.log('The parameters are:', request.query);
    console.log('OperatorA is:', request.query.operatorA);
    var operatorA = parseInt(request.query.operatorA);
    var operatorB = parseInt(request.query.operatorB);
    response.send({
        sum: operatorA + operatorB
    });
});
module.exports = router;
