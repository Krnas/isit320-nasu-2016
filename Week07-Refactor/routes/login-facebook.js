var express = require('express');
var router = express.Router();
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

/**************************************
 *  Facebook
 **************************************/

router.get('/profile', require('connect-ensure-login').ensureLoggedIn(),
    function(request, response) {
        'use strict';
        console.log(request.user);
        response.render('profile-facebook', {
            title: 'Facebook Profile',
            user: request.user,
            userInfo: JSON.stringify(request.user, null, 4)
        });
    });

passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: 'http://localhost:30025/facebook/login/return',
        profileFields: ['id', 'displayName', 'photos', 'email']
    },
    function(accessToken, refreshToken, profile, done) {
        'use strict';
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile', profile);
        // In this example, the user's Facebook profile is supplied as the user
        // record.  In a production-quality application, the Facebook profile should
        // be associated with a user record in the application's database, which
        // allows for account linking and authentication with other identity
        // providers.
        return done(null, profile);
    }));

router.get('/login',
    passport.authenticate('facebook'));

//router.get('/login/facebook/return',
router.get('/login/return',
    passport.authenticate('facebook', {
        failureRedirect: '/login'
    }),
    function(req, res) {
        'use strict';
        res.redirect('/');
    });

module.exports = router;