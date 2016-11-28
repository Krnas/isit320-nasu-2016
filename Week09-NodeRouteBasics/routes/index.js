var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    'use strict';
    res.render('index', {title: 'NodeRouteBasics'});
});
router.get('/feetToMiles', function (request, response) {
    console.log(request.query);
    var miles = parseInt(request.query.miles) / 5280;
    response.send({result: 'success', ok: true, milesEntered: miles});
});
router.post('/utils', function (request, response) {
    console.log(request.body);
    var radius = parseInt(request.body.Circumference = 2 * radius * Math.PI);
    response.send({result: 'success', radiusEntered: radius});
});
module.exports = router;
