var express = require('express');
var router = express.Router();
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;

/**************************************
 *  Facebook
 **************************************/

router.get('/profile', require('connect-ensure-login').ensureLoggedIn(),
    function(req, res) {
        'use strict';
        console.log(req.user);
        res.render('profile-facebook', {
            title: 'Facebook Profile',
            user: req.user
        });
    });

passport.use(new Strategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: 'http://localhost:30025/facebook/login/callback'
    },
    function(accessToken, refreshToken, profile, done) {
        'use strict';
        return done(null, profile);
    }));

router.get('/login',
    passport.authenticate('facebook'));

router.get('/login/callback',
    passport.authenticate('facebook', {
        failureRedirect: '/login'
    }),
    function(req, res) {
        'use strict';
        res.redirect('/');
    });

module.exports = router;
