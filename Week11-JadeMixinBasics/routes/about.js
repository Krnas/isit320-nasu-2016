var express = require('express');
var router = express.Router();


router.get('/about', function(req, res) {
    res.render('About', {
        title: 'isit320-nasu',
        description: 'jquery demo' });
});


module.exports = router;