var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Express'
    });
});
router.get('/foo', function(request, response) {
    'use strict';
    console.log(request.query);
    response.send(request.query);
});
module.exports = router;
