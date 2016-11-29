var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Express'
    });
});
router.get('/foo', function (request, response) {
    console.log(request.query);
    response.send(request.query);
});
module.exports = router;
